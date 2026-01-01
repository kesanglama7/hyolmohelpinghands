'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Hyolmo Helping Hands
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Hyolmo Helping Hands is a non-profit organization dedicated to uplifting
            underprivileged communities through education, healthcare, and social
            empowerment initiatives.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe in sustainable development, community participation, and
            long-term impact.
          </p>
        </motion.div>

        {/* Image / placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/hero/about-us.png"
            alt="About Hyolmo Helping Hands"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
