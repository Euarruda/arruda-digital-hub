import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNotice = () => {
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
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações da Empresa</h2>
            <p className="text-foreground/80">
              <strong>Razão Social:</strong> Grupo Arruda<br />
              <strong>CNPJ:</strong> 58.627.260/0001-71<br />
              <strong>Atividade:</strong> Ecossistema de Inovação Digital
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Objeto do Website</h2>
            <p className="text-foreground/80">
              Este website tem como objetivo apresentar os serviços oferecidos pelo Grupo Arruda, incluindo desenvolvimento de software, marketing digital, consultoria estratégica e demais soluções digitais integradas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Condições de Uso</h2>
            <p className="text-foreground/80 mb-4">
              O acesso e uso deste website estão sujeitos aos seguintes termos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>O conteúdo é fornecido apenas para fins informativos</li>
              <li>O Grupo Arruda reserva-se o direito de modificar o conteúdo sem aviso prévio</li>
              <li>O uso inadequado do website pode resultar em ações legais</li>
              <li>É proibida a reprodução não autorizada de conteúdo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-foreground/80">
              Todos os direitos de propriedade intelectual relacionados ao conteúdo, design, logotipos e materiais deste website são de propriedade exclusiva do Grupo Arruda ou de seus licenciadores. Qualquer uso não autorizado constitui violação de direitos autorais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-foreground/80">
              O Grupo Arruda não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Interrupções temporárias no acesso ao website</li>
              <li>Erros ou omissões no conteúdo publicado</li>
              <li>Danos diretos ou indiretos decorrentes do uso do website</li>
              <li>Conteúdo de websites de terceiros linkados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Links Externos</h2>
            <p className="text-foreground/80">
              Este website pode conter links para websites de terceiros. O Grupo Arruda não se responsabiliza pelo conteúdo ou práticas de privacidade desses websites externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Proteção de Dados</h2>
            <p className="text-foreground/80">
              O tratamento de dados pessoais coletados através deste website está sujeito à nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Legislação Aplicável</h2>
            <p className="text-foreground/80">
              Este Aviso Legal é regido pela legislação brasileira. Qualquer litígio será submetido à jurisdição dos tribunais brasileiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-foreground/80">
              Para questões relacionadas a este Aviso Legal, entre em contato através do WhatsApp: (61) 99936-0882.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default LegalNotice;
