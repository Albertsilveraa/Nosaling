import { motion } from 'framer-motion';

const agents = [
  {
    name: 'Qori',
    role: 'Agente de Marketing',
    description: 'Optimiza tus estrategias de marketing digital y mejora tu presencia en línea.',
    imageUrl: '/agents/marketing.svg',
  },
  {
    name: 'Chaski',
    role: 'Agente de Logística',
    description: 'Gestiona y optimiza tus procesos logísticos para mayor eficiencia.',
    imageUrl: '/agents/logistics.svg',
  },
  {
    name: 'Inti',
    role: 'Agente de Ventas',
    description: 'Impulsa tus ventas y mejora la relación con tus clientes.',
    imageUrl: '/agents/sales.svg',
  },
  {
    name: 'Amaru',
    role: 'Agente de Seguridad',
    description: 'Protege tu negocio digital contra amenazas cibernéticas.',
    imageUrl: '/agents/security.svg',
  },
  {
    name: 'Yachay',
    role: 'Agente de Análisis de Datos',
    description: 'Analiza datos para tomar decisiones informadas y estratégicas.',
    imageUrl: '/agents/analytics.svg',
  },
];

export default function Agents() {
  return (
    <div id="agents" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Conoce a Nuestros Agentes Especializados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Un equipo de agentes de IA diseñados para potenciar diferentes aspectos de tu negocio
          </motion.p>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {agents.map((agent) => (
            <motion.li
              key={agent.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <img className="mx-auto h-24 w-24" src={agent.imageUrl} alt={agent.name} />
              <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-gray-900">{agent.name}</h3>
              <p className="text-sm leading-6 text-primary font-medium">{agent.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{agent.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
} 