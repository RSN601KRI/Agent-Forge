
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                <Bot className="h-5 w-5 text-white animate-pulse hover:animate-bounce transition-all duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                AgentForge
              </span>
            </div>
            <p className="text-muted-foreground">
              Build AI agents that can think and transact. The future of autonomous commerce is here.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Build Agents</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Bounties</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Payroll</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Invoices</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Revenue Share</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AgentForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
