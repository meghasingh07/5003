import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import CountUp from "react-countup";


const StatsSection = () => {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });

  const stats = [
    { icon: "🌍", value: 70, suffix: "+", label: "Country" },
    { icon: "🏅", value: 60, label: "Awards and Medals" },
    { icon: "👥", value: 130, suffix: "k+", label: "International Customers" },
    { icon: "🏢", value: 21, suffix: "+", label: "Facilities" },
  ];

  return (
    <section
      id="stats"
      className="bg-gray-100 py-16 px-4 text-center"
      ref={statsRef}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-800">
              {inView ? (
                <CountUp end={stat.value} duration={3} suffix={stat.suffix || ""} />
              ) : (
                0
              )}
            </div>
            <p className="text-sm mt-1 text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
