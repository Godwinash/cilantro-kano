import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const dishes = [
  {
    id: 1,
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice layered with rich spices and tender chicken for a deeply satisfying signature dish.",
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?auto=format&fit=crop&w=1200&q=80",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Tandoori Chicken",
    description:
      "Smoky, spiced, and beautifully grilled chicken with a bold flavor profile and elegant presentation.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    tag: "Chef Pick",
  },
  {
    id: 3,
    name: "Garlic Naan & Butter Chicken",
    description:
      "A comforting pairing of soft garlic naan and creamy butter chicken made for indulgent dining.",
    image:
      "https://unsplash.com/photos/ZSukCSw5VV4/download?force=true",
    tag: "Popular",
  },
];

export default function FeaturedDishes() {
  return (
    <section id="menu" className="bg-neutral-950 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Signature Selection"
            title="A curated taste of Cilantro’s most loved dishes"
            text="From richly layered biryani to smoky tandoori and comforting classics, this section should make visitors want to book a table before they even reach the full menu."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.12}>
              <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                    {dish.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                    {dish.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.25em] text-white/45">
                      Premium Dining
                    </span>

                    <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white/20">
                      View Dish
                    </button>
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