import React from 'react';

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80">
        <div className="fixed-gradient" />
      </div>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Automatización Inteligente para MYPES
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Potencia tu negocio con agentes de IA especializados que trabajan 24/7 para ayudarte a tomar mejores decisiones y aumentar tus ingresos.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="btn-primary">
              Comienza Gratis
            </a>
            <a href="#agents" className="text-sm font-semibold leading-6 text-gray-900">
              Conoce nuestros agentes <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)]">
        <div className="fixed-gradient-bottom" />
      </div>
    </div>
  );
} 