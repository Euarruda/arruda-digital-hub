import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-foreground/80">
              O Grupo Arruda está comprometido em proteger a privacidade e a segurança dos dados pessoais de nossos clientes, parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="text-foreground/80 mb-4">Podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Nome completo e informações de contato (e-mail, telefone)</li>
              <li>Informações da empresa (nome, cargo, setor)</li>
              <li>Dados de navegação e uso do website</li>
              <li>Informações fornecidas voluntariamente através de formulários</li>
              <li>Dados de comunicação (mensagens, feedback)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-foreground/80 mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Responder a suas solicitações e consultas</li>
              <li>Enviar informações sobre nossos serviços e novidades</li>
              <li>Personalizar sua experiência em nosso website</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-foreground/80">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços, cumprir obrigações legais ou com seu consentimento explícito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
            <p className="text-foreground/80">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="text-foreground/80 mb-4">Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incorretos ou incompletos</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Opor-se ao processamento de seus dados</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-foreground/80">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso website. Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
            <p className="text-foreground/80">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco através do WhatsApp: (61) 99936-0882.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Alterações nesta Política</h2>
            <p className="text-foreground/80">
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível em nosso website com a data da última atualização.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;
