import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const languages = [
    { code: 'zh', name: t('language.chinese'), flag: '🇨🇳' },
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setCurrentLang(langCode);
    setIsOpen(false);

    // 保存用户选择到localStorage
    localStorage.setItem('i18nextLng', langCode);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0]!;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2"
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <GlobeAltIcon className="size-4 text-gray-500" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <svg
          className={`size-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* 下拉菜单 */}
          <div
            className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-lg bg-white py-2 shadow-xl ring-1 ring-gray-200 focus:outline-none"
            role="listbox"
            aria-label={t('language.switch')}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-apple-blue/5 hover:text-apple-blue focus:bg-apple-blue/10 focus:text-apple-blue focus:outline-none ${
                  currentLang === language.code
                    ? 'bg-apple-blue/10 text-apple-blue'
                    : 'text-gray-700'
                }`}
                role="option"
                aria-selected={currentLang === language.code}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLang === language.code && (
                  <svg
                    className="ml-auto size-4 text-apple-blue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { LanguageSwitcher };
