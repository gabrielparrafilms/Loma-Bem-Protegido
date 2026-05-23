import { QuotationOrder, VehicleBrand, VehicleModel, VehicleModelYear, DecodedVehicle, BrandYearsResultDto, VehicleGroupResultDto } from "@/types/quotation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://service-hml.buildercrm.com.br";
const createLeadUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL || "";

export interface AddressData {
    street: string;
    district: string;
    city: string;
    state: string;
    postalCode: string;
}

export const quotationService = {
    /**
     * Envia a cotação para a API externa (Upsert).
     */
    syncQuotation: async (data: Partial<QuotationOrder>): Promise<QuotationOrder> => {
        const endpoint = `${createLeadUrl}`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`External API Error: ${response.statusText}`);
        }

        return await response.json();
    },

    /**
     * Decodifica o veículo pela placa.
     */
    decodeVehicle: async (plate: string): Promise<DecodedVehicle | null> => {
        const endpoint = `${API_URL}/api/v1/vehicle/decode-vehicle`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plate }),
        });

        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error(`Error decoding vehicle: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    },

    /**
     * Busca as marcas de veículos.
     */
    getBrands: async (type?: string): Promise<VehicleBrand[]> => {
        let endpoint = `${API_URL}/api/v1/vehicle/brands`;
        if (type) endpoint += `?type=${type}`;

        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Error fetching brands: ${response.statusText}`);
        return await response.json();
    },


    /**
     * Busca os anos de um modelo (Método antigo).
     */
    getModelYears: async (modelId: string): Promise<VehicleModelYear[]> => {
        const endpoint = `${API_URL}/api/v1/vehicle/model-years?modelId=${modelId}`;
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Error fetching model years: ${response.statusText}`);
        return await response.json();
    },

    /**
     * Busca os anos disponíveis para uma marca.
     */
    getYearsByBrand: async (brandId: string): Promise<BrandYearsResultDto[]> => {
        const endpoint = `${API_URL}/api/v1/vehicle/years/${brandId}`;
        console.log(`[QuotationService] Fetching years: ${endpoint}`);

        const response = await fetch(endpoint);
        if (!response.ok) {
            console.error(`[QuotationService] Error fetching years: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching years by brand: ${response.statusText}`);
        }
        return await response.json();
    },

    /**
     * Busca os grupos de veículos (modelos agrupados) por marca e ano.
     */
    getGroupByBrand: async (brandId: string, year: string): Promise<VehicleGroupResultDto> => {
        const endpoint = `${API_URL}/api/v1/vehicle/groups?brandId=${brandId}&year=${year}`;
        console.log(`[QuotationService] Fetching groups: ${endpoint}`);

        const response = await fetch(endpoint);
        if (!response.ok) {
            console.error(`[QuotationService] Error fetching groups: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching groups: ${response.statusText}`);
        }
        return await response.json();
    },

    /**
     * Busca os modelos finais (veículos) por marca, ano e grupo.
     */
    getModelsByBrandYears: async (brandId: string, year?: string, group?: string): Promise<VehicleModel[]> => {
        let endpoint = `${API_URL}/api/v1/vehicle/models?brandId=${brandId}`;
        if (year) endpoint += `&year=${year}`;
        if (group) endpoint += `&group=${encodeURIComponent(group)}`;

        console.log(`[QuotationService] Fetching models: ${endpoint}`);

        const response = await fetch(endpoint);
        if (!response.ok) {
            console.error(`[QuotationService] Error fetching models: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching models by brand/year/group: ${response.statusText}`);
        }

        const data = await response.json();

        // Mapeia o campo 'finalCode' para 'codeFipe' conforme solicitado
        // O usuário indicou que 'finalCode' é o código FIPE.
        return (data as VehicleModel[]).map((item) => ({
            ...item,
            codeFipe: String((item as VehicleModel & { finalCode?: string; fipeCode?: string }).finalCode || item.codeFipe || (item as VehicleModel & { fipeCode?: string }).fipeCode || '')
        }));
    },

    /**
     * Decodifica o CEP.
     */
    decodeZipCode: async (postalCode: string): Promise<AddressData | null> => {
        const cleanCep = postalCode.replace(/\D/g, '');
        const formattedCep = cleanCep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
        const endpoint = `${API_URL}/api/v1/city/decode-zipcode`;

        // Lista de tentativas com diferentes formatos e chaves
        const attempts = [
            { key: 'cep', value: formattedCep },
        ];

        for (const attempt of attempts) {
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ [attempt.key]: attempt.value }),
                });

                if (response.ok) {
                    return await response.json();
                }

                if (response.status === 404) {
                    // Se deu 404, o formato provavelmente estava certo mas o CEP não existe
                    return null;
                }

                // Se deu 400 ou 500, continua tentando outras variações
                console.warn(`[QuotationService] Failed with { ${attempt.key}: "${attempt.value}" }: ${response.status}`);

            } catch (error) {
                console.error(`[QuotationService] Network error:`, error);
            }
        }

        console.error(`[QuotationService] All attempts to decode zipcode failed.`);
        return null;
    }
};
