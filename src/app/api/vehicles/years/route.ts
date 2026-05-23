import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get('brandId');

    if (!brandId) {
        return NextResponse.json({ error: 'Brand ID is required' }, { status: 400 });
    }

    try {
        const years = await quotationService.getYearsByBrand(brandId);
        return NextResponse.json(years);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to fetch years' }, { status: 500 });
    }
}
