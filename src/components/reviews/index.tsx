import Image from 'next/image';

interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
  platform: 'LinkedIn' | 'Google' | 'Twitter' | 'Instagram';
  highlights: string[];
}

const row1Reviews: Review[] = [
  {
    id: 1,
    text: 'Mentores incríveis que realmente escutam, entendem e ajudam a tirar o projeto do papel com direcionamento estratégico e prático.',
    author: 'Gabrielle Williams',
    role: 'Fundadora da StartBio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    platform: 'LinkedIn',
    highlights: ['Mentoria Prática', 'Acompanhamento'],
  },
  {
    id: 2,
    text: 'Superou todas as nossas expectativas! As imersões e o suporte do ecossistema Rota 14 nos deram a clareza que faltava no modelo de negócios.',
    author: 'Samantha Johnson',
    role: 'CEO & Co-fundadora na EcoTech',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    platform: 'Google',
    highlights: ['Clareza de Negócio', 'Imersões'],
  },
  {
    id: 3,
    text: 'A capacidade de conectar projetos inovadores a parceiros estratégicos é incomparável. Uma rede de valor inestimável.',
    author: 'Isabella Rodriguez',
    role: 'Líder de Inovação na ABC Corp',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    platform: 'Twitter',
    highlights: ['Networking', 'Parcerias'],
  },
  {
    id: 4,
    text: 'Um ambiente dinâmico onde aprendemos a executar ideias de forma rápida e sustentável. Recomendo fortemente para qualquer empreendedor.',
    author: 'Lucas Mendes',
    role: 'Co-fundador da NextLevel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    platform: 'LinkedIn',
    highlights: ['Agilidade', 'Execução'],
  },
];

const row2Reviews: Review[] = [
  {
    id: 5,
    text: 'Do conceito à execução, a visão prática da Rota 14 não tem limites. Um verdadeiro divisor de águas na nossa jornada.',
    author: 'Natalie Martinez',
    role: 'Diretora de Operações na AgroGreen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    platform: 'Instagram',
    highlights: ['Visão Prática', 'Resultados'],
  },
  {
    id: 6,
    text: 'Uma comunidade inspiradora e acolhedora que entrega resultados excepcionais em cada ciclo de mentoria e workshop.',
    author: 'Victoria Thompson',
    role: 'Head de Produto na Soluções Tech',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    platform: 'LinkedIn',
    highlights: ['Comunidade', 'Workshops'],
  },
  {
    id: 7,
    text: 'A abordagem estratégica das conexões no ecossistema transformou totalmente a tração do nosso projeto de impacto.',
    author: 'John Peter',
    role: 'Fundador da EduImpacto',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    platform: 'Google',
    highlights: ['Estratégia', 'Tração'],
  },
  {
    id: 8,
    text: 'Experiência transformadora. O networking e os conhecimentos práticos gerados na comunidade nos deram a tração necessária.',
    author: 'Camila Rocha',
    role: 'Product Manager na InovaHub',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    platform: 'Twitter',
    highlights: ['Experiência', 'Suporte'],
  },
];

function SocialBadge({ platform }: { platform: Review['platform'] }) {
  const badgeColors: Record<Review['platform'], string> = {
    LinkedIn: 'bg-[#0A66C2]/10 text-[#0A66C2]',
    Google: 'bg-[#EA4335]/10 text-[#EA4335]',
    Twitter: 'bg-[#1DA1F2]/10 text-[#1DA1F2]',
    Instagram: 'bg-[#E4405F]/10 text-[#E4405F]',
  };

  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${badgeColors[platform]}`}>
      {platform}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-85 sm:w-100 flex-none bg-[#F4F6F4] border border-emerald-900/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#058240] text-3xl font-serif font-bold leading-none select-none">
            “
          </span>
          <SocialBadge platform={review.platform} />
        </div>

        <p className="text-[#0D2818] text-sm sm:text-base font-medium leading-relaxed mb-5">
          {review.text}
        </p>

        <div className="mb-6 flex flex-wrap gap-1.5">
          <span className="text-[10px] uppercase font-bold text-[#2A4032]/50 w-full mb-0.5">
            Diferenciais avaliados:
          </span>
          {review.highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold bg-[#058240]/10 text-[#058240] px-2.5 py-0.5 rounded-md"
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3.5 pt-3 border-t border-emerald-900/10">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
          <Image
            src={review.avatar}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#0D2818] leading-snug">
            {review.author}
          </h4>
          <p className="text-xs text-[#2A4032]/70 font-normal">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2818] tracking-tight leading-[1.15]">
          O que dizem sobre <br />
          a nossa <span className="text-[#058240]">presença.</span>
        </h2>
      </div>

      <div className="relative w-full space-y-6">
        
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-left">
            {[...row1Reviews, ...row1Reviews].map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-right">
            {[...row2Reviews, ...row2Reviews].map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}