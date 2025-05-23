import { motion } from 'framer-motion';

const agents = [
  {
    name: 'Qori',
    role: 'Agente de Marketing',
    description: 'Optimiza tus estrategias de marketing digital y mejora tu presencia en línea.',
    imageUrl: '/agents/20250523_0303_Retrato Agente de Marketing_simple_compose_01jvy2m6cnesm902vmxscxhk6r.png',
    bgColor: 'bg-amber-50',
    accentColor: 'text-amber-600',
    traits: ['Creativo', 'Estratégico', 'Analítico']
  },
  {
    name: 'Chaski',
    role: 'Agente de Logística',
    description: 'Gestiona y optimiza tus procesos logísticos para mayor eficiencia.',
    imageUrl: '/agents/20250523_0305_Retrato Agente Logística_simple_compose_01jvy2rkg8e1fbkvp459bvm256.png',
    bgColor: 'bg-blue-50',
    accentColor: 'text-blue-600',
    traits: ['Eficiente', 'Organizado', 'Preciso']
  },
  {
    name: 'Inti',
    role: 'Agente de Ventas',
    description: 'Impulsa tus ventas y mejora la relación con tus clientes.',
    imageUrl: '/agents/20250523_0309_Retrato Agente de Ventas_simple_compose_01jvy304j6ezkth69rvcqadw4e.png',
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600',
    traits: ['Persuasivo', 'Empático', 'Resolutivo']
  },
  {
    name: 'Amaru',
    role: 'Agente de Seguridad',
    description: 'Protege tu negocio digital contra amenazas cibernéticas.',
    imageUrl: '/agents/20250523_0310_Retrato Agente Protector_simple_compose_01jvy32v5geyfvxm9rsjezapwt.png',
    bgColor: 'bg-red-50',
    accentColor: 'text-red-600',
    traits: ['Vigilante', 'Proactivo', 'Protector']
  },
  {
    name: 'Yachay',
    role: 'Agente de Análisis de Datos',
    description: 'Analiza datos para tomar decisiones informadas y estratégicas.',
    imageUrl: '/agents/20250523_0313_Retrato Analítico Impresionante_simple_compose_01jvy35v05e5yvmkn91y27mtn0.png',
    bgColor: 'bg-purple-50',
    accentColor: 'text-purple-600',
    traits: ['Inteligente', 'Metódico', 'Predictivo']
  },
];

export default function Agents() {
  return (
    <div id="agents" className="py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            Conoce a Nuestros Agentes Especializados
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un equipo de agentes de IA diseñados para potenciar diferentes aspectos de tu negocio
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative overflow-hidden rounded-2xl ${agent.bgColor} p-8 hover:shadow-xl transition-all duration-300`}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-50">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${agent.bgColor} filter blur-2xl`}></div>
                <div className={`absolute -left-10 -bottom-10 h-32 w-32 rounded-full ${agent.bgColor} filter blur-2xl`}></div>
              </div>

              <div className="relative z-10">
                {/* Image container */}
                <div className="relative mx-auto w-48 h-48 mb-6 rounded-2xl overflow-hidden bg-white shadow-lg">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    src={agent.imageUrl} 
                    alt={agent.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">{agent.name}</h3>
                  <p className={`text-sm font-medium ${agent.accentColor} mb-4`}>{agent.role}</p>
                  <p className="text-base leading-7 text-gray-600 mb-6">{agent.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {agent.traits.map((trait) => (
                      <span 
                        key={trait} 
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                          bg-white/80 backdrop-blur-sm ${agent.accentColor} border border-current
                          transition-all duration-300 hover:bg-white hover:shadow-sm`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 