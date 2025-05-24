import { motion } from 'framer-motion';
import { useState } from 'react';
import AgentModal from './AgentModal';

interface Agent {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  accentColor: string;
  traits: string[];
  audioUrl?: string;
  extendedDescription?: string;
}

const agents: Agent[] = [
  {
    name: 'Qori',
    role: 'Agente de Marketing',
    description: 'Optimiza tus estrategias de marketing digital y mejora tu presencia en línea.',
    extendedDescription: 'Soy Qori, tu especialista en marketing digital. Mi nombre significa "oro" en quechua, y como el oro, ayudo a que tu marca brille en el mundo digital. Analizo tendencias de mercado, optimizo campañas publicitarias, gestiono redes sociales y creo estrategias de contenido que conectan con tu audiencia. Con inteligencia artificial avanzada, puedo segmentar audiencias, personalizar mensajes y maximizar el retorno de inversión de tus campañas.',
    imageUrl: '/agents/20250523_0303_Retrato Agente de Marketing_simple_compose_01jvy2m6cnesm902vmxscxhk6r.png',
    bgColor: 'bg-amber-50',
    accentColor: 'text-amber-600',
    traits: ['Creativo', 'Estratégico', 'Analítico'],
    audioUrl: '/audio/qori.mp3'
  },
  {
    name: 'Chaski',
    role: 'Agente de Logística',
    description: 'Gestiona y optimiza tus procesos logísticos para mayor eficiencia.',
    extendedDescription: 'Soy Chaski, tu mensajero logístico digital. Como los antiguos chasquis del imperio inca, llevo información vital para tu negocio. Optimizo rutas de entrega, gestiono inventarios, coordino proveedores y monitoreo la cadena de suministro en tiempo real. Mi IA predice demanda, reduce costos operativos y asegura que tus productos lleguen a tiempo a tus clientes.',
    imageUrl: '/agents/20250523_0305_Retrato Agente Logística_simple_compose_01jvy2rkg8e1fbkvp459bvm256.png',
    bgColor: 'bg-blue-50',
    accentColor: 'text-blue-600',
    traits: ['Eficiente', 'Organizado', 'Preciso'],
    audioUrl: '/audio/chaski.mp3'
  },
  {
    name: 'Inti',
    role: 'Agente de Ventas',
    description: 'Impulsa tus ventas y mejora la relación con tus clientes.',
    extendedDescription: 'Soy Inti, como el dios del sol, ilumino el camino hacia el éxito en ventas. Analizo el comportamiento de clientes, identifico oportunidades de venta, automatizo seguimientos y personalizo ofertas. Mi inteligencia artificial puede predecir qué productos interesan a cada cliente, optimizar precios y generar propuestas que aumenten significativamente tus conversiones.',
    imageUrl: '/agents/20250523_0309_Retrato Agente de Ventas_simple_compose_01jvy304j6ezkth69rvcqadw4e.png',
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600',
    traits: ['Persuasivo', 'Empático', 'Resolutivo'],
    audioUrl: '/audio/inti.mp3'
  },
  {
    name: 'Amaru',
    role: 'Agente de Seguridad',
    description: 'Protege tu negocio digital contra amenazas cibernéticas.',
    extendedDescription: 'Soy Amaru, la serpiente protectora de tu reino digital. Mi misión es salvaguardar tu negocio contra toda amenaza cibernética. Monitoreo continuamente tu infraestructura, detecto vulnerabilidades, previngo ataques de malware y aseguro el cumplimiento de normativas de seguridad. Mi IA aprende de nuevas amenazas y adapta las defensas automáticamente.',
    imageUrl: '/agents/20250523_0310_Retrato Agente Protector_simple_compose_01jvy32v5geyfvxm9rsjezapwt.png',
    bgColor: 'bg-red-50',
    accentColor: 'text-red-600',
    traits: ['Vigilante', 'Proactivo', 'Protector'],
    audioUrl: '/audio/amaru.mp3'
  },
  {
    name: 'Yachay',
    role: 'Agente de Análisis de Datos',
    description: 'Analiza datos para tomar decisiones informadas y estratégicas.',
    extendedDescription: 'Soy Yachay, el conocimiento hecho inteligencia artificial. Mi nombre significa "conocimiento" en quechua, y transformo tus datos en sabiduría empresarial. Analizo patrones complejos, genero reportes predictivos, identifico oportunidades de crecimiento y creo dashboards interactivos. Con machine learning avanzado, puedo predecir tendencias de mercado y optimizar la toma de decisiones estratégicas.',
    imageUrl: '/agents/20250523_0313_Retrato Analítico Impresionante_simple_compose_01jvy35v05e5yvmkn91y27mtn0.png',
    bgColor: 'bg-purple-50',
    accentColor: 'text-purple-600',
    traits: ['Inteligente', 'Metódico', 'Predictivo'],
    audioUrl: '/audio/yachay.mp3'
  },
];

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAgent(null);
  };

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
              onClick={() => handleAgentClick(agent)}
              className={`group relative overflow-hidden rounded-2xl ${agent.bgColor} p-8 hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-50">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${agent.bgColor} filter blur-2xl`}></div>
                <div className={`absolute -left-10 -bottom-10 h-32 w-32 rounded-full ${agent.bgColor} filter blur-2xl`}></div>
              </div>

              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                  <span className="text-sm">👁️</span>
                </div>
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

                  {/* Click hint */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-500">
                      Haz clic para conocer más y escuchar mi voz
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Agent Modal */}
      <AgentModal
        agent={selectedAgent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
} 