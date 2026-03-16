import { Link } from "react-router-dom";
import MicIcon from "./MicIcon";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 font-bold text-[1.2rem] tracking-tight" aria-label="MeetScribe Home">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-blue)))' }} aria-hidden="true">
      <MicIcon />
    </div>
    MeetScribe
  </Link>
);

export default Logo;
