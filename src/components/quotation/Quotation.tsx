"use client";

import {useEffect, useMemo, useState} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion";
import {QuotationData, QuotationOrder} from "@/types/quotation";
import {
    DEFAULT_PAGE_CONFIGURATION,
    PageConfigurationStep,
    QuotationStepName,
} from "@/types/page-control";
import {pageControlService} from "@/services/pageControlService";
import InitialData from "./steps/InitialData";
import * as fpixel from "@/lib/fpixel";
import dynamic from "next/dynamic";

const Qualification = dynamic(() => import("./steps/Qualification"), { ssr: false });
const PlateAndUsage = dynamic(() => import("./steps/PlateAndUsage"), { ssr: false });
const VehicleConfirmation = dynamic(() => import("./steps/VehicleConfirmation"), { ssr: false });
const VehicleSelection = dynamic(() => import("./steps/VehicleSelection"), { ssr: false });
const Location = dynamic(() => import("./steps/Location"), { ssr: false });
const Success = dynamic(() => import("./steps/Success"), { ssr: false });

const STEPS_WITH_INTERNAL_NEXT: string[] = [
    QuotationStepName.QUALIFICATION,
    QuotationStepName.VEHICLE_MANUAL_SELECTION,
];

const VEHICLE_STEPS: string[] = [
    QuotationStepName.VEHICLE_CONFIRMATION,
    QuotationStepName.VEHICLE_MANUAL_SELECTION,
];

const LP_ORIGINS: Record<string, string> = {
    "/protecao-veicular": "Site: Proteção Veicular",
    "/maio-amarelo": "Site: Maio Amarelo",
    "/proposta-racional": "Site: Proposta Racional",
};

export default function Quotation() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const mode = searchParams.get("mode");

    const [configuration, setConfiguration] = useState<PageConfigurationStep[]>(DEFAULT_PAGE_CONFIGURATION);
    const [configLoading, setConfigLoading] = useState<boolean>(!!mode);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            if (!mode) {
                setConfiguration(DEFAULT_PAGE_CONFIGURATION);
                setConfigLoading(false);
                return;
            }

            setConfigLoading(true);
            const result = await pageControlService.getByName(mode);
            if (cancelled) return;

            if (result?.configuration?.length) {
                setConfiguration([...result.configuration].sort((a, b) => a.value - b.value));
            } else {
                setConfiguration(DEFAULT_PAGE_CONFIGURATION);
            }
            setConfigLoading(false);
        };

        load();

        return () => {
            cancelled = true;
        };
    }, [mode]);

    const stepNames = useMemo(() => configuration.map((c) => c.step), [configuration]);
    const firstStep = stepNames[0];
    const successStep = useMemo(
        () => stepNames.find((s) => s === QuotationStepName.SUCCESS),
        [stepNames]
    );
    const finalNavigableStep = useMemo(() => {
        const navigable = stepNames.filter((s) => s !== QuotationStepName.SUCCESS);
        return navigable[navigable.length - 1];
    }, [stepNames]);

    const [history, setHistory] = useState<string[]>([firstStep]);
    const currentStep = history[history.length - 1];

    const [isLoading, setIsLoading] = useState(false);
    const [quotationId, setQuotationId] = useState<string | null>(null);
    const [data, setData] = useState<Partial<QuotationData>>({
        name: "",
        phone: "",
        email: "",
        plate: "",
        work: false,
        postalCode: "",
        qualificationChoices: [],
    });

    useEffect(() => {
        const update = async () => {
            setHistory([firstStep]);
        };
        update();
    }, [firstStep]);

    useEffect(() => {
        const captured: Partial<QuotationData> = {
            utmId: searchParams.get("utm_id") ?? undefined,
            utmSource: searchParams.get("utm_source") ?? undefined,
            utmMedium: searchParams.get("utm_medium") ?? undefined,
            utmCampaign: searchParams.get("utm_campaign") ?? undefined,
            utmTerm: searchParams.get("utm_term") ?? undefined,
            utmContent: searchParams.get("utm_content") ?? undefined,
        };
        if (Object.values(captured).some(Boolean)) {
            setData(prev => ({ ...prev, ...captured }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const restore = async () => {
            const storedId = localStorage.getItem('quotation_id');
            if (storedId) setQuotationId(storedId);

            const storedData = localStorage.getItem('quotation_initial_data');
            if (storedData) {
                try {
                    const parsed = JSON.parse(storedData) as Partial<QuotationData>;
                    setData(prev => ({...prev, ...parsed}));
                } catch (e) {
                    console.error("Erro ao ler dados iniciais", e);
                }
            }
        };
        restore();
    }, []);

    const updateData = (newData: Partial<QuotationData>) => {
        setData(prev => ({...prev, ...newData}));
    };

    const saveStepData = async (currentStepData: Partial<QuotationData>, stepName: string): Promise<{ success: boolean; resolvedId: string | null }> => {
        setIsLoading(true);
        try {
            const payload: Partial<QuotationOrder> = {
                ...(quotationId && {code: quotationId}),

                step: stepName,
                origin: LP_ORIGINS[pathname] || "Site: LOMA",

                ...(currentStepData.name && {name: currentStepData.name}),
                ...(currentStepData.phone && {phone: currentStepData.phone}),
                ...(currentStepData.email && {email: currentStepData.email}),

                ...(currentStepData.qualificationType && {qualificationType: currentStepData.qualificationType.toString()}),
                ...(currentStepData.qualificationStatus && {qualificationStatus: currentStepData.qualificationStatus.toString()}),

                ...(currentStepData.qualificationChoices && currentStepData.qualificationChoices.length > 0 && {
                    qualification: currentStepData.qualificationChoices.join(' | ')
                }),

                ...(currentStepData.plate && {plate: currentStepData.plate}),
                ...(currentStepData.work !== undefined && {vehicleWork: currentStepData.work}),

                ...(currentStepData.vehicleType && {vehicleType: currentStepData.vehicleType}),

                ...(currentStepData.selectedBrand && {
                    vehicleBrand: currentStepData.selectedBrand.name,
                    vehicleBrandCode: currentStepData.selectedBrand.codeFipe
                }),
                ...(currentStepData.selectedModel && {
                    vehicleModel: currentStepData.selectedModel?.name,
                    vehicleModelCode: currentStepData.selectedModel.codeFipe,
                    vehicleYearModel: currentStepData.selectedModel?.years?.[0]?.year,
                    vehicleYearModelCode: currentStepData.selectedModel?.years?.[0]?.codeFipe,
                }),

                ...(currentStepData.postalCode && {postalCode: currentStepData.postalCode}),
                ...(currentStepData.street && {street: currentStepData.street}),
                ...(currentStepData.district && {district: currentStepData.district}),
                ...(currentStepData.city && {city: currentStepData.city}),
                ...(currentStepData.state && {state: currentStepData.state}),
                ...(currentStepData.number && {extension: currentStepData.number}),
                ...(currentStepData.complement && {observation: currentStepData.complement}),

                utm: {
                    utmId: data.utmId || undefined,
                    utmSource: data.utmSource || undefined,
                    utmMedium: data.utmMedium || undefined,
                    utmCampaign: data.utmCampaign || undefined,
                    utmTerm: data.utmTerm || undefined,
                    utmContent: data.utmContent || undefined,
                    utmAnnouncement: data.utmAnnouncement || undefined,
                }
            };

            let url = '/api/quotations';
            let method = 'POST';

            if (quotationId) {
                url = `/api/quotations/${quotationId}`;
                method = 'PUT';
            }

            const response = await fetch(url, {
                method: method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Falha ao salvar etapa');

            const result = await response.json();
            const resolvedId = result.code || result.id || quotationId;

            if (result.code) {
                setQuotationId(result.code);
                localStorage.setItem('quotation_id', result.code);
            } else if (result.id) {
                setQuotationId(result.id);
                localStorage.setItem('quotation_id', result.id);
            }

            return { success: true, resolvedId };
        } catch (error) {
            console.error("Erro ao salvar etapa:", error);
            return { success: false, resolvedId: null };
        } finally {
            setIsLoading(false);
        }
    };

    // Resolve a próxima etapa respeitando a ordem da configuração e a ramificação
    // de plate_usage → vehicle_confirmation | vehicle_manual_selection.
    const resolveNextStep = (from: string): string | undefined => {
        const fromIndex = stepNames.indexOf(from);
        if (fromIndex === -1) return undefined;

        const remaining = stepNames.slice(fromIndex + 1);

        if (from === QuotationStepName.PLATE_USAGE) {
            const wantsConfirmation = !!data.plate && data.plate.length >= 7;
            const target = wantsConfirmation
                ? QuotationStepName.VEHICLE_CONFIRMATION
                : QuotationStepName.VEHICLE_MANUAL_SELECTION;
            const skip = wantsConfirmation
                ? QuotationStepName.VEHICLE_MANUAL_SELECTION
                : QuotationStepName.VEHICLE_CONFIRMATION;
            return remaining.find((s) => s === target) ?? remaining.find((s) => s !== skip);
        }

        if (VEHICLE_STEPS.includes(from)) {
            return remaining.find((s) => !VEHICLE_STEPS.includes(s));
        }

        return remaining[0];
    };

    const handleNext = async () => {
        const stepName = currentStep;

        const { success, resolvedId } = await saveStepData(data, stepName);
        const trackId = resolvedId || 'novo_lead';

        if (!success) return;

        switch (stepName) {
            case QuotationStepName.INITIAL_DATA:
                fpixel.event('Contact', { content_name: 'Início de Cadastro', status: 'started' });
                fpixel.trackStep(stepName, { quotation_id: trackId });
                break;
            case QuotationStepName.QUALIFICATION:
                fpixel.event('ViewContent', {
                    content_name: 'Qualificação',
                    content_category: data.qualificationType || 'unknown'
                });
                fpixel.trackStep(stepName, {
                    quotation_id: trackId,
                    perfil: data.qualificationType,
                    escolhas: data.qualificationChoices?.join(' | ')
                });
                break;
            case QuotationStepName.PLATE_USAGE:
                fpixel.event('CustomizeProduct', {
                    content_name: 'Identificação do Veículo',
                    content_ids: [data.plate || 'manual'],
                    content_type: 'vehicle'
                });
                fpixel.trackStep(stepName, {
                    quotation_id: trackId,
                    placa: data.plate,
                    uso_trabalho: data.work ? 'sim' : 'não'
                });
                break;
            case QuotationStepName.VEHICLE_CONFIRMATION:
            case QuotationStepName.VEHICLE_MANUAL_SELECTION:
                fpixel.event('SubmitApplication', {
                    content_name: 'Confirmação de Veículo',
                    content_ids: [data.selectedModel?.codeFipe || data.selectedModel?.name].filter(Boolean) as string[]
                });
                fpixel.trackStep(stepName, {
                    quotation_id: trackId,
                    marca: data.selectedBrand?.name,
                    modelo: data.selectedModel?.name,
                    fipe: data.selectedModel?.codeFipe
                });
                break;
        }

        const next = resolveNextStep(stepName);
        if (next) {
            setHistory((prev) => [...prev, next]);
        }
    };

    const prevStep = () => {
        setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };

    const handleManualSelection = () => {
        if (!stepNames.includes(QuotationStepName.VEHICLE_MANUAL_SELECTION)) return;
        updateData({ plate: "" });
        setHistory((prev) => [...prev, QuotationStepName.VEHICLE_MANUAL_SELECTION]);
    };

    const handleFinalSubmit = async () => {
        const stepName = currentStep;
        const { success, resolvedId } = await saveStepData({ ...data, postalCode: data.postalCode }, stepName);
        const trackId = resolvedId || 'novo_lead';

        if (!success) return;

        fpixel.event('Lead', {
            content_name: 'Cotação Finalizada com Sucesso',
            content_category: data.vehicleType || 'unknown',
            currency: 'BRL',
            value: 0.00,
            city: data.city,
            state: data.state
        });
        fpixel.trackStep(stepName, {
            quotation_id: trackId,
            cidade: data.city,
            estado: data.state,
            cep: data.postalCode
        });

        if (successStep) {
            setHistory((prev) => [...prev, successStep]);
        }
        localStorage.removeItem('quotation_initial_data');
        localStorage.removeItem('quotation_id');
    };

    const isStepValid = () => {
        switch (currentStep) {
            case QuotationStepName.INITIAL_DATA:
                return !!data.name && !!data.phone && data.phone.length >= 10;
            case QuotationStepName.QUALIFICATION:
                return !!data.qualificationType;
            case QuotationStepName.PLATE_USAGE:
                return !!data.plate && data.plate.length >= 7;
            case QuotationStepName.VEHICLE_CONFIRMATION:
            case QuotationStepName.VEHICLE_MANUAL_SELECTION:
                return !!data.selectedModel;
            case QuotationStepName.LOCATION:
                if (data.postalCode && data.postalCode.length < 8) return false;
                return !!data.city && !!data.state && !!data.street && !!data.number;
            default:
                return true;
        }
    };

    const progressSegments = useMemo(
        () => stepNames.filter((s) => s !== QuotationStepName.SUCCESS),
        [stepNames]
    );
    const isSuccess = currentStep === QuotationStepName.SUCCESS;
    const currentProgressIndex = isSuccess
        ? progressSegments.length
        : progressSegments.indexOf(currentStep);

    const isFinalNavigable = currentStep === finalNavigableStep;
    const hasInternalNext = STEPS_WITH_INTERNAL_NEXT.includes(currentStep);
    const canGoBack = history.length > 1;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <div className="flex gap-2 mb-10">
                        {progressSegments.map((stepName, i) => (
                            <div
                                key={stepName}
                                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                                    currentProgressIndex > i ? "bg-[#3CC0B7]" : "bg-gray-100"
                                }`}
                            />
                        ))}
                    </div>

                    <div
                        className="bg-[#f8fafc] p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 min-h-[480px] flex flex-col relative overflow-hidden">

                        {configLoading ? (
                            <div className="flex-1 flex justify-center items-center">
                                <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"/>
                            </div>
                        ) : (
                        <LazyMotion features={domAnimation}>
                            <AnimatePresence mode="wait">
                                <m.div
                                    key={currentStep}
                                    initial={{opacity: 0, x: 20}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -20}}
                                    transition={{duration: 0.3}}
                                    className="flex-1 flex flex-col justify-center"
                                >
                                    {currentStep === QuotationStepName.INITIAL_DATA && <InitialData data={data} updateData={updateData}/>}
                                    {currentStep === QuotationStepName.QUALIFICATION && <Qualification data={data} updateData={updateData} onNext={handleNext}/>}
                                    {currentStep === QuotationStepName.PLATE_USAGE && <PlateAndUsage data={data} updateData={updateData} onNext={handleNext}
                                                                  onManual={handleManualSelection}/>}
                                    {currentStep === QuotationStepName.VEHICLE_CONFIRMATION &&
                                        <VehicleConfirmation data={data} updateData={updateData} onNext={handleNext}
                                                             onManual={handleManualSelection}/>}
                                    {currentStep === QuotationStepName.VEHICLE_MANUAL_SELECTION && <VehicleSelection data={data} updateData={updateData} onNext={handleNext}/>}
                                    {currentStep === QuotationStepName.LOCATION && <Location data={data} updateData={updateData}/>}
                                    {currentStep === QuotationStepName.SUCCESS && <Success/>}
                                </m.div>
                            </AnimatePresence>
                        </LazyMotion>
                        )}

                        {!configLoading && !isSuccess && !hasInternalNext && (
                            <div className="flex gap-4 mt-10 pt-6 border-t border-gray-100">
                                {canGoBack && (
                                    <button
                                        onClick={prevStep}
                                        className="flex-1 py-4 rounded-xl font-bold text-gray-400 bg-white border border-gray-200 hover:bg-gray-50 transition-all text-sm uppercase tracking-wider"
                                    >
                                        Voltar
                                    </button>
                                )}
                                <button
                                    onClick={isFinalNavigable ? handleFinalSubmit : handleNext}
                                    disabled={isLoading || !isStepValid()}
                                    className="flex-[2] py-4 rounded-xl font-bold text-white bg-primary hover:bg-black transition-all shadow-lg shadow-primary/20 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                                >
                                    {isLoading ? (
                                        <div
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                                    ) : (
                                        isFinalNavigable ? "Finalizar Cotação" : "Continuar"
                                    )}
                                </button>
                            </div>
                        )}

                        {!configLoading && !isSuccess && hasInternalNext && canGoBack && (
                            <div className="flex gap-4 mt-10 pt-6 border-t border-gray-100">
                                <button
                                    onClick={prevStep}
                                    className="w-full py-4 rounded-xl font-bold text-gray-400 bg-white border border-gray-200 hover:bg-gray-50 transition-all text-sm uppercase tracking-wider"
                                >
                                    Voltar
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
