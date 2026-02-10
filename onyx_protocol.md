# Onyx Team Protocol: B3D Designs

This project adheres to the **Onyx Team Initialization Protocol** to ensure ultra-high performance and architectural integrity.

## 🚀 Performance Mandate
- **60fps Target**: All animations (GSAP, Framer Motion) and 3D interactions (Three.js) must maintain a consistent 60fps on mobile and desktop.
- **Canvas Optimization**: Heavy scrollytelling is offloaded to the HTML5 Canvas to prevent DOM bloat.

## 🤝 Agent Handoff Chain
- **Agent A (UI/UX & Architecture)**: Responsible for the design system, navigation, and core component structure. must verify `design_system.md` before logic implementation.
- **Agent B (3D & Logic)**: Responsible for the scrollytelling engine, Sketchfab integrations, and performance optimization.

## 🛠️ Tech Stack Rules
- **Styling**: Tailwind CSS V4 ONLY. No ad-hoc CSS unless required for complex 3D overlays.
- **Deployment**: Vercel (Production) with `BrowserRouter` for clean URLs.
- **Verification**: Every push must pass the `Onyx Team CI` build check.

---
*Initialized: 2026-02-10*
