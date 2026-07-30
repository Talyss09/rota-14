'use client';

import { Leaf, Users, Lightbulb } from 'lucide-react';

export function WhyChooseUsSection() {
  const values = [
    {
      icon: Leaf,
      title: 'Crescimento Natural',
      description:
        'Impulsionamos seu desenvolvimento pessoal e profissional através de mentorias personalizadas e aprendizado orgânico na prática.',
    },
    {
      icon: Users,
      title: 'Conexões Reais',
      description:
        'Construímos redes autênticas com líderes de mercado e jovens talentos para criar oportunidades duradouras e colaborativas.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Sustentável',
      description:
        'Capacitamos você com estratégias modernas e ferramentas focadas em impacto de longo prazo e crescimento responsável.',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F8FAFAF7] text-[#0D2818]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2A4032]/70 uppercase mb-3 block">
          NOSSOS VALORES
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0D2818] tracking-tight mb-4">
          Por que a Rota 14?
        </h2>

        <div className="flex justify-center mb-16">
          <div className="w-2.5 h-2.5 rounded-full bg-[#058240]/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-start">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-6 p-3 rounded-full text-[#0D2818] group-hover:text-[#058240] transition-colors duration-300">
                  <Icon className="w-12 h-12 stroke-[1.25]" />
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0D2818] mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#2A4032]/80 leading-relaxed max-w-sm">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}