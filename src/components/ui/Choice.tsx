"use client";

export interface ChoiceItem {
  text: string;
  value: any;
  loading?: boolean;
}

interface Props {
  choices: ChoiceItem[];
  selectedValue?: any;
  onSelect: (item: ChoiceItem) => void;
  className?: string;
}

export default function Choice({ choices, selectedValue, onSelect, className }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-3 ${className}`}>
      {choices.map((choice) => (
        <button
          key={choice.value}
          onClick={() => onSelect(choice)}
          className={`p-5 rounded-2xl border-2 transition-all text-left font-bold text-gray-700 shadow-sm hover:shadow-md uppercase
            ${selectedValue === choice.value
              ? "border-[#3CC0B7] bg-[#3CC0B7]/10"
              : "border-gray-100 bg-white hover:border-[#3CC0B7]/50"
            }
          `}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}
