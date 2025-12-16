// file: 'src/app/page.tsx'
import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 dark:from-black dark:to-zinc-900 dark:text-zinc-100 font-sans">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Financial infrastructure built to accelerate your revenue growth
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl">
              Accept payments, automate revenue operations, and expand globally
              with a unified platform.
            </p>
            <div className="mt-10">
              <a
                href="#get-started"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm md:text-base font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Start now
              </a>
            </div>
          </div>
          <div className="relative w-full h-80 md:h-120 lg:h-150">
            <Image
              src="/heroSection.png"
              alt="Hero"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-xl shadow-sm"
              priority
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Global payments",
              desc: "Cards, wallets, bank redirects, and local methods.",
            },
            {
              title: "Revenue automation",
              desc: "Billing, invoicing, dunning, and tax.",
            },
            {
              title: "Financial services",
              desc: "Issuing, lending, and treasury tools.",
            },
            {
              title: "Risk & compliance",
              desc: "Advanced fraud detection and KYC.",
            },
            {
              title: "Developer platform",
              desc: "Modern APIs, webhooks, and SDKs.",
            },
            {
              title: "Scale & reliability",
              desc: "High availability and enterprise‑grade security.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Echelon Inc.</p>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
              href="#"
            >
              Terms
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
              href="#"
            >
              Privacy
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
