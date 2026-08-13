import { cn, FormattedText } from 'drupal-canvas';

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5"
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const Hero = ({
  sectionLabel,
  heading,
  body,
  ctaLabel = 'Build your cover',
  ctaUrl,
  searchPlaceholder = 'Search business activity',
  image,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-hiscox-heading',
        className,
      )}
    >
      {/* Background image */}
      {image?.src && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(19,0,0,0.7)]" />
        </div>
      )}

      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col gap-8 px-5 py-20 md:px-20 md:py-28">
        {sectionLabel && (
          <span className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">
            {sectionLabel}
          </span>
        )}
        {heading && (
          <h1 className="font-heading max-w-3xl text-balance text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.1] text-white">
            {heading}
          </h1>
        )}
        {body && (
          <div className="max-w-xl text-lg leading-relaxed text-gray-300">
            <FormattedText>{body}</FormattedText>
          </div>
        )}
        {ctaUrl && (
          <a
            href={ctaUrl}
            className="self-start text-base font-semibold text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
          >
            {ctaLabel}
          </a>
        )}
        <div className="flex max-w-lg items-center">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="h-12 flex-1 rounded-l-lg bg-white px-4 text-base text-hiscox-heading outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex h-12 items-center justify-center rounded-r-lg bg-hiscox-red px-5 text-white hover:bg-hiscox-red-dark transition-colors"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
