export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 px-4 py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading page</span>
      <div
        className="h-11 w-11 animate-spin rounded-full border-[3px] border-[#0B1F3A]/12 border-t-[#FF6B2B]"
        aria-hidden
      />
      <p
        className="text-sm text-[#0B1F3A]/65"
        style={{ fontFamily: "var(--font-poppins), Inter, sans-serif", fontWeight: 600 }}
      >
        Loading…
      </p>
    </div>
  );
}
