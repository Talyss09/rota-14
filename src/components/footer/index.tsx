'use client';

import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado por se inscrever, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#0D2818] text-white pt-16 pb-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-800/30 items-start">
          
          <div className="lg:col-span-5 flex align-center flex-col justify-center h-[100%]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-[#16DB65]" />
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Rota 14
              </span>
            </div>
            <p className="text-[#E2EBE4]/80 text-base max-w-md leading-relaxed font-normal mb-8">
              Transformando ideias em negócios sustentáveis por meio de mentorias, conexões estratégicas e aceleração contínua dentro do nosso ecossistema.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#1B432C]/40 p-8 rounded-3xl border border-emerald-800/30">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Fique por dentro das novidades
            </h3>
            <p className="text-[#E2EBE4]/70 text-sm mb-6">
              Receba conteúdos sobre inovação, convites para eventos e oportunidades de aceleração diretamente na sua caixa de entrada.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-[#0D2818] border border-emerald-800/50 rounded-xl px-5 py-3 text-sm text-white placeholder-[#E2EBE4]/40 focus:outline-none focus:border-[#16DB65] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#16DB65] hover:bg-[#12C75B] text-[#0D2818] px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer shrink-0"
              >
                Inscrever-se
              </button>
            </form>
          </div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-emerald-800/30">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16DB65] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Mentores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16DB65] mb-4">
              Programas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Aceleração</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Imersões</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Conexão com Investimento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16DB65] mb-4">
              Comunidade
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Seja um Mentor</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Seja um Parceiro</a></li>
              <li><a href="#" className="text-[#E2EBE4]/80 hover:text-white transition-colors">Comunidade Discord</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16DB65] mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E2EBE4]/80">
              <li>São Paulo - SP, Brasil</li>
              <li>contato@rota14.com.br</li>
              <li>+55 (11) 99999-0000</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#E2EBE4]/60 gap-4">
          <p>© {new Date().getFullYear()} Rota 14. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}