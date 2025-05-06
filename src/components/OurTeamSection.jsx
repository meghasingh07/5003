import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const teamMembers = [
  {
    name: "Gilbert Hughes",
    role: "Director",
    image: "/flip-img-2.webp",
    description:
      "Gilbert Hughes joined Hub Construction in 1955 as an estimator/project manager, after previously working months as a laborer.",
  },
  {
    name: "Erik Genie",
    role: "Director",
    image: "/flip-img-1.webp",
    description:
      "Gilbert Hughes joined Hub Construction in 1955 as an estimator/project manager, after previously working months as a laborer.",
  },
  {
    name: "Mary Hughes",
    role: "Director",
    image: "/flip-img-3.webp",
    description:
      "Gilbert Hughes joined Hub Construction in 1955 as an estimator/project manager, after previously working months as a laborer.",
  },
];

const stats = [
  { icon: "🌍", value: 70, suffix: "+", label: "Country" },
  { icon: "🏅", value: 60, label: "Awards and Medals" },
  { icon: "👥", value: 130, suffix: "k+", label: "International Customers" },
  { icon: "🏢", value: 21, suffix: "+", label: "Facilities" },
];

const OurTeamSection = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div className="bg-white">
      <section className="py-16 px-4 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          As a leading college in Paris, we look to engage with our students
          beyond the conventional design and development school relationship,
          becoming a partner to the people.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-top object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <span className="inline-block text-xs font-semibold uppercase bg-gray-100 px-2 py-1 mt-2 text-gray-500">
                  {member.role}
                </span>
                <p className="text-gray-600 text-sm mt-3">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
  id="stats"
  className="bg-gray-100 py-16 px-4 text-center"
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
          <CountUp
            key={key}
            end={stat.value}
            duration={6}
            suffix={stat.suffix || ""}
          />
        </div>
        <p className="text-sm mt-1 text-gray-600">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
};

export default OurTeamSection;
