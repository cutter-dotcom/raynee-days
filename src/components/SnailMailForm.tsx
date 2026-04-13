"use client";

/**
 * SnailMailForm
 *
 * Visual-only signup form for the Snail Mail Club section.
 * Wire up the onSubmit handler to a real provider (Formspree, ConvertKit,
 * or a Next.js Server Action) when the backend is ready.
 */
export default function SnailMailForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: submit to mailing list provider
  }

  return (
    <form
      className="flex flex-col gap-4"
      aria-label="Snail Mail Club signup form"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="smc-name"
          className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[var(--color-navy)]/50"
        >
          Your Name
        </label>
        <input
          id="smc-name"
          type="text"
          autoComplete="given-name"
          placeholder="Raynee"
          className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/30 focus:outline-none focus:border-[var(--color-teal)]/50 focus:bg-white/60 transition-all duration-200 font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="smc-email"
          className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[var(--color-navy)]/50"
        >
          Email Address
        </label>
        <input
          id="smc-email"
          type="email"
          autoComplete="email"
          placeholder="hello@you.com"
          className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/30 focus:outline-none focus:border-[var(--color-teal)]/50 focus:bg-white/60 transition-all duration-200 font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="smc-address"
          className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[var(--color-navy)]/50"
        >
          Mailing Address
        </label>
        <input
          id="smc-address"
          type="text"
          autoComplete="street-address"
          placeholder="123 Ocean Ave, Town, State, ZIP"
          className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/30 focus:outline-none focus:border-[var(--color-teal)]/50 focus:bg-white/60 transition-all duration-200 font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <button
        type="submit"
        className="glass-btn mt-2 w-full text-[var(--color-navy)] font-[family-name:var(--font-dm-sans)] font-semibold text-sm"
      >
        Sign Me Up
      </button>
    </form>
  );
}
