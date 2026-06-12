"use client";

import { QuotationData } from "@/types/quotation";
import { PatternFormat } from 'react-number-format';

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void;
    onManual: () => void;
}

export default function PlateAndUsage({ data, updateData, onNext, onManual }: Props) {
    return (
        <div className="space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-4">
                <h2 className="text-3xl font-black text-primary leading-tight">Qual a <span className="text-[#3CC0B7]">placa</span> do veículo?</h2>
                
                {/* Input com máscara flexível para Placa (Mercosul ou Antiga) */}
                <div className="relative max-w-[200px] mx-auto">
                    <input
                        type="text"
                        placeholder="ABC1D23"
                        maxLength={7}
                        className="w-full p-4 text-center text-3xl font-black uppercase bg-white rounded-2xl border-2 border-gray-200 focus:border-[#3CC0B7] outline-none shadow-sm tracking-widest transition-all placeholder:text-gray-200"
                        value={data.plate || ""}
                        onChange={(e) => {
                            // Remove caracteres não alfanuméricos e limita a 7
                            const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 7);
                            updateData({ plate: val });
                        }}
                    />
                    <div className="text-xs text-gray-400 mt-2">Padrão Mercosul ou Antigo</div>
                </div>

                <button
                    onClick={onManual}
                    className="text-primary font-semibold underline text-sm block mx-auto hover:opacity-80 transition-opacity mt-4"
                >
                    Não tenho a placa agora / Prefiro selecionar o modelo
                </button>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-700">Você faz Uber, táxi ou entregas com este carro?</h3>
                <p className="text-sm text-gray-400 -mt-2">99, iFood, motoboy, frete, transporte escolar...</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                        onClick={() => updateData({ work: false })}
                        className={`p-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${
                            data.work === false
                                ? "border-[#3CC0B7] bg-[#3CC0B7]/10 text-[#3CC0B7] shadow-md"
                                : "border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        <span className="text-xl">🚗</span> Não
                    </button>
                    <button
                        onClick={() => updateData({ work: true })}
                        className={`p-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${
                            data.work === true
                                ? "border-[#3CC0B7] bg-[#3CC0B7]/10 text-[#3CC0B7] shadow-md"
                                : "border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        <span className="text-xl">💼</span> Sim
                    </button>
                </div>
            </div>
        </div>
    );
}
