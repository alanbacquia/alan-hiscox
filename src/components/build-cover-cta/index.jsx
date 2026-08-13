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

const BuildCoverCta = ({
  heading,
  body,
  searchLabel = 'Tell us about your business',
  searchPlaceholder = 'Search business activity',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-hiscox-heading px-5 py-16 md:px-20 md:py-24',
        className,
      )}
    >
      {/* FDL supergraphic */}
      <div className="pointer-events-none absolute -right-20 -bottom-10 h-[500px] w-[460px] opacity-10 md:-right-0 md:bottom-0 md:h-[600px] md:w-[550px]">
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 737.137 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M367.992 632.596C368.064 633.315 369.073 633.315 369.145 632.596C376.186 562.17 410.353 492.335 436.715 455.9C488.972 383.709 544.613 367.537 588.516 368.159C710.748 369.893 774.276 500.546 714.21 602.571C680.844 659.245 608.286 678.481 552.15 641.626C551.796 641.393 551.802 640.861 552.151 640.62C572.349 626.635 577.751 609.166 577.751 592.678C577.751 567.657 557.563 551.272 557.381 551.13C528.23 528.425 488.543 537.814 459.741 573.984C391.752 659.365 373.115 771.736 369.153 799.491C369.056 800.17 368.082 800.17 367.985 799.491C364.022 771.736 345.386 659.365 277.396 573.984C248.594 537.814 208.908 528.425 179.756 551.13C179.574 551.272 159.387 567.657 159.387 592.678C159.387 609.166 164.789 626.635 184.986 640.62C185.335 640.861 185.342 641.393 184.987 641.626C128.851 678.481 56.293 659.245 22.9269 602.571C-37.1383 500.546 26.3895 369.853 148.622 368.12C192.448 367.498 248.242 383.814 300.422 455.9C326.785 492.335 360.951 562.17 367.992 632.596ZM368.013 477.66C368.187 478.21 368.951 478.21 369.125 477.66C413.212 338.472 518.592 322.009 519.611 211.763C520.793 83.8044 375.82 3.5834 368.82 0.0641303C368.65 -0.0213768 368.488 -0.0213768 368.318 0.0641303C361.317 3.5834 216.344 83.8044 217.527 211.763C218.546 322.009 323.926 338.472 368.013 477.66Z" fill="white"/>
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col gap-12 md:flex-row md:items-center md:gap-20">
        <div className="flex flex-1 flex-col gap-6">
          {heading && (
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              {heading}
            </h2>
          )}
          {body && (
            <div className="text-base leading-relaxed text-gray-300">
              <FormattedText>{body}</FormattedText>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {searchLabel && (
            <p className="text-base font-semibold text-white">{searchLabel}</p>
          )}
          <div className="flex items-center">
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
      </div>
    </section>
  );
};

export default BuildCoverCta;
