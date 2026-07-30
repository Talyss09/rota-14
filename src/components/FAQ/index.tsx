'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'Quanto tempo dura a mentoria?',
    answer: 'A mentoria tem duração flexível de acordo com o seu objetivo, variando de ciclos intensivos de 4 semanas a acompanhamentos contínuos de até 6 meses.',
  },
  {
    question: 'Posso me inscrever diretamente pelo site?',
    answer: 'Sim! Basta clicar no botão "Comece Agora" em nosso cabeçalho ou hero section para preencher o formulário inicial.',
  },
  {
    question: 'Os valores das experiências são os mesmos para estudantes?',
    answer: 'Oferecemos condições especiais e bolsas para estudantes cadastrados na rede Rota 14 através de instituições parceiras.',
  },
  {
    question: 'O que está incluído na comunidade?',
    answer: 'Acesso total aos workshops mensais, grupo exclusivo no Discord/WhatsApp, canal de conexões com investidores e sessões de pitch abertas.',
  },
  {
    question: 'Preciso cancelar ou remarcar uma sessão?',
    answer: 'Você pode remarcar qualquer sessão de mentoria com até 24 horas de antecedência diretamente no seu painel do aluno.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          <div className="lg:col-span-6 flex flex-col justify-center">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2818] tracking-tight mb-8 leading-[1.15]">
              Tem dúvidas? <br />
              <span className="text-[#058240]">Nós temos as respostas.</span>
            </h2>

            <div className="space-y-3.5">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-[#F8FAF8] rounded-xl overflow-hidden transition-all duration-200 border border-emerald-900/5 hover:border-emerald-900/10"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-[#0D2818] text-base sm:text-lg pr-4">
                        {item.question}
                      </span>

                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#058240] text-white rotate-45'
                            : 'bg-[#E2EBE4] text-[#058240] group-hover:bg-[#058240] group-hover:text-white'
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 pt-1 text-[#2A4032]/80 text-sm sm:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="lg:col-span-6 relative w-full min-h-200 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/panel-4.jpg"
              alt="Atendimento Rota 14"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}