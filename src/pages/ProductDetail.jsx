import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";

const productDetails = {
  "haul-off": {
    title: "HAUL OFF",
    series: "GRIPPO SERIES",
    image: "/HAUL OFF1.webp",
    features: [
      "Fully Integrated Servo Motion Controlled",
      "Provides Optimum Grip @all line speeds",
      "Robust Design provides structural stability to Extruded Pipe",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [
      [
        "Grippo 630 6T",
        "200 – 630",
        "6",
        "1700",
        "6 × 4000",
        "0.2 – 9.0",
        "6 × 1.35",
        "3000 × 1850 × 2300",
      ],
      [
        "Grippo 500 4T",
        "160 – 500",
        "4",
        "1700",
        "4 × 4000",
        "0.2 – 9.0",
        "4 × 1.35",
        "3000 × 1650 × 2300",
      ],
      [
        "Grippo 400 4T",
        "110 – 400",
        "4",
        "1600",
        "4 × 4000",
        "0.4 – 12.0",
        "4 × 1.35",
        "2500 × 1500 × 2200",
      ],
      [
        "Grippo 315 4T",
        "75 – 315",
        "4",
        "1400",
        "4 × 4000",
        "0.4 – 12.0",
        "4 × 1.35",
        "2500 × 1250 × 2000",
      ],
      [
        "Grippo 315 3T",
        "75 – 315",
        "3",
        "1400",
        "3 × 4000",
        "0.4 – 12.0",
        "3 × 1.35",
        "2500 × 1250 × 2000",
      ],
      [
        "Grippo 250 4T",
        "50 – 250",
        "4",
        "1400",
        "4 × 3800",
        "0.4 – 12.0",
        "4 × 1.35",
        "2500 × 1250 × 2000",
      ],
      [
        "Grippo 250 3T",
        "50 – 250",
        "3",
        "1400",
        "3 × 3800",
        "0.4 – 12.0",
        "3 × 1.35",
        "2500 × 1250 × 2000",
      ],
      [
        "Grippo 200 2T",
        "20 – 200",
        "2",
        "1400",
        "2 × 2800",
        "0.4 – 12.0",
        "2 × 0.75",
        "1500 × 1000 × 1200",
      ],
      [
        "Grippo 110 2T",
        "20 – 110",
        "2",
        "1000",
        "2 × 2500",
        "0.5 – 13.0",
        "2 × 0.75",
        "1500 × 1000 × 1200",
      ],
    ],
  },

  "pvc-pipe-bending": {
    title: "PVC PIPE BENDING",
    series: "FLEXIBEND SERIES",
    image: "/PVC Pipe Bending1.webp",
    features: [
      "Features Multi-axis motion control system",
      "Possibility of producing various combinations of bending radius, bending angle & length of cut",
      "Wrinkle-free bends",
      "Quick size changeover",
      "Productivity vs Power Consumption – Lowest in comparable category",
      "Offline & Automatic cutting & feeding solutions (Optional)",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [
      [
        "Flexi Bend 100-2C(1)",
        "63 – 100",
        "7.5 – 90",
        "2.5 × D",
        "450 – 1400",
        "40",
        "63",
        "1.0",
        "1100",
      ],
      [
        "Flexi Bend 100-2C(2)",
        "63 – 100",
        "7.5 – 90",
        "2.5 × D",
        "450 – 1400",
        "40",
        "63",
        "1.0",
        "1100",
      ],
      [
        "Flexi Bend 63-2C",
        "20 – 63",
        "7.5 – 90",
        "2.0 × D",
        "450 – 1200",
        "30",
        "63",
        "1.2",
        "970",
      ],
      [
        "Flexi Bend 32-2C",
        "19 – 32",
        "7.5 – 90",
        "2.0 × D",
        "160 – 400",
        "18",
        "32",
        "1.2",
        "770",
      ],
    ],
  },
  "pipe-packaging": {
    title: "PIPE PACKING",
    series: "PACK 50 SERIES",
    image: "/Pipe Packaging0.webp",
    features: [
      "Integrated Automated Pipe Packaging Solution",
      "Human Error Eliminated",
      "Modular Design gives Operational Flexibility",
      "Compatible with ANY extrusion type",
      "Inline & Offline Models Available",
      "Provides Optimum Packaging @all line speeds",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [],
  },
  "special-purpose-pvc-solution": {
    title: "CUSTOM PIPE INDUSTRY",
    series: "SOLUTIONS",
    image: "/Special Purpose PVC Solution0.webp",
    features: [
      "We offer turn key engineering consultancy services for Material Handling, Conveying & Packaging solutions for Plastics Industry.",
      "We are proud to have technically assisted Unicor Gmbh in developing a customized solution.",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [],
  },
  "belling-or-socketing": {
    title: "BELLING AND SOCKETING",
    series: "SOLUTIONS",
    image: "/logoo.webp",
    features: [
      "GlueE SERIES: Inline PVC Pipe Belling Machine for Pressure & Non-Pressure Pipes",
      "ACCUFORM SERVO SERIES: Inline Servo Controlled PVC Pipe Belling Machine for Drainage/Waste/Sewer Applications",
      "ACCUFORM SERIES: Automatic PVC Pipe Belling Machine for Drainage/Waste/Sewer Applications",
      "ELASTOFORM SERIES: Inline PVC Pipe Belling Machine for Pressure Pipes",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [],
  },
  "cutter-series": {
    title: "CUTTER",
    series: "SERIES",
    image: "/CUTTER SERIES1.webp",
    features: [
      "Saw, Planetary & Customize Cutting Solution for PVC, CPVC, HDPE & Profile",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [],
  },
  "pipe-repair-coupler": {
    title: "COUPLER",
    series: "SERIES",
    image: "/Pipe Repair Coupler1.webp",
    features: [
      "Energy efficient machine",
      "Reduced maintenance",
      "Servo controlled",
      "Low noise",
      "Elimination of hydraulics and pneumatics",
      "Modular design",
      "Unique pipe transfer mechanism",
      "In-mould logo embossing",
      "Smart fault detection and display system",
      "Heater box with integrated infrared thermocouple to ensure uniform heating of the pipe",
    ],
    optionalAccessories: [
      "Automatic Chamfering system integrated with belling machine to eliminate line speed constraint of inline planetary cutter cum chamfering machine",
    ],
    downloadLink: "#",
    contactLink: "/contact",
    table: [
      {
        Model: "AFS - DES - 110 - 2 - 1",
        "Pipe Range (Diameter)": "90 - 110",
        "Pipe Range (Length)": "600 - 3100",
        "Output Per Hour (Diameter)": 75,
        "Output Per Hour (Wall Thickness)": 1.8,
        "Output Per Hour (Nos.)": 33,
        "Connected Load (kW)": 33,
        "L x W x H (mm)": "13000 x 1300 x 2000",
      },
      {
        Model: "AFS - DES - 110 - 2",
        "Pipe Range (Diameter)": "90 - 110",
        "Pipe Range (Length)": "600 - 3100",
        "Output Per Hour (Diameter)": 75,
        "Output Per Hour (Wall Thickness)": 1.8,
        "Output Per Hour (Nos.)": 30,
        "Connected Load (kW)": 33,
        "L x W x H (mm)": "13000 x 1300 x 2000",
      },
      {
        Model: "AFS - DES - 110 - 1",
        "Pipe Range (Diameter)": "90 - 110",
        "Pipe Range (Length)": "600 - 3100",
        "Output Per Hour (Diameter)": 75,
        "Output Per Hour (Wall Thickness)": 1.8,
        "Output Per Hour (Nos.)": 24,
        "Connected Load (kW)": 24,
        "L x W x H (mm)": "11000 x 1300 x 2000",
      },
    ],
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productDetails[slug];

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found.</div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 via-5% to-white min-h-screen">
      <NavBarTop />
      <NavBarMain />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#004b93] text-white p-8 rounded-xl shadow-md border-l-4 border-yellow-400"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {product.title}
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-blue-300 tracking-wide">
            {product.series}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-white/90">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <div className="flex gap-6 mt-6">
            <a
              href={product.downloadLink}
              className="border-b border-white hover:text-gray-300"
            >
              Download
            </a>
            <a
              href={product.contactLink}
              className="border-b border-white hover:text-gray-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-[250px] w-full object-contain bg-gray-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Table Section */}
      {product.table && product.table.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mt-16 overflow-x-auto"
        >
          {Array.isArray(product.table[0]) ? (
            <table className="min-w-full text-sm text-left border rounded-md overflow-hidden shadow-md">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-2 border">Model</th>
                  <th className="p-2 border">Diameter Range (mm)</th>
                  <th className="p-2 border">No. of Tracks</th>
                  <th className="p-2 border">Contact Length (mm)</th>
                  <th className="p-2 border">Max. Pulling Force (N)</th>
                  <th className="p-2 border">Line Speed (m/min)</th>
                  <th className="p-2 border">Motor Rating (kW)</th>
                  <th className="p-2 border">Area (L × W × H)</th>
                </tr>
              </thead>
              <tbody>
                {product.table.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {row.map((cell, j) => (
                      <td key={j} className="p-2 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="min-w-full text-sm text-left border rounded-md overflow-hidden shadow-md">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  {Object.keys(product.table[0]).map((key) => (
                    <th key={key} className="p-2 border">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.table.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {Object.values(row).map((value, j) => (
                      <td key={j} className="p-2 border">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-12 mb-20 flex justify-center"
      >
        <Link
          to="/products"
          className="bg-white text-black border border-[#004b93] px-6 py-2 rounded hover:bg-[#004b93] hover:text-white transition"
        >
          ← Back to Products
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}
