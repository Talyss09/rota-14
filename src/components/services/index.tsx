'use client';

import {
  Users,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Rocket,
  Handshake,
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Users,
    title: 'Mentorias 1:1 & em Grupo',
    description:
      'Direcionamento prático com quem já vivenciou os desafios do mercado para acelerar suas decisões e evitar erros comuns.',
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Workshops & Bootcamp',
    description:
      'Aprenda mão na massa sobre validação de ideias, modelos de negócios, prototipagem e estratégias de tração.',
  },
  {
    id: 3,
    icon: Handshake,
    title: 'Networking & Comunidade',
    description:
      'Conecte-se com jovens da Gen Z que compartilham a mesma sede de construir, colaborar e criar projetos de impacto.',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Ecossistema de Inovação',
    description:
      'Acesso direto a hubs, eventos do setor, startups parceiras e investidores para abrir portas no mercado.',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Pitch & Projetos Práticos',
    description:
      'Espaço para apresentar suas ideias, receber feedbacks construtivos e transformar protótipos em negócios reais.',
  },
  {
    id: 6,
    icon: Lightbulb,
    title: 'Troca & Construção Coletiva',
    description:
      'Compartilhe desafios diários, encontre cofundadores para sua startup e aprenda com a jornada de outros jovens.',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group relative h-[280px] overflow-hidden border-b border-r border-emerald-900/10 bg-[#F4F6F4] px-8 py-10 transition-colors duration-300 hover:bg-[#EBF7EE] cursor-pointer">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:opacity-0">
        <Icon
          className="mb-6 h-12 w-12 text-[#058240]"
          strokeWidth={1.5}
        />
        <span className="text-sm font-bold uppercase tracking-wide text-[#0D2818]">
          {service.title}
        </span>
      </div>

      <div className="absolute inset-0 flex translate-y-6 flex-col items-center justify-center px-8 text-center opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0D2818]">
          {service.title}
        </span>
        <span className="mb-4 block h-[2px] w-8 bg-[#058240]" />
        <p className="mb-6 text-sm leading-relaxed text-[#2A4032]/80">
          {service.description}
        </p>
        <span className="border-t border-[#058240]/20 pt-3 text-xs font-bold uppercase tracking-widest text-[#058240] transition-colors group-hover:text-[#046833]">
          Saber mais
        </span>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 text-[#0D2818]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-0 px-6 sm:px-8 lg:grid-cols-4 lg:px-12">
        
        <div className="flex flex-col justify-center py-8 lg:col-span-1 lg:border-r lg:border-emerald-900/10 lg:pr-12">
          
          <span className="inline-block w-max px-3.5 py-1 rounded-full bg-[#058240]/10 text-[#058240] font-semibold text-xs tracking-wide mb-4">
            A Experiência Rota 14
          </span>

          <h2 className="mb-6 font-serif text-3xl font-extrabold leading-tight text-[#0D2818] sm:text-4xl">
            Como te Ajudamos
          </h2>

          <p className="mb-4 font-semibold text-[#058240] text-sm">
            Tire suas ideias do papel com suporte, orientação e conexões reais.
          </p>

          <span className="mb-6 block h-[2px] w-10 bg-[#058240]" />

          <p className="mb-8 text-sm leading-relaxed text-[#2A4032]/80 font-normal">
            Combinamos aprendizado prático, mentorias direcionadas e uma comunidade 
            engajada para ajudar a nova geração de empreendedores a construir 
            projetos com propósito e impacto.
          </p>

          <a
            href="#contato"
            className="inline-block self-start rounded-full border-2 border-[#058240] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#058240] transition-all duration-300 hover:bg-[#058240] hover:text-white"
          >
            Fazer Parte da Rede
          </a>
        </div>

        <div className="grid grid-cols-1 border-t border-emerald-900/10 sm:grid-cols-2 lg:col-span-3 lg:border-t-0 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
      </div>
    </section>
  );
}