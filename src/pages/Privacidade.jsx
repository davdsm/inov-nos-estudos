import { Link } from 'react-router-dom'
import { LegalPage } from '../components/layout/LegalPage'
import { SeoHead } from '../seo/SeoHead'

export default function Privacidade() {
  return (
    <>
    <SeoHead
      title="Política de Privacidade"
      description="Política de Privacidade da Inov@ nos Estudos — tratamento de dados pessoais nos termos do RGPD e da Lei n.º 58/2019."
      path="/privacidade"
    />
    <LegalPage
      eyebrow="Documentos legais"
      title="Política de Privacidade"
      updated="3 de outubro de 2026"
    >
      <p>
        A <strong>Inov@ nos Estudos</strong> («Responsável pelo tratamento») respeita a sua
        privacidade e trata os dados pessoais em conformidade com o Regulamento (UE) 2016/679
        («RGPD»), a Lei n.º 58/2019, de 8 de agosto, e demais legislação portuguesa aplicável à
        proteção de dados.
      </p>
      <p>
        Esta Política explica que dados recolhemos através do website, para que finalidades, com
        que bases legais, durante quanto tempo e quais os seus direitos.
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>
        <strong>Inov@ nos Estudos</strong>
        <br />
        Via Engenheiro Belmiro Mendes de Azevedo 311, Gemunde, Maia, Portugal
        <br />
        Telefone / WhatsApp: 914 829 000
        <br />
        Para exercer direitos ou colocar questões de privacidade, contacte-nos pelos números
        acima ou presencialmente na morada indicada.
      </p>

      <h2>2. Âmbito</h2>
      <p>
        Aplica-se ao tratamento de dados pessoais efetuado através deste website, incluindo o
        formulário de pedido de aula experimental e os contactos telefónicos / WhatsApp
        iniciados a partir do site. Não se aplica a websites de terceiros para os quais
        existam ligações externas.
      </p>

      <h2>3. Dados que podemos tratar</h2>
      <p>Consoante a interação, podemos tratar:</p>
      <ul>
        <li>
          <strong>Dados de contacto do encarregado de educação / solicitante:</strong> nome e
          número de telefone;
        </li>
        <li>
          <strong>Dados relativos ao aluno (menor):</strong> ano de escolaridade e disciplina /
          tipo de apoio pretendido;
        </li>
        <li>
          <strong>Dados de comunicação:</strong> conteúdo das mensagens ou conversas necessárias
          para marcar e prestar a aula experimental ou responder ao pedido;
        </li>
        <li>
          <strong>Dados técnicos mínimos:</strong> registos de servidor ou métricas agregadas
          eventualmente geradas pela hospedagem do site (endereço IP, data/hora, páginas
          acedidas), quando aplicável.
        </li>
      </ul>
      <p>
        Não pedimos dados de saúde, dados biométricos nem outras categorias especiais de dados
        através deste formulário.
      </p>

      <h2>4. Finalidades e bases legais</h2>
      <table>
        <thead>
          <tr>
            <th>Finalidade</th>
            <th>Base legal (art. 6.º RGPD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responder a pedidos de contacto e marcar aula experimental</td>
            <td>
              Medidas pré-contratuais a pedido do titular (art. 6.º, n.º 1, al. b)) e/ou
              interesses legítimos em gerir contactos comerciais (art. 6.º, n.º 1, al. f)),
              equilibrados com os seus direitos
            </td>
          </tr>
          <tr>
            <td>Gestão da relação comercial, se avançar para serviços</td>
            <td>Execução de contrato ou diligências pré-contratuais (art. 6.º, n.º 1, al. b))</td>
          </tr>
          <tr>
            <td>Cumprimento de obrigações legais (ex.: faturação, se aplicável)</td>
            <td>Obrigação legal (art. 6.º, n.º 1, al. c))</td>
          </tr>
          <tr>
            <td>Prova de aceitação dos Termos e registo do pedido</td>
            <td>
              Interesse legítimo em documentar o consentimento/aceitação e prevenir abuso (art.
              6.º, n.º 1, al. f))
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Quando a lei exigir consentimento específico (por exemplo, para comunicações de
        marketing não solicitadas), esse consentimento será pedido de forma clara e poderá ser
        retirado a qualquer momento, sem afetar a licitude do tratamento anterior.
      </p>

      <h2>5. Dados de menores</h2>
      <p>
        Os nossos serviços destinam-se a alunos do 1.º ao 12.º ano. O formulário deve ser
        preenchido pelo encarregado de educação ou por quem tenha legitimidade para solicitar o
        contacto em nome do menor. Tratamos os dados do menor apenas na medida necessária para
        avaliar o pedido e organizar o apoio pedagógico, com as salvaguardas previstas no RGPD
        (incluindo o art. 8.º, quando aplicável ao contexto do consentimento digital).
      </p>

      <h2>6. Destinatários</h2>
      <p>Os dados podem ser acedidos por:</p>
      <ul>
        <li>as professoras / responsáveis da Inov@ nos Estudos, para responder ao pedido;</li>
        <li>
          prestadores de serviços que atuem como subcontratantes (por exemplo, alojamento do
          website, ferramentas de comunicação), quando estritamente necessários, mediante
          obrigações contratuais de confidencialidade e segurança;
        </li>
        <li>autoridades públicas, quando a lei o imponha.</li>
      </ul>
      <p>Não vendemos dados pessoais a terceiros.</p>

      <h2>7. Transferências internacionais</h2>
      <p>
        Em regra, os dados são tratados no Espaço Económico Europeu. Se algum prestador
        implicar transferência para fora do EEE, serão aplicadas as garantias adequadas
        previstas no RGPD (por exemplo, cláusulas-tipo da Comissão Europeia), salvo decisão de
        adequação aplicável.
      </p>

      <h2>8. Prazos de conservação</h2>
      <ul>
        <li>
          <strong>Pedidos de aula experimental sem seguimento comercial:</strong> até 12 meses
          após o último contacto, salvo se pedir a eliminação antes ou se existir obrigação
          legal de conservar por período diferente;
        </li>
        <li>
          <strong>Clientes / alunos com relação contratual:</strong> durante a vigência da
          relação e pelo período adicional exigido por lei (ex.: obrigações fiscais e
          contabilísticas);
        </li>
        <li>
          <strong>Prova de aceitação dos Termos:</strong> pelo tempo necessário para defesa de
          direitos, tipicamente alinhado com os prazos de prescrição aplicáveis.
        </li>
      </ul>

      <h2>9. Os seus direitos</h2>
      <p>Nos termos do RGPD, pode solicitar:</p>
      <ul>
        <li>acesso aos dados;</li>
        <li>retificação de dados inexatos ou incompletos;</li>
        <li>apagamento («direito a ser esquecido»), nos casos previstos;</li>
        <li>limitação do tratamento;</li>
        <li>portabilidade, quando aplicável;</li>
        <li>oposição a tratamentos baseados em interesse legítimo;</li>
        <li>retirada do consentimento, quando o tratamento se baseie nele.</li>
      </ul>
      <p>
        Para exercer estes direitos, contacte-nos pelos meios indicados na secção 1. Pode
        ainda apresentar reclamação à autoridade de controlo portuguesa — a{' '}
        <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> (
        <a href="https://www.cnpd.pt" target="_blank" rel="noreferrer">
          www.cnpd.pt
        </a>
        ).
      </p>

      <h2>10. Segurança</h2>
      <p>
        Aplicamos medidas técnicas e organizativas adequadas para proteger os dados contra
        acesso não autorizado, perda, alteração ou divulgação indevida, tendo em conta o estado
        da técnica e a natureza dos dados tratados. Nenhum sistema é absolutamente seguro; se
        tomar conhecimento de um incidente que afete os seus dados, contacte-nos de imediato.
      </p>

      <h2>11. Cookies e tecnologias semelhantes</h2>
      <p>
        Este website pode utilizar cookies ou armazenamento local estritamente necessários ao
        funcionamento técnico (por exemplo, preferências de sessão). Não utilizamos, neste
        momento, cookies de publicidade de terceiros. Se no futuro forem introduzidos cookies
        não essenciais, será pedida a sua autorização prévia, nos termos da legislação
        aplicável às comunicações eletrónicas.
      </p>

      <h2>12. Formulário do website</h2>
      <p>
        O envio do formulário de aula experimental implica a aceitação dos{' '}
        <Link to="/termos">Termos e Condições</Link> e o conhecimento desta Política. Os campos
        assinalados como obrigatórios são necessários para podermos contactá-lo; sem eles, o
        pedido não pode ser processado.
      </p>
      <h2>13. Alterações</h2>
      <p>
        Podemos atualizar esta Política para refletir alterações legais ou operacionais. A
        versão vigente é a publicada nesta página, com a data de atualização no topo. Em
        alterações relevantes, poderemos destacar a atualização no site.
      </p>
    </LegalPage>
    </>
  )
}
