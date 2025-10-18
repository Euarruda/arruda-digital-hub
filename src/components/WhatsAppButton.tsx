import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5561999360882";
  const message = "Olá! Gostaria de saber mais sobre os serviços do Grupo Arruda.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-gradient-primary shadow-glow hover:shadow-[0_0_50px_hsl(263_70%_63%/0.5)] transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Fale conosco pelo WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
