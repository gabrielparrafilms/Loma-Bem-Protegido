"use client";

import { useState, useEffect, useCallback } from "react";
import { QuotationData, VehicleType, VehicleBrand, VehicleModel } from "@/types/quotation";
import Combobox from "@/components/ui/Combobox";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void | Promise<void>;
}

export default function VehicleSelection({ data, updateData, onNext }: Props) {
    const [brands, setBrands] = useState<VehicleBrand[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [groups, setGroups] = useState<string[]>([]);
    const [models, setModels] = useState<VehicleModel[]>([]);

    // Estados de carregamento
    const [loadingBrands, setLoadingBrands] = useState(false);
    const [loadingYears, setLoadingYears] = useState(false);
    const [loadingGroups, setLoadingGroups] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Helpers — declared before effects that depend on them
    const resetSelections = useCallback((fromLevel: 'type' | 'brand' | 'year' | 'group') => {
        const updates: Partial<QuotationData> = {};
        if (fromLevel === 'type') {
            updates.selectedBrand = undefined;
            setBrands([]);
        }
        if (fromLevel === 'type' || fromLevel === 'brand') {
            updates.selectedYear = undefined;
            setYears([]);
        }
        if (fromLevel === 'type' || fromLevel === 'brand' || fromLevel === 'year') {
            updates.selectedGroup = undefined;
            setGroups([]);
        }
        if (fromLevel === 'type' || fromLevel === 'brand' || fromLevel === 'year' || fromLevel === 'group') {
            updates.selectedModel = undefined;
            setModels([]);
        }
        updateData(updates);
    }, [updateData]);

    // 1. Carrega MARCAS quando o TIPO muda
    useEffect(() => {
        const fetchBrands = async () => {
            if (!data.vehicleType) return;
            setLoadingBrands(true);
            try {
                const response = await fetch(`/api/vehicles/brands?type=${data.vehicleType}`);
                if (!response.ok) throw new Error('Failed to fetch brands');
                const result = await response.json() as VehicleBrand[];
                setBrands(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingBrands(false);
            }
        };

        fetchBrands();
        resetSelections('brand');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.vehicleType]);

    // 2. Carrega ANOS quando a MARCA muda
    useEffect(() => {
        const fetchYears = async () => {
            if (!data.selectedBrand?.id) {
                setYears([]);
                return;
            }
            setLoadingYears(true);
            try {
                const response = await fetch(`/api/vehicles/years?brandId=${data.selectedBrand.id}`);
                if (!response.ok) throw new Error('Failed to fetch years');
                const result = await response.json() as unknown[];

                let yearsList: string[] = [];
                if (Array.isArray(result)) {
                    if (typeof result[0] === 'string') {
                        yearsList = result as string[];
                    } else if ((result[0] as Record<string, unknown>)?.years) {
                        yearsList = (result as Array<{ years: string[] }>).flatMap((r) => r.years);
                    } else {
                        yearsList = result.map((r) => String(r));
                    }
                } else if ((result as Record<string, unknown>).years) {
                    yearsList = (result as { years: string[] }).years;
                }

                const uniqueYears = Array.from(new Set(yearsList)).sort((a, b) => parseInt(b) - parseInt(a));
                setYears(uniqueYears);

            } catch (error) {
                console.error(error);
                setYears([]);
            } finally {
                setLoadingYears(false);
            }
        };

        fetchYears();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.selectedBrand?.id]);

    // 3. Carrega GRUPOS quando o ANO muda
    useEffect(() => {
        const fetchGroups = async () => {
            if (!data.selectedBrand?.id || !data.selectedYear) {
                setGroups([]);
                return;
            }
            setLoadingGroups(true);
            try {
                const response = await fetch(`/api/vehicles/groups?brandId=${data.selectedBrand.id}&year=${data.selectedYear}`);
                if (!response.ok) throw new Error('Failed to fetch groups');
                const result = await response.json() as unknown;

                let groupsList: string[] = [];
                if (Array.isArray(result)) {
                    if (typeof result[0] === 'string') {
                        groupsList = result as string[];
                    } else if ((result[0] as Record<string, unknown>)?.group) {
                        groupsList = (result as Array<{ group: string[] }>).flatMap((r) => r.group);
                    }
                } else if ((result as Record<string, unknown>)?.group) {
                    groupsList = (result as { group: string[] }).group;
                }

                setGroups(groupsList);
            } catch (error) {
                console.error(error);
                setGroups([]);
            } finally {
                setLoadingGroups(false);
            }
        };

        fetchGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.selectedBrand?.id, data.selectedYear]);

    // 4. Carrega VEÍCULOS (Modelos Finais) quando o GRUPO muda
    useEffect(() => {
        const fetchModels = async () => {
            if (!data.selectedBrand?.id || !data.selectedYear || !data.selectedGroup) {
                setModels([]);
                return;
            }
            setLoadingModels(true);
            try {
                const response = await fetch(
                    `/api/vehicles/models?brandId=${data.selectedBrand.id}&year=${data.selectedYear}&group=${encodeURIComponent(data.selectedGroup)}`
                );
                if (!response.ok) throw new Error('Failed to fetch models');
                const result = await response.json() as VehicleModel[];
                setModels(result);
            } catch (error) {
                console.error(error);
                setModels([]);
            } finally {
                setLoadingModels(false);
            }
        };

        fetchModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.selectedBrand?.id, data.selectedYear, data.selectedGroup]);

    const handleTypeSelect = (type: VehicleType) => {
        updateData({ vehicleType: type });
        resetSelections('type');
    };

    const handleBrandChange = (brandId: string | number) => {
        const brand = brands.find(b => b.id === brandId);
        updateData({ selectedBrand: brand });
        resetSelections('brand');
    };

    const handleYearChange = (year: string | number) => {
        updateData({ selectedYear: Number(year) });
        resetSelections('year');
    };

    const handleGroupChange = (group: string | number) => {
        updateData({ selectedGroup: String(group) });
        resetSelections('group');
    };

    const handleModelChange = (modelId: string | number) => {
        const model = models.find(m => m.id === modelId);

        if (model) {
            const selectedModel: VehicleModel = {
                ...model,
            };
            updateData({ selectedModel });
        }
    };

    const handleConfirm = async () => {
        setIsSubmitting(true);
        try {
            await onNext();
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    if (!data.vehicleType) {
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-3xl font-black text-primary leading-tight">Qual o tipo do veículo?</h2>
                <div className="grid grid-cols-1 gap-3">
                    {[
                        { id: 'car', label: 'Carro', icon: '🚗' },
                        { id: 'motorcycle', label: 'Moto', icon: '🏍️' },
                        { id: 'truck', label: 'Caminhão', icon: '🚛' }
                    ].map((v) => (
                        <button
                            key={v.id}
                            onClick={() => handleTypeSelect(v.id as VehicleType)}
                            className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3CC0B7] hover:bg-[#3CC0B7]/5 transition-all text-left font-bold text-gray-700 flex items-center gap-4 text-xl"
                        >
                            <span className="text-2xl">{v.icon}</span>
                            {v.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-primary leading-tight">Dados do Veículo</h2>
                <button
                    onClick={() => {
                        updateData({ vehicleType: undefined });
                        resetSelections('type');
                    }}
                    className="text-sm text-[#3CC0B7] font-bold underline"
                >
                    Alterar Tipo
                </button>
            </div>

            <div className="space-y-4">
                {/* 1. MARCA */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Marca</label>
                    <Combobox
                        options={brands.map(b => ({ value: b.id || "", label: b.name || "" }))}
                        value={data.selectedBrand?.id}
                        onChange={handleBrandChange}
                        placeholder="Selecione a marca"
                        searchPlaceholder="Buscar marca..."
                        loading={loadingBrands}
                        disabled={loadingBrands}
                    />
                </div>

                {/* 2. ANO */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Ano</label>
                    <Combobox
                        options={years.map(y => ({ value: y, label: String(y) === "32000" ? "0 km" : String(y) }))}
                        value={data.selectedYear?.toString()}
                        onChange={handleYearChange}
                        placeholder="Selecione o ano"
                        searchPlaceholder="Buscar ano..."
                        loading={loadingYears}
                        disabled={!data.selectedBrand || loadingYears}
                    />
                </div>

                {/* 3. GRUPO */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Modelo / Grupo</label>
                    <Combobox
                        options={groups.map(g => ({ value: g, label: g }))}
                        value={data.selectedGroup}
                        onChange={handleGroupChange}
                        placeholder="Selecione o grupo"
                        searchPlaceholder="Buscar grupo..."
                        loading={loadingGroups}
                        disabled={!data.selectedYear || loadingGroups}
                    />
                </div>

                {/* 4. VEÍCULO FINAL */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Versão</label>
                    <Combobox
                        options={models.map(m => ({ value: m.id || "", label: m.name || "" }))}
                        value={data.selectedModel?.id}
                        onChange={handleModelChange}
                        placeholder="Selecione a versão"
                        searchPlaceholder="Buscar versão..."
                        loading={loadingModels}
                        disabled={!data.selectedGroup || loadingModels}
                    />
                </div>
            </div>

            {data.selectedModel && (
                <button
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    className="w-full py-5 mt-4 rounded-2xl font-bold text-white bg-primary hover:bg-black transition-all shadow-lg shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        "Confirmar Veículo"
                    )}
                </button>
            )}
        </div>
    );
}
