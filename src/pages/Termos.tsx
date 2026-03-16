import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Termos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Legal" title="Termos de Uso" subtitle="Leia estes termos antes de instalar ou usar o MeetScribe." date="Última atualização: março de 2026" />
      <div className="prose">
        <div className="highlight-box">
          <p>📌 <strong>Resumo:</strong> o MeetScribe é uma extensão open source em fase beta. Use-a com responsabilidade, respeitando as leis aplicáveis e os termos das plataformas de reunião que você utiliza.</p>
        </div>

        <h2>1. Aceitação dos termos</h2>
        <p>Ao instalar, acessar ou utilizar o MeetScribe ("Extensão"), você concorda com estes Termos de Uso. Se não concordar com algum item, não instale ou desinstale a Extensão.</p>

        <h2>2. Descrição do serviço</h2>
        <p>O MeetScribe é uma extensão de navegador (Chrome e Edge) que captura as legendas geradas automaticamente pelo Google Meet e Microsoft Teams para produzir transcrições e atas de reunião com auxílio de inteligência artificial.</p>
        <p>O MeetScribe está atualmente em <strong>beta público</strong>. Isso significa que funcionalidades podem mudar, ser descontinuadas ou apresentar instabilidade sem aviso prévio.</p>

        <h2>3. Licença de uso</h2>
        <p>O código-fonte do MeetScribe é disponibilizado sob licença de código aberto no <a href="https://github.com/mazinhoww-web/Extensions" target="_blank" rel="noopener noreferrer">GitHub</a>. Você pode:</p>
        <ul>
          <li>Usar a Extensão para fins pessoais e profissionais</li>
          <li>Copiar, modificar e distribuir o código conforme a licença open source aplicável</li>
          <li>Contribuir com melhorias através de pull requests</li>
        </ul>
        <p>Você não pode:</p>
        <ul>
          <li>Remover atribuições de autoria ou avisos de licença</li>
          <li>Distribuir versões modificadas como se fossem o MeetScribe oficial</li>
          <li>Utilizar a Extensão para fins ilegais ou que violem os direitos de terceiros</li>
        </ul>

        <h2>4. Responsabilidades do usuário</h2>
        <h3>4.1 Consentimento dos participantes</h3>
        <p>Você é <strong>inteiramente responsável</strong> por obter o consentimento informado de todos os participantes antes de gravar, transcrever ou documentar qualquer reunião. Em muitos países e estados, gravar conversas sem consentimento de todos os participantes é ilegal.</p>
        <p>No Brasil, a Lei nº 9.296/96 e a LGPD regulam a coleta de dados pessoais em comunicações. Informe sempre os participantes antes de ativar a transcrição.</p>

        <h3>4.2 Uso adequado das APIs</h3>
        <p>Você é responsável pelo uso da sua chave de API (Groq, Gemini ou outro provedor). Certifique-se de respeitar os termos de uso do provedor escolhido, incluindo limites de uso e restrições de conteúdo.</p>

        <h3>4.3 Conformidade com as plataformas</h3>
        <p>Você é responsável por utilizar o MeetScribe em conformidade com os termos de serviço do Google Meet e Microsoft Teams. O uso da Extensão não é afiliado, endossado ou autorizado por Google LLC ou Microsoft Corporation.</p>

        <h2>5. Isenção de garantias</h2>
        <p>O MeetScribe é fornecido <strong>"no estado em que se encontra"</strong> (AS IS), sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a:</p>
        <ul>
          <li>Precisão das transcrições ou atas geradas</li>
          <li>Disponibilidade contínua ou sem interrupções</li>
          <li>Compatibilidade com versões futuras do Google Meet, Teams ou navegadores</li>
          <li>Adequação para fins específicos</li>
        </ul>

        <h2>6. Limitação de responsabilidade</h2>
        <p>Em nenhuma hipótese os desenvolvedores do MeetScribe serão responsáveis por:</p>
        <ul>
          <li>Danos diretos, indiretos, incidentais ou consequentes decorrentes do uso da Extensão</li>
          <li>Perda de dados, transcrições ou atas</li>
          <li>Decisões tomadas com base em transcrições imprecisas</li>
          <li>Violações de privacidade decorrentes do uso inadequado pelo próprio usuário</li>
          <li>Custos de API ou cobranças dos provedores de IA</li>
        </ul>

        <h2>7. Privacidade</h2>
        <p>O tratamento dos seus dados é descrito em nossa <Link to="/privacidade">Política de Privacidade</Link>. Em resumo: seus dados de reunião são processados localmente e nunca enviados para nossos servidores.</p>

        <h2>8. Modificações nos termos</h2>
        <p>Podemos atualizar estes Termos periodicamente. Alterações significativas serão comunicadas via changelog. O uso continuado da Extensão após notificação implica aceite dos novos termos.</p>

        <h2>9. Encerramento de acesso</h2>
        <p>Você pode parar de usar o MeetScribe a qualquer momento desinstalando a Extensão. Reservamo-nos o direito de modificar ou descontinuar a Extensão sem aviso prévio.</p>

        <h2>10. Lei aplicável</h2>
        <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais disputas serão submetidas ao foro da Comarca de São Paulo, SP, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

        <h2>11. Contato</h2>
        <p>Dúvidas sobre estes Termos? Abra uma <a href="https://github.com/mazinhoww-web/Extensions" target="_blank" rel="noopener noreferrer">issue no GitHub</a>.</p>

        <p>Veja também: <Link to="/privacidade">Política de Privacidade</Link> · <Link to="/lgpd">LGPD</Link></p>
      </div>
    </div>
  );
};

export default Termos;
