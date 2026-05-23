import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    try {
        const brands = await quotationService.getBrands(type || undefined);
        return NextResponse.json(brands);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 });
    }
}
