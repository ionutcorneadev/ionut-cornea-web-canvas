
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Flag, ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const handleLanguageChange = (lang: 'en' | 'ro') => {
    setLanguage(lang);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 px-3 py-2"
        >
          <Flag className="h-4 w-4" />
          <span className="text-sm font-medium">
            {language === 'en' ? 'English' : 'Română'}
          </span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Flag className="h-4 w-4" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('ro')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Flag className="h-4 w-4" />
          <span>Română</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
