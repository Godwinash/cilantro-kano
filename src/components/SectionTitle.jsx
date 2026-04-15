export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-300/80">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
        {text}
      </p>
    </div>
  );
}