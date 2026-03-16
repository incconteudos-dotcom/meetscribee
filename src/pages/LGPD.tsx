import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const rights = [
  { num: "I", title: "Confirmação e acesso", desc: "Você pode verificar quais dados a extensão armazena a qualquer momento nas configurações do Chrome: Configurações → Privacidade → Dados do site → MeetScribe." },
  { num: "II", title: "Correção", desc: "Dados incorretos podem ser corrigidos diretamente nas configurações da extensão, que permitem editar ou resetar qualquer preferência armazenada." },
  { num: "III", title: "Eliminação", desc: 'Desinstale a extensão para remover todos os dados locais. Alternativamente, use o botão "Limpar todos os dados" nas configurações da extensão.' },
  { num: "IV", title: "Portabilidade", desc: "As transcrições e atas podem ser exportadas a qualquer momento nos formatos Markdown, DOCX, PDF, TXT ou JSON." },
  { num: "V", title: "Oposição", desc: "Você pode se opor ao tratamento a qualquer momento simplesmente desativando ou desinstalando a extensão — sem burocracia." },
  { num: "VI", title: "Revogação do consentimento", desc: "Para dados tratados com base em consentimento (como feedback no GitHub), você pode solicitar remoção via issue no repositório público." },
];

const LGPD = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader tag="Legal" title="Conformidade com a LGPD" subtitle="Como o MeetScribe está alinhado à Lei Geral de Proteção de Dados (Lei nº 13.709/2018)." date="Última atualização: março de 2026" />

      <div className="prose">
        <div className="highlight-box">
          <p>🇧🇷 <strong>Nota importante:</strong> a LGPD se aplica ao tratamento de dados pessoais. O MeetScribe foi projetado para <strong>não tratar dados pessoais em nossos servidores</strong>. Todo o processamento ocorre localmente no dispositivo do usuário. Ainda assim, documentamos aqui nosso alinhamento com a lei para total transparência.</p>
        </div>

        <h2>1. O que é a LGPD</h2>
        <p>A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) regula o tratamento de dados pessoais no Brasil, garantindo direitos aos titulares e estabelecendo obrigações para quem trata esses dados. A ANPD (Autoridade Nacional de Proteção de Dados) é o órgão responsável por fiscalizar seu cumprimento.</p>

        <h2>2. Papel do MeetScribe no tratamento de dados</h2>
        <p>No contexto da LGPD, o MeetScribe atua como uma <strong>ferramenta tecnológica</strong> instalada no dispositivo do usuário. Não somos considerados "controladores" ou "operadores" dos dados de reunião porque:</p>
        <ul>
          <li>Não temos acesso aos dados de reunião processados pela extensão</li>
          <li>Os dados não são transmitidos para nossos servidores</li>
          <li>O usuário é o único que determina como e quando a extensão é ativada</li>
        </ul>
        <p>O <strong>usuário da extensão</strong> é o controlador dos dados pessoais das reuniões que transcreve e é responsável por cumprir a LGPD ao registrar reuniões com terceiros.</p>

        <h2>3. Dados que tratamos diretamente</h2>
        <p>O MeetScribe pode eventualmente tratar os seguintes dados pessoais de forma muito limitada:</p>
        <table>
          <thead><tr><th>Dado</th><th>Base legal (LGPD)</th><th>Finalidade</th><th>Retenção</th></tr></thead>
          <tbody>
            <tr><td>Preferências de configuração</td><td>Legítimo interesse (art. 7º, IX)</td><td>Funcionamento da extensão</td><td>Até desinstalação</td></tr>
            <tr><td>Chave de API do usuário</td><td>Execução de contrato / legítimo interesse (art. 7º, V e IX)</td><td>Integração com o provedor de IA</td><td>Até remoção pelo usuário</td></tr>
            <tr><td>Feedback voluntário via GitHub</td><td>Consentimento (art. 7º, I)</td><td>Melhoria do produto</td><td>Conforme política do GitHub</td></tr>
          </tbody>
        </table>

        <h2>4. Seus direitos como titular</h2>
        <p>A LGPD garante os seguintes direitos aos titulares de dados (art. 18). Veja como exercê-los no MeetScribe:</p>
      </div>

      {/* Rights grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {rights.map(r => (
          <div key={r.num} className="rounded-[var(--ms-radius-sm)] p-5 flex gap-4 items-start transition-colors" style={{ background: 'hsl(var(--ms-bg-card))', border: '1px solid hsl(var(--ms-border))' }}>
            <div className="min-w-[28px] h-7 rounded-full flex items-center justify-center text-[0.75rem] font-extrabold flex-shrink-0" style={{ background: 'hsl(var(--ms-accent) / 0.15)', border: '1px solid hsl(var(--ms-accent-neon) / 0.3)', color: 'hsl(var(--ms-accent-neon))' }}>{r.num}</div>
            <div>
              <h3 className="text-[0.9rem] font-bold mb-1">{r.title}</h3>
              <p className="text-[0.8rem] text-ms-fg-muted leading-snug m-0">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose">
        <h2>5. Responsabilidade do usuário ao usar o MeetScribe</h2>
        <p>Ao transcrever reuniões que incluam outras pessoas, <strong>você</strong> passa a ser o controlador dos dados pessoais dos participantes. Nesse contexto, a LGPD exige que você:</p>
        <ul>
          <li><strong>Obtenha consentimento</strong> dos participantes antes de iniciar a transcrição (art. 7º, I), ou utilize outra base legal adequada</li>
          <li><strong>Informe os participantes</strong> sobre a finalidade do registro e como os dados serão utilizados (art. 9º)</li>
          <li><strong>Garanta a segurança</strong> das transcrições geradas, não compartilhando-as com terceiros sem autorização</li>
          <li><strong>Respeite os direitos</strong> dos participantes, incluindo o direito de solicitar exclusão dos registros</li>
        </ul>

        <h2>6. Transferência internacional de dados</h2>
        <p>Quando você usa o MeetScribe com um provedor de IA estrangeiro (Groq - EUA ou Google Gemini - EUA), o conteúdo da reunião é transferido para servidores fora do Brasil. Essa transferência:</p>
        <ul>
          <li>É iniciada por você, usando sua própria chave de API</li>
          <li>Está sujeita à política de privacidade e termos do respectivo provedor</li>
          <li>Deve observar o art. 33 da LGPD sobre transferência internacional</li>
        </ul>
        <p>Recomendamos verificar se os provedores escolhidos possuem certificações de adequação ou cláusulas contratuais padrão conforme exigido pela LGPD.</p>

        <h2>7. Encarregado de Proteção de Dados (DPO)</h2>
        <p>O MeetScribe é um projeto open source em estágio beta. Para questões relacionadas à LGPD, entre em contato através de uma <a href="https://github.com/mazinhoww-web/Extensions/issues" target="_blank" rel="noopener noreferrer">issue no GitHub</a> com o label <code>lgpd</code>.</p>

        <h2>8. Atualizações</h2>
        <p>Esta página será atualizada conforme o produto evoluir e novas funcionalidades forem adicionadas. A data de última atualização é mantida no topo do documento.</p>

        <p>Veja também: <Link to="/privacidade">Política de Privacidade</Link> · <Link to="/seguranca">Segurança</Link> · <Link to="/termos">Termos de uso</Link></p>
      </div>
    </div>
  );
};

export default LGPD;
