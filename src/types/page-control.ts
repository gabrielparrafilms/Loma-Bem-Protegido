export const QuotationStepName = {
    INITIAL_DATA: 'initial_data',
    QUALIFICATION: 'qualification',
    PLATE_USAGE: 'plate_usage',
    VEHICLE_CONFIRMATION: 'vehicle_confirmation',
    VEHICLE_MANUAL_SELECTION: 'vehicle_manual_selection',
    LOCATION: 'location',
    SUCCESS: 'success',
} as const;

export type QuotationStepName = typeof QuotationStepName[keyof typeof QuotationStepName];

export interface PageConfigurationStep {
    step: string;
    value: number;
}

export interface PageControlConfiguration {
    id: string;
    name: string;
    configuration: PageConfigurationStep[];
    isActive: boolean;
}

export const DEFAULT_PAGE_CONFIGURATION: PageConfigurationStep[] = [
    { step: QuotationStepName.INITIAL_DATA, value: 1 },
    { step: QuotationStepName.QUALIFICATION, value: 2 },
    { step: QuotationStepName.PLATE_USAGE, value: 3 },
    { step: QuotationStepName.VEHICLE_CONFIRMATION, value: 4 },
    { step: QuotationStepName.VEHICLE_MANUAL_SELECTION, value: 5 },
    { step: QuotationStepName.LOCATION, value: 6 },
    { step: QuotationStepName.SUCCESS, value: 7 },
];
