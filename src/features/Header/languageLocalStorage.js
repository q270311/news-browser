export const saveLanguageInLocalStorage = (language) => localStorage.setItem('language', language);

export const getLanguageFromLocalStorage = () => localStorage.getItem('language') || 'PL';
