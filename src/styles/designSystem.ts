export const colors = {
  // Main palette - refined gold
  gold: {
    50: '#FFF9E6',
    100: '#FFF0C2',
    200: '#FFE499',
    300: '#FFD771',
    400: '#F0C755',
    500: '#D4AF37', // Primary gold
    600: '#B39126',
    700: '#8C6D1F',
    800: '#664F1C',
    900: '#443415',
  },
  // Secondary palette - deep navy
  navy: {
    50: '#E6EEFF',
    100: '#C2D6FF',
    200: '#99B9FF',
    300: '#7192F0',
    400: '#4E6FD4',
    500: '#324BAD', // Primary navy
    600: '#203488',
    700: '#142163',
    800: '#0E143E',
    900: '#08070A', // Deepest background
  },
  // Neutral tones
  neutral: {
    50: '#F9F9FB',
    100: '#F0F0F5',
    200: '#E2E2EA',
    300: '#D1D1DB',
    400: '#A1A1A9',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
  // Accent colors
  accent: {
    purple: '#7C3AED',
    emerald: '#059669',
    ruby: '#E11D48',
  },
};

export const typography = {
  heading: {
    fontFamily: '"Playfair Display", serif',
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  body: {
    fontFamily: '"Inter", sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  gold: '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
  glow: '0 0 20px 5px rgba(212, 175, 55, 0.15)',
  'inner-gold': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.1)',
};

export const gradients = {
  goldPrimary: 'linear-gradient(135deg, #D4AF37 0%, #F9E077 50%, #D4AF37 100%)',
  goldSubtle: 'linear-gradient(135deg, rgba(212, 175, 55, 0.8) 0%, rgba(249, 224, 119, 0.8) 50%, rgba(212, 175, 55, 0.8) 100%)',
  navyGold: 'linear-gradient(135deg, #08070A 0%, #1A1814 50%, #08070A 100%)',
  darkOverlay: 'linear-gradient(180deg, rgba(8, 7, 10, 0) 0%, rgba(8, 7, 10, 0.9) 100%)',
};

export const animations = {
  easing: {
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeOutQuint: [0.22, 1, 0.36, 1],
  },
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
};

export const spacing = {
  section: {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32',
  },
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};