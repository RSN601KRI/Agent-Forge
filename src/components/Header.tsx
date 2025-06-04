
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold">Payman</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Calendar</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button className="hidden md:flex">New Project</Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Dashboard</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Projects</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Calendar</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Docs</a>
            <Button className="mt-4">New Project</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
