import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Termos de Serviço</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-foreground/80">
              Ao acessar e usar os serviços do Grupo Arruda, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="text-foreground/80 mb-4">
              O Grupo Arruda oferece um ecossistema completo de serviços digitais, incluindo mas não limitado a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Desenvolvimento de software e aplicativos móveis</li>
              <li>Marketing digital e estratégias de crescimento</li>
              <li>Design e branding</li>
              <li>Consultoria estratégica digital</li>
              <li>Análise de dados e Business Intelligence</li>
              <li>Produção audiovisual</li>
              <li>Soluções em cibersegurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso dos Serviços</h2>
            <p className="text-foreground/80 mb-4">Você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Usar os serviços apenas para fins legais</li>
              <li>Não interferir ou interromper os serviços</li>
              <li>Não utilizar os serviços para atividades fraudulentas</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-foreground/80">
              Todo o conteúdo, design, logotipos, marcas e materiais fornecidos pelo Grupo Arruda são de nossa propriedade ou licenciados por nós. Você não pode copiar, modificar, distribuir ou usar qualquer conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Pagamentos e Reembolsos</h2>
            <p className="text-foreground/80">
              Os termos de pagamento serão especificados em cada proposta ou contrato individual. Os preços podem ser alterados mediante aviso prévio. Políticas de reembolso serão definidas caso a caso, dependendo do serviço contratado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Garantias e Limitação de Responsabilidade</h2>
            <p className="text-foreground/80 mb-4">
              Os serviços são fornecidos "no estado em que se encontram". O Grupo Arruda se esforça para fornecer serviços de alta qualidade, mas não garante:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Que os serviços atenderão a todas as suas expectativas específicas</li>
              <li>Que os serviços serão ininterruptos ou livres de erros</li>
              <li>Resultados específicos de marketing ou vendas</li>
            </ul>
            <p className="text-foreground/80 mt-4">
              Nossa responsabilidade total não excederá o valor pago pelos serviços em questão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Confidencialidade</h2>
            <p className="text-foreground/80">
              Ambas as partes concordam em manter confidenciais todas as informações proprietárias e sensíveis compartilhadas durante a prestação de serviços, exceto quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Rescisão</h2>
            <p className="text-foreground/80">
              Qualquer parte pode rescindir os serviços mediante aviso prévio, conforme especificado no contrato individual. O Grupo Arruda reserva-se o direito de suspender ou encerrar serviços em caso de violação destes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Lei Aplicável</h2>
            <p className="text-foreground/80">
              Estes Termos de Serviço são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Alterações nos Termos</h2>
            <p className="text-foreground/80">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
            <p className="text-foreground/80">
              Para dúvidas sobre estes Termos de Serviço, entre em contato conosco através do WhatsApp: (61) 99936-0882.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;
