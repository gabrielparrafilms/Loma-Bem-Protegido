"use client";

import { QuotationData } from "@/types/quotation";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void;
    onManual: () => void;
}

export default function PlateOrManual({ data, updateData, onManual }: Props) {
    return (
        <div className="space-y-6 text-center">
            <h2 className="text-3xl font-black text-primary leading-tight">Qual a <span className="text-[#3CC0B7]">placa</span> do veículo?</h2>
            <input
                type="text"
                placeholder="Ex: ABC1D23"
                maxLength={7}
                className="w-full p-6 text-center text-3xl font-black uppercase bg-white rounded-2xl border-2 border-transparent focus:border-[#3CC0B7] outline-none shadow-sm tracking-widest"
                value={data.plate || ""}
                onChange={(e) => updateData({ plate: e.target.value.toUpperCase() })}
            />
            <button onClick={onManual} className="text-gray-400 underline text-sm block mx-auto">Não tenho a placa agora</button>
        </div>
    );
}