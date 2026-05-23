export type VehicleType = 'car' | 'motorcycle' | 'truck';

export interface PriceBrand {
    fipeId: string;
    price: number;
    refMonth: string;
}

export interface VehicleBrand {
    id?: string;
    name?: string;
    type: string;
    iconPath?: string;
    yearMin?: number;
    yearMax?: number;
    models?: VehicleModel[];
    codeFipe?: string
}

export interface VehicleModel {
    id?: string;
    name?: string;
    brand?: VehicleBrand;
    years?: VehicleModelYear[];
    group?: string;
    codeFipe?: string;
}

export interface BrandYearsResultDto {
    years: string[];
}

export interface VehicleGroupResultDto {
    group: string[];
}

export interface VehicleModelYear {
    id?: string;
    name?: string;
    year?: number;
    fuel?: string;
    model?: VehicleModel;
    codeFipe?: string;
}

export interface DecodedVehicle {
    vehicleBrand: string;
    vehicleBrandCode: number | string;
    vehicleModel: string;
    vehicleModelCode: string;
    vehicleYearModel: string;
    vehicleYearModelCode: string;
    vehicleType: string;
    vehiclePrice?: string;
    codeFipe?: string;
}

export interface QuotationData {
    id?: string;

    name: string;
    phone: string;
    email: string;

    qualificationType?: string | number;
    qualificationStatus?: string | number;
    qualificationChoices?: string[];

    plate: string;
    work: boolean;

    vehicleType: VehicleType;
    selectedBrand?: VehicleBrand;
    selectedYear?: number;
    selectedModel?: VehicleModel;
    selectedGroup?: string;

    postalCode: string;
    street?: string;
    district?: string;
    city?: string;
    state?: string;
    number?: string;
    complement?: string;

    createdAt?: string;

    utmId?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
    utmAnnouncement?: string;
}

export interface UtmQuotationOrderInput {
    utmId?: string;
    utmAnnouncement?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
}

export interface QuotationOrder {
    id?: string;
    code?: string;
    powerQuotationCode?: string;
    type?: string;
    powerNegotiationCode?: string;
    name: string;
    email?: string;
    phone: string;
    plate?: string;
    vehicleType?: string;
    vehicleBrandCode?: string;
    vehicleBrand?: string;
    vehicleModelCode?: string;
    vehicleModel?: string;
    codeFipe?: string;
    vehicleYearModelCode?: string;
    vehicleYearModel?: number;
    vehicleWork?: boolean;
    step?: string;
    postalCode?: string;
    state?: string;
    status?: string;
    city?: string;
    userCode?: string;
    origin?: string;
    subOrigin?: string;
    organizationCode?: string;
    street?: string;
    district?: string;
    extension?: string;
    observation?: string;
    qualification?: string;
    qualificationType?: string;
    qualificationStatus?: string;
    protocolId?: string;
    isPlan?: boolean;
    indicationCode?: string;
    tags?: string[];
    utm?: UtmQuotationOrderInput;
    chatId?: string;
    turnOffBot?: boolean;
    decodePlan?: boolean;
    cardOrigin?: string;
    quotaPrice?: number;
    plan?: string;
    total?: number;
    paymentType?: string;
    planPriceId?: string;
    planPriceValue?: number;
    optionalPriceValue?: number;
    adhesion?: number;
    tracker?: number;
    vehicleId?: string;
    subtotal?: number;
    aggregatePriceValue?: number;
    tax?: number;
    paymentSubscription?: string;
    discount?: number;
    discountPrice?: number;
    refundValue?: number;
    planPriceDiscount?: number;
    planPriceDiscountValue?: number;
    quotationDate?: Date;
    sourceOfTrafficking?: string;
}
