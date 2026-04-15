import SectionTitle from "./SectionTitle";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactReservation() {
  const [state, handleSubmit] = useForm("mreoyrrk");

  return (
    <section id="contact" className="bg-[#0b0b0b] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Reservations & Contact"
          title="Plan your visit to Cilantro Kano"
          text="Reserve a table, call ahead, or stop by for an elegant dining experience with rich flavors, refined ambience, and warm hospitality."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Book a Table
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Fill in your details and create a smooth reservation experience
              for lunch, dinner, family outings, or special moments.
            </p>

            {state.succeeded ? (
              <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 text-white">
                <h4 className="text-lg font-semibold">Reservation request sent</h4>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Thanks. Your reservation details have been submitted successfully.
                  You can now confirm by phone if needed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="mb-2 block text-sm text-white/70">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-amber-300/40"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-white/70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-amber-300/40"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-300"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="mb-2 block text-sm text-white/70">
                    Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    name="guests"
                    min="1"
                    required
                    placeholder="Number of guests"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-amber-300/40"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block text-sm text-white/70">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 focus:border-amber-300/40"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="mb-2 block text-sm text-white/70">
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    name="time"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 focus:border-amber-300/40"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email address"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-amber-300/40"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-300"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    Special Request
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Any special notes for your reservation?"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-amber-300/40"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-300"
                  />
                </div>

                <input type="hidden" name="restaurant" value="Cilantro Kano" />

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting ? "Sending..." : "Reserve Now"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div
            id="reservation"
            className="space-y-6 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                Visit Us
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Contact Details
              </h3>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Address
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75 md:text-base">
                  Old No. 67, New 23 Sultan Rd, Giginyu, Kano 700213, Kano
                  <span className="block text-white/45">
                    Located in La Sultana Hotel
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Opening Hours
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75 md:text-base">
                  Daily: 11:00 AM – 11:00 PM
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Phone
                </p>
                <a
                  href="tel:08122199999"
                  className="mt-2 block text-sm leading-7 text-white/75 transition duration-300 hover:text-amber-300 md:text-base"
                >
                  0812 219 9999
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Services
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75 md:text-base">
                  Dine-in • Drive-through • Delivery • Takeaway • Outdoor Seating
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/Cilantrofoods"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/20"
            >
              Visit Social Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}