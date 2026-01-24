import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  const recipientEmail = 'jamesleonardo230@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return setStatus('error');

    setStatus('sending');

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: recipientEmail, name, email, message }),
        });
        if (!res.ok) throw new Error('send-failed');
        setStatus('sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        // fallback to mailto
        const subject = encodeURIComponent(`Contacto desde portafolio: ${name || email}`);
        const body = encodeURIComponent(message + '\n\n' + (name ? `Nombre: ${name}\n` : '') + `Email: ${email}`);
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        setStatus('sent');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <form onSubmit={handleSubmit} className="order-2 md:order-1 w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <label className="block text-xs font-mono text-gray-600 dark:text-gray-300 mb-2">Nombre</label>
            <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-2 p-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded" placeholder="Tu nombre (opcional)" />

            <label className="block text-xs font-mono text-gray-600 dark:text-gray-300 mb-2">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="w-full mb-2 p-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded" placeholder="tu@correo.com" />

            <label className="block text-xs font-mono text-gray-600 dark:text-gray-300 mb-2">Mensaje</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} required rows={3} className="w-full mb-3 p-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded" placeholder="Escribe tu mensaje..."></textarea>

            <div className="flex items-center justify-between">
              <button type="submit" disabled={status === 'sending'} className="px-3 py-2 bg-black text-white font-mono text-sm rounded hover:opacity-90 transition">
                {status === 'sending' ? 'Enviando...' : 'Enviar'}
              </button>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
                {status === 'sent' && 'Enviado ✓'}
                {status === 'error' && 'Error al enviar'}
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-400">Si quieres envío directo al correo sin configurar, dejar `VITE_CONTACT_ENDPOINT` vacío y se abrirá tu cliente de correo. Mensajes irán a {recipientEmail}.</p>
          </form>

          <div className="order-1 md:order-2 w-full md:w-2/3">
            <div className="mb-6 border-b border-gray-700 dark:border-gray-800 pb-6">
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                Aviso Legal
              </h3>
              <div className="space-y-4 text-sm md:text-base font-mono text-gray-400 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p>
                  El código fuente y el diseño de este portafolio son propiedad intelectual
                  de James Leonardo Martínez Castañeda.
                </p>
                <p>
                  No está permitido su uso, copia, modificación o redistribución sin
                  autorización expresa y por escrito del autor.
                </p>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  © {currentYear} James Leonardo Martínez Castañeda. Todos los derechos reservados.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-mono text-gray-400 dark:text-gray-300 mb-2 transition-colors duration-300">
                Diseñado y desarrollado con atención al detalle
              </p>
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4">
                Inspirado en el minimalismo técnico y la experimentación visual
              </p>

              <div className="mt-2 flex items-center gap-6">
                <a
                  href="https://github.com/JamesLMC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/3170411437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-leonardo-martinez-casta%C3%B1eda-a84745346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${recipientEmail}`}
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
