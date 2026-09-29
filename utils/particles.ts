import type { ISourceOptions } from "@tsparticles/engine";

type Theme = "light" | "dark";

const colors: Record<Theme, { background: string; links: string }> = {
  dark: { background: "#000000", links: "#ffffff" },
  light: { background: "#ffffff", links: "#000000" },
};

export function particlesOptions(
  theme: Theme,
  isSmallScreen: boolean,
): ISourceOptions {
  return {
    background: { color: { value: colors[theme].background } },
    fullScreen: false,
    fpsLimit: 60,
    resize: { enable: true },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        push: { quantity: 4 },
      },
    },
    particles: {
      paint: { fill: { enable: true, color: { value: "#000000" } } },
      links: {
        color: colors[theme].links,
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: { enable: true, width: 800, height: 800 },
        value: isSmallScreen ? 60 : 150,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };
}
