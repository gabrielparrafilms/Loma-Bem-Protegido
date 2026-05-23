import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get('brandId');
    const year = searchParams.get('year');

    if (!brandId || !year) {
        return NextResponse.json({ error: 'Brand ID and Year are required' }, { status: 400 });
    }

    try {
        const groups = await quotationService.getGroupByBrand(brandId, year);
        return NextResponse.json(groups);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to fetch groups' }, { status: 500 });
    }
}
