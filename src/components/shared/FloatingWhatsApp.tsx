import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

export const FloatingWhatsApp = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messageStatus, setMessageStatus] = useState("unseen");
    const mainButtonControls = useAnimation();
    const bubbleRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close message (mantido igual)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (bubbleRef.current && !bubbleRef.current.contains(event.target as Node)) {
                setShowMessage(false);
            }
        };
        if (showMessage) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showMessage]);

    // Initial attention animation sequence (mantido igual)
    useEffect(() => {
        const sequence = async () => {
            await mainButtonControls.start({
                scale: [1, 1.2, 1.1],
                rotate: [0, -15, 0, 15, 0],
                transition: { duration: 1.5 }
            });
            setTimeout(() => {
                setShowMessage(true);
                setIsTyping(true);
            }, 1000);
            setTimeout(() => {
                setIsTyping(false);
                setMessageStatus("received");
            }, 4000);
            setTimeout(() => {
                setShowMessage(false);
                setHasAnimated(true);
            }, 9000);
        };
        const timer = setTimeout(() => sequence(), 3000);
        return () => clearTimeout(timer);
    }, [mainButtonControls]);

    // Pulse animation at regular intervals (mantido igual)
    useEffect(() => {
        const pulseInterval = setInterval(() => {
            if (!showMessage && hasAnimated) {
                mainButtonControls.start({
                    scale: [1, 1.15, 1],
                    transition: { duration: 1.2 }
                });
            }
        }, 10000);
        return () => clearInterval(pulseInterval);
    }, [mainButtonControls, showMessage, hasAnimated]);

    return (
        <>
            {/* Mantendo o popup de mensagem como está */}
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        ref={bubbleRef}
                        className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl max-w-xs overflow-hidden"
                        style={{
                            boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
                            transform: "perspective(1000px)"
                        }}
                        initial={{ opacity: 0, scale: 0.8, y: 20, x: 20, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, rotateY: -10, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        {/* ... (o conteúdo do popup permanece igual) ... */}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium WhatsApp Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Floating particles effect */}
                <div className="absolute inset-0 w-20 h-20 -m-2">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-300 to-emerald-400"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: 0.6,
                            }}
                            animate={{
                                x: [0, Math.random() * 10 - 5, 0],
                                y: [0, Math.random() * 10 - 5, 0],
                                scale: [0.6, 1, 0.6],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Morphing light effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-green-200/10 via-green-400/20 to-emerald-500/10 blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Triple pulse rings with staggered animation */}
                {[0.3, 0.4, 0.5].map((opacity, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{ 
                            background: `radial-gradient(circle, rgba(37, 211, 102, ${opacity}) 0%, rgba(37, 211, 102, 0) 70%)`,
                        }}
                        animate={{
                            scale: [1, 1.6 + i * 0.2],
                            opacity: [opacity, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut",
                        }}
                    />
                ))}
                
                {/* Main button with 3D glass morphism */}
                <motion.a
                    href="https://wa.me/557774009165?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20cursos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center bg-gradient-to-br from-[#25D366] via-[#20BC5C] to-[#128C7E] text-white w-16 h-16 rounded-full overflow-hidden group"
                    style={{
                        boxShadow: "0 8px 24px -6px rgba(37, 211, 102, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
                        transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                        scale: 1.08,
                        rotateY: 15,
                        rotateX: -10,
                        boxShadow: "0 14px 28px -4px rgba(37, 211, 102, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.4)",
                        transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    whileTap={{ 
                        scale: 0.95, 
                        rotateY: 0,
                        rotateX: 5,
                    }}
                    animate={mainButtonControls}
                >
                    {/* Subtle light reflection */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20"
                        style={{
                            borderRadius: "inherit",
                        }}
                        whileHover={{
                            opacity: [0.7, 0.5, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Dynamic WhatsApp icon */}
                    <motion.div
                        className="relative z-10"
                        whileHover={{
                            scale: [1, 1.2, 0.9, 1.1, 1],
                            rotate: [0, 15, -10, 5, 0],
                            transition: { duration: 1 }
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="drop-shadow-lg"
                        >
                            <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.94 7.94 0 0 0-7.96 7.96c0 1.4.37 2.77 1.08 3.97l-1.14 4.16 4.25-1.12a7.92 7.92 0 0 0 3.8.96h.01a7.95 7.95 0 0 0 7.94-7.96c0-2.13-.83-4.12-2.34-5.63zm-5.58 12.23h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.66-2.43-.15-.25a6.6 6.6 0 0 1-1.01-3.49 6.6 6.6 0 0 1 6.6-6.6c1.76 0 3.42.69 4.66 1.93a6.59 6.59 0 0 1 1.94 4.67c0 3.66-2.98 6.64-6.64 6.64zm3.63-4.97c-.2-.1-1.17-.58-1.36-.65-.18-.06-.31-.1-.45.1-.13.2-.5.64-.62.78-.11.14-.22.15-.42.05a5.27 5.27 0 0 1-2.58-2.27c-.2-.33.2-.31.56-1.03.07-.13.03-.25-.02-.34-.05-.1-.44-1.06-.61-1.45-.16-.38-.32-.32-.43-.32-.11 0-.24-.02-.38-.02-.14 0-.35.05-.54.25-.18.2-.7.69-.7 1.67s.72 1.93.81 2.07c.1.14 1.37 2.08 3.3 2.93.46.2.82.32 1.1.41.46.15.88.13 1.2.08.37-.06 1.17-.48 1.33-.95.17-.46.17-.86.12-.95-.04-.09-.18-.14-.38-.24z" />
                        </svg>
                    </motion.div>

                    {/* Advanced expandable text with smooth reveal */}
                    <div className="absolute left-full overflow-hidden">
                        <motion.div
                            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-2 rounded-full shadow-lg ml-3 flex items-center gap-1.5 origin-left"
                            initial={{ opacity: 0, scale: 0.8, x: -10 }}
                            whileHover={{ 
                                opacity: 1,
                                scale: 1, 
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 25
                                }
                            }}
                            style={{
                                boxShadow: "0 6px 16px -4px rgba(37, 211, 102, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                            }}
                        >
                            <span className="font-medium text-sm whitespace-nowrap">Fale conosco</span>
                            <motion.svg 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    x: [0, 3, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                        </motion.div>
                    </div>

                    {/* Cinematic shine effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatType: "loop",
                            repeatDelay: 1,  
                            ease: "easeInOut",
                        }}
                    />

                    {/* Ambient glow on hover */}
                    <motion.div 
                        className="absolute -inset-4 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                        whileHover={{ opacity: 0.2, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Inner ring */}
                    <motion.div
                        className="absolute inset-0.5 rounded-full border border-white/30"
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.a>

                {/* Innovative 3D notification badge */}
                <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: [0, 1.3, 1],
                        rotate: [0, 20, 0],
                        opacity: 1,
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 3.5,
                        scale: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    style={{
                        boxShadow: "0 3px 10px -2px rgba(239, 68, 68, 0.6)",
                        textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    1
                </motion.div>
            </motion.div>
        </>
    );
};

export default FloatingWhatsApp;