
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Flag } from "lucide-react";

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
      <Flag className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'English' : 'Română'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
