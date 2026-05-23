import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';
import { QuotationOrder } from '@/types/quotation';

export async function POST(request: Request) {
    try {
        const body: Partial<QuotationOrder> = await request.json();

        // Validação básica
        if (!body.name || !body.phone) {
            return NextResponse.json(
                { error: 'Name and phone are required' },
                { status: 400 }
            );
        }

        // Chama o serviço que integra com a API externa
        const result = await quotationService.syncQuotation(body);

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
