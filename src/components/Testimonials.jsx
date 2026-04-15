import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const testimonials = [
  {
    id: 1,
    name: "Esther Benny",
    role: "Local Guide",
    review:
      "One of the best spots in Kano for a fine dining experience, especially if you enjoy Indian and Asian cuisine. The elegant ambience makes it feel more upscale than most places.",
  },
  {
    id: 2,
    name: "Alamin Mohammed",
    role: "Local Guide",
    review:
      "The ambiance is gorgeous, the staff have been upgraded, service is top notch and most importantly the food is delicious with an even better presentation than before.",
  },
  {
    id: 3,
    name: "Kay Redd",
    role: "Local Guide",
    review:
      "Literally one of the best restaurant experiences in Kano. The aesthetics is beautiful, the food is top notch, and the overall atmosphere makes you want to come back.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-950 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Guest Impressions"
            title="What people love about the Cilantro experience"
            text="From ambience and presentation to memorable dishes, the feedback around Cilantro helps reinforce its place as a standout dining destination in Kano."
            align="center"
          />
        </Reveal>

        <div className="lg:hidden">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {testimonials.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08} className="shrink-0 snap-start">
                <article className="flex aspect-square w-[82vw] max-w-[320px] flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div>
                    <div className="mb-6 flex items-center gap-1 text-amber-300">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <p className="text-sm leading-7 text-white/75">
                      “{item.review}”
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/45">
                      {item.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
                <div className="mb-6 flex items-center gap-1 text-amber-300">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="text-sm leading-7 text-white/75 md:text-base">
                  “{item.review}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/45">
                    {item.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Rated 4.2 from 900+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}