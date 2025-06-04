
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import BuildAgents from "./pages/BuildAgents";
import CloneTemplate from "./pages/CloneTemplate";
import Bounties from "./pages/Bounties";
import Payroll from "./pages/Payroll";
import Invoices from "./pages/Invoices";
import RevenueShare from "./pages/RevenueShare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/build-agents" element={<BuildAgents />} />
                <Route path="/clone-template" element={<CloneTemplate />} />
                <Route path="/bounties" element={<Bounties />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/revenue-share" element={<RevenueShare />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
