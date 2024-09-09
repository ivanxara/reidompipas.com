import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogTerms() {
  return (
    <div className="grid gap-1 leading-none">
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Aceito o Tratamento dos Dados e a Política de Privacidade.
      </label>
      <Dialog>
        <DialogTrigger className="text-start">
          <span className="text-sm underline text-muted-foreground">
            Clique aqui para ver os termos.
          </span>
        </DialogTrigger>
        <DialogContent className="max-h-[70vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>
              Termos de Tratamento de Dados e Política de Privacidade
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>
              O Rei Dom Pipas valoriza a privacidade e a proteção dos dados
              pessoais dos seus clientes. Esta política de privacidade explica
              como coletamos, utilizamos, armazenamos e protegemos os seus dados
              pessoais ao utilizar o nosso sistema de reservas no website.
            </p>
            <p>
              <strong>1. Dados Coletados</strong>
            </p>
            <p>
              Ao efetuar uma reserva através do nosso website, iremos recolher
              os seguintes dados pessoais:
            </p>
            <ul className="list-disc pl-5">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telemóvel</li>
              <li>Data e hora da reserva</li>
              <li>Número de pessoas na reserva</li>
              <li>
                Outras informações relevantes que o cliente possa fornecer no
                processo de reserva
              </li>
            </ul>
            <p>
              <strong>2. Finalidade do Tratamento dos Dados</strong>
            </p>
            <p>
              Os dados recolhidos são utilizados exclusivamente para fins
              relacionados com o agendamento e gestão de reservas no nosso
              restaurante, incluindo:
            </p>
            <ul className="list-disc pl-5">
              <li>Confirmar e gerir as suas reservas</li>
              <li>
                Entrar em contacto consigo para confirmação, alteração ou
                cancelamento
              </li>
              <li>Enviar comunicações relacionadas com a sua reserva</li>
            </ul>
            <p>
              <strong>3. Base Legal para o Tratamento dos Dados</strong>
            </p>
            <p>
              O tratamento dos seus dados pessoais é realizado com base no seu
              consentimento explícito, que é fornecido ao aceitar estes termos e
              ao submeter uma reserva no nosso website.
            </p>
            <p>
              <strong>4. Compartilhamento de Dados</strong>
            </p>
            <p>
              Os seus dados pessoais não serão partilhados com terceiros, exceto
              quando tal seja necessário para cumprir obrigações legais ou
              quando o serviço contratado para o funcionamento do nosso sistema
              de reservas exigir. Nesses casos, garantimos que todas as
              entidades envolvidas cumprem com as normas de proteção de dados.
            </p>
            <p>
              <strong>5. Retenção de Dados</strong>
            </p>
            <p>
              Os dados pessoais serão mantidos pelo período necessário para a
              realização da reserva e durante um período adicional de [período
              específico, ex: 6 meses] para fins de arquivo e possíveis futuros
              contatos. Após esse período, os dados serão eliminados de forma
              segura.
            </p>
            <p>
              <strong>6. Segurança dos Dados</strong>
            </p>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para
              proteger os seus dados pessoais contra acessos não autorizados,
              alterações, divulgações ou destruições.
            </p>
            <p>
              <strong>7. Direitos do Titular dos Dados</strong>
            </p>
            <p>
              De acordo com a legislação de proteção de dados aplicável em
              Portugal (RGPD), tem o direito de:
            </p>
            <ul className="list-disc pl-5">
              <li>Aceder aos seus dados pessoais</li>
              <li>Retificar os seus dados pessoais</li>
              <li>Eliminar os seus dados pessoais</li>
              <li>Limitar o tratamento dos seus dados pessoais</li>
              <li>Opor-se ao tratamento dos seus dados pessoais</li>
              <li>Solicitar a portabilidade dos seus dados pessoais</li>
            </ul>
            <p>
              Para exercer qualquer um destes direitos, pode contactar-nos
              através do e-mail, reidompipas@hotmail.com.
            </p>
            <p>
              <strong>8. Alterações a esta Política</strong>
            </p>
            <p>
              Podemos atualizar esta política de privacidade periodicamente.
              Recomendamos que reveja esta página regularmente para se manter
              informado sobre como protegemos os seus dados.
            </p>
            <p>
              <strong>9. Contacto</strong>
            </p>
            <p>
              Se tiver alguma questão ou preocupação relativamente ao tratamento
              dos seus dados pessoais, entre em contacto connosco através de
              [endereço de e-mail ou número de telefone].
            </p>
            <p>
              <strong>
                Ao clicar em "Aceito o Tratamento dos Dados e a Política de
                Privacidade", você concorda com os termos acima descritos.
              </strong>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
