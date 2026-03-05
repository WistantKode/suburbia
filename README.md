<div align="center">
  <img src="public/images/Z1Nbo5bqstJ98Lho_Suburbia-OG.png" alt="Suburbia Logo" width="120" />
  
  <h1>Suburbia Skateboards</h1>
  
  <p>
    <strong>A high-performance, interactive 3D e-commerce storefront.</strong><br>
    Built with Next.js, WebGL, and static local data for unparalleled speed and autonomy.
  </p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white" alt="Bun" />
  </div>
</div>

<br />

## Overview

Suburbia is an experimental e-commerce frontend demonstrating the integration of real-time 3D rendering within a modern web application architecture. Using React Three Fiber and Next.js App Router, it provides a seamless shopping experience where users can interact with products in 3D space, heavily optimized through static site generation (SSG).

The repository has been recently refactored to operate 100% autonomously, migrating away from remote headless CMS dependencies in favor of a strictly typed, version-controlled local data layer.

## Interface Showcase

The application features advanced scroll-linked animations, parallax effects, and a custom 3D configurator.

<div align="center">
  <img src="public/view/1.hero.webp" alt="Hero Section Overview" width="800" />
  <br /><em>Hero section featuring GSAP animations and dynamic text composition.</em><br /><br />
  
  <img src="public/view/2.latest-drop.webp" alt="Latest Drop Products" width="800" />
  <br /><em>Interactive product grids highlighting the latest deck concepts.</em><br /><br />
  
  <img src="public/view/3.shop-brads.webp" alt="Shop Boards Configurator Entry" width="800" />
  <br /><em>Parallax scrolling interfaces leading to the 3D board customizer.</em><br /><br />
  
  <img src="public/view/4.team.webp" alt="The Skater Team Roster" width="800" />
  <br /><em>The Team roster showcasing distinct masking and overlay effects.</em><br /><br />
  
  <img src="public/view/5.footer.webp" alt="Application Footer" width="800" />
  <br /><em>Clean, responsive application footprint.</em>
</div>

## Technical Architecture

- **Rendering Engine:** WebGL via `three` and `@react-three/fiber` for real-time 3D board customization.
- **Data Layer:** Fully autonomous and decoupled. Dynamic content (slices, product data, customizer options) is managed statically via TypeScript interfaces in `src/data/`.
- **Styling:** Utility-first styling with Tailwind CSS, orchestrated with `clsx` for dynamic responsive states.
- **Animations:** High-performance DOM animations powered by `gsap`.

## Local Development

The project utilizes [Bun](https://bun.sh/) as its primary package manager and runtime for optimal execution speeds.

1. **Install Dependencies:**

   ```bash
   bun install
   ```

2. **Start the Development Server:**

   ```bash
   bun run dev
   ```

3. **Production Build:**

   ```bash
   bun run build
   ```

The application will be running locally at `http://localhost:3000`.
