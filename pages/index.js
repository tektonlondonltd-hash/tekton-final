
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekton London – High-End Renovation & Development</title>
        <meta name="description" content="Tekton London Ltd – Property Renovation & Development, High-End." />
      </Head>

      <main className="bg-white text-black font-sans">
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-5xl md:text-7xl font-bold text-teal-800 tracking-tight"
          >
            Tekton London
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }} 
            className="mt-4 text-xl text-gray-700 max-w-xl"
          >
            Property Renovation & High-End Development
          </motion.p>
        </section>

        <section id="about" className="py-24 px-6 bg-gray-50 text-center">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tekton London Ltd is a luxury renovation company delivering exceptional results across prime London properties.
          </p>
        </section>

        <section id="services" className="py-24 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {["Renovation", "Joinery", "Bathrooms", "Kitchens", "Decorating", "Refurbishment"].map(service => (
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                key={service}
                className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg"
              >
                <h3 className="text-xl font-medium text-teal-700">{service}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="reviews" className="py-24 px-6 bg-gray-100 text-center">
          <h2 className="text-4xl font-semibold mb-12">Client Reviews</h2>
          <div className="space-y-8 max-w-3xl mx-auto text-gray-700 text-lg italic">
            <p>“Tekton completely transformed our home. Professional, precise, and passionate. Highly recommended.”</p>
            <p>“Exceptional detail and quality — truly high-end work from start to finish.”</p>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700">Email: iliarudaj@tektonlondon.com</p>
          <p className="text-gray-700">Phone: +44 7999 875689</p>
        </section>

        <footer className="py-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Tekton London Ltd. All rights reserved.
        </footer>
      </main>
    </>
  );
}
