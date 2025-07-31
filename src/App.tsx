import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Strategies from "./pages/Strategies";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/trading" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Live Trading</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/backtest" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Backtesting</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/analytics" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Analytics</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/performance" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Performance</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/portfolio" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Portfolio</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/signals" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Signals</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/profile" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Profile</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          <Route path="/settings" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">Settings</h1><p className="text-muted-foreground">Coming soon...</p></div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
