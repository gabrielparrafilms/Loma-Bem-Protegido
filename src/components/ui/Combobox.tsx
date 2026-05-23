"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom"; // Importado para permitir o transbordo total
import { ChevronDown, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ComboboxOption {
    value: string | number;
    label: string | number;
}

interface Props {
    options: ComboboxOption[];
    value?: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    disabled?: boolean;
    loading?: boolean;
}

export default function Combobox({
                                     options,
                                     value,
                                     onChange,
                                     placeholder = "Selecione...",
                                     searchPlaceholder = "Buscar...",
                                     disabled = false,
                                     loading = false
                                 }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [mounted, setMounted] = useState(false); // Para evitar erro de SSR com Portal
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Garantir que o componente está montado no cliente
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const toggleDropdown = () => {
        if (disabled) return;

        if (!isOpen && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width
            });
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Verifica se o clique foi fora do botão e fora do menu portal
            const portalMenu = document.getElementById("combobox-dropdown-portal");
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                portalMenu && !portalMenu.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredOptions = options.filter(option => {
        const label = String(option.label || "");
        return label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const selectedOption = options.find(o => String(o.value) === String(value));

    const handleSelect = (optionValue: string | number) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm("");
    };

    return (
        <div className="relative w-full" ref={containerRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                disabled={disabled}
                className={`w-full p-4 bg-white rounded-xl border-2 flex items-center justify-between transition-all text-left ${
                    disabled
                        ? "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                        : isOpen
                            ? "border-[#3CC0B7] ring-2 ring-[#3CC0B7]/20"
                            : "border-gray-200 hover:border-gray-300"
                }`}
            >
                <span className={`block truncate ${!selectedOption ? "text-gray-400" : "text-gray-700 font-medium"}`}>
                    {loading ? "Carregando..." : (selectedOption?.label || placeholder)}
                </span>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* O Portal renderiza o menu fora da árvore DOM do componente pai */}
            {mounted && isOpen && !disabled && createPortal(
                <div
                    id="combobox-dropdown-portal"
                    style={{
                        position: 'absolute',
                        top: coords.top + 8,
                        left: coords.left,
                        width: coords.width,
                        zIndex: 9999
                    }}
                >
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-3 border-b border-gray-100 sticky top-0 bg-white">
                                <div className="relative">
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder={searchPlaceholder}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#3CC0B7]/20 transition-all"
                                        autoFocus
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="max-h-70 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                {filteredOptions.length > 0 ? (
                                    <ul>
                                        {filteredOptions.map((option) => (
                                            <li key={option.value}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleSelect(option.value)}
                                                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                                                        String(value) === String(option.value) ? "bg-[#3CC0B7]/10 text-[#3CC0B7] font-bold" : "text-gray-700"
                                                    }`}
                                                >
                                                    {option.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4 text-center text-sm text-gray-400">
                                        Nenhuma opção encontrada.
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>,
                document.body
            )}
        </div>
    );
}