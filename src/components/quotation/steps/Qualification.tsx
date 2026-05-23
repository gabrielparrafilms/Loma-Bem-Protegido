"use client";

import { useState } from "react";
import { QuotationData } from "@/types/quotation";
import Choice, { ChoiceItem } from "@/components/ui/Choice";

interface Props {
    data: Partial<QuotationData>;
    updateData: (data: Partial<QuotationData>) => void;
    onNext: () => void | Promise<void>; // Aceita Promise para suportar async
}

// --- Estrutura de Dados (similar ao Angular) ---
interface TargetMap {
  key: number | string;
  target: string;
}

interface QualificationStep {
  id: string;
  questionLabel: string;
  choices: ChoiceItem[];
  valueKey: keyof QuotationData;
  end?: boolean;
  targetMap?: TargetMap[];
}

const qualificationSteps: QualificationStep[] = [
    {
        id: 'initial',
        questionLabel: 'Qual opção mais se encaixa com você?',
        valueKey: 'qualificationType',
        targetMap: [
            { key: 1, target: 'question-1' },
            { key: 2, target: 'question-2' },
            { key: 3, target: 'question-2' },
            { key: 4, target: 'question-3' },
            { key: 5, target: 'question-4' },
        ],
        choices: [
            { text: 'TENHO SEGURO', value: 1 },
            { text: 'TENHO SEGURO (ROUBO e FURTO)', value: 2 },
            { text: 'TENHO RASTREADOR (ROUBO e FURTO)', value: 3 },
            { text: 'TENHO PROTEÇÃO VEICULAR', value: 4 },
            { text: 'NÃO TENHO PROTEÇÃO OU SEGURO', value: 5 },
        ],
    },
    {
        id: 'question-1',
        questionLabel: 'Quando você vai renovar?',
        valueKey: 'qualificationStatus',
        end: true,
        choices: [
            { text: 'Este mês', value: 1 },
            { text: 'Até 3 meses', value: 2 },
            { text: 'Daqui 6 meses', value: 3 },
        ],
    },
    {
        id: 'question-2',
        questionLabel: 'O que busca para sua próxima proteção?',
        valueKey: 'qualificationStatus',
        end: true,
        choices: [
            { text: 'Quero proteção para colisão', value: 1 },
            { text: 'Quero plano completo', value: 2 },
            { text: 'Quero mais barato', value: 3 },
            { text: 'Só pesquisando preços', value: 4 },
        ],
    },
    {
        id: 'question-3',
        questionLabel: 'Por qual motivo você quer trocar de proteção?',
        valueKey: 'qualificationStatus',
        end: true,
        choices: [
            { text: 'Estou insatisfeito', value: 1 },
            { text: 'Quero um mais barato', value: 2 },
            { text: 'Não confio na empresa que estou', value: 3 },
            { text: 'Quero mais beneficios', value: 4 },
        ],
    },
    {
        id: 'question-4',
        questionLabel: 'Qual seu nivel de urgência para fazer sua proteção?',
        valueKey: 'qualificationStatus',
        end: true,
        choices: [
            { text: 'Urgente - até 48h', value: 1 },
            { text: 'Este mês', value: 2 },
            { text: 'Daqui uns 3 meses', value: 3 },
            { text: 'Estou só pesquisando', value: 4 },
        ],
    },
];

export default function Qualification({ data, updateData, onNext }: Props) {
    const [currentQuestionId, setCurrentQuestionId] = useState('initial');
    const [selectedItem, setSelectedItem] = useState<ChoiceItem | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const currentQuestion = qualificationSteps.find(q => q.id === currentQuestionId);

    if (!currentQuestion) return null;

    const handleSelect = (item: ChoiceItem) => {
        setSelectedItem(item);

        const currentChoices = data.qualificationChoices || [];
        const newChoices = currentQuestionId === 'initial' 
            ? [item.text] 
            : [...currentChoices, item.text];

        updateData({ 
            [currentQuestion.valueKey]: item.text,
            qualificationChoices: newChoices
        });
    };

    const handleContinue = async () => {
        if (!selectedItem) return;

        if (currentQuestion.end) {
            setIsLoading(true);
            try {
                await onNext();
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
            // Não seta isLoading(false) aqui se der sucesso, pois o componente vai desmontar/navegar
        } else if (currentQuestion.targetMap) {
            const nextTarget = currentQuestion.targetMap.find(t => t.key === selectedItem.value)?.target;
            if (nextTarget) {
                setCurrentQuestionId(nextTarget);
                setSelectedItem(null);
            } else {
                // Fallback, trata como final se não achar target
                setIsLoading(true);
                await onNext();
            }
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-black text-primary leading-tight text-center">
                {currentQuestion.questionLabel}
            </h2>
            
            <Choice
                choices={currentQuestion.choices}
                selectedValue={selectedItem?.value || currentQuestion.choices.find(c => c.text === (data[currentQuestion.valueKey] as string))?.value}
                onSelect={handleSelect}
            />

            <button
                onClick={handleContinue}
                disabled={!selectedItem || isLoading}
                className="w-full py-4 rounded-xl font-bold text-white bg-primary hover:bg-black transition-all shadow-lg shadow-primary/20 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider mt-6"
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    "Continuar"
                )}
            </button>
        </div>
    );
}
