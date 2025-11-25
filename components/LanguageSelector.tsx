import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-purple/10 hover:bg-brand-purple/20 transition-colors group"
      title="Change language"
    >
      <Languages className="w-4 h-4 text-brand-purple group-hover:text-brand-pink transition-colors" />
      <span className="text-xs font-bold text-brand-purple group-hover:text-brand-pink transition-colors uppercase">
        {i18n.language === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};
