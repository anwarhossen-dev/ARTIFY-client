

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Banner component for Artify
// Usage: import Banner from './components/Banner';
// <Banner /> or <Banner slides={mySlides} autoplay interval={6000} />

export default function Banner({
  slides = null,
  autoplay = true,
  interval = 6000,
}) {
  // default slides (3) — replace with your own image URLs / text
  const defaultSlides = [
    {
      id: 1,
      title: 'Discover Trending Artists',
      subtitle: 'Curated artworks picked by the community',
      cta: 'Explore Now',
      image:
        'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 2,
      title: 'Showcase Your Masterpiece',
      subtitle: 'Upload and share with collectors worldwide',
      cta: 'Add Artwork',
      image:
        'https://img.freepik.com/free-vector/hand-drawn-abstract-shapes-facebook-cover_23-2149083718.jpg?semt=ais_hybrid&w=740&q=80',
    },
    {
      id: 3,
      title: 'Join the Community',
      subtitle: 'Follow, like and collect beautiful works',
      cta: 'Join Now',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  const slideList = slides && slides.length ? slides : defaultSlides;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slideList.length);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [index, autoplay, interval, slideList.length]);

  function goTo(i) {
    setIndex(i % slideList.length);
  }

  function next() {
    setIndex((prev) => (prev + 1) % slideList.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + slideList.length) % slideList.length);
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <AnimatePresence initial={false} mode="wait">
          {slideList.map((slide, i) =>
            i === index ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter brightness-90"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />

                {/* Overlay content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white">
                    <div className="space-y-4 md:pr-8">
                      <motion.h2
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-xl"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        <a
                          href="#"
                          className="inline-block px-5 py-3 rounded-2xl  bg-gradient-to-r from-pink-500 to-red-600  font-semibold shadow-lg hover:shadow-xl transition"
                          onClick={(e) => e.preventDefault()}
                        >
                          {slide.cta}
                        </a>
                      </motion.div>
                    </div>

                    <div className="hidden md:block">
                      {/* Small card preview on the right */}
                      <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-sm"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                        <h4 className="text-lg font-bold">{slide.title}</h4>
                        <p className="text-sm text-gray-200">{slide.subtitle}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center space-x-3 z-20">
        {slideList.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-transform transform ${
              i === index ? 'scale-125' : 'opacity-60'
            }`}
            style={{ background: i === index ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
