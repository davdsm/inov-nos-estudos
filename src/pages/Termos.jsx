import { Link } from 'react-router-dom'
import { LegalPage } from '../components/layout/LegalPage'
import { SeoHead } from '../seo/SeoHead'

export default function Termos() {
  return (
    <>
    <SeoHead
      title="Termos e Condições"
      description="Termos e Condições de utilização do website e dos pedidos de aula experimental da Inov@ nos Estudos, em Gemunde (Maia)."
      path="/termos"
    />
    <LegalPage
      eyebrow="Documentos legais"
      title="Termos e Condições"
      updated="3 de outubro de 2026"
    >
      <p>
        Estes Termos e Condições regulam o acesso e a utilização do website da{' '}
        <strong>Inov@ nos Estudos</strong> («nós», «nosso» ou «Centro»), bem como os pedidos de
        informação e de aula experimental feitos através do site. Ao utilizar este website,
        declara que leu e aceita estes Termos. Se não concordar, não utilize o site nem o
        formulário de contacto.
      </p>

      <h2>1. Identificação</h2>
      <p>
        <strong>Inov@ nos Estudos</strong>
        <br />
        Via Engenheiro Belmiro Mendes de Azevedo 311, Gemunde, Maia, Portugal
        <br />
        Telefone / WhatsApp: 914 829 000
        <br />
        Instagram:{' '}
        <a href="https://www.instagram.com/inovanosestudos" target="_blank" rel="noreferrer">
          @inovanosestudos
        </a>
      </p>

      <h2>2. Objeto do website</h2>
      <p>
        Este website tem caráter informativo e comercial: apresenta os serviços de apoio ao
        estudo, ajuda nos trabalhos de casa e preparação para testes e exames nacionais (do 1.º
        ao 12.º ano), bem como permite solicitar contacto para uma aula experimental. Os
        conteúdos não constituem proposta vinculativa até confirmação expressa por telefone,
        WhatsApp ou outro meio acordado.
      </p>

      <h2>3. Serviços e aula experimental</h2>
      <ul>
        <li>
          A aula experimental e a eventual prestação de serviços estão sujeitas a disponibilidade
          de horários e à confirmação das professoras.
        </li>
        <li>
          Preços, horários e condições concretas de frequência são combinados na conversa
          inicial, não estando necessariamente publicados neste site.
        </li>
        <li>
          O pedido feito pelo formulário é um pedido de contacto; não garante vaga nem constitui
          matrícula.
        </li>
        <li>
          Podemos recusar ou remarcar pedidos quando não for possível assegurar o acompanhamento
          adequado.
        </li>
      </ul>

      <h2>4. Utilização do formulário e do site</h2>
      <p>Ao utilizar o site e, em especial, o formulário de aula experimental, compromete-se a:</p>
      <ul>
        <li>fornecer informações verdadeiras, atuais e completas;</li>
        <li>
          utilizar o site apenas para fins lícitos e relacionados com o interesse nos nossos
          serviços;
        </li>
        <li>
          não introduzir conteúdos ilícitos, ofensivos, spam ou que prejudiquem o funcionamento
          do site;
        </li>
        <li>
          ser o titular dos dados ou o representante legal do menor a que o pedido se refere.
        </li>
      </ul>

      <h2>5. Dados pessoais</h2>
      <p>
        O tratamento de dados pessoais decorrentes da utilização deste website e do formulário
        rege-se pela nossa{' '}
        <Link to="/privacidade">Política de Privacidade</Link>, elaborada nos termos do
        Regulamento (UE) 2016/679 (RGPD) e da Lei n.º 58/2019, de 8 de agosto. Ao submeter o
        formulário, declara ter lido essa política e aceitar estes Termos.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <p>
        Textos, imagens, logótipo, ilustrações, marcas e demais conteúdos deste website são
        protegidos por direitos de propriedade intelectual. É proibida a reprodução, distribuição
        ou utilização comercial sem autorização prévia por escrito, salvo o uso pessoal e
        necessário para consultar o site.
      </p>

      <h2>7. Ligações a terceiros</h2>
      <p>
        O site pode conter ligações para serviços de terceiros (por exemplo Instagram, WhatsApp
        ou Google Maps). Não controlamos esses serviços e não somos responsáveis pelos respetivos
        conteúdos, políticas ou disponibilidade.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        Envidamos esforços razoáveis para manter a informação atualizada e o site disponível,
        sem garantir ausência de erros, interrupções ou inexatidões. Na medida permitida pela lei
        portuguesa, não respondemos por danos indiretos resultantes da utilização ou
        impossibilidade de utilização do website, salvo dolo ou negligência grave.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos atualizar estes Termos a qualquer momento. A versão em vigor é a publicada nesta
        página, com indicação da data de atualização. A utilização continuada do site após a
        alteração implica aceitação da nova versão, quando aplicável.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes Termos regem-se pela lei portuguesa. Para a resolução de litígios emergentes da
        utilização deste website, é competente o foro da comarca da Maia, sem prejuízo das
        normas imperativas de proteção do consumidor, quando aplicáveis.
      </p>
      <p>
        Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de resolução
        alternativa de litígios de consumo. Lista disponível em{' '}
        <a href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer">
          www.consumidor.gov.pt
        </a>
        .
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para questões sobre estes Termos: 914 829 000, ou através dos canais
        indicados na secção de contactos do site.
      </p>
    </LegalPage>
    </>
  )
}
