import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Changelog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Changelog" title="O que há de novo" subtitle="Todas as novidades, melhorias e correções do MeetScribe — em ordem cronológica inversa." />

      {/* v1.0.1 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.85rem] font-bold" style={{ background: 'hsl(var(--ms-success) / 0.12)', border: '1px solid hsl(var(--ms-success) / 0.3)', color: '#34D399' }}>v1.0.1 — atual</span>
          <span className="text-[0.8rem] text-ms-fg-subtle">Março 2026</span>
        </div>
        <h2 className="text-[1.4rem] font-extrabold tracking-tight mb-4">Estabilidade e melhorias de captura</h2>

        <div className="my-4">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5" style={{ background: 'rgba(251,146,60,0.15)', color: '#FB923C' }}>Correções</span>
          <ul className="flex flex-col gap-2">
            {[
              "Corrigido bug que pausava a transcrição ao minimizar a aba da reunião no Chrome",
              "Corrigido loop de reconexão após perda momentânea de conexão",
              "Resolvido problema de dessincronismo de legendas em conexões com latência >200ms",
            ].map(item => (
              <li key={item} className="flex gap-2.5 items-start text-[0.875rem] text-ms-fg-muted">
                <span className="text-ms-accent-neon font-bold flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5" style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA' }}>Melhorias</span>
          <ul className="flex flex-col gap-2">
            {[
              "Algoritmo de diarização de falantes refinado para salas com mais de 6 participantes",
              "Redução de 30% no uso de memória durante reuniões longas (+90 min)",
              "Mensagem de erro mais clara quando a API key está expirada ou inválida",
            ].map(item => (
              <li key={item} className="flex gap-2.5 items-start text-[0.875rem] text-ms-fg-muted">
                <span className="text-ms-accent-neon font-bold flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-none my-10" style={{ borderTop: '1px solid hsl(var(--ms-border))' }} />

      {/* v1.0.0 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.85rem] font-bold" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))', color: 'hsl(var(--ms-fg-muted))' }}>v1.0.0</span>
          <span className="text-[0.8rem] text-ms-fg-subtle">Março 2026 — Lançamento do Beta</span>
        </div>
        <h2 className="text-[1.4rem] font-extrabold tracking-tight mb-1">Lançamento do MeetScribe</h2>
        <p className="text-[0.9rem] text-ms-fg-muted mb-5">Primeira versão pública do MeetScribe. Extensão para Chrome e Edge que transcreve reuniões do Google Meet e Microsoft Teams em tempo real, com geração automática de ata via IA.</p>

        <div className="my-4">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>Novo</span>
          <ul className="flex flex-col gap-2">
            {[
              "Transcrição em tempo real via captura de legendas do Meet e Teams",
              "Identificação automática de múltiplos falantes por nome",
              "Modo Híbrido: captura simultânea de participantes presenciais (microfone) e remotos (legendas)",
              "Geração de ata com IA ao fim da reunião — resumo, decisões e próximos passos",
              "Exportação em 5 formatos: Markdown, DOCX, PDF, TXT e JSON",
              "Suporte a API Groq (gratuito, sem limite diário) como provedor principal de IA",
              "Suporte a API Gemini (Google) como provedor alternativo",
              "Suporte a Português Brasileiro como idioma de primeira classe",
              "Página de configurações para gerenciar API key, idioma e preferências",
              "Popup com status da transcrição e acesso rápido às ações",
            ].map(item => (
              <li key={item} className="flex gap-2.5 items-start text-[0.875rem] text-ms-fg-muted">
                <span className="text-ms-accent-neon font-bold flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-[var(--ms-radius)] p-6 mt-12" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
        <p className="text-[0.875rem] text-ms-fg-muted m-0">
          <strong className="text-ms-fg">Quer sugerir uma melhoria?</strong><br />
          Veja o <Link to="/#roadmap" className="text-ms-accent-neon">Roadmap público</Link> e vote nas features que mais importam para você.
        </p>
      </div>
    </div>
  );
};

export default Changelog;
