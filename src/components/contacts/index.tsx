'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    cityState: '',
    phone: '',
    stage: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Dados enviados:', formData);
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        age: '',
        cityState: '',
        phone: '',
        stage: '',
        message: '',
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('idle');
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre a Rota 14 e como fazer parte da comunidade.'
  );
  const whatsappUrl = `https://wa.me/554891512003?text=${whatsappMessage}`;

  return (
    <section id="contact" className="w-full py-16 lg:py-28 bg-[#F4F6F4] text-[#0D2818]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D2818] leading-[1.12]">
                Vamos acelerar <br />
                o seu <span className="text-[#058240]">futuro.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 lg:mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0D2818] text-white flex items-center justify-center hover:bg-[#058240] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/rota14.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0D2818] text-white flex items-center justify-center hover:bg-[#058240] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/rota-14/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0D2818] text-white flex items-center justify-center hover:bg-[#058240] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-sm text-[#0D2818] mb-2">Contato</h3>
                <p className="text-sm text-[#2A4032]/80 leading-relaxed">+55 (48) 9151-2003</p>
                <p className="text-sm text-[#2A4032]/80 leading-relaxed">contato@rota14.com.br</p>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-[#0D2818] mb-2">Comunidade</h3>
                <p className="text-sm text-[#2A4032]/80 leading-relaxed">Ecossistema de Inovação</p>
                <p className="text-sm text-[#2A4032]/80 leading-relaxed">Brasil</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp / Telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-1">
                  <input
                    type="number"
                    placeholder="Idade"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="sm:col-span-2">
                  <input
                    type="text"
                    placeholder="Cidade / Estado"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className={`w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base focus:outline-none focus:border-[#058240] transition-colors ${
                    formData.stage ? 'text-[#0D2818]' : 'text-[#2A4032]/50'
                  }`}
                  required
                  disabled={status === 'loading'}
                >
                  <option value="" disabled hidden>
                    Em qual fase você está hoje?
                  </option>
                  <option value="ideacao" className="text-[#0D2818]">Ideação (Tenho uma ideia)</option>
                  <option value="inicial" className="text-[#0D2818]">Fase Inicial (Começando agora)</option>
                  <option value="crescimento" className="text-[#0D2818]">Em Crescimento (Já atuando)</option>
                  <option value="consolidado" className="text-[#0D2818]">Consolidado (Buscando expansão)</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Conte um pouco sobre você e seus objetivos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0D2818]/40 py-2.5 text-base text-[#0D2818] placeholder-[#2A4032]/50 focus:outline-none focus:border-[#058240] transition-colors resize-none"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                <div className="h-6">
                  {status === 'success' && (
                    <p className="text-[#058240] font-medium text-sm flex items-center gap-1.5 animate-fadeIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto min-w-35 bg-[#0D2818] hover:bg-[#058240] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}