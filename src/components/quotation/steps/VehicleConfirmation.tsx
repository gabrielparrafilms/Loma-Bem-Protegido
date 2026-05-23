"use client";

import { useEffect, useState } from "react";
import {QuotationData, DecodedVehicle, VehicleModel} from "@/types/quotation";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void;
    onManual: () => void;
}

export default function VehicleConfirmation({ data, updateData, onManual }: Props) {
    const [vehicle, setVehicle] = useState<DecodedVehicle | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const fetchVehicle = async () => {
            if (!data.plate) return;
            
            setLoading(true);
            setError(false);
            
            try {
                const response = await fetch('/api/vehicles/decode', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ plate: data.plate }),
                });

                if (response.status === 404) {
                    setError(true);
                    return;
                }

                if (!response.ok) throw new Error('Failed to decode');
                
                const result = await response.json();

                // Verifica se o objeto retornado é válido (tem pelo menos marca e modelo)
                if (result && result.vehicleBrand && result.vehicleModel) {
                    setVehicle(result);
                } else {
                    console.warn("Invalid vehicle data:", result);
                    setError(true);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicle();
    }, [data.plate]);

    const handleSelect = () => {
        if (!vehicle) return;

        const normalizedModel: VehicleModel = {
            codeFipe: vehicle.vehicleModelCode,
            name: vehicle.vehicleModel,
            years: [
                {
                    codeFipe: vehicle.vehicleYearModelCode,
                    name: vehicle.vehicleYearModel,
                    year: Number(vehicle.vehicleYearModel)
                }
            ],
            brand: {
                codeFipe: String(vehicle.vehicleBrandCode),
                name: vehicle.vehicleBrand,
                type: vehicle.vehicleType,
                yearMin: 0,
                yearMax: 0,
            }
        };

        if (normalizedModel?.years) {
            updateData({
                selectedModel: normalizedModel,
                selectedBrand: normalizedModel.brand,
                selectedYear: normalizedModel?.years[0]?.year,
                vehicleType: (vehicle.vehicleType as any) || 'car'
            });
        }
        setSelected(true);
    };

    if (loading) {
        return (
            <div className="text-center space-y-6 py-10">
                <div className="w-12 h-12 border-4 border-[#3CC0B7]/30 border-t-[#3CC0B7] rounded-full animate-spin mx-auto" />
                <p className="text-gray-500">Buscando veículo pela placa...</p>
            </div>
        );
    }

    if (error || !vehicle) {
        return (
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto text-2xl">!</div>
                <h2 className="text-2xl font-black text-primary">Placa não encontrada</h2>
                <p className="text-gray-600">Não conseguimos identificar seu veículo automaticamente.</p>
                <button 
                    onClick={onManual}
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black transition-all"
                >
                    Selecionar Manualmente
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-3xl font-black text-primary leading-tight text-center">Confirme seu veículo</h2>
            <p className="text-center text-gray-500 text-sm">Encontramos o seguinte veículo para a placa <span className="font-bold text-primary">{data.plate}</span>:</p>
            
            <div className="space-y-3">
                <button
                    onClick={handleSelect}
                    className={`w-full p-5 rounded-xl border-2 transition-all text-left shadow-sm hover:shadow-md group ${
                        selected ? 'border-[#3CC0B7] bg-[#3CC0B7]/5' : 'border-gray-100 hover:border-[#3CC0B7] hover:bg-[#3CC0B7]/5'
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <span className={`font-bold text-lg transition-colors ${selected ? 'text-[#3CC0B7]' : 'text-primary group-hover:text-[#3CC0B7]'}`}>
                            {vehicle.vehicleBrand} - {vehicle.vehicleModel}
                        </span>
                        <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{vehicle.vehicleYearModel}</span>
                    </div>
                    {vehicle.vehiclePrice && (
                        <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">FIPE: {vehicle.vehiclePrice}</div>
                    )}
                </button>
            </div>

            <button
                onClick={onManual}
                className="flex items-center justify-center gap-2 text-primary font-medium text-sm mx-auto mt-6 hover:underline"
            >
                Não é este veículo? Selecionar manualmente
            </button>
        </div>
    );
}
