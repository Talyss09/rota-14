# 🚀 Rota 14 — Plataforma de Aceleração & Ecossistema Gen Z

O **Rota 14** é um espaço de aceleração pessoal e profissional que conecta jovens empreendedores e criadores da Gen Z. O ecossistema transforma ideias em projetos reais por meio de mentorias, workshops, eventos e trocas práticas de conhecimento.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta:

* **[Next.js 16](https://nextjs.org/)** (App Router)
* **[React 19](https://react.dev/)**
* **[TypeScript 6](https://www.typescriptlang.org/)**
* **[Tailwind CSS v4](https://tailwindcss.com/)**
* **[Lucide React](https://lucide.dev/)** (Iconografia)
* **[Fontsource](https://fontsource.org/)** (Otimização de Tipografia)

---

## 🎨 Paleta de Cores Oficial

| Cor | Hex | Aplicação |
| :--- | :--- | :--- |
| **Verde Rota 14** | `#058240` | Botões primários, destaques e acentos |
| **Verde Hover** | `#046833` | Estados de hover e botões ativos |
| **Escuro Principal** | `#0D2818` | Títulos, textos principais e fundos contrastantes |
| **Texto Secundário** | `#2A4032` | Parágrafos e rótulos de apoio |
| **Superfície Suave** | `#F4F6F4` | Cards, fundos de seção e tags |

---

## 💻 Como Rodar o Projeto

### Pré-requisitos
* **Node.js** (versão 20.x ou superior recomendada)
* **npm**, **pnpm** ou **yarn**


### Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/rota14.git](https://github.com/seu-usuario/rota14.git)
cd rota14


## ⚙️ Scripts Disponíveis

* `npm run dev` — Inicia o ambiente de desenvolvimento Next.js.
* `npm run build` — Cria a versão otimizada de produção.
* `npm run start` — Executa o servidor de produção.
* `npm run lint` — Executa a verificação estática do ESLint.

---

## 📂 Estrutura de Pastas

```text
rota14/
├── public/
│   └── images/          # Assets estáticos, banners, cards e retratos
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css  # Configuração de temas, animações e Tailwind v4
│   │   ├── layout.tsx   # Shell global com fontes e metadados
│   │   └── page.tsx     # Landing Page principal montada com as seções
│   └── components/      # Componentes reutilizáveis
│       ├── AboutSection.tsx      # Seção "Quem Somos" / Rafaella
│       ├── Hero.tsx              # Banner principal + Galeria mobile/desktop
│       ├── ProjectsCarousel.tsx  # Carrossel interativo de projetos com drag
│       ├── ServicesSection.tsx   # Grid interativo de serviços / mentorias
│       └── ...
├── .eslintrc.json
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md