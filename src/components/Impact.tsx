import { motion } from 'framer-motion';
import { ChartBarIcon, ArrowTrendingUpIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Aumento de Productividad',
    description: 'Automatización de tareas, mejora en la toma de decisiones y optimización de la seguridad para incrementar la eficiencia operativa.',
    icon: ChartBarIcon,
  },
  {
    name: 'Transformación Digital',
    description: 'Acceso a herramientas avanzadas de IA que permiten a las pequeñas empresas competir en la era digital.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Desarrollo Económico',
    description: 'Contribución al crecimiento local mediante el fortalecimiento de las MYPES y la reducción de la brecha tecnológica.',
    icon: GlobeAmericasIcon,
  },
];

export default function Impact() {
  return (
    <div id="impact" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Impacto en tu Negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Transformamos la manera en que las MYPES operan, brindando soluciones inteligentes y accesibles
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col bg-white rounded-2xl shadow-lg p-8"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-8 w-8 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 