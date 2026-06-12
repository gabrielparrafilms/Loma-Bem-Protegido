"use client";

import { useState } from "react";
import { QuotationData } from "@/types/quotation";
import { PatternFormat } from 'react-number-format';

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
}

export default function Location({ data, updateData }: Props) {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [manualMode, setManualMode] = useState(false);

    const fetchAddress = async (cep: string) => {
        const cleanCep = cep.replace(/\D/g, '');
        if (cleanCep.length !== 8) return;

        setLoading(true);
        setShowForm(false);

        try {
            const response = await fetch('/api/location/decode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ postalCode: cleanCep }),
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setShowForm(true);
                    return;
                }
                throw new Error('Failed to fetch address');
            }

            const result = await response.json();
            const addressData = result.data || result;

            updateData({
                postalCode: cep,
                street: addressData.logradouro || addressData.street || "",
                district: addressData.bairro || addressData.district || "",
                city: addressData.localidade || addressData.city || "",
                state: addressData.uf || addressData.state || "",
            });
            
            setShowForm(true);

        } catch (err) {
            console.error(err);
            setShowForm(true);
        } finally {
            setLoading(false);
        }
    };

    const handleManualEntry = () => {
        setManualMode(true);
        setShowForm(true);
        if (!data.postalCode) {
            updateData({ postalCode: "00000-000" });
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-2">
                <h2 className="text-3xl font-black text-primary leading-tight">Onde você mora?</h2>
                <p className="text-gray-500 text-sm">Precisamos da sua localização para calcular a proteção.</p>
            </div>

            <div className="space-y-4">
                {!manualMode && (
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-600 ml-1">CEP</label>
                        <div className="relative">
                            <PatternFormat
                                format="#####-###"
                                mask="_"
                                placeholder="00000-000"
                                className="w-full p-4 bg-white rounded-xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none transition-all font-medium text-gray-700"
                                value={data.postalCode || ""}
                                onValueChange={(values) => {
                                    updateData({ postalCode: values.value });
                                    if (values.value.length === 8) {
                                        fetchAddress(values.value);
                                    }
                                }}
                            />
                            {loading && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <div className="w-5 h-5 border-2 border-[#3CC0B7]/30 border-t-[#3CC0B7] rounded-full animate-spin" />
                                </div>
                            )}
                        </div>
                        <button 
                            onClick={handleManualEntry}
                            className="text-xs text-gray-400 underline mt-2 ml-1 hover:text-primary"
                        >
                            Não sei meu CEP / Preencher manualmente
                        </button>
                    </div>
                )}

                {showForm && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 space-y-1">
                                <label className="text-sm font-bold text-gray-600 ml-1">Cidade</label>
                                <input
                                    type="text"
                                    className={`w-full p-4 rounded-xl border-2 outline-none transition-all ${manualMode ? 'bg-white border-gray-200 focus:border-[#3CC0B7]' : 'bg-gray-50 border-gray-100 text-gray-500'}`}
                                    value={data.city || ""}
                                    onChange={(e) => updateData({ city: e.target.value })}
                                    readOnly={!manualMode && !!data.city}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-600 ml-1">UF</label>
                                <input
                                    type="text"
                                    className={`w-full p-4 rounded-xl border-2 outline-none transition-all text-center ${manualMode ? 'bg-white border-gray-200 focus:border-[#3CC0B7]' : 'bg-gray-50 border-gray-100 text-gray-500'}`}
                                    value={data.state || ""}
                                    onChange={(e) => updateData({ state: e.target.value })}
                                    readOnly={!manualMode && !!data.state}
                                    maxLength={2}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-600 ml-1">Rua / Logradouro</label>
                            <input
                                type="text"
                                placeholder="Nome da rua"
                                className="w-full p-4 bg-white rounded-xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none transition-all font-medium text-gray-700"
                                value={data.street || ""}
                                onChange={(e) => updateData({ street: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-600 ml-1">Número</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none transition-all font-medium text-gray-700"
                                    value={data.number || ""}
                                    onChange={(e) => updateData({ number: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-600 ml-1">Bairro</label>
                                <input
                                    type="text"
                                    placeholder="Bairro"
                                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none transition-all font-medium text-gray-700"
                                    value={data.district || ""}
                                    onChange={(e) => updateData({ district: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-600 ml-1">Complemento (Opcional)</label>
                            <input
                                type="text"
                                placeholder="Apto 101, Bloco B"
                                className="w-full p-4 bg-white rounded-xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none transition-all font-medium text-gray-700"
                                value={data.complement || ""}
                                onChange={(e) => updateData({ complement: e.target.value })}
                            />
                        </div>
                        
                        {manualMode && (
                            <button 
                                onClick={() => { setManualMode(false); setShowForm(false); updateData({postalCode: ""}); }}
                                className="text-xs text-gray-400 underline block mx-auto hover:text-primary"
                            >
                                Voltar para busca por CEP
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
