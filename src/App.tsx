import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "@/i18n/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import AirConditioning from "./pages/services/AirConditioning";
import Carpentry from "./pages/services/Carpentry";
import Painting from "./pages/services/Painting";
import Electrical from "./pages/services/Electrical";
import BuildingMaintenance from "./pages/services/BuildingMaintenance";
import Sanitary from "./pages/services/Sanitary";
import Wallpaper from "./pages/services/Wallpaper";
import Plaster from "./pages/services/Plaster";
import FalseCeiling from "./pages/services/FalseCeiling";
import SwimmingPool from "./pages/services/SwimmingPool";
import Decoration from "./pages/services/Decoration";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/services/air-conditioning" element={<AirConditioning />} />
          <Route path="/services/carpentry" element={<Carpentry />} />
          <Route path="/services/sanitary" element={<Sanitary />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/wallpaper" element={<Wallpaper />} />
          {/* <Route path="/services/electrical" element={<Electrical />} />
          <Route path="/services/plaster" element={<Plaster />} />
          <Route path="/services/false-ceiling" element={<FalseCeiling />} />
          <Route path="/services/swimming-pool" element={<SwimmingPool />} />
          <Route path="/services/maintenance" element={<BuildingMaintenance />} />
          <Route path="/services/decoration" element={<Decoration />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
  </QueryClientProvider>
);

export default App;
