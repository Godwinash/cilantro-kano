import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const experienceItems = [
  {
    id: 1,
    title: "Elegant Ambience",
    text: "A refined setting with warm lighting, tasteful interiors, and a calm atmosphere that makes every visit feel elevated.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Rich Indian Flavors",
    text: "From biryani and tandoori to butter chicken and naan, every dish should feel layered, memorable, and beautifully presented.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Made for Every Occasion",
    text: "Perfect for intimate dinners, casual outings, family moments, and small celebrations in a space that feels both trendy and welcoming.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Experience() {
  return (
    <section id="about" className="bg-[#0b0b0b] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="The Experience"
            title="More than a meal, it’s the full dining atmosphere"
            text="Cilantro should feel like a destination for elegant dining in Kano, where ambience, flavor, and memorable moments meet in one place."
            align="center"
          />
        </Reveal>

        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <Reveal key={item.id} delay={0.08 * index}>
              <article
                className={`grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:p-6 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[320px] overflow-hidden rounded-[24px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="px-2 py-2 md:px-4">
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-amber-300/80">
                    0{item.id}
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                    {item.text}
                  </p>

                  <div className="mt-8">
                    <a
                      href="#gallery"
                      className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/20"
                    >
                      Explore Atmosphere
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}