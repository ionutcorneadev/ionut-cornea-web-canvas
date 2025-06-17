
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2"
    >
      {language === 'en' ? (
        <>
          <span className="text-2xl">🇬🇧</span>
          <span className="text-sm font-medium">EN</span>
        </>
      ) : (
        <>
          <span className="text-2xl">🇷🇴</span>
          <span className="text-sm font-medium">RO</span>
        </>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
