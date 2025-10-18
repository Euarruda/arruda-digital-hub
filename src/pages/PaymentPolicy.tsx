import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-8">Política de Pagamento Online</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações Gerais</h2>
            <p className="text-foreground/80">
              Esta Política de Pagamento Online estabelece os termos e condições para pagamentos realizados ao Grupo Arruda (CNPJ: 58.627.260/0001-71) através de nossos canais digitais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Formas de Pagamento Aceitas</h2>
            <p className="text-foreground/80 mb-4">
              Aceitamos as seguintes formas de pagamento online:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Cartão de Crédito:</strong> Visa, Mastercard, American Express, Elo</li>
              <li><strong>Cartão de Débito:</strong> Principais bandeiras</li>
              <li><strong>PIX:</strong> Pagamento instantâneo</li>
              <li><strong>Transferência Bancária:</strong> TED/DOC</li>
              <li><strong>Boleto Bancário:</strong> Vencimento em até 3 dias úteis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Processamento de Pagamentos</h2>
            <p className="text-foreground/80">
              Utilizamos plataformas de pagamento seguras e certificadas. O processamento de pagamentos é realizado por parceiros especializados que seguem os mais altos padrões de segurança PCI-DSS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Confirmação de Pagamento</h2>
            <p className="text-foreground/80 mb-4">
              Após o pagamento, você receberá:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Confirmação imediata na tela para PIX e cartão</li>
              <li>E-mail de confirmação com detalhes da transação</li>
              <li>Nota fiscal eletrônica dentro de 5 dias úteis</li>
              <li>Comprovante de pagamento disponível para download</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Prazos de Compensação</h2>
            <p className="text-foreground/80">
              Os prazos para confirmação do pagamento são:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>PIX:</strong> Imediato</li>
              <li><strong>Cartão de Crédito:</strong> Até 2 dias úteis</li>
              <li><strong>Cartão de Débito:</strong> Até 1 dia útil</li>
              <li><strong>Boleto:</strong> Até 3 dias úteis após pagamento</li>
              <li><strong>Transferência:</strong> Até 2 dias úteis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Parcelamento</h2>
            <p className="text-foreground/80">
              Oferecemos parcelamento em cartão de crédito conforme disponibilidade:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Até 3x sem juros para valores acima de R$ 1.000</li>
              <li>Até 6x com juros para valores acima de R$ 3.000</li>
              <li>Até 12x com juros para valores acima de R$ 10.000</li>
              <li>Condições especiais podem ser negociadas em contratos específicos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Segurança das Transações</h2>
            <p className="text-foreground/80 mb-4">
              Garantimos a segurança das suas transações através de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Criptografia SSL/TLS em todas as transações</li>
              <li>Certificação PCI-DSS dos nossos processadores de pagamento</li>
              <li>Tokenização de dados de cartão (não armazenamos dados completos)</li>
              <li>Autenticação 3D Secure quando disponível</li>
              <li>Monitoramento contínuo de fraudes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Falhas no Pagamento</h2>
            <p className="text-foreground/80 mb-4">
              Em caso de falha na transação:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Você será notificado imediatamente sobre o erro</li>
              <li>Nenhum valor será cobrado em caso de falha</li>
              <li>Você pode tentar novamente com o mesmo ou outro método</li>
              <li>Nossa equipe está disponível para suporte</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contestação de Pagamentos</h2>
            <p className="text-foreground/80">
              Se você identificar uma cobrança indevida ou não reconhecida:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground/80">
              <li>Entre em contato imediatamente através do WhatsApp (61) 99936-0882</li>
              <li>Forneça detalhes da transação (data, valor, método)</li>
              <li>Aguarde análise em até 48 horas</li>
              <li>Se procedente, o estorno será processado em até 10 dias úteis</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Moeda e Impostos</h2>
            <p className="text-foreground/80">
              Todos os preços são expressos em Reais (BRL) e incluem os impostos aplicáveis conforme legislação brasileira. Impostos adicionais podem ser aplicados dependendo da localização e tipo de serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Política de Não Pagamento</h2>
            <p className="text-foreground/80 mb-4">
              Em caso de inadimplência:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Serviços podem ser suspensos até regularização</li>
              <li>Multa de 2% sobre o valor em atraso</li>
              <li>Juros de 1% ao mês sobre o valor devido</li>
              <li>Possibilidade de inscrição em órgãos de proteção ao crédito após 90 dias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contato para Questões de Pagamento</h2>
            <p className="text-foreground/80">
              Para dúvidas sobre pagamentos ou problemas com transações:
            </p>
            <ul className="list-none space-y-2 text-foreground/80 mt-4">
              <li><strong>WhatsApp:</strong> (61) 99936-0882</li>
              <li><strong>E-mail:</strong> financeiro@grupoarruda.com</li>
              <li><strong>Horário de atendimento:</strong> Segunda a Sexta, 9h às 18h</li>
              <li><strong>CNPJ:</strong> 58.627.260/0001-71</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PaymentPolicy;
