export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
            Cilantro Kano
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Refined dining in the heart of Kano
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65 md:text-base">
            An elegant restaurant experience built around rich Indian flavors,
            beautiful ambience, and memorable dining moments.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-white/45">
            Quick Links
          </h4>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#menu" className="transition hover:text-white">
              Featured Dishes
            </a>
            <a href="#about" className="transition hover:text-white">
              Experience
            </a>
            <a href="#preview" className="transition hover:text-white">
              Menu Preview
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-white/45">
            Contact
          </h4>

          <div className="mt-5 space-y-4 text-sm text-white/75">
            <p>Old No. 67, New 23 Sultan Rd, Giginyu, Kano</p>
            <p>Located in La Sultana Hotel</p>
            <a
              href="tel:08122199999"
              className="block transition hover:text-amber-300"
            >
              0812 219 9999
            </a>
            <a
              href="https://www.facebook.com/Cilantrofoods"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-amber-300"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/40">
        © 2026 Cilantro Kano. Designed for a premium dining experience.
      </div>
    </footer>
  );
}