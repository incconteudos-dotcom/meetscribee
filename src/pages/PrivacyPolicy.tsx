import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 w-full">
      <PageHeader
        tag="Legal"
        title="Privacy Policy"
        subtitle="Radically transparent about how we handle your data. Short, direct, and complete."
        date="Last updated: March 2026"
      />

      <div className="prose">

        {/* Single Purpose Statement */}
        <div className="highlight-box" style={{ background: 'hsl(var(--ms-accent) / 0.08)', borderColor: 'hsl(var(--ms-accent) / 0.25)', borderLeft: '4px solid hsl(var(--ms-accent))' }}>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-widest mb-2" style={{ color: 'hsl(var(--ms-accent))' }}>Single Purpose Statement</p>
          <p style={{ margin: 0, color: 'hsl(var(--ms-accent) / 0.9)' }}>
            MeetScribe has <strong>one purpose</strong>: capture what is said in your meetings and transform it into structured minutes automatically. Every feature serves this single function — caption capture and microphone recording are two input methods for the same transcription pipeline; AI generation (Groq/Gemini) is the output of that pipeline; export and history are utilities for that output. No feature exists outside transcription-and-minutes-generation.
          </p>
        </div>

        {/* Privacy at a Glance */}
        <div className="highlight-box" style={{ background: 'hsl(142 71% 45% / 0.08)', borderColor: 'hsl(142 71% 45% / 0.3)', borderLeft: '4px solid hsl(142 71% 45%)' }}>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-widest mb-3" style={{ color: 'hsl(142 71% 35%)' }}>Privacy at a Glance</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {[
              "No meeting data is ever sent to MeetScribe servers — we have none.",
              <>Transcription is built entirely in your browser until you click "Generate Minutes".</>,
              <>The only external network call goes to <strong>your own AI API key</strong> (Groq or Gemini) — you control it.</>,
              <>Microphone access is used <strong>only</strong> in Room/Hybrid Mode, only when you activate it, and solely to produce transcription text.</>,
              "Caption text is read from the meeting page DOM — no audio is captured in Platform Mode.",
              <>Meeting history (last 10 sessions) is stored on your device only (<code>chrome.storage.local</code>).</>,
              "No analytics, no crash reporting, no advertising — ever.",
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'hsl(142 71% 30%)' }}>
                <span style={{ color: 'hsl(142 71% 40%)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TOC */}
        <nav aria-label="Table of contents" className="rounded-[var(--ms-radius)] p-5 mb-10" style={{ background: 'hsl(var(--ms-bg-elevated))', border: '1px solid hsl(var(--ms-border))' }}>
          <p className="text-[0.72rem] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--ms-fg-muted))' }}>Contents</p>
          <ol className="pl-5 flex flex-col gap-1" style={{ fontSize: '0.875rem' }}>
            {[
              ["#scope", "1. Scope & Single Purpose"],
              ["#data-collected", "2. Data Collected"],
              ["#microphone", "3. Microphone & Audio"],
              ["#captions", "4. Caption / Meeting Content"],
              ["#api-keys", "5. API Keys"],
              ["#storage", "6. Local Storage & Retention"],
              ["#third-parties", "7. Third-Party Services"],
              ["#permissions", "8. Permissions Explained"],
              ["#user-rights", "9. Your Rights"],
              ["#children", "10. Children"],
              ["#changes", "11. Changes"],
              ["#contact", "12. Contact"],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="scope">1. Scope &amp; Single Purpose</h2>
        <p>MeetScribe is a browser extension for Google Chrome and Microsoft Edge. Its <strong>sole function</strong> is to capture meeting speech (via platform captions or microphone) and generate structured meeting minutes using an AI model of the user's choice.</p>
        <p>All components serve this one pipeline:</p>
        <ul>
          <li><strong>Caption capture</strong> (Platform Mode) — reads subtitle text from Google Meet or Microsoft Teams as the primary input source to the transcription pipeline.</li>
          <li><strong>Microphone capture</strong> (Room Mode / Hybrid Mode) — uses the browser's Web Speech API as a secondary, optional input source for the same pipeline, for in-person participants or platforms without native captions.</li>
          <li><strong>AI generation</strong> (Groq / Gemini) — sends the completed transcript to the user's configured AI API to produce structured minutes (summary, decisions, action items, risks).</li>
          <li><strong>Export &amp; history</strong> — utility outputs for the generated minutes (download as TXT/PDF; view last 10 sessions locally).</li>
          <li><strong>Settings</strong> — control language, capture mode, and AI provider for the transcription flow.</li>
        </ul>
        <p>No permission is used for any purpose other than this pipeline. The extension source code is publicly auditable at <a href="https://github.com/incconteudos-dotcom/meetscribee" target="_blank" rel="noopener noreferrer">github.com/incconteudos-dotcom/meetscribee</a>.</p>

        <h2 id="data-collected">2. Data Collected</h2>
        <h3>Data processed locally (never reaches MeetScribe servers)</h3>
        <ul>
          <li>Caption/subtitle text displayed by Google Meet or Microsoft Teams during a meeting</li>
          <li>Speech-to-text output from the browser's Web Speech API (Room/Hybrid Mode only)</li>
          <li>Speaker names as shown by the meeting platform</li>
          <li>Assembled transcript text held in memory during the session</li>
          <li>Your AI API key — stored locally, never transmitted to us</li>
          <li>Extension preferences (language, capture mode, AI provider)</li>
          <li>Generated meeting minutes — last 10 sessions, stored on your device</li>
        </ul>
        <h3>Data we do not collect</h3>
        <ul>
          <li>Audio or video recordings of any kind</li>
          <li>Any meeting content on MeetScribe servers (we have none)</li>
          <li>Your name, email, or account credentials</li>
          <li>Content from any tab other than an active meeting</li>
          <li>Usage analytics, telemetry, or behavioral tracking</li>
          <li>Crash reports sent to any remote endpoint</li>
        </ul>

        <h2 id="microphone">3. Microphone &amp; Audio</h2>
        <p><strong>The microphone is requested and used only when you explicitly select Room Mode or Hybrid Mode.</strong> In the default Platform Mode, the microphone is never accessed.</p>
        <div className="highlight-box" style={{ background: '#fffbeb', borderColor: '#fde68a', borderLeft: '4px solid #f59e0b', color: '#78350f' }}>
          Room Mode and Hybrid Mode exist solely to capture speech from <strong>in-person participants</strong> or from platforms that do not provide native captions. The resulting text is fed into the same transcription pipeline as caption-based capture. No audio file is ever created, saved, or transmitted by MeetScribe.
        </div>
        <p>Speech recognition in these modes relies on the browser's built-in <code>webkitSpeechRecognition</code> / Web Speech API. This browser-level API may transmit audio to Google infrastructure for processing — this is outside MeetScribe's control. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. MeetScribe only receives the resulting text string.</p>

        <h2 id="captions">4. Caption / Meeting Content</h2>
        <p>In <strong>Platform Mode</strong> (recommended, default), MeetScribe injects a content script into <code>meet.google.com</code> and <code>teams.microsoft.com</code> that reads the subtitle/caption text already rendered on screen by the platform. This is the same text the user already sees. No audio stream, no video, no other page content is accessed.</p>
        <p>The transcript text:</p>
        <ul>
          <li>Is held in extension memory while the meeting is active</li>
          <li>Is sent to your chosen AI API when you click "Generate Minutes" — see §7</li>
          <li>Is optionally saved to <code>chrome.storage.local</code> as meeting history</li>
          <li>Is never sent to MeetScribe servers</li>
        </ul>

        <h2 id="api-keys">5. API Keys</h2>
        <p>MeetScribe requires your own API key from <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer">Groq</a> or <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio (Gemini)</a>. These keys are:</p>
        <ul>
          <li>Stored exclusively in <code>chrome.storage.local</code> on your device</li>
          <li>Never transmitted to MeetScribe or any party other than the AI provider you chose</li>
          <li>Used only to authenticate the single "generate minutes" request</li>
          <li>Under your sole control — remove them anytime in the extension settings</li>
        </ul>
        <div className="highlight-box">
          <strong>Recommendation:</strong> create a dedicated API key for MeetScribe. If you uninstall the extension, revoke the key in your provider's console to ensure it cannot be reused.
        </div>

        <h2 id="storage">6. Local Storage &amp; Retention</h2>
        <p>All data — transcripts, minutes, settings, API keys — lives exclusively in <code>chrome.storage.local</code> on your device:</p>
        <ul>
          <li>Data is not synced to any cloud service by MeetScribe</li>
          <li>The last 10 meeting sessions are retained; older ones are auto-removed</li>
          <li>Delete all data: Settings → <strong>"Clear all data"</strong> inside the extension</li>
          <li>Uninstalling the extension removes all associated data from the browser permanently</li>
        </ul>

        <h2 id="third-parties">7. Third-Party Services</h2>
        <p>When you click "Generate Minutes", the transcript is sent <strong>directly from your browser</strong> to your configured AI API. MeetScribe does not proxy, log, or store this request.</p>
        <table>
          <thead>
            <tr><th>Service</th><th>Triggered by</th><th>Data sent</th><th>Privacy policy</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>api.groq.com</code></td>
              <td>Clicking "Generate Minutes" with Groq selected</td>
              <td>Meeting transcript text</td>
              <td><a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer">groq.com/privacy-policy</a></td>
            </tr>
            <tr>
              <td><code>generativelanguage.googleapis.com</code></td>
              <td>Clicking "Generate Minutes" with Gemini selected</td>
              <td>Meeting transcript text</td>
              <td><a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer">ai.google.dev/terms</a></td>
            </tr>
            <tr>
              <td>Google Web Speech API (browser)</td>
              <td>Room Mode or Hybrid Mode only, while active</td>
              <td>Microphone audio (handled by browser)</td>
              <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td>
            </tr>
          </tbody>
        </table>
        <p>No other outbound network request is made by MeetScribe.</p>

        <h2 id="permissions">8. Permissions Explained</h2>
        <p>Every permission requested maps directly to the transcription-and-minutes pipeline described in §1.</p>
        <table>
          <thead>
            <tr><th>Permission</th><th>Purpose within the single pipeline</th></tr>
          </thead>
          <tbody>
            <tr><td><code>storage</code></td><td>Save meeting history (last 10 sessions), API keys, and preferences locally on device via <code>chrome.storage.local</code>.</td></tr>
            <tr><td><code>activeTab</code></td><td>Identify whether the active tab is a Google Meet or Teams meeting, so transcription can be initiated on the correct tab.</td></tr>
            <tr><td><code>tabs</code></td><td>Detect navigation events to know when a meeting starts or ends, enabling automatic start/stop of the capture pipeline.</td></tr>
            <tr><td><code>scripting</code></td><td>Inject the caption-reader content script into meeting pages to read subtitle text — the primary input to the transcription pipeline.</td></tr>
            <tr><td><code>downloads</code></td><td>Export the generated meeting minutes as a file to the user's downloads folder when requested.</td></tr>
            <tr><td><code>microphone</code></td><td>Capture speech from in-person participants in Room Mode or Hybrid Mode — a secondary, optional input to the same transcription pipeline. Never requested in Platform Mode.</td></tr>
            <tr><td><code>meet.google.com</code></td><td>Enable caption-reading and meeting-detection on Google Meet. Used only while a meeting is active.</td></tr>
            <tr><td><code>teams.microsoft.com</code></td><td>Enable caption-reading and meeting-detection on Microsoft Teams (web). Used only while a meeting is active.</td></tr>
            <tr><td><code>api.groq.com</code></td><td>Send the completed transcript to Groq's API to generate minutes — triggered only by the user clicking "Generate Minutes" with Groq selected.</td></tr>
            <tr><td><code>generativelanguage.googleapis.com</code></td><td>Send the completed transcript to Google Gemini's API to generate minutes — triggered only by the user clicking "Generate Minutes" with Gemini selected.</td></tr>
          </tbody>
        </table>
        <div className="highlight-box">
          The full source code is publicly auditable at <a href="https://github.com/incconteudos-dotcom/meetscribee" target="_blank" rel="noopener noreferrer">github.com/incconteudos-dotcom/meetscribee</a>. You can verify every network call and permission use directly in the code.
        </div>

        <h2 id="user-rights">9. Your Rights</h2>
        <p>Because all data is stored locally on your device, you have direct control:</p>
        <ul>
          <li><strong>Access &amp; review:</strong> Chrome Settings → Privacy and security → Site data → MeetScribe extension</li>
          <li><strong>Delete all data:</strong> Extension settings → "Clear all data", or uninstall the extension</li>
          <li><strong>Portability:</strong> Export any generated minutes at any time as TXT or PDF</li>
          <li><strong>Revoke microphone:</strong> Chrome Settings → Privacy and security → Site settings → Microphone</li>
        </ul>
        <p>For Brazilian users, see also: <Link to="/lgpd">LGPD compliance page</Link>.</p>

        <h2 id="children">10. Children</h2>
        <p>MeetScribe is not directed at children under 13. We do not knowingly collect any personal data from minors.</p>

        <h2 id="changes">11. Changes</h2>
        <p>This policy is updated when the extension's data practices change. The "Last updated" date at the top reflects the most recent revision. Significant changes will be noted in the <Link to="/changelog">Changelog</Link>.</p>

        <h2 id="contact">12. Contact</h2>
        <p>For questions about this policy or to request data deletion guidance, open an issue on GitHub:</p>
        <p><a href="https://github.com/incconteudos-dotcom/meetscribee/issues" target="_blank" rel="noopener noreferrer">github.com/incconteudos-dotcom/meetscribee/issues</a> — use label <code>privacy</code></p>

        <p>See also: <Link to="/privacidade">Política de Privacidade (PT)</Link> · <Link to="/lgpd">LGPD</Link> · <Link to="/seguranca">Segurança</Link></p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
