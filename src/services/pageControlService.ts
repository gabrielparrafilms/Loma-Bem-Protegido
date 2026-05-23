import { PageControlConfiguration } from "@/types/page-control";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://service-hml.buildercrm.com.br";

export const pageControlService = {
    /**
     * Busca a configuração ativa de etapas pelo nome do modo (corresponde ao ?mode= da URL).
     * Retorna null quando não houver configuração ativa para o modo informado.
     */
    getByName: async (mode: string): Promise<PageControlConfiguration | null> => {
        const endpoint = `${API_URL}/api/v1/page-control/by-name/${encodeURIComponent(mode)}`;

        try {
            const response = await fetch(endpoint);

            if (response.status === 404) return null;
            if (!response.ok) {
                console.error(`[PageControlService] Failed to fetch mode "${mode}": ${response.status}`);
                return null;
            }

            return await response.json();
        } catch (error) {
            console.error(`[PageControlService] Network error fetching mode "${mode}":`, error);
            return null;
        }
    },
};
