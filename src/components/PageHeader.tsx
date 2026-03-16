interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  date?: string;
}

const PageHeader = ({ tag, title, subtitle, date }: PageHeaderProps) => (
  <div className="mb-12 pb-8" style={{ borderBottom: '1px solid hsl(var(--ms-border))' }}>
    <span className="inline-block px-3 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider mb-4" style={{
      background: 'hsl(var(--ms-accent) / 0.12)',
      border: '1px solid hsl(var(--ms-accent-neon) / 0.25)',
      color: 'hsl(var(--ms-accent-neon))',
    }}>
      {tag}
    </span>
    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight mb-3">{title}</h1>
    <p className="text-base text-ms-fg-muted leading-relaxed">{subtitle}</p>
    {date && <p className="text-[0.8rem] text-ms-fg-subtle mt-2">{date}</p>}
  </div>
);

export default PageHeader;
