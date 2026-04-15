import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const menuCategories = [
  {
    id: 1,
    title: "Starters",
    items: [
      "Vegetable Samosas",
      "Chicken Lollipop",
      "Futtus Salad",
      "Soup Selections",
    ],
    note: "Light, flavorful openers to begin the experience.",
  },
  {
    id: 2,
    title: "Main Course",
    items: [
      "Chicken Biryani",
      "Tandoori Chicken",
      "Butter Chicken",
      "Palak Paneer",
    ],
    note: "Rich Indian classics layered with depth and bold flavor.",
  },
  {
    id: 3,
    title: "Drinks",
    items: [
      "Blue Lemonade",
      "Strawberry Mojito",
      "Fresh Juice",
      "Coffee & Tea",
    ],
    note: "Refreshing signatures and elegant drink pairings.",
  },
  {
    id: 4,
    title: "Casual Favorites",
    items: [
      "Pizza",
      "Burger and Chips",
      "Garden Chicken",
      "Quick Bites",
    ],
    note: "Comfort picks for relaxed dining and shared moments.",
  },
];

export default function MenuPreview() {
  return (
    <section id="preview" className="bg-neutral-950 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
            <SectionTitle
                eyebrow="Menu Preview"
                title="A menu designed for cravings, comfort, and occasion"
                text="Cilantro’s offerings range from rich Indian classics to refreshing drinks and familiar favorites, making the dining experience feel versatile, refined, and memorable."
            />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {menuCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.1}>
                <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-amber-300/20 hover:bg-white/[0.07] md:p-7">
                    <div className="mb-6 flex items-center justify-between">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                        0{category.id}
                        </p>

                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                        curated
                        </span>
                    </div>

              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {category.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65 md:text-base">
                {category.note}
              </p>

              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/8 pb-3 text-white/80"
                  >
                    <span className="text-sm md:text-base">{item}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                      featured
                    </span>
                  </div>
                ))}
              </div>
            </article>
        </Reveal>
        ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Reserve for Dining
          </a>
        </div>
      </div>
    </section>
  );
}