import { Monitor, TrendingUp, Cpu, Smartphone, Clock, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Criação de Presença Digital",
    description: "Desenvolvemos seu website ou e-commerce e criamos a identidade visual da sua marca.",
  },
  {
    icon: TrendingUp,
    title: "Geração de Leads e Vendas",
    description: "Planejamos e executamos campanhas de marketing completas para atrair e converter clientes.",
  },
  {
    icon: Cpu,
    title: "Automação de Processos",
    description: "Implementamos softwares para otimizar suas operações, economizando tempo e recursos.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Apps",
    description: "Criamos aplicativos móveis nativos e híbridos para iOS e Android, focados na experiência do usuário.",
  },
  {
    icon: Clock,
    title: "Consultoria Estratégica",
    description: "Analisamos seu negócio e o mercado para traçar um plano de crescimento digital sólido e eficaz.",
  },
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Infraestrutura escalável, segura e de alta disponibilidade para suas aplicações e dados.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções Integradas para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aproveite o poder do nosso ecossistema com serviços que cobrem todas as necessidades do seu negócio no ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
