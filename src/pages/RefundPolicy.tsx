import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-8">Política de Reembolso</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-foreground/80">
              O Grupo Arruda (CNPJ: 58.627.260/0001-71) está comprometido com a satisfação de nossos clientes. Esta Política de Reembolso estabelece as condições sob as quais reembolsos podem ser solicitados e processados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Serviços Elegíveis para Reembolso</h2>
            <p className="text-foreground/80 mb-4">
              Os reembolsos podem ser aplicáveis aos seguintes serviços, conforme especificado no contrato:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Serviços de desenvolvimento ainda não iniciados</li>
              <li>Consultorias estratégicas não realizadas</li>
              <li>Pacotes de marketing digital não executados</li>
              <li>Projetos cancelados antes do início da execução</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Prazo para Solicitação</h2>
            <p className="text-foreground/80">
              Solicitações de reembolso devem ser feitas dentro dos seguintes prazos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Antes do início do projeto:</strong> Até 7 dias após o pagamento</li>
              <li><strong>Durante o projeto:</strong> Conforme definido no contrato específico</li>
              <li><strong>Após conclusão:</strong> Reembolsos não são aplicáveis após entrega e aprovação</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Serviços Não Reembolsáveis</h2>
            <p className="text-foreground/80 mb-4">
              Os seguintes serviços NÃO são elegíveis para reembolso:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Serviços já prestados ou entregues</li>
              <li>Campanhas de marketing já executadas</li>
              <li>Horas de consultoria já realizadas</li>
              <li>Licenças de software de terceiros adquiridas</li>
              <li>Domínios e hospedagens já contratados</li>
              <li>Projetos com mais de 50% de conclusão</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Processo de Reembolso</h2>
            <p className="text-foreground/80 mb-4">
              Para solicitar um reembolso, siga estes passos:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground/80">
              <li>Entre em contato através do WhatsApp (61) 99936-0882 ou e-mail</li>
              <li>Forneça o número do pedido ou contrato</li>
              <li>Explique o motivo da solicitação</li>
              <li>Aguarde análise da solicitação (até 5 dias úteis)</li>
              <li>Receba confirmação da aprovação ou negação</li>
              <li>Reembolso processado em até 10 dias úteis após aprovação</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Valores de Reembolso</h2>
            <p className="text-foreground/80 mb-4">
              O valor do reembolso será calculado da seguinte forma:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Cancelamento antes do início:</strong> 100% do valor pago (menos taxas administrativas de 5%)</li>
              <li><strong>Cancelamento com projeto iniciado:</strong> Valor proporcional ao trabalho não realizado</li>
              <li><strong>Insatisfação com entrega:</strong> Análise caso a caso, podendo resultar em revisão gratuita ou reembolso parcial</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Método de Reembolso</h2>
            <p className="text-foreground/80">
              Reembolsos aprovados serão processados através do mesmo método de pagamento original. Se não for possível, será feito por transferência bancária para conta indicada pelo cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Exceções</h2>
            <p className="text-foreground/80">
              O Grupo Arruda reserva-se o direito de avaliar cada caso individualmente e pode oferecer alternativas ao reembolso, como:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Crédito para serviços futuros</li>
              <li>Revisão ou ajustes no trabalho entregue</li>
              <li>Extensão de prazo sem custo adicional</li>
              <li>Troca por outro serviço de valor equivalente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disputas</h2>
            <p className="text-foreground/80">
              Em caso de disputa sobre reembolso, ambas as partes concordam em primeiro tentar resolver amigavelmente. Se necessário, a questão será submetida aos órgãos de defesa do consumidor ou mediação judicial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contato</h2>
            <p className="text-foreground/80">
              Para solicitar reembolso ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-none space-y-2 text-foreground/80 mt-4">
              <li><strong>WhatsApp:</strong> (61) 99936-0882</li>
              <li><strong>E-mail:</strong> contato@grupoarruda.com</li>
              <li><strong>CNPJ:</strong> 58.627.260/0001-71</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default RefundPolicy;
