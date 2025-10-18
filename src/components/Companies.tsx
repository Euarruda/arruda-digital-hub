import { Code, TrendingUp, Palette, Database, Film, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const companies = [
  {
    icon: Code,
    name: "Arruda Tech",
    description: "Desenvolvimento de software sob medida, aplicativos móveis e soluções web de alta performance. A tecnologia que transforma ideias em realidade.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    name: "Arruda Marketing",
    description: "Estratégias de marketing digital 360°. SEO, tráfego pago, mídias sociais e inbound marketing para escalar sua presença online.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Palette,
    name: "Arruda Creative",
    description: "Branding, design UI/UX e produção de conteúdo de alto impacto. Criamos marcas memoráveis e experiências de usuário incríveis.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Database,
    name: "Arruda Data",
    description: "Business Intelligence e análise de dados. Transformamos informações em insights poderosos para decisões estratégicas mais inteligentes.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Film,
    name: "Arruda Studios",
    description: "Produção audiovisual completa, de vídeos institucionais a conteúdo para redes sociais, com qualidade cinematográfica.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Shield,
    name: "Arruda Secure",
    description: "Consultoria em cibersegurança e proteção de dados. Garantimos a integridade e a segurança da sua operação digital.",
    color: "from-teal-500 to-teal-600",
  },
];

const Companies = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça Nossas Empresas Digitais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada empresa do nosso ecossistema é especialista em sua área, mas todas compartilham a mesma visão de excelência e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r ${company.color} group-hover:shadow-glow transition-all duration-300`}>
                  <company.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{company.name}</h3>
                <p className="text-muted-foreground">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
