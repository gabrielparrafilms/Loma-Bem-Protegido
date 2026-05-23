"use client";

import { QuotationData } from "@/types/quotation";
import { PatternFormat } from 'react-number-format';
import { normalizePhone } from "@/lib/phone";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
}

export default function InitialData({ data, updateData }: Props) {
    const handlePastePhone = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const raw = event.clipboardData.getData('text') ?? '';
        updateData({ phone: normalizePhone(raw) });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <span className="text-[#3CC0B7] font-bold text-xs uppercase tracking-widest">Passo 01</span>
                <h2 className="text-3xl font-black text-primary leading-tight">
                    Dados <span className="text-[#3CC0B7]">Iniciais</span>
                </h2>
                <p className="text-gray-500 text-sm">Como podemos falar com você?</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="quotation-name" className="sr-only">Nome Completo</label>
                    <input
                        id="quotation-name"
                        type="text"
                        placeholder="Seu Nome Completo"
                        autoComplete="name"
                        className="w-full p-5 bg-white rounded-2xl border-2 border-transparent focus:border-[#3CC0B7] outline-none shadow-sm text-lg transition-all"
                        value={data.name || ""}
                        onChange={(e) => updateData({ name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="quotation-phone" className="sr-only">WhatsApp com DDD</label>
                    <PatternFormat
                        id="quotation-phone"
                        format="(##) #####-####"
                        mask="_"
                        placeholder="Seu WhatsApp (com DDD)"
                        autoComplete="tel-national"
                        className="w-full p-5 bg-white rounded-2xl border-2 border-transparent focus:border-[#3CC0B7] outline-none shadow-sm text-lg transition-all"
                        value={data.phone || ""}
                        onValueChange={(values) => updateData({ phone: values.value })}
                        onPaste={handlePastePhone}
                    />
                </div>
            </div>
        </div>
    );
}
