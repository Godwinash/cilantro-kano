import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant restaurant interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium dining table setup",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Cocktail and drinks presentation",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Signature plated dish",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Romantic restaurant ambience",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0a0a0a] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="A visual taste of the atmosphere"
            text="From intimate dining corners to beautifully plated dishes and refreshing drinks, this gallery should capture the elegant mood that makes Cilantro stand out."
            align="center"
          />
        </Reveal>

        <div className="md:hidden">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {galleryImages.map((image, index) => (
              <Reveal key={image.id} delay={index * 0.08} className="shrink-0 snap-start">
                <div className="group relative aspect-square w-[82vw] max-w-[320px] overflow-hidden rounded-[26px] border border-white/10 bg-white/5">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                      Cilantro Kano
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden auto-rows-[220px] gap-4 md:grid md:grid-cols-3">
          {galleryImages.map((image, index) => {
            const specialClass =
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 4
                ? "md:col-span-2"
                : "";

            return (
              <Reveal key={image.id} delay={index * 0.08}>
                <div
                  className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 ${specialClass}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                      Cilantro Kano
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white md:text-xl">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}