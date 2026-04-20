export default function ImageSlot({
  src = "",
  alt = "Portfolio image",
  label = "Portfolio Image",
  hint = 'Set your image path in "app/page.jsx"',
  className = "",
  imageClassName = "",
}) {
  const isRenderableSrc =
    typeof src === "string" && src.trim() !== "" && !src.startsWith("@/");

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-br from-white to-background shadow-soft ${className}`}
    >
      {isRenderableSrc ? (
        <>
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover ${imageClassName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        </>
      ) : (
        <div className="flex h-full min-h-[240px] w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(114,210,187,0.22),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,244,249,0.96))] p-6">
          <div className="w-full rounded-[1.5rem] border border-dashed border-action/25 bg-white/75 p-6 text-center backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-action/75">
              {label}
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Image placeholder ready
            </p>
            <p className="mt-2 text-sm leading-7 text-ink/65">
              {src && src.startsWith("@/")
                ? 'Use a public path like "/images/photo.jpg" or a full "https://..." URL.'
                : hint}
            </p>
          </div>
        </div>
      )}

      <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary shadow-sm backdrop-blur">
        {label}
      </div>
    </div>
  );
}
