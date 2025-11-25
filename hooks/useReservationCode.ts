import { useMemo } from 'react';

interface UseReservationCodeParams {
  name: string;
  qty: number;
  email: string;
}

/**
 * Hook to generate a unique reservation code
 * Format: BL-{initials}-{guests}P-{hash}
 * Example: BL-JD-2P-A3F9
 */
export const useReservationCode = ({ name, qty, email }: UseReservationCodeParams): string => {
  return useMemo(() => {
    // Get first 2 letters from name
    const initials = name.substring(0, 2).toUpperCase() || 'XX';
    
    // Create hash from name + email + timestamp for uniqueness
    const hashSource = `${name}${email}${Date.now()}`;
    const hash = hashSource
      .split('')
      .reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0)
      .toString(16)
      .toUpperCase()
      .substring(0, 4)
      .padStart(4, '0');
    
    return `BL-${initials}-${qty}P-${hash}`;
  }, [name, qty, email]);
};
