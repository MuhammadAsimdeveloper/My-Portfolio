"use client";

import { useEffect } from "react";

export default function HeroSceneMotion() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".hero-visual");
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const update = () => {
      scene.style.setProperty("--scene-x", `${(nextX * 12).toFixed(2)}px`);
      scene.style.setProperty("--scene-y", `${(nextY * 10).toFixed(2)}px`);
      scene.style.setProperty("--scene-orb-x", `${(nextX * -5).toFixed(2)}px`);
      scene.style.setProperty("--scene-orb-y", `${(nextY * -4).toFixed(2)}px`);
      scene.style.setProperty("--scene-halo-x", `${(nextX * 7).toFixed(2)}px`);
      scene.style.setProperty("--scene-halo-y", `${(nextY * 6).toFixed(2)}px`);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect();
      nextX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      nextY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const reset = () => {
      nextX = 0;
      nextY = 0;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    scene.addEventListener("pointermove", onPointerMove, { passive: true });
    scene.addEventListener("pointerleave", reset);
    return () => {
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
      scene.style.removeProperty("--scene-x");
      scene.style.removeProperty("--scene-y");
      scene.style.removeProperty("--scene-orb-x");
      scene.style.removeProperty("--scene-orb-y");
      scene.style.removeProperty("--scene-halo-x");
      scene.style.removeProperty("--scene-halo-y");
    };
  }, []);

  return null;
}
