import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';
import { QuotationOrder } from '@/types/quotation';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body: Partial<QuotationOrder> = await request.json();

        // Garante que o ID está no payload, caso a API externa precise dele para identificar o update
        const payload = { ...body, id };

        // Chama o mesmo serviço de sincronização (Upsert)
        const result = await quotationService.syncQuotation(payload);

        return NextResponse.json(result);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
