import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const whatsappUrl = `https://wa.me/5561999360882?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Grupo Arruda.")}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Entre em contato conosco. Nossa equipe está pronta para atender você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Fale conosco diretamente pelo WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  (61) 99936-0882
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <p className="text-muted-foreground mb-4">
                  Envie-nos um e-mail
                </p>
                <a
                  href="mailto:contato@grupoarruda.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  contato@grupoarruda.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">
                  Ligue para nós
                </p>
                <a
                  href="tel:+556199360882"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  (61) 99936-0882
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CNPJ</h3>
                <p className="text-muted-foreground mb-4">
                  Informações da empresa
                </p>
                <p className="text-foreground">
                  58.627.260/0001-71
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-primary-foreground/90 mb-6">
                Nossa equipe de especialistas está aguardando para entender seus desafios e apresentar soluções inovadoras.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Iniciar Conversa
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
