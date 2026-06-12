import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function POST(request: Request) {
    try {
        const { postalCode } = await request.json();

        if (!postalCode) {
            return NextResponse.json({ error: 'Postal code is required' }, { status: 400 });
        }

        const address = await quotationService.decodeZipCode(postalCode);

        if (!address) {
            // Retorna 404 para que o frontend saiba que deve mostrar o form manual
            return NextResponse.json({ error: 'Zipcode not found' }, { status: 404 });
        }

        return NextResponse.json(address);
    } catch (error) {
        console.error("API Error:", error);
        // Retorna 500, mas o frontend já trata erros genéricos caindo no manual
        return NextResponse.json({ error: 'Failed to decode zipcode' }, { status: 500 });
    }
}
