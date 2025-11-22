import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ErrorBoundary from "../base/ErrorBoundary";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded || !sectionRef.current || !hasMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
        else controls.start("hidden");
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loaded, hasMounted, controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  if (!loaded)
    return (
      <div className="bg-[#5d00c3] text-white min-h-[70vh] flex justify-center items-center rounded-md m-4 px-4 md:px-8 animate-pulse" />
    );

  return (
    <ErrorBoundary>
      <section
        ref={sectionRef}
        className="bg-[#5d00c3] text-white md:pt-52 md:pb-24 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-40 py-32 md:py-10 rounded-md m-4 overflow-hidden new-font relative"
        role="banner"
      >
        {/* Background Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 space-y-6 md:space-y-5 z-10"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          custom={1}
        >
          <motion.h1 className="text-lg md:text-3xl leading-tight">
            Welcome to OptixDigitalAI
          </motion.h1>

          <motion.p
            className="text-4xl md:text-6xl text-gray-100 font-extrabold"
            custom={2}
          >
            Transforming Ideas Into
            <span className="text-yellow-400"> Digital World</span>
          </motion.p>

          <motion.p className="text-md md:text-xl text-gray-100 max-w-5xl" custom={2}>
            Crafting intuitive designs that captivate and inspire. Building
            dynamic websites that define your digital identity. Empowering
            brands with intelligent, future-ready solutions.
          </motion.p>

          <Link to="/contact">
            <motion.button
              className="mt-4 bg-transparent text-white font-semibold px-6 py-3 rounded-md border-2 border-white hover:bg-white hover:text-[#5d00c3] transition-all duration-300 inline-flex items-center space-x-3"
              custom={3}
            >
              <span>Get Started</span>
              <FiArrowRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT — VIDEO */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center z-10"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          custom={4}
        >
          <motion.div
            className="relative w-72 md:w-96 lg:w-[430px] rounded-xl shadow-xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              rotate: 1.2,
              transition: { type: "spring", stiffness: 180, damping: 10 },
            }}
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dnnxal66k/video/upload/f_auto,q_auto/v1763697187/optixinfo_c30nbq.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={(e) => {
                const v = e.target;

                v.currentTime = 0;   // 🔥 Restart video from beginning
                v.muted = false;     // 🔊 Unmute
                v.volume = 1;        // 🔊 Set volume
                v.play();            // ▶️ Start playing with audio
              }}
            />

            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-3 py-1 rounded-md">
              Tap to Unmute 🔊
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Hero;
