import React, { useState, useRef, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, PlayIcon, PauseIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

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

interface AgentModalProps {
  agent: Agent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      console.warn(`Audio file not found for ${agent?.name}`);
      setAudioError(true);
      setDuration(0);
    };
    const handleLoadStart = () => setAudioError(false);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, [agent]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || audioError) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setAudioError(true));
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || audioError || !duration) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const getAccentColorHex = (accentColor: string) => {
    if (accentColor.includes('blue')) return '#2563eb';
    if (accentColor.includes('green')) return '#059669';
    if (accentColor.includes('amber')) return '#d97706';
    if (accentColor.includes('red')) return '#dc2626';
    return '#7c3aed';
  };

  if (!agent) return null;

  return (    <AnimatePresence>      {isOpen && (        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", duration: 0.3 }}
                  className="w-full h-full"
                >
                  {/* Header with close button */}
                  <div className="relative p-6 pb-0">
                    <button
                      type="button"
                      className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Agent content */}
                  <div className="px-6 pb-6">
                    <div className="flex flex-col items-center">
                      {/* Agent image */}
                      <div className={`relative w-32 h-32 rounded-2xl overflow-hidden ${agent.bgColor} p-2 mb-6`}>
                        <img
                          src={agent.imageUrl}
                          alt={agent.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Agent info */}
                      <Dialog.Title className="text-3xl font-bold text-gray-900 mb-2">
                        {agent.name}
                      </Dialog.Title>
                      <p className={`text-lg font-medium ${agent.accentColor} mb-4`}>
                        {agent.role}
                      </p>

                      {/* Extended description */}
                      <div className="max-w-lg text-center mb-6">
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {agent.description}
                        </p>
                        {agent.extendedDescription && (
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {agent.extendedDescription}
                          </p>
                        )}
                      </div>

                      {/* Traits */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {agent.traits.map((trait) => (
                          <span
                            key={trait}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 ${agent.accentColor}`}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>

                      {/* Audio player */}
                      <div className="w-full max-w-md">
                        <div className={`bg-gradient-to-r ${agent.bgColor} rounded-xl p-4`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <SpeakerWaveIcon className={`h-5 w-5 ${agent.accentColor}`} />
                              <span className="text-sm font-medium text-gray-700">
                                {audioError ? 'Audio no disponible' : 'Escucha mi voz'}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>

                          {/* Play button and progress */}
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={togglePlay}
                              disabled={audioError}
                              className={`flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all ${agent.accentColor} ${audioError ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {isPlaying ? (
                                <PauseIcon className="h-6 w-6" />
                              ) : (
                                <PlayIcon className="h-6 w-6 ml-1" />
                              )}
                            </button>

                            {/* Progress bar */}
                            <div className="flex-1">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={duration ? (currentTime / duration) * 100 : 0}
                                onChange={handleSeek}
                                disabled={audioError || !duration}
                                className="w-full h-2 bg-white/50 rounded-lg appearance-none cursor-pointer slider"
                                style={{
                                  background: `linear-gradient(to right, ${getAccentColorHex(agent.accentColor)} 0%, ${getAccentColorHex(agent.accentColor)} ${duration ? (currentTime / duration) * 100 : 0}%, #fff ${duration ? (currentTime / duration) * 100 : 0}%, #fff 100%)`
                                }}
                              />
                            </div>
                          </div>

                          {/* Audio element */}
                          <audio
                            ref={audioRef}
                            src={agent.audioUrl || `/audio/${agent.name.toLowerCase()}.mp3`}
                            preload="metadata"
                          />

                          {/* Error message */}
                          {audioError && (
                            <div className="mt-3 text-center">
                              <p className="text-xs text-gray-500">
                                Archivo de audio no encontrado. Coloca {agent.name.toLowerCase()}.mp3 en la carpeta /public/audio/
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
} 