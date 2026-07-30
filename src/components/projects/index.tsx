'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'IA no seu desenvolvimento profissional',
    date: '28/AGOSTO | 19H',
    imageSrc: '/images/card1.jpg',
    imageAlt: 'IA',
  },
  {
    id: 2,
    title: 'COMUNICAÇÃO COMO PONTO DE VIRADA',
    date: '20/AGOSTO | 19H30',
    imageSrc: '/images/card2.jpg',
    imageAlt: 'COMUNICAÇÃO',
  },
  {
    id: 3,
    title: 'POSICIONAMENTO PESSOAL COMO ESTRATÉGIA',
    date: '14/AGOSTO | 19H',
    imageSrc: '/images/card3.jpg',
    imageAlt: 'POSICIONAMENTO',
  },
  {
    id: 4,
    title: 'TODA JORNADA COMEÇA COM UM PORQUÊ',
    date: '07/AGOSTO | 19H',
    imageSrc: '/images/card4.jpg',
    imageAlt: 'Begin With Why',
  },
  {
    id: 5,
    title: 'DO ZERO A ESCALA',
    date: '21/JULHO | 19h30',
    imageSrc: '/images/rota1.jpg',
    imageAlt: 'CRESCER',
  },
  {
    id: 6,
    title: 'POSICIONAMENTO DE MARCA',
    date: '28/JULHO | 19H30',
    imageSrc: '/images/rota2.jpg',
    imageAlt: 'CRESCER',
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl shrink-0">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 23vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          draggable={false}
        />
      </div>

      <div className="py-6 text-center">
        <h3 className="text-2xl font-black uppercase leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-zinc-500 font-medium tracking-wide">
          {project.date}
        </p>
      </div>

      <button className="cursor-pointer inline-flex align-center justify-center items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-[#0D2818] hover:text-white">
        Saiba mais
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H9M17 7V15"
          />
        </svg>
      </button>
    </article>
  );
}

export function ProjectsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const didDrag = useRef(false);

  const scroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-item]') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    setIsDragging(true);
    didDrag.current = false;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
  };

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = carouselRef.current;
    if (!el) return;
    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = x - dragStartX.current;

    if (Math.abs(walk) > 5) {
      didDrag.current = true;
    }

    el.scrollLeft = dragScrollLeft.current - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const handleCarouselClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-[#ffffff] text-[#0D2818]">
      <div className="mx-auto px-6 md:px-12">

        <div className="relative w-full flex flex-col items-center text-center mb-12 lg:mb-16 overflow-visible">

          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-10 p-3 text-[#0D2818]/60 hover:text-[#058240] transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12.75l-3.75-3.75M3 9h18" />
            </svg>
          </button>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D2818] mb-4">
            Nossos Projetos
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-[#2A4032]/80 leading-relaxed font-normal">
            Conheça algumas das iniciativas, mentorias e programas de impacto transformador desenvolvidos dentro do ecossistema Rota 14.
          </p>

          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-10 p-3 text-[#0D2818]/60 hover:text-[#058240] transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>

        </div>

        <div
          ref={carouselRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClickCapture={handleCarouselClickCapture}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:-mx-12 md:px-12 select-none [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden ${
            isDragging ? 'cursor-grabbing scroll-auto' : 'cursor-grab scroll-smooth'
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              data-carousel-item
              className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[23%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex sm:hidden justify-center items-center gap-6 mt-6">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-white rounded-full shadow-md border border-zinc-200 text-[#0D2818] active:scale-95 transition-transform cursor-pointer"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-white rounded-full shadow-md border border-zinc-200 text-[#0D2818] active:scale-95 transition-transform cursor-pointer"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}