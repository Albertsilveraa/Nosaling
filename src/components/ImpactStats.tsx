import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { 
    id: 1, 
    name: 'de las empresas en Perú son MYPES', 
    value: '99.5%',
    gradient: 'from-blue-600 to-blue-800'
  },
  { 
    id: 2, 
    name: 'del empleo formal en Perú', 
    value: '99%',
    gradient: 'from-primary to-primary/90'
  },
  { 
    id: 3, 
    name: 'millones de MYPES registradas al 2023', 
    value: '3.27',
    gradient: 'from-indigo-600 to-indigo-800'
  },
  { 
    id: 4, 
    name: 'planea invertir en digitalización', 
    value: '98%',
    gradient: 'from-purple-600 to-purple-800'
  },
];

const challenges = [
  {
    title: 'Digitalización',
    description: 'El 95% de las MYPES considera que digitalizarse impacta positivamente su negocio.',
    icon: '💻',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Ciberseguridad',
    description: 'En 2024 se reportó un aumento del 360% en ataques de phishing a MYPES.',
    icon: '🔒',
    gradient: 'from-primary to-primary/90'
  },
  {
    title: 'Marketing Digital',
    description: 'El 44% planea integrar soluciones de marketing digital este año.',
    icon: '📱',
    gradient: 'from-indigo-600 to-indigo-800'
  },
  {
    title: 'Productividad',
    description: 'El 27% de MYPES que adoptó herramientas digitales incrementó sus ventas.',
    icon: '📈',
    gradient: 'from-purple-600 to-purple-800'
  }
];

export default function ImpactStats() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center relative"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-indigo-500/10 blur-3xl opacity-30" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            Impacto de las MYPES en Perú
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Las micro y pequeñas empresas son el motor de la economía peruana
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 mt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.05, y: -5 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl`} />
              <dd className={`order-first text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br ${stat.gradient}`}>
                {stat.value}
              </dd>
              <dt className="text-base leading-7 text-gray-600 mt-2">{stat.name}</dt>
            </motion.div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.2)"
              }}
              className="relative bg-white pl-14 pr-6 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />
                            <div className="absolute left-5 top-8 w-8 h-8 flex items-center justify-center text-2xl">                <span className="drop-shadow-sm">{challenge.icon}</span>              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-lg text-gray-600 relative z-10">
              La transformación digital es clave: el 95% de las MYPES peruanas considera que digitalizarse impacta positivamente en su negocio, y el 98% planea invertir en digitalización en 2024.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-indigo-500/5 p-5">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
              <div className="relative">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Nosaling - Agentes IA para MYPES"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Transformando las MYPES con IA
                  </h3>
                  <p className="text-sm text-gray-600">
                    Descubre cómo nuestros agentes IA están revolucionando el futuro de las micro y pequeñas empresas en Perú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 