import { NextResponse } from 'next/server';
import { quotationService } from '@/services/quotationService';

export async function POST(request: Request) {
    try {
        const { plate } = await request.json();

        if (!plate) {
            return NextResponse.json({ error: 'Plate is required' }, { status: 400 });
        }

        const vehicle = await quotationService.decodeVehicle(plate);

        // Se não encontrou (retornou null ou undefined), retorna um objeto vazio ou erro 404
        // Mas para evitar o erro de serialização, garantimos que seja um objeto ou null explícito
        if (!vehicle) {
             return NextResponse.json({}, { status: 404 });
        }

        return NextResponse.json(vehicle);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to decode vehicle' }, { status: 500 });
    }
}
