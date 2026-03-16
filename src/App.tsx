import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Changelog from "./pages/Changelog";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Seguranca from "./pages/Seguranca";
import LGPD from "./pages/LGPD";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/lgpd" element={<LGPD />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
