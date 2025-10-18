import { Share2, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Share2,
    title: "Sinergia",
    description: "Nossas empresas trabalham juntas, compartilhando conhecimento e recursos para entregar resultados exponenciais.",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Estamos sempre na vanguarda da tecnologia, aplicando as últimas tendências para manter nossos clientes à frente da concorrência.",
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Nosso foco é claro: gerar crescimento e sucesso mensurável para cada um de nossos parceiros e clientes.",
  },
];

const Ecosystem = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nós Somos Um Ecossistema Digital
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Grupo Arruda não é apenas uma holding. Somos um ecossistema sinérgico de empresas digitais que colaboram para oferecer soluções completas e inovadoras, desde o marketing e desenvolvimento até a análise de dados e automação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 inline-flex p-6 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <value.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
