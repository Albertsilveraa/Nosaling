import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white">
      {/* Background Elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80">
        <div className="fixed-gradient opacity-30" />
      </div>
      
            {/* Main Content */}      <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:flex lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-0">
          
          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
          >
            <CheckIcon className="h-4 w-4 mr-2" />
            +500 MYPES ya aumentaron sus ventas 30%
          </motion.div>

          {/* Main Headline - H1 */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight"
          >
            Triplica tus ventas con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              IA especializada
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-gray-600 max-w-lg"
          >
            5 agentes de IA trabajando 24/7 para automatizar marketing, ventas, logística y análisis de tu negocio.
          </motion.p>

          {/* Benefit Points */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col space-y-3"
          >
            {[
              'Setup en 5 minutos',
              'Sin conocimientos técnicos',
              'Resultados desde el día 1'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-base font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Primary CTA Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-primary to-blue-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-primary/20 w-full sm:w-auto">
              <span className="relative z-10 flex items-center">
                Empezar Gratis Ahora
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            {/* Secondary CTA */}
            <button className="group inline-flex items-center text-base font-semibold text-gray-700 hover:text-primary transition-colors duration-200">
              <span className="border-b border-gray-300 group-hover:border-primary transition-colors">
                Ver Demo en Vivo
              </span>
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center text-sm text-gray-500"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ring-2 ring-white flex items-center justify-center text-white text-xs font-semibold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="ml-3">
              <strong className="text-gray-900">500+</strong> empresarios ya confiaron en nosotros
            </span>
          </motion.div>

          {/* Urgency & Risk Reversal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-2 w-2 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-amber-800">
                  <strong>Oferta limitada:</strong> Primeros 100 usuarios obtienen setup gratuito (valor $500)
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  ✅ 30 días gratis • ✅ Sin permanencia • ✅ Garantía de resultados
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Support - Right Side */}        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-2xl lg:flex-none">          <div className="flex-none w-full max-w-xl mx-auto lg:max-w-none">            <motion.div              initial={{ opacity: 0, scale: 0.95 }}              animate={{ opacity: 1, scale: 1 }}              transition={{ duration: 0.8, delay: 0.3 }}              className="relative"            >              {/* Dashboard Mockup */}              <div className="w-full rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl ring-1 ring-gray-900/10">                {/* Browser Header */}                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">                  <div className="h-3 w-3 rounded-full bg-red-400"></div>                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>                  <div className="h-3 w-3 rounded-full bg-green-400"></div>                  <span className="ml-3 text-xs font-semibold text-gray-700">NOSALING Dashboard</span>                  <div className="ml-auto">                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>                  </div>                </div>                                <div className="px-4 py-5">                  {/* Stats Grid */}                  <div className="grid grid-cols-3 gap-3 mb-5">                    {[                      { label: 'Ventas Hoy', value: '+45%', color: 'text-green-600', bg: 'bg-green-50' },                      { label: 'Leads Gen.', value: '127', color: 'text-blue-600', bg: 'bg-blue-50' },                      { label: 'ROI Camp.', value: '320%', color: 'text-purple-600', bg: 'bg-purple-50' }                    ].map((stat, index) => (                      <div key={index} className={`${stat.bg} rounded-lg p-3 border border-opacity-20`}>                        <p className="text-xs text-gray-600 truncate font-medium">{stat.label}</p>                        <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>                      </div>                    ))}                  </div>                  {/* Mini Chart */}                  <div className="mb-5">                    <div className="flex items-center justify-between mb-2">                      <span className="text-xs font-semibold text-gray-700">Ventas Últimos 7 días</span>                      <span className="text-xs text-green-600 font-semibold">↗ +23%</span>                    </div>                    <div className="h-20 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-3 flex items-end justify-between">                      {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (                        <div key={index} className="flex flex-col items-center">                          <div                             className="w-2 bg-gradient-to-t from-primary to-blue-500 rounded-sm"                            style={{ height: `${(height / 100) * 50}px` }}                          ></div>                        </div>                      ))}                    </div>                  </div>                  {/* Canales de Atención */}                  <div className="space-y-3">                    <h4 className="text-xs font-semibold text-gray-700 border-b border-gray-100 pb-1">                      Canales Activos                    </h4>                                        {/* WhatsApp Channel */}                    <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg border border-green-100">                      <div className="flex items-center space-x-2">                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">                            <path d="M12.017 2.5c-5.517 0-10.006 4.48-10.006 10.017 0 1.763.456 3.417 1.257 4.848L1.515 21.5l4.188-1.715c1.384.744 2.965 1.171 4.668 1.171 5.516 0 10.006-4.481 10.006-10.006C20.377 4.98 15.896.5 12.017.5zm0 18.013c-1.467 0-2.894-.387-4.134-1.12l-.296-.177-3.067 1.256 1.298-3.005-.194-.309a7.987 7.987 0 01-1.261-4.41c0-4.42 3.598-8.006 8.017-8.006s8.006 3.598 8.006 8.006-3.587 8.006-8.006 8.006z"/>                          </svg>                        </div>                        <div>                          <p className="text-xs font-medium text-gray-800">WhatsApp</p>                          <p className="text-xs text-green-600">23 mensajes hoy</p>                        </div>                      </div>                      <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>                    </div>                    {/* Social Media Channels */}                    <div className="grid grid-cols-2 gap-2">                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-100">                        <div className="flex items-center space-x-2">                          <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>                            </svg>                          </div>                          <div>                            <p className="text-xs font-medium text-gray-800">Facebook</p>                            <p className="text-xs text-blue-600">+12 leads</p>                          </div>                        </div>                      </div>                                            <div className="flex items-center justify-between p-2 bg-pink-50 rounded-lg border border-pink-100">                        <div className="flex items-center space-x-2">                          <div className="w-5 h-5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded flex items-center justify-center">                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>                            </svg>                          </div>                          <div>                            <p className="text-xs font-medium text-gray-800">Instagram</p>                            <p className="text-xs text-pink-600">+8 leads</p>                          </div>                        </div>                      </div>                    </div>                                        {/* AI Agent Status */}                    <div className="mt-3 p-2 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg border border-primary/20">                      <div className="flex items-center justify-between">                        <div className="flex items-center space-x-2">                          <div className="w-5 h-5 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">                            <span className="text-xs text-white font-bold">AI</span>                          </div>                          <div>                            <p className="text-xs font-semibold text-gray-800">5 Agentes Activos</p>                            <p className="text-xs text-primary">Trabajando 24/7</p>                          </div>                        </div>                        <div className="flex space-x-1">                          {[...Array(5)].map((_, i) => (                            <div key={i} className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></div>                          ))}                        </div>                      </div>                    </div>                  </div>                </div>              </div>                            {/* Floating Elements */}              <motion.div                animate={{ y: [0, -10, 0] }}                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}                className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow-lg"              >                ¡+45% hoy!              </motion.div>                            {/* Additional Floating Badge */}              <motion.div                animate={{ y: [0, 8, 0] }}                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}                className="absolute -bottom-2 -left-2 bg-blue-500 text-white px-2 py-1 rounded-lg font-semibold text-xs shadow-lg"              >                🤖 AI Activo              </motion.div>            </motion.div>          </div>        </div>
      </div>
    </div>
  );
} 