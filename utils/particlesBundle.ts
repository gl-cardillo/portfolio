import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadInteractivityPlugin } from "@tsparticles/plugin-interactivity";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadParticlesCollisionsInteraction } from "@tsparticles/interaction-particles-collisions";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

export async function loadParticlesPlugins(engine: Engine) {
  await Promise.all([loadBasic(engine), loadInteractivityPlugin(engine)]);
  await Promise.all([
    loadParticlesLinksInteraction(engine),
    loadParticlesCollisionsInteraction(engine),
    loadExternalGrabInteraction(engine),
    loadExternalPushInteraction(engine),
  ]);
}
