"use client";

export default function Success() {
    return (
        <div className="text-center space-y-6 py-10">
            <div className="w-20 h-20 bg-[#3CC0B7]/10 text-[#3CC0B7] rounded-full flex items-center justify-center mx-auto text-4xl">✓</div>
            <h2 className="text-3xl font-black text-primary">Solicitação Recebida!</h2>
            <p className="text-gray-600 px-4">Em breve um consultor entrará em contato com você pelo WhatsApp.</p>
            <button onClick={() => window.location.reload()} className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest">Voltar ao Início</button>
        </div>
    );
}