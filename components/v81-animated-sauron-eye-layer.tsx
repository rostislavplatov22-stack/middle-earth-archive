"use client";

export default function V81AnimatedSauronEyeLayer() {
  return (
    <div className="v81-eye-layer" aria-hidden="true">
      <div className="v81-sauron-eye-orbit" />
      <div className="v81-sauron-eye-aura" />
      <div className="v81-sauron-eye-core">
        <div className="v81-sauron-eye-iris" />
        <div className="v81-sauron-eye-pupil" />
        <div className="v81-sauron-eye-flare" />
      </div>
      <div className="v81-sauron-eye-particles v81-p1" />
      <div className="v81-sauron-eye-particles v81-p2" />
      <div className="v81-sauron-eye-particles v81-p3" />
    </div>
  );
}
