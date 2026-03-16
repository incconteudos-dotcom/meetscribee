import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t pt-12 pb-8" style={{ borderColor: 'hsl(var(--ms-border))' }}>
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-12">
        <div>
          <Logo />
          <p className="text-[0.875rem] text-ms-fg-muted leading-relaxed mt-3 max-w-[260px]">
            Reuniões mais inteligentes, times mais produtivos. Feito com amor no Brasil.
          </p>
        </div>
        <div>
          <h4 className="text-[0.8rem] font-bold text-ms-fg uppercase tracking-wider mb-4">Produto</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="/#features" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Funcionalidades</a></li>
            <li><a href="/#pricing" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Preços</a></li>
            <li><a href="/#how" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Como funciona</a></li>
            <li><a href="/#roadmap" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Roadmap</a></li>
            <li><Link to="/changelog" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.8rem] font-bold text-ms-fg uppercase tracking-wider mb-4">Empresa</h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/sobre" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Sobre</Link></li>
            <li><Link to="/changelog" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.8rem] font-bold text-ms-fg uppercase tracking-wider mb-4">Legal</h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/privacidade" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Privacidade</Link></li>
            <li><Link to="/termos" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Termos de uso</Link></li>
            <li><Link to="/seguranca" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">Segurança</Link></li>
            <li><Link to="/lgpd" className="text-[0.875rem] text-ms-fg-muted hover:text-ms-fg transition-colors">LGPD</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t text-[0.8rem] text-ms-fg-subtle gap-2" style={{ borderColor: 'hsl(var(--ms-border))' }}>
        <span>© 2025 MeetScribe. Todos os direitos reservados.</span>
        <span>Feito com ♥ no Brasil</span>
      </div>
    </div>
  </footer>
);

export default Footer;
