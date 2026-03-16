import { Mic, CheckSquare, FileText, Users, Monitor, Share } from "lucide-react";

const DOWNLOAD_URL = "https://github.com/mazinhoww-web/Extensions/archive/refs/heads/claude/meeting-transcription-extension-46nZi.zip";

const features = [
  { icon: Mic, color: "fi-purple", title: "Transcrição em tempo real", desc: "Converte fala em texto com menos de 3 segundos de latência. Identificação automática de múltiplos falantes." },
  { icon: CheckSquare, color: "fi-blue", title: "Extração de tarefas", desc: "IA detecta automaticamente action items, responsáveis e prazos mencionados na conversa." },
  { icon: FileText, color: "fi-green", title: "Resumo com IA", desc: "Resumo executivo gerado automaticamente ao fim da reunião. Pontos-chave, decisões e próximos passos." },
  { icon: Users, color: "fi-orange", title: "Identificação de falantes", desc: "Detecta automaticamente quem está falando — identifica cada participante pelo nome e separa suas falas na transcrição." },
  { icon: Monitor, color: "fi-pink", title: "Modo Híbrido", desc: "Captura participantes presenciais (microfone) e remotos (Meet/Teams) simultaneamente, combinando tudo na ata final." },
  { icon: Share, color: "fi-cyan", title: "Exportação total", desc: "Exporte a ata em Markdown, DOCX, PDF, TXT ou JSON. Cole no Notion, Word, ou integre com outros sistemas." },
];

const iconBgs: Record<string, string> = {
  "fi-purple": "rgba(124,58,237,0.15)",
  "fi-blue": "rgba(59,130,246,0.15)",
  "fi-green": "rgba(16,185,129,0.15)",
  "fi-orange": "rgba(249,115,22,0.15)",
  "fi-pink": "rgba(236,72,153,0.15)",
  "fi-cyan": "rgba(6,182,212,0.15)",
};
const iconColors: Record<string, string> = {
  "fi-purple": "#a78bfa",
  "fi-blue": "#60A5FA",
  "fi-green": "#34D399",
  "fi-orange": "#FB923C",
  "fi-pink": "#F472B6",
  "fi-cyan": "#22D3EE",
};

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 relative z-[1]">
    {/* Badge */}
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold mb-7"
      style={{
        border: '1px solid hsl(var(--ms-accent-neon) / 0.3)',
        background: 'hsl(var(--ms-accent) / 0.12)',
        color: 'hsl(var(--ms-accent-neon))',
        animation: 'fadeInDown 0.6s var(--ms-easing) both',
      }}
    >
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: 'hsl(var(--ms-success))', boxShadow: '0 0 8px hsl(var(--ms-success))', animation: 'pulse-dot 2s ease-in-out infinite' }} />
      Beta Aberto · 100% Grátis agora
    </div>

    <h1
      className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight max-w-[820px] mb-6"
      style={{ animation: 'fadeInUp 0.7s var(--ms-easing) 0.1s both' }}
    >
      Reuniões que se<br />
      <span className="gradient-text">documentam sozinhas</span>
    </h1>

    <p
      className="text-[clamp(1rem,2vw,1.2rem)] text-ms-fg-muted max-w-[560px] mb-10 leading-relaxed"
      style={{ animation: 'fadeInUp 0.7s var(--ms-easing) 0.2s both' }}
    >
      MeetScribe transcreve, resume e extrai tarefas das suas reuniões em tempo real — com IA. Sem esforço manual, sem nada perdido.
    </p>

    <div
      className="flex items-center gap-4 flex-wrap justify-center"
      style={{ animation: 'fadeInUp 0.7s var(--ms-easing) 0.3s both' }}
    >
      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-7 py-3.5 rounded-[var(--ms-radius)] text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--ms-cta)), #EF4444)',
          boxShadow: '0 0 32px hsl(var(--ms-cta) / 0.35)',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Instalar no Chrome — grátis
      </a>
      <a
        href="#how"
        className="flex items-center gap-2 px-7 py-3.5 rounded-[var(--ms-radius)] text-base font-semibold text-ms-fg transition-all hover:-translate-y-px"
        style={{
          background: 'hsl(var(--ms-bg-card))',
          border: '1px solid hsl(var(--ms-border))',
        }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
        Ver demo
      </a>
    </div>

    <p className="mt-4 text-[0.8rem] text-ms-fg-subtle" style={{ animation: 'fadeInUp 0.7s var(--ms-easing) 0.4s both' }}>
      <span className="text-ms-success font-semibold">Grátis para sempre</span> durante o beta · Chrome &amp; Edge · Sem cartão de crédito
    </p>

    {/* Mockup */}
    <div className="relative mt-[72px] max-w-[900px] w-full hidden md:block" style={{ animation: 'fadeInUp 0.9s var(--ms-easing) 0.5s both' }} aria-hidden="true">
      <div className="absolute -inset-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(var(--ms-accent-glow)), transparent 70%)' }} />
      <div className="relative z-[1] rounded-[20px] overflow-hidden" style={{ background: 'hsl(var(--ms-bg-elevated))', border: '1px solid hsl(var(--ms-border))', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
        {/* Titlebar */}
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid hsl(var(--ms-border))', background: 'rgba(255,255,255,0.02)' }}>
          <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
          <span className="flex-1 text-center text-[0.8rem] text-ms-fg-subtle font-medium">MeetScribe — Reunião de Q2 · Planning</span>
        </div>
        {/* Body */}
        <div className="p-7 grid grid-cols-[1fr_300px] gap-5 min-h-[320px]">
          {/* Transcript */}
          <div className="rounded-[var(--ms-radius)] p-5 flex flex-col gap-3.5" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.78rem] font-semibold text-ms-fg-muted uppercase tracking-wider">Transcrição ao vivo</span>
              <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full" style={{ color: 'hsl(var(--ms-success))', background: 'hsl(var(--ms-success) / 0.12)' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'hsl(var(--ms-success))' }} />
                AO VIVO
              </span>
            </div>
            {/* Lines */}
            {[
              { av: "AU", color: "linear-gradient(135deg, #7C3AED, #5E6AD2)", name: "Aurimar · 09:02", text: <>Precisamos definir as <span className="px-1 rounded" style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }}>prioridades do Q2</span> e alinhar os entregáveis com o time de produto.</> },
              { av: "MA", color: "linear-gradient(135deg, #F97316, #EF4444)", name: "Marina · 09:04", text: <>Concordo. O <span className="px-1 rounded" style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }}>dashboard analytics</span> precisa estar pronto até o dia 30.</> },
              { av: "RO", color: "linear-gradient(135deg, #10B981, #3B82F6)", name: "Roberto · 09:06", text: <>Posso liderar o backend. Vou criar o <span className="px-1 rounded" style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }}>PRD até sexta</span>.<span className="inline-block w-0.5 h-[13px] ml-0.5 align-middle" style={{ background: '#a78bfa', animation: 'blink 1s ease-in-out infinite' }} /></> },
            ].map((line, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[0.65rem] font-bold text-white" style={{ background: line.color }}>{line.av}</div>
                <div>
                  <div className="text-[0.7rem] font-semibold text-ms-fg-muted mb-0.5">{line.name}</div>
                  <div className="text-[0.82rem] text-ms-fg leading-snug">{line.text}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="flex flex-col gap-3">
            <div className="rounded-[var(--ms-radius-sm)] p-3.5" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <div className="text-[0.72rem] font-bold text-ms-fg-muted uppercase tracking-wider mb-2.5">Tarefas identificadas</div>
              {[
                { done: true, text: "Alinhar backlog Q1", owner: "→ Aurimar" },
                { done: false, text: "Entregar dashboard analytics", owner: "→ Marina · até 30/03" },
                { done: false, text: "Criar PRD do backend", owner: "→ Roberto · até sexta" },
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-2 mb-2">
                  <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center ${task.done ? '' : ''}`} style={{
                    border: task.done ? 'none' : '1.5px solid hsl(var(--ms-accent-2))',
                    background: task.done ? 'hsl(var(--ms-accent))' : 'transparent',
                    borderRadius: 4,
                  }}>
                    {task.done && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                  <div>
                    <div className={`text-[0.78rem] leading-snug ${task.done ? 'line-through text-ms-fg-subtle' : 'text-ms-fg'}`}>{task.text}</div>
                    <div className="text-[0.68rem] font-semibold" style={{ color: 'hsl(var(--ms-accent-neon))' }}>{task.owner}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[var(--ms-radius-sm)] p-3.5" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <div className="text-[0.72rem] font-bold text-ms-fg-muted uppercase tracking-wider mb-2.5">Sentimento geral</div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(var(--ms-bg-elevated))' }}>
                <div className="h-full rounded-full w-[78%]" style={{ background: 'linear-gradient(90deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-blue)))' }} />
              </div>
              <div className="flex justify-between text-[0.68rem] mt-1">
                <span className="text-ms-fg-subtle">Neutro</span>
                <span className="font-semibold" style={{ color: 'hsl(var(--ms-success))' }}>78% positivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-[60px] relative z-[1] reveal" style={{ borderTop: '1px solid hsl(var(--ms-border))', borderBottom: '1px solid hsl(var(--ms-border))' }}>
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { value: "98%", label: "Precisão de transcrição" },
          { value: "12+", label: "Idiomas suportados" },
          { value: "<3s", label: "Latência em tempo real" },
          { value: "100%", label: "Grátis no beta" },
        ].map((stat) => (
          <div key={stat.label} className="text-center py-6 px-4">
            <div className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight gradient-text">{stat.value}</div>
            <div className="text-[0.875rem] text-ms-fg-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-[120px] relative z-[1]" id="features">
    <div className="container">
      <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{
        background: 'hsl(var(--ms-accent) / 0.12)',
        border: '1px solid hsl(var(--ms-accent-neon) / 0.25)',
        color: 'hsl(var(--ms-accent-neon))',
      }}>Funcionalidades</span>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-4 reveal">
        Tudo que sua reunião<br />precisa capturar
      </h2>
      <p className="text-base text-ms-fg-muted max-w-[500px] leading-relaxed mb-16 reveal">
        Do áudio bruto a insights acionáveis — MeetScribe faz o trabalho pesado para que seu time possa focar no que importa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`rounded-[var(--ms-radius)] p-7 transition-all duration-300 cursor-default reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`}
            style={{
              background: 'hsl(var(--ms-bg-card))',
              border: '1px solid hsl(var(--ms-border))',
              transitionDelay: `${i * 0.07}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
              e.currentTarget.style.background = 'hsl(var(--ms-bg-card-hover))';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3), 0 0 40px hsl(var(--ms-accent-glow))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'hsl(var(--ms-border))';
              e.currentTarget.style.background = 'hsl(var(--ms-bg-card))';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: iconBgs[f.color] }}>
              <f.icon size={22} color={iconColors[f.color]} />
            </div>
            <h3 className="text-[1.05rem] font-bold mb-2.5 tracking-tight">{f.title}</h3>
            <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowSection = () => (
  <section className="py-20 pb-[120px] relative z-[1]" id="how">
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{
          background: 'hsl(var(--ms-accent) / 0.12)',
          border: '1px solid hsl(var(--ms-accent-neon) / 0.25)',
          color: 'hsl(var(--ms-accent-neon))',
        }}>Como funciona</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight reveal">Três passos, zero esforço</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--ms-accent)), transparent)' }} />
        {[
          { num: "1", title: "Instale a extensão", desc: "Baixe o ZIP, carregue no Chrome/Edge e configure sua API key gratuita do Groq. Leva menos de 5 minutos." },
          { num: "2", title: "Reunião acontece", desc: "MeetScribe detecta a reunião e transcreve automaticamente. Você não precisa fazer nada." },
          { num: "3", title: "Receba os insights", desc: "Ao finalizar, receba resumo, tarefas e transcrição completa no seu email ou integração favorita." },
        ].map((step, i) => (
          <div key={step.num} className={`text-center px-8 relative z-[1] reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''}`}>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold relative group"
              style={{
                background: 'hsl(var(--ms-bg-elevated))',
                border: '1px solid hsl(var(--ms-border))',
                color: 'hsl(var(--ms-accent-neon))',
              }}
            >
              {step.num}
            </div>
            <h3 className="text-[1.05rem] font-bold mb-2.5">{step.title}</h3>
            <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 pb-[120px] text-center relative z-[1]">
    <div className="container">
      <div className="rounded-3xl py-20 px-10 relative overflow-hidden reveal" style={{
        background: 'hsl(var(--ms-bg-elevated))',
        border: '1px solid hsl(var(--ms-border))',
      }}>
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(var(--ms-accent-glow)), transparent 70%)' }} />
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 relative">
          Pronto para nunca mais<br />
          <span className="gradient-text">perder o fio da reunião?</span>
        </h2>
        <p className="text-base text-ms-fg-muted max-w-[460px] mx-auto mb-9 leading-relaxed relative">
          Baixe agora, grátis. Sem cartão de crédito, sem burocracia — só você e suas reuniões mais organizadas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-7 py-3.5 rounded-[var(--ms-radius)] text-base font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-cta)), #EF4444)', boxShadow: '0 0 32px hsl(var(--ms-cta) / 0.35)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Instalar no Chrome
          </a>
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-[var(--ms-radius)] text-base font-semibold text-ms-fg transition-all hover:-translate-y-px" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Instalar no Edge
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { HeroSection, StatsSection, FeaturesSection, HowSection, FinalCTA };
