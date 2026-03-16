import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lock, Shield, Code, Radio, MessageSquare, Home } from "lucide-react";
import PageHeader from "../components/PageHeader";

const securityCards = [
  { icon: Lock, title: "Armazenamento local exclusivo", desc: "Transcrições, configurações e chave de API ficam no chrome.storage.local do seu navegador. Nunca são enviados para nossos servidores — porque não temos servidores de coleta de dados." },
  { icon: Shield, title: "API key protegida", desc: "Sua chave de API (Groq ou Gemini) é armazenada criptografada no storage local do Chrome. Ela nunca trafega por nossos sistemas. O código que faz essa chamada é público e auditável no GitHub." },
  { icon: Code, title: "Código 100% open source", desc: "Todo o código da extensão é público no GitHub. Você pode auditar cada linha, verificar o que é enviado e para onde. Transparência radical, sem código ofuscado ou closed-source." },
  { icon: Radio, title: "Permissões mínimas", desc: "A extensão solicita apenas as permissões estritamente necessárias: acesso às abas do Meet e Teams para capturar legendas, e storage local. Sem acesso a outras abas, histórico ou dados do sistema." },
  { icon: MessageSquare, title: "Sem telemetria ou analytics", desc: "Não coletamos dados de uso, telemetria, eventos de clique ou qualquer forma de analytics. Não sabemos quantas vezes você usou a extensão, nem o que transcreveu." },
  { icon: Home, title: "Manifest V3", desc: "Construída com Manifest V3, o padrão mais seguro e atual para extensões Chrome. Sem background pages persistentes, sem eval(), com Service Workers isolados por escopo." },
];

const Seguranca = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Segurança" title="Segurança by design" subtitle="Desde o primeiro commit, segurança e privacidade foram requisitos não negociáveis — não funcionalidades adicionadas depois." />

      {/* Security hero */}
      <div className="text-center rounded-[var(--ms-radius)] p-10 my-12" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent) / 0.1), hsl(var(--ms-success) / 0.06))', border: '1px solid hsl(var(--ms-accent-neon) / 0.2)' }}>
        <span className="text-5xl block mb-4">🛡️</span>
        <h2 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-extrabold tracking-tight mb-3 gradient-text">Seus dados nunca saem do seu navegador</h2>
        <p className="text-[0.925rem] text-ms-fg-muted leading-relaxed max-w-[540px] mx-auto">O MeetScribe foi arquitetado para processar tudo localmente. Não temos servidores que recebam, armazenem ou processem o conteúdo das suas reuniões. Zero.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {securityCards.map(card => (
          <div key={card.title} className="rounded-[var(--ms-radius)] p-6 transition-colors" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-3.5" style={{ background: 'hsl(var(--ms-accent) / 0.12)', color: 'hsl(var(--ms-accent-neon))' }}>
              <card.icon size={20} />
            </div>
            <h3 className="text-[0.95rem] font-bold mb-2">{card.title}</h3>
            <p className="text-[0.825rem] text-ms-fg-muted leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose">
        <h2>Fluxo de dados detalhado</h2>
        <p>Entenda exatamente o que acontece quando você usa o MeetScribe:</p>
        <ol>
          <li><strong>Captura de legendas:</strong> o content script lê as legendas já exibidas na interface do Meet/Teams — o mesmo texto que você vê na tela. Nenhum áudio é capturado.</li>
          <li><strong>Acumulação local:</strong> as legendas são acumuladas em memória (e opcionalmente salvas no storage local) durante a reunião.</li>
          <li><strong>Geração da ata:</strong> ao encerrar a transcrição, o texto acumulado é enviado <strong>diretamente do seu navegador</strong> para a API do provedor de IA que você configurou (Groq ou Gemini), usando sua API key.</li>
          <li><strong>Resultado:</strong> a ata gerada retorna da API e é exibida no popup da extensão, podendo ser exportada nos formatos que você escolher.</li>
        </ol>
        <p>Em nenhum momento esse fluxo passa por servidores intermediários do MeetScribe.</p>

        <h2>Responsabilidade divulgação de vulnerabilidades</h2>
        <div className="highlight-box">
          <p>🔐 <strong>Reporte de segurança:</strong> abra uma <a href="https://github.com/mazinhoww-web/Extensions/issues" target="_blank" rel="noopener noreferrer">issue privada no GitHub</a> com o label <code>security</code>. Não publique detalhes de vulnerabilidades publicamente antes de nossa confirmação de correção.</p>
        </div>

        <h2>Boas práticas recomendadas</h2>
        <ul>
          <li>Mantenha a extensão sempre atualizada para receber correções de segurança</li>
          <li>Use uma API key específica para o MeetScribe — não reutilize chaves de outros projetos</li>
          <li>Revogue e regenere sua API key periodicamente no painel do Groq/Gemini</li>
          <li>Em ambientes corporativos sensíveis, consulte sua equipe de segurança antes de usar qualquer ferramenta de transcrição</li>
          <li>Obtenha sempre o consentimento dos participantes antes de transcrever reuniões</li>
        </ul>

        <p>Veja também: <Link to="/privacidade">Política de Privacidade</Link> · <Link to="/lgpd">Conformidade com a LGPD</Link></p>
      </div>
    </div>
  );
};

export default Seguranca;
