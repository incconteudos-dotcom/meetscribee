import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    { emoji: "🔒", title: "Privacidade em primeiro lugar", desc: "A transcrição é processada localmente. Sua API key nunca sai do seu navegador. Somos radicalmente transparentes sobre o que fazemos com seus dados." },
    { emoji: "⚡", title: "Zero fricção", desc: "Sem bots na reunião, sem convites, sem permissões especiais. Instale, configure uma chave de API gratuita e comece a usar." },
    { emoji: "🇧🇷", title: "Feito para o Brasil", desc: "PT-BR é cidadão de primeira classe — não uma tradução. Sotaques, gírias corporativas e o jeito brasileiro de fazer reunião foram considerados desde o início." },
    { emoji: "🌐", title: "Open source no coração", desc: "O código da extensão é público. Você pode auditar, contribuir e entender exatamente o que está instalado no seu navegador." },
    { emoji: "🤖", title: "IA como ferramenta, não fim", desc: "Usamos IA para amplificar a capacidade humana de documentar — não para substituir o julgamento das pessoas nas decisões." },
    { emoji: "💬", title: "Produto moldado por usuários", desc: "Nosso roadmap é público. Cada item foi priorizado com base em feedback real de quem usa o produto todo dia." },
  ];

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Sobre nós" title="Construído por quem sofreu com reuniões" subtitle="MeetScribe nasceu da frustração de sair de uma reunião sem saber o que foi decidido — e da certeza de que IA pode resolver isso." />

      {/* Mission box */}
      <div className="text-center rounded-[var(--ms-radius)] p-10 my-12" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent) / 0.12), hsl(var(--ms-accent-blue) / 0.08))', border: '1px solid hsl(var(--ms-accent-neon) / 0.25)' }}>
        <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold tracking-tight mb-4 gradient-text">Nossa missão</h2>
        <p className="text-base text-ms-fg-muted leading-relaxed max-w-[560px] mx-auto">
          Eliminar o desperdício de tempo e informação nas reuniões. Cada decisão tomada, cada tarefa definida e cada insight compartilhado merece ser capturado — automaticamente, sem interromper o fluxo da conversa.
        </p>
      </div>

      <div className="prose">
        <h2>Como tudo começou</h2>
        <p>Em 2025, nossa equipe estava imersa em reuniões diárias de produto, design e engenharia. A cada semana, o mesmo problema: anotações incompletas, tarefas esquecidas, decisões que precisavam ser rediscutidas por falta de registro.</p>
        <p>Testamos todas as soluções disponíveis — bots de reunião que entravam nas calls, gravadores de tela, transcrições manuais. Nenhuma funcionava de forma simples, privada e acessível. A maioria exigia contas corporativas, cobrava caro ou enviava dados para servidores de terceiros sem transparência.</p>
        <p>Então construímos o MeetScribe: uma extensão leve, que roda no seu navegador, usa as legendas que o Meet e o Teams já geram, e produz uma ata profissional com IA ao final de cada reunião.</p>
        <h2>O que nos diferencia</h2>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {values.map(v => (
          <div key={v.title} className="rounded-[var(--ms-radius)] p-6 transition-all hover:-translate-y-1" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <span className="text-3xl block mb-3">{v.emoji}</span>
            <h3 className="text-[0.95rem] font-bold mb-2">{v.title}</h3>
            <p className="text-[0.825rem] text-ms-fg-muted leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose"><h2>MeetScribe em números</h2></div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        {[
          { num: "50+", label: "Melhorias planejadas no roadmap" },
          { num: "12+", label: "Idiomas suportados" },
          { num: "100%", label: "Grátis durante o beta" },
        ].map(s => (
          <div key={s.label} className="text-center py-7 px-4 rounded-[var(--ms-radius)]" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="text-[2.2rem] font-extrabold tracking-tight gradient-text">{s.num}</div>
            <div className="text-[0.825rem] text-ms-fg-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose">
        <h2>Fase atual: Beta Aberto</h2>
        <p>O MeetScribe está em <strong>beta público</strong>. Isso significa que o produto funciona — e usamos ele mesmo todo dia — mas ainda estamos refinando, corrigindo e expandindo funcionalidades rapidamente.</p>
        <p>Durante o beta, o plano Pro está <strong>100% gratuito</strong>. Quando migrarmos para produção, usuários do beta receberão um desconto vitalício exclusivo.</p>
        <div className="highlight-box">
          <p>📬 <strong>Encontrou um bug ou quer dar feedback?</strong> Abra uma issue no <a href="https://github.com/mazinhoww-web/Extensions" target="_blank" rel="noopener noreferrer">GitHub do projeto</a> ou entre em contato com quem compartilhou a extensão com você.</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
