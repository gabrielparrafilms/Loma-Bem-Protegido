"use client";

import { QuotationData, VehicleType } from "@/types/quotation";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void;
}

export default function VehicleTypeSelect({ data, updateData, onNext }: Props) {
    const types = [
        { id: 'car', label: 'Carro', img: 'icone_carro.png' },
        { id: 'motorcycle', label: 'Moto', img: 'icone_moto.png' },
        { id: 'truck', label: 'Caminhão', img: 'icone_caminhao.png' }
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-black text-primary leading-tight">O que vamos proteger?</h2>
            <div className="grid grid-cols-1 gap-3">
                {types.map((v) => (
                    <button
                        key={v.id}
                        onClick={() => {
                            updateData({ vehicleType: v.id as VehicleType });
                            onNext();
                        }}
                        className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                            data.vehicleType === v.id ? "border-[#3CC0B7] bg-white shadow-md" : "border-gray-100 bg-white/50"
                        }`}
                    >
                        <span className="font-bold text-primary">{v.label}</span>
                        <div className={`w-5 h-5 rounded-full border-2 ${data.vehicleType === v.id ? "bg-[#3CC0B7] border-[#3CC0B7]" : "border-gray-300"}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}