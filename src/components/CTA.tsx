import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const whatsappUrl = `https://wa.me/5561999360882?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Grupo Arruda.")}`;

  return (
    <section id="contato" className="py-24 px-4 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Vamos Construir o Futuro Juntos?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in">
          Nossa equipe de especialistas está pronta para entender seus desafios e desenvolver soluções sob medida. Entre em contato e descubra como podemos impulsionar seu negócio.
        </p>
        
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 group animate-fade-in"
          >
            Fale Conosco pelo WhatsApp
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
