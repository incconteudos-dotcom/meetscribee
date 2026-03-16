import { useState } from "react";
import { ArrowRight, Radio, Check, Plus } from "lucide-react";

type RoadmapItem = {
  title: string;
  desc: string;
  status: "done" | "build" | "next";
  cat: "feature" | "melhoria" | "bug" | "integracao";
};

const ROADMAP: RoadmapItem[] = [
  { title: "Transcrição em tempo real", desc: "Captura legendas do Meet e Teams com latência abaixo de 3s", status: "done", cat: "feature" },
  { title: "Identificação de múltiplos falantes", desc: "Separa automaticamente as falas por participante na transcrição", status: "done", cat: "feature" },
  { title: "Modo Híbrido: sala + remotos", desc: "Microfone capta presenciais; legendas captam remotos — combina tudo", status: "done", cat: "feature" },
  { title: "Exportação em 5 formatos", desc: "Gera ata em Markdown, DOCX, PDF, TXT e JSON com um clique", status: "done", cat: "feature" },
  { title: "Suporte ao Português Brasileiro", desc: "Transcrição e ata otimizadas para PT-BR com sotaques e gírias locais", status: "done", cat: "melhoria" },
  { title: "Integração com API Groq", desc: "Groq como provedor de IA principal — gratuito e sem limite diário", status: "done", cat: "integracao" },
  { title: "Integração com API Gemini", desc: "Gemini como opção alternativa (limite de 1.500 req/dia)", status: "done", cat: "integracao" },
  { title: "Geração automática de ata com IA", desc: "Resumo executivo, decisões e próximos passos ao fim de cada reunião", status: "done", cat: "feature" },
  { title: "Suporte a Zoom", desc: "Captura de legendas ao vivo diretamente no Zoom Web", status: "build", cat: "feature" },
  { title: "Redesign do popup", desc: "Nova interface com histórico de reuniões e ações rápidas", status: "build", cat: "melhoria" },
  { title: "Onboarding interativo", desc: "Tour guiado para novos usuários configurarem em menos de 2 minutos", status: "build", cat: "melhoria" },
  { title: "Templates customizáveis de ata", desc: "Escolha ou crie templates de ata por tipo de reunião (1:1, Sprint...)", status: "build", cat: "feature" },
  { title: "Dark/Light mode no popup", desc: "Alterne entre tema escuro e claro nas configurações da extensão", status: "build", cat: "melhoria" },
  { title: "Resumo por email automático", desc: "Receba a ata no email logo após o fim da reunião", status: "build", cat: "feature" },
  { title: "Indicador de qualidade de áudio", desc: "Exibe em tempo real se o microfone está captando bem os presenciais", status: "build", cat: "melhoria" },
  { title: "Progress bar na geração da ata", desc: "Mostra progresso visual enquanto a IA processa a transcrição", status: "build", cat: "melhoria" },
  { title: "Correção de captura em abas inativas", desc: "Fix no Chrome throttling que pausava captura ao trocar de aba", status: "build", cat: "bug" },
  { title: "Melhoria em salas com eco", desc: "Algoritmo de diarização mais robusto para ambientes com reverberação", status: "build", cat: "bug" },
  { title: "Integração com Notion", desc: "Exportação direta para uma página do Notion após gerar a ata", status: "build", cat: "integracao" },
  { title: "Atalhos de teclado configuráveis", desc: "Defina seus próprios atalhos para iniciar/parar transcrição", status: "build", cat: "melhoria" },
  { title: "App mobile iOS", desc: "Extensão nativa para Safari iOS com suporte ao Meet mobile", status: "next", cat: "feature" },
  { title: "App mobile Android", desc: "Extensão para Chrome Android com captura de reuniões mobile", status: "next", cat: "feature" },
  { title: "Dashboard web", desc: "Acesse e gerencie todas as suas atas em qualquer dispositivo", status: "next", cat: "feature" },
  { title: "Sincronização entre dispositivos", desc: "Atas e configurações sincronizadas via conta na nuvem", status: "next", cat: "feature" },
  { title: "Integração com Slack", desc: "Envio automático da ata para um canal do Slack ao fim da reunião", status: "next", cat: "integracao" },
  { title: "Integração com Jira", desc: "Cria issues/tasks no Jira a partir das ações identificadas na ata", status: "next", cat: "integracao" },
  { title: "Integração com Trello", desc: "Cria cards no Trello com os action items extraídos da reunião", status: "next", cat: "integracao" },
  { title: "Integração com Asana", desc: "Sincroniza tarefas da ata diretamente para projetos do Asana", status: "next", cat: "integracao" },
  { title: "Integração com Monday.com", desc: "Cria items no Monday com responsáveis e prazos da reunião", status: "next", cat: "integracao" },
  { title: "Integração com Google Calendar", desc: "Inicia transcrição automaticamente ao detectar evento no calendário", status: "next", cat: "integracao" },
  { title: "Suporte a OpenAI GPT", desc: "Use sua chave OpenAI como provedor de IA alternativo", status: "next", cat: "integracao" },
  { title: "Suporte a Claude / Anthropic", desc: "Integração com API da Anthropic para geração de atas", status: "next", cat: "integracao" },
  { title: "Suporte a Ollama (modelos locais)", desc: "Rode a IA 100% local sem enviar dados para nenhuma API externa", status: "next", cat: "integracao" },
  { title: "Exportação para Google Docs", desc: "Cria um Google Doc formatado diretamente da ata gerada", status: "next", cat: "feature" },
  { title: "Exportação para Confluence", desc: "Publica ata no Confluence com formatação de página adequada", status: "next", cat: "feature" },
  { title: "Timestamps clicáveis na transcrição", desc: "Clique no trecho e pule para aquele momento no vídeo gravado", status: "next", cat: "feature" },
  { title: "Busca semântica nas atas", desc: "Pesquise por conceito ou contexto em todas as reuniões anteriores", status: "next", cat: "feature" },
  { title: "Modo live share", desc: "Compartilhe a transcrição em tempo real com participantes remotos", status: "next", cat: "feature" },
  { title: "Análise de engajamento", desc: "Veja quanto tempo cada participante falou e o índice de participação", status: "next", cat: "feature" },
  { title: "Detecção de sentimento", desc: "Identifica se o tom da reunião foi positivo, neutro ou tenso", status: "next", cat: "feature" },
  { title: "Fix: bug de reconexão", desc: "Corrigir loop de reconexão após queda de internet durante gravação", status: "next", cat: "bug" },
  { title: "API pública para desenvolvedores", desc: "Acesse transcrições e atas via REST API com autenticação por token", status: "next", cat: "feature" },
  { title: "Suporte a webhooks", desc: "Dispare eventos customizados ao fim de cada reunião transcrita", status: "next", cat: "feature" },
  { title: "Modo empresa", desc: "Gestão de times, permissões por papel e relatórios consolidados", status: "next", cat: "feature" },
  { title: "Interface em inglês e espanhol", desc: "Internacionalização completa da extensão e das atas geradas", status: "next", cat: "melhoria" },
  { title: "Teams desktop (app nativo)", desc: "Suporte ao Microsoft Teams versão aplicativo desktop instalado", status: "next", cat: "feature" },
  { title: "Fix: sincronização de legendas", desc: "Corrigir dessincronismo de legendas em conexões com alta latência", status: "next", cat: "bug" },
];

const catLabel: Record<string, string> = { feature: "Feature", melhoria: "Melhoria", bug: "Bug Fix", integracao: "Integração" };
const catStyles: Record<string, { bg: string; color: string }> = {
  feature: { bg: "rgba(167,139,250,0.15)", color: "#a78bfa" },
  melhoria: { bg: "rgba(96,165,250,0.15)", color: "#60A5FA" },
  bug: { bg: "rgba(251,146,60,0.15)", color: "#FB923C" },
  integracao: { bg: "rgba(52,211,153,0.15)", color: "#34D399" },
};

const filterDots: Record<string, string> = {
  all: "hsl(var(--ms-fg-muted))",
  feature: "#a78bfa",
  melhoria: "#60A5FA",
  bug: "#FB923C",
  integracao: "#34D399",
};

const RoadmapSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered = ROADMAP.filter(item => filter === "all" || item.cat === filter);
  const cols = {
    next: filtered.filter(i => i.status === "next"),
    build: filtered.filter(i => i.status === "build"),
    done: filtered.filter(i => i.status === "done"),
  };

  return (
    <section className="py-[120px] relative z-[1]" id="roadmap">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{ background: 'hsl(var(--ms-accent) / 0.12)', border: '1px solid hsl(var(--ms-accent-neon) / 0.25)', color: 'hsl(var(--ms-accent-neon))' }}>Roadmap</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight reveal">O que vem por aí</h2>
          <p className="text-base text-ms-fg-muted max-w-[500px] mx-auto leading-relaxed reveal">Transparência total sobre o que estamos construindo. Vote nas features que mais importam para você.</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-10 reveal">
          {[
            { key: "all", label: "Todos" },
            { key: "feature", label: "Features" },
            { key: "melhoria", label: "Melhorias" },
            { key: "bug", label: "Bug Fix" },
            { key: "integracao", label: "Integrações" },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold cursor-pointer transition-all ${filter === f.key ? 'text-white' : 'text-ms-fg-muted hover:text-ms-fg'}`}
              style={{
                background: filter === f.key ? 'hsl(var(--ms-accent))' : 'hsl(var(--ms-bg-card))',
                border: `1px solid ${filter === f.key ? 'hsl(var(--ms-accent))' : 'hsl(var(--ms-border))'}`,
                boxShadow: filter === f.key ? '0 0 16px hsl(var(--ms-accent-glow))' : 'none',
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: filterDots[f.key] }} />
              {f.label}
            </button>
          ))}
        </div>

        {/* Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start reveal">
          {([
            { key: "next", label: "Próximos Passos", icon: <ArrowRight size={16} />, headerClass: "rm-next", items: cols.next, headerBg: "rgba(234,179,8,0.12)", headerBorder: "rgba(234,179,8,0.2)", headerColor: "#FDE047", countBg: "rgba(234,179,8,0.2)" },
            { key: "build", label: "Em Desenvolvimento", icon: <Radio size={16} />, headerClass: "rm-build", items: cols.build, headerBg: "rgba(59,130,246,0.12)", headerBorder: "rgba(59,130,246,0.2)", headerColor: "#60A5FA", countBg: "rgba(59,130,246,0.2)" },
            { key: "done", label: "Tudo Pronto!", icon: <Check size={16} />, headerClass: "rm-done", items: cols.done, headerBg: "rgba(16,185,129,0.12)", headerBorder: "rgba(16,185,129,0.2)", headerColor: "#34D399", countBg: "rgba(16,185,129,0.2)" },
          ] as const).map(col => (
            <div key={col.key}>
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-[var(--ms-radius)] mb-3 text-[0.9rem] font-bold" style={{ background: col.headerBg, border: `1px solid ${col.headerBorder}`, color: col.headerColor }}>
                {col.icon}
                {col.label}
                <span className="ml-auto text-[0.75rem] font-bold px-2 py-0.5 rounded-full" style={{ background: col.countBg, color: col.headerColor }}>{col.items.length}</span>
              </div>
              <div className="flex flex-col gap-2">
                {col.items.length === 0 && <p className="text-[0.85rem] text-ms-fg-subtle text-center py-6">Nenhum item nesta coluna.</p>}
                {col.items.map((item, i) => (
                  <div key={i} className="rounded-[var(--ms-radius-sm)] px-4 py-3.5 cursor-default transition-all hover:-translate-y-0.5" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-[0.875rem] font-bold leading-snug">{item.title}</div>
                      <span className="flex-shrink-0 text-[0.65rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap" style={{ background: catStyles[item.cat].bg, color: catStyles[item.cat].color }}>{catLabel[item.cat]}</span>
                    </div>
                    <div className="text-[0.78rem] text-ms-fg-muted leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Por quanto tempo o beta será gratuito?", a: "Ainda não definimos uma data de fim. Você receberá um aviso com pelo menos 30 dias de antecedência antes de qualquer mudança de preço. Quem participar do beta terá desconto especial vitalício." },
    { q: "Meus dados de reunião ficam seguros?", a: "Sim. Toda transcrição é criptografada em trânsito e em repouso (AES-256). Nunca vendemos ou compartilhamos seus dados com terceiros. O plano Enterprise oferece opção on-premise para máximo controle." },
    { q: "Com quais plataformas o MeetScribe funciona?", a: "Google Meet e Microsoft Teams (versão web). MeetScribe é uma extensão para Chrome e Edge — funciona em qualquer sistema operacional que rode esses navegadores. App mobile está no roadmap." },
    { q: "Preciso avisar os participantes que está gravando?", a: "Sim. Recomendamos fortemente informar os participantes. O MeetScribe exibe um aviso visual na tela quando ativo. Em algumas jurisdições, o consentimento é legalmente obrigatório." },
    { q: "Funciona em português brasileiro?", a: "Sim! Português Brasileiro é um dos idiomas de primeira classe do MeetScribe. Suportamos ainda inglês, espanhol, francês, alemão, italiano, japonês, coreano, mandarim e mais." },
  ];

  return (
    <section className="py-20 pb-[120px] relative z-[1]" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{ background: 'hsl(var(--ms-accent) / 0.12)', border: '1px solid hsl(var(--ms-accent-neon) / 0.25)', color: 'hsl(var(--ms-accent-neon))' }}>FAQ</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight reveal">Perguntas frequentes</h2>
        </div>
        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal" style={{ borderBottom: '1px solid hsl(var(--ms-border))' }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full bg-transparent text-left py-5 flex items-center justify-between gap-4 text-base font-semibold text-ms-fg cursor-pointer transition-colors hover:text-ms-accent-neon"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <Plus size={20} className={`flex-shrink-0 text-ms-fg-muted transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-ms-accent-neon' : ''}`} style={{ transitionTimingFunction: 'var(--ms-easing)' }} />
              </button>
              <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: openIndex === i ? 300 : 0, paddingBottom: openIndex === i ? 20 : 0, transitionTimingFunction: 'var(--ms-easing)' }}>
                <p className="text-[0.9rem] text-ms-fg-muted leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RoadmapSection, FAQSection };
