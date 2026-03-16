import { useState } from "react";
import { Check, X, Copy, Shield, Zap, Clock, ExternalLink } from "lucide-react";

const DOWNLOAD_URL = "https://github.com/mazinhoww-web/Extensions/archive/refs/heads/claude/meeting-transcription-extension-46nZi.zip";

const InstallSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("chrome://extensions").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="py-20 pb-[120px] relative z-[1]" id="instalacao">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{ background: 'hsl(var(--ms-accent) / 0.12)', border: '1px solid hsl(var(--ms-accent-neon) / 0.25)', color: 'hsl(var(--ms-accent-neon))' }}>Instalação</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight reveal">Instale em 5 minutos</h2>
          <p className="text-base text-ms-fg-muted max-w-[500px] mx-auto leading-relaxed reveal">MeetScribe é uma extensão para Chrome e Edge. Siga os passos abaixo — não precisa de conta, só de uma API key gratuita.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="flex flex-col reveal">
            {[
              { num: 1, title: "Baixe e extraia o ZIP", desc: 'Clique em "Download gratuito" acima. Depois clique com o botão direito no arquivo e escolha Extrair aqui.' },
              { num: 2, title: "Abra o gerenciador de extensões", desc: "No Chrome ou Edge, acesse:", hasCode: true },
              { num: 3, title: "Ative o Modo Desenvolvedor", desc: 'No canto superior direito da página de extensões, ative a chave "Modo do desenvolvedor" (Developer mode).' },
              { num: 4, title: "Carregue a extensão", desc: 'Clique em "Carregar sem compactação" → selecione a pasta extraída (a que contém o arquivo manifest.json).' },
              { num: 5, title: "Fixe na barra de ferramentas", desc: "Clique no ícone de quebra-cabeça no Chrome → ao lado de MeetScribe, clique no alfinete para fixar." },
              { num: 6, title: "Configure sua API key e use!", desc: 'Clique no ícone do MeetScribe → Configurações → cole sua API key → salve. Entre em uma reunião, ative as legendas e clique em "Iniciar Transcrição".' },
            ].map((step, i, arr) => (
              <div key={step.num} className="flex gap-5 relative pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[0.85rem] font-extrabold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-2)))', boxShadow: '0 0 16px hsl(var(--ms-accent-glow))' }}>{step.num}</div>
                  {i < arr.length - 1 && <div className="w-0.5 flex-1 mt-2 min-h-[24px] opacity-30" style={{ background: 'linear-gradient(to bottom, hsl(var(--ms-accent)), transparent)' }} />}
                </div>
                <div className="pt-2">
                  <div className="text-base font-bold mb-1.5">{step.title}</div>
                  <div className="text-[0.875rem] text-ms-fg-muted leading-relaxed">{step.desc}</div>
                  {step.hasCode && (
                    <button onClick={copyCode} className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg font-mono text-[0.82rem] cursor-pointer transition-colors" style={{ background: 'hsl(var(--ms-bg-elevated))', border: '1px solid hsl(var(--ms-border))', color: copied ? 'hsl(var(--ms-success))' : 'hsl(var(--ms-accent-neon))' }}>
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                      {copied ? "Copiado!" : "chrome://extensions"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4 reveal reveal-delay-1">
            {/* Requirements */}
            <div className="rounded-[var(--ms-radius)] p-6" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)' }}><Clock size={16} color="#60A5FA" /></div>
                <h4 className="text-base font-bold">Requisitos</h4>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {["Chrome 114+ ou Microsoft Edge", "Google Meet ou Microsoft Teams (web)", "API key gratuita (Groq ou Gemini)", "Legendas ativas na reunião"].map(r => (
                  <div key={r} className="flex items-center gap-2.5 text-[0.85rem] text-ms-fg-muted">
                    <Check size={15} className="text-ms-success flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* Groq */}
            <div className="rounded-[var(--ms-radius)] p-6" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}><Shield size={16} color="#34D399" /></div>
                <div>
                  <h4 className="text-base font-bold">API Groq</h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold tracking-wide" style={{ background: 'hsl(var(--ms-success) / 0.12)', border: '1px solid hsl(var(--ms-success) / 0.25)', color: 'hsl(var(--ms-success))' }}>Recomendado · Grátis · Sem limite</span>
                </div>
              </div>
              <p className="text-[0.85rem] text-ms-fg-muted leading-relaxed">Crie uma conta gratuita no Groq Console, gere uma chave e cole nas configurações da extensão. A chave começa com <code className="text-[0.8em] px-1 py-px rounded" style={{ color: 'hsl(var(--ms-accent-neon))', background: 'hsl(var(--ms-accent) / 0.1)' }}>gsk_</code></p>
              <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[0.82rem] font-semibold hover:gap-2.5 transition-all" style={{ color: 'hsl(var(--ms-accent-neon))' }}>
                Acessar console.groq.com <ExternalLink size={13} />
              </a>
            </div>

            {/* Gemini */}
            <div className="rounded-[var(--ms-radius)] p-6" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)' }}><Zap size={16} color="#60A5FA" /></div>
                <div>
                  <h4 className="text-base font-bold">API Gemini</h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold tracking-wide" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#60A5FA' }}>Alternativo · 1.500 req/dia</span>
                </div>
              </div>
              <p className="text-[0.85rem] text-ms-fg-muted leading-relaxed">Acesse o AI Studio do Google, gere sua chave e use como alternativa. A chave começa com <code className="text-[0.8em] px-1 py-px rounded" style={{ color: '#60A5FA', background: 'rgba(59,130,246,0.1)' }}>AIza</code></p>
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[0.82rem] font-semibold hover:gap-2.5 transition-all" style={{ color: 'hsl(var(--ms-accent-neon))' }}>
                Acessar AI Studio <ExternalLink size={13} />
              </a>
            </div>

            {/* Formats */}
            <div className="rounded-[var(--ms-radius)] p-6" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
              <h4 className="text-base font-bold mb-3">Formatos de exportação</h4>
              <div className="flex flex-wrap gap-2">
                {["Markdown", "DOCX", "PDF", "TXT", "JSON"].map(f => (
                  <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-lg text-[0.78rem] font-semibold text-ms-fg-muted" style={{ background: 'hsl(var(--ms-bg-elevated))', border: '1px solid hsl(var(--ms-border))' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--ms-accent-neon))' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="rounded-[var(--ms-radius-sm)] px-4 py-3.5 flex gap-2.5 items-start text-[0.85rem] leading-relaxed" style={{ background: 'hsl(var(--ms-cta) / 0.08)', border: '1px solid hsl(var(--ms-cta) / 0.2)', color: '#FED7AA' }}>
              <Shield size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--ms-cta))' }} />
              <span><strong>Privacidade:</strong> a transcrição é processada localmente. Sua API key fica apenas no Chrome. O texto é enviado à API somente para gerar a ata — nada vai para servidores do MeetScribe.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-[120px] relative z-[1]" id="pricing">
      <div className="container">
        <div className="text-center">
          <span className="inline-block px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-wider mb-5 reveal" style={{ background: 'hsl(var(--ms-accent) / 0.12)', border: '1px solid hsl(var(--ms-accent-neon) / 0.25)', color: 'hsl(var(--ms-accent-neon))' }}>Preços</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight reveal">Simples e transparente</h2>
          <p className="text-base text-ms-fg-muted max-w-[500px] mx-auto leading-relaxed mt-4 mb-10 reveal">
            Durante o beta, todos os planos pagos estão <strong style={{ color: 'hsl(var(--ms-accent-neon))' }}>100% gratuitos</strong>. Sem pegadinha.
          </p>

          {/* Toggle */}
          <div className="flex items-center gap-3 justify-center mb-12 reveal">
            <span className="text-ms-fg-muted text-[0.9rem] font-medium">Mensal</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-11 h-6 rounded-full relative cursor-pointer transition-colors"
              style={{ background: isAnnual ? 'hsl(var(--ms-accent))' : 'hsl(var(--ms-bg-elevated))', border: `1px solid ${isAnnual ? 'hsl(var(--ms-accent))' : 'hsl(var(--ms-border))'}` }}
              role="switch"
              aria-checked={isAnnual}
            >
              <div className="absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform" style={{ transform: isAnnual ? 'translateX(20px)' : 'translateX(0)' }} />
            </button>
            <span className="text-[0.9rem] font-medium">Anual</span>
            <span className="text-[0.72rem] font-bold px-2.5 py-0.5 rounded-full" style={{ color: 'hsl(var(--ms-success))', background: 'hsl(var(--ms-success) / 0.12)', border: '1px solid hsl(var(--ms-success) / 0.25)' }}>Economize 30%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Starter */}
          <div className="rounded-[20px] p-8 transition-all hover:-translate-y-1 reveal" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="text-[0.78rem] font-bold text-ms-fg-muted uppercase tracking-wider mb-3">Starter</div>
            <div className="flex items-baseline gap-1 mb-1"><span className="text-[2.8rem] font-extrabold tracking-tight">R$0</span><span className="text-[0.875rem] text-ms-fg-muted">/mês</span></div>
            <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed mb-7 pt-4" style={{ borderTop: '1px solid hsl(var(--ms-border))' }}>Para quem quer experimentar o MeetScribe sem compromisso.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { yes: true, text: "5 reuniões/mês" },
                { yes: true, text: "Transcrição até 30 min" },
                { yes: true, text: "Resumo básico com IA" },
                { yes: false, text: "Extração de tarefas" },
                { yes: false, text: "Integrações avançadas" },
              ].map(f => (
                <li key={f.text} className="flex items-start gap-2.5 text-[0.875rem]">
                  {f.yes ? <Check size={16} className="text-ms-success flex-shrink-0 mt-0.5" /> : <X size={16} className="text-ms-fg-subtle flex-shrink-0 mt-0.5" />}
                  <span className={f.yes ? '' : 'text-ms-fg-subtle'}>{f.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-[var(--ms-radius-sm)] text-[0.9rem] font-bold transition-all hover:-translate-y-px" style={{ background: 'transparent', border: '1px solid hsl(var(--ms-border-hover))', color: 'hsl(var(--ms-fg))' }}>Começar grátis</button>
          </div>

          {/* Pro */}
          <div className="rounded-[20px] p-8 relative reveal reveal-delay-1" style={{
            background: 'hsl(var(--ms-accent) / 0.06)',
            border: '1px solid hsl(var(--ms-accent))',
            transform: 'scale(1.03)',
            boxShadow: '0 0 60px hsl(var(--ms-accent-glow))',
          }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[0.72rem] font-bold text-white whitespace-nowrap tracking-wide" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-2)))' }}>⭐ Mais popular no beta</div>
            <div className="text-[0.78rem] font-bold uppercase tracking-wider mb-3" style={{ color: 'hsl(var(--ms-accent-neon))' }}>Pro</div>
            <div className="flex items-baseline gap-1 mb-1"><span className="text-[2.8rem] font-extrabold tracking-tight">R$0</span><span className="text-[0.875rem] text-ms-fg-muted">/mês · <span className="font-bold" style={{ color: 'hsl(var(--ms-success))' }}>GRÁTIS no beta</span></span></div>
            <div className="text-[0.85rem] text-ms-fg-subtle line-through mb-2">{isAnnual ? "Normalmente R$34/mês (anual)" : "Normalmente R$49/mês"}</div>
            <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed mb-7 pt-4" style={{ borderTop: '1px solid hsl(var(--ms-border))' }}>Para profissionais e times que vivem de reuniões.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Reuniões ilimitadas", "Transcrição até 4 horas", "Resumo avançado + tarefas", "Chat com a reunião", "Notion, Slack, Jira, PDF", "12 idiomas"].map(f => (
                <li key={f} className="flex items-start gap-2.5 text-[0.875rem]">
                  <Check size={16} className="text-ms-success flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-[var(--ms-radius-sm)] text-[0.9rem] font-bold text-center text-white transition-all hover:opacity-90 hover:-translate-y-px" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-2)))', boxShadow: '0 0 24px hsl(var(--ms-accent-glow))' }}>Fazer download grátis</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-[20px] p-8 transition-all hover:-translate-y-1 reveal reveal-delay-2" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="text-[0.78rem] font-bold text-ms-fg-muted uppercase tracking-wider mb-3">Enterprise</div>
            <div className="flex items-baseline gap-1 mb-1"><span className="text-[2.8rem] font-extrabold tracking-tight">Custom</span></div>
            <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed mb-7 pt-4 mt-2" style={{ borderTop: '1px solid hsl(var(--ms-border))' }}>Para times grandes e empresas com necessidades específicas de segurança e compliance.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Tudo do Pro", "SSO & SAML", "Admin & gestão de time", "Dados on-premise (opcional)", "SLA & suporte dedicado"].map(f => (
                <li key={f} className="flex items-start gap-2.5 text-[0.875rem]">
                  <Check size={16} className="text-ms-success flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-[var(--ms-radius-sm)] text-[0.9rem] font-bold transition-all hover:opacity-90 hover:-translate-y-px" style={{ background: 'hsl(var(--ms-fg))', color: 'hsl(var(--ms-bg-deep))' }}>Falar com vendas</button>
          </div>
        </div>

        <p className="reveal text-center mt-8 text-[0.82rem] text-ms-fg-subtle">🔒 Dados protegidos e criptografados · Sem compromisso · Cancele quando quiser após o beta</p>
      </div>
    </section>
  );
};

export { InstallSection, PricingSection };
