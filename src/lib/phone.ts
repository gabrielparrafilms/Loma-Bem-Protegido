/**
 * Normaliza um telefone digitado/colado/autopreenchido.
 * - Remove tudo que não for dígito.
 * - Remove o DDI 55 apenas quando o número tem 12 ou 13 dígitos (DDI + DDD + número).
 *   Números de 10 ou 11 dígitos são preservados — o "55" inicial pode ser DDD válido (ex: Santa Maria/RS).
 */
export function normalizePhone(raw: string | null | undefined): string {
    if (!raw) return '';
    const digitsOnly = raw.replace(/\D+/g, '');
    if (digitsOnly.length >= 12 && digitsOnly.startsWith('55')) {
        return digitsOnly.slice(2);
    }
    return digitsOnly;
}
