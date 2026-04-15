import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Restaurant ambience"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-neutral-950" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-28 lg:px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300/80">
            Fine Dining • Indian Cuisine • Kano
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            A refined dining experience at
            <span className="block text-amber-300">Cilantro Kano</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Discover a polished dining destination in Kano where elegant
            ambience, signature Indian dishes, refreshing drinks, and memorable
            moments come together beautifully.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}