'use client';

import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  offset: string;
  mobileClass?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/panel-7.jpg',
    alt: 'Person working outdoors on a laptop',
    offset: 'md:translate-y-0',
  },
  {
    id: 2,
    src: '/images/panel-3.jpg',
    alt: 'Team discussing projects together',
    offset: 'md:-translate-y-6',
  },
  {
    id: 3,
    src: '/images/panel-4.jpg',
    alt: 'Two people aligning on ideas on the grass',
    offset: 'md:translate-y-4',
  },
  {
    id: 4,
    src: '/images/panel-8.jpg',
    alt: 'Team members smiling in the city',
    offset: 'md:-translate-y-8',
  },
  {
    id: 5,
    src: '/images/panel-6.jpg',
    alt: 'Entrepreneur working with a laptop in the park',
    offset: 'md:-translate-y-1',
    mobileClass: 'col-span-2 justify-self-center w-1/2 md:w-full md:col-span-1',
  },
];

export function Hero() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0D2818]">
            Acelere suas ideias na <span className="text-[#058240]">Rota 14</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Um espaço de aceleração pessoal e profissional que transforma ideias em realidade por meio de mentorias, workshops e conexões reais de inovação.
          </p>

          <button
            className="cursor-pointer group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 font-medium shadow-xs transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:border-black active:scale-95 text-[#058240] focus:outline-none focus:ring-2 focus:ring-[#058240] focus:ring-offset-2"
          >
            Faça parte da Rota 14
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 max-w-md md:max-w-none mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative aspect-square w-full rounded-3xl overflow-hidden shadow-xs border border-black/5 transition-all duration-300 ${image.offset} ${image.mobileClass || ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}