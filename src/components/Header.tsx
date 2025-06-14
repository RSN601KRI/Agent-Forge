
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Bot, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Projects', path: '/projects' },
    { name: 'Build Agents', path: '/build-agents' },
    { name: 'Bounties', path: '/bounties' },
    { name: 'Payroll', path: '/payroll' },
    { name: 'Invoices', path: '/invoices' },
    { name: 'Revenue Share', path: '/revenue-share' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Docs', path: '/docs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105">
            <Bot className="h-6 w-6 text-white animate-pulse group-hover:animate-bounce transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-emerald-600 transition-all duration-300">
            AgentForge
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 group text-sm ${
                isActive(item.path) 
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"></div>
              )}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 to-purple-500/0 group-hover:from-emerald-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative group hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 group-hover:text-yellow-500 group-hover:rotate-180 transition-all duration-300" />
            ) : (
              <Moon className="h-5 w-5 group-hover:text-emerald-500 group-hover:-rotate-12 transition-all duration-300" />
            )}
          </Button>
          
          <Link to="/build-agents">
            <Button className="hidden md:flex group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
              <Zap className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Deploy Agent
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`px-4 py-3 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 ${
                  isActive(item.path) 
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/build-agents">
              <Button 
                className="mt-4 w-full group bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:to-emerald-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Deploy Agent
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
