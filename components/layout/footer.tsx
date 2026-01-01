import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">
              Hyolmo Helping Hands Nepal
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Humanity exists in everyone — it just needs an eye to see it and an
              open heart to feel it. Dedicated to humanism and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Quick Links</p>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-zinc-600 hover:text-zinc-900" href="/about">
                About
              </Link>
              <Link
                className="text-zinc-600 hover:text-zinc-900"
                href="/programs"
              >
                What We Do
              </Link>
              <Link
                className="text-zinc-600 hover:text-zinc-900"
                href="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="text-zinc-600 hover:text-zinc-900"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Contact</p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-600">
              <p>Tinchuli, Kathmandu, Nepal</p>
              <a
                className="hover:text-zinc-900"
                href="mailto:hyolmohelpinghands@gmail.com"
              >
                hyolmohelpinghands@gmail.com
              </a>
              <a
                className="hover:text-zinc-900"
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Hyolmo Helping Hands Nepal. All rights
            reserved.
          </p>
          <p>Built by • Kesang • Tshering</p>
        </div>
      </div>
    </footer>
  );
}
