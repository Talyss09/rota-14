import Image from 'next/image';
import { Users, Lightbulb, HeartHandshake } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FounderFact {
  text: string;
}

const stats: StatItem[] = [
  {
    icon: <Users className="w-5 h-5 text-[#058240]" />,
    label: 'Jovens Conectados',
    value: '500+',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-[#058240]" />,
    label: 'Projetos em Construção',
    value: '40+',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-[#058240]" />,
    label: 'Rede de Apoio',
    value: '100%',
  },
];


const leftFacts: FounderFact[] = [
  { text: 'Empreendedora' },
  { text: 'Tenho 22 anos' },
  { text: 'Apaixonada por inovação' },
  { text: 'Sempre em busca de conhecimento' },
];

const rightFacts: FounderFact[] = [
  { text: 'Manézinha' },
  { text: 'Nascida e criada na Ilha do Silício, Florianópolis' },
  { text: 'Mãe de pet' },
  { text: 'Sonhando em viajar o mundo' },
];

export function AboutSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white text-[#0D2818]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">

          <div className="lg:col-span-6 relative flex justify-center lg:justify-start min-h-90">
            <div className="absolute top-0 left-0 w-[55%] h-75 sm:h-85 rounded-xl overflow-hidden -rotate-2 shadow-sm transition-transform hover:rotate-0 duration-500">
              <Image
                src="/images/panel-6.jpg"
                alt="Comunidade Rota 14"
                sizes="(max-width: 1024px) 55vw, 28vw"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-12 right-4 w-[60%] h-70 sm:h-80 rounded-xl overflow-hidden rotate-2 shadow-md transition-transform hover:rotate-0 duration-500 border-2 border-white">
              <Image
                src="/images/panel-8.jpg"
                alt="Mentoria Rota 14"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#058240] mb-3">
              Quem Somos
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-snug">
              Construção coletiva,<br />
              <span className="text-[#058240]">sempre em movimento.</span>
            </h2>

            <p className="text-base text-[#2A4032]/80 leading-relaxed mb-4">
              A Rota 14 é o ponto de encontro de jovens que não querem esperar o futuro acontecer. Somos uma comunidade de empreendedores e criadores da Gen Z construindo projetos reais.
            </p>

            <p className="text-base text-[#2A4032]/80 leading-relaxed">
              Através de trocas transparentes e mentorias práticas, garantimos que nenhuma boa ideia fique engavetada por falta de direcionamento.
            </p>
          </div>

        </div>

  <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="relative flex flex-col items-center">

            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#058240] tracking-wide mb-6 lg:mb-0 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-20">
              Rafaella
            </span>

            <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 w-full pt-10">

              <div className="flex flex-col gap-8 items-end text-right">
                {leftFacts.map((fact, idx) => (
                  <p
                    key={idx}
                    className="text-xs font-semibold uppercase tracking-wide text-[#2A4032]/80 max-w-50 transition-all duration-300 ease-in-out cursor-default hover:text-[#058240] hover:scale-110 active:scale-110 active:text-[#058240]"
                  >
                    {fact.text}
                  </p>
                ))}
              </div>

              <div className="relative w-55 flex flex-col items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="0 0 220 320"
                  aria-hidden="true"
                >
                  {leftFacts.map((_, idx) => {
                    const y = 40 + idx * 78;
                    return (
                      <line
                        key={`l-${idx}`}
                        x1="0"
                        y1={y}
                        x2="70"
                        y2="160"
                        stroke="#058240"
                        strokeWidth="1"
                        strokeOpacity="0.35"
                      />
                    );
                  })}
                  {rightFacts.map((_, idx) => {
                    const y = 40 + idx * 78;
                    return (
                      <line
                        key={`r-${idx}`}
                        x1="220"
                        y1={y}
                        x2="150"
                        y2="160"
                        stroke="#058240"
                        strokeWidth="1"
                        strokeOpacity="0.35"
                      />
                    );
                  })}
                </svg>

                <div className="relative group transition-all duration-500 ease-in-out cursor-pointer hover:scale-125 active:scale-125">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-[#058240]/20 z-10 transition-shadow duration-500 group-hover:shadow-2xl group-active:shadow-2xl">
                    <Image
                      src="/images/panel-1.jpg"
                      alt="Rafaella, fundadora da Rota 14"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Subtle pulsing glow on hover/active */}
                  <div className="absolute inset-0 rounded-full bg-[#058240]/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="flex flex-col gap-8 items-start text-left">
                {rightFacts.map((fact, idx) => (
                  <p
                    key={idx}
                    className="text-xs font-semibold uppercase tracking-wide text-[#2A4032]/80 max-w-50 transition-all duration-300 ease-in-out cursor-default hover:text-[#058240] hover:scale-110 active:scale-110 active:text-[#058240]"
                  >
                    {fact.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 lg:hidden w-full">

              <div className="relative group transition-all duration-500 ease-in-out cursor-pointer hover:scale-115 active:scale-115">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-[#058240]/20 transition-shadow duration-500 group-hover:shadow-xl group-active:shadow-xl">
                  <Image
                    src="/images/panel-1.jpg"
                    alt="Rafaella, fundadora da Rota 14"
                    fill
                    sizes="(max-width: 640px) 144px, 160px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#058240]/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 w-full max-w-md px-4">
                {[...leftFacts, ...rightFacts].map((fact, idx) => (
                  <p
                    key={idx}
                    className="text-xs font-semibold uppercase tracking-wide text-[#2A4032]/80 text-center transition-all duration-300 ease-in-out hover:text-[#058240] hover:scale-105 active:scale-105 active:text-[#058240]"
                  >
                    {fact.text}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

        <div className="pt-12 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-2">
                <div className="p-3 rounded-full bg-[#F4F6F4] shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-[#0D2818]">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-medium tracking-wider text-[#2A4032]/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}