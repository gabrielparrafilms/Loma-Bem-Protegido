import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get('brandId');
    const year = searchParams.get('year') || undefined;
    const group = searchParams.get('group') || undefined;

    if (!brandId) {
        return NextResponse.json({ error: 'Brand ID is required' }, { status: 400 });
    }

    try {
        // Agora chama o método que suporta filtros opcionais
        const models = await quotationService.getModelsByBrandYears(brandId, year, group);
        return NextResponse.json(models);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to fetch models' }, { status: 500 });
    }
}
