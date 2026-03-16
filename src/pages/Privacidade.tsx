import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Privacidade = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Legal" title="Política de Privacidade" subtitle="Somos radicalmente transparentes sobre como tratamos seus dados. Leia com calma — é curta e direta." date="Última atualização: março de 2026" />
      <div className="prose">
        <div className="highlight-box">
          <p>📌 <strong>Resumo executivo:</strong> o MeetScribe processa transcrições localmente no seu navegador. Seus dados de reunião <strong>nunca são enviados para nossos servidores</strong>. A única comunicação externa é com a API de IA que você mesmo configurou (Groq ou Gemini), usando sua própria chave de API.</p>
        </div>

        <h2>1. Quem somos</h2>
        <p>O MeetScribe é uma extensão de navegador (Chrome e Edge) desenvolvida e mantida pela equipe MeetScribe. Para dúvidas sobre privacidade, abra uma <a href="https://github.com/mazinhoww-web/Extensions" target="_blank" rel="noopener noreferrer">issue no GitHub</a>.</p>

        <h2>2. Dados que coletamos — e o que não coletamos</h2>
        <h3>O que processamos localmente (nunca sai do seu navegador)</h3>
        <ul>
          <li>Legendas capturadas das reuniões do Google Meet e Microsoft Teams</li>
          <li>Nomes de participantes identificados pelo próprio Meet/Teams</li>
          <li>Transcrição bruta e ata gerada pela IA</li>
          <li>Sua chave de API (Groq ou Gemini) — armazenada no <code>chrome.storage.local</code>, nunca transmitida a nós</li>
          <li>Preferências de idioma e configurações do usuário</li>
        </ul>
        <h3>O que não coletamos</h3>
        <ul>
          <li>Conteúdo de áudio ou vídeo das reuniões</li>
          <li>Metadados das reuniões (título, URL, participantes) em nossos servidores</li>
          <li>Informações pessoais identificáveis além do que o usuário fornece voluntariamente</li>
          <li>Dados de navegação, histórico ou cookies de outras abas</li>
          <li>Dados analíticos ou telemetria de uso</li>
        </ul>

        <h2>3. Como seus dados são usados</h2>
        <p>O conteúdo transcrito da sua reunião é enviado <strong>diretamente do seu navegador</strong> para a API de IA que você configurou (Groq ou Gemini) para gerar o resumo e a ata. Esse envio ocorre sob os termos de privacidade do respectivo provedor:</p>
        <ul>
          <li><a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Política de Privacidade da Groq</a></li>
          <li><a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer">Termos de uso da API Gemini (Google)</a></li>
        </ul>
        <p>Não temos acesso ao conteúdo transmitido entre seu navegador e esses provedores.</p>

        <h2>4. Armazenamento de dados</h2>
        <p>Todas as configurações e dados gerados pelo MeetScribe são armazenados exclusivamente no <strong>armazenamento local do seu navegador</strong> (<code>chrome.storage.local</code>). Esses dados:</p>
        <ul>
          <li>Permanecem no seu dispositivo</li>
          <li>Podem ser apagados a qualquer momento desinstalando a extensão ou limpando os dados do navegador</li>
          <li>Não são sincronizados com contas de nuvem (como Chrome Sync) sem ação explícita sua</li>
        </ul>

        <h2>5. Permissões da extensão</h2>
        <p>O MeetScribe solicita as seguintes permissões no navegador e as utiliza exclusivamente para as finalidades descritas:</p>
        <table>
          <thead><tr><th>Permissão</th><th>Finalidade</th></tr></thead>
          <tbody>
            <tr><td><code>activeTab</code></td><td>Acessar a aba ativa da reunião para capturar legendas</td></tr>
            <tr><td><code>scripting</code></td><td>Injetar o script de captura de legendas na página do Meet/Teams</td></tr>
            <tr><td><code>storage</code></td><td>Armazenar configurações e transcrições localmente</td></tr>
            <tr><td><code>host_permissions</code> (meet.google.com, teams.microsoft.com)</td><td>Habilitar a captura de legendas somente nessas plataformas</td></tr>
          </tbody>
        </table>

        <h2>6. Compartilhamento de dados</h2>
        <p>Não vendemos, alugamos nem compartilhamos seus dados com terceiros, exceto:</p>
        <ul>
          <li>Com o provedor de IA que você escolheu (Groq ou Gemini), conforme descrito na seção 3</li>
          <li>Quando exigido por lei ou ordem judicial válida</li>
        </ul>

        <h2>7. Retenção e exclusão</h2>
        <p>Como não armazenamos dados em servidores próprios, a retenção é controlada inteiramente por você. Para excluir todos os dados do MeetScribe:</p>
        <ol>
          <li>Acesse as configurações da extensão</li>
          <li>Clique em "Limpar todos os dados"</li>
          <li>Ou desinstale a extensão — todos os dados locais são removidos automaticamente</li>
        </ol>

        <h2>8. Crianças</h2>
        <p>O MeetScribe não é direcionado a menores de 18 anos. Não coletamos conscientemente dados de crianças.</p>

        <h2>9. Alterações nesta política</h2>
        <p>Quando houver alterações relevantes nesta política, notificaremos através do changelog da extensão e desta página. A data de última atualização é mantida no topo deste documento.</p>

        <h2>10. Contato</h2>
        <p>Para exercer seus direitos de titular de dados ou tirar dúvidas sobre privacidade, abra uma <a href="https://github.com/mazinhoww-web/Extensions" target="_blank" rel="noopener noreferrer">issue no GitHub do projeto</a>.</p>

        <p>Veja também: <Link to="/lgpd">Conformidade com a LGPD</Link> · <Link to="/seguranca">Segurança</Link></p>
      </div>
    </div>
  );
};

export default Privacidade;
