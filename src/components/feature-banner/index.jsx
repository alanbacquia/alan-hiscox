import { cn, FormattedText } from 'drupal-canvas';

const FeatureBanner = ({ heading, body, image, className }) => {
  return (
    <section className={cn('relative w-full overflow-hidden bg-hiscox-heading', className)}>
      {/* Background */}
      {image?.src && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(270deg, rgba(19,0,0,0) 30%, rgba(19,0,0,0.85) 100%)',
            }}
          />
        </div>
      )}

      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1360px] flex-col justify-center gap-10 px-5 py-20 md:px-20 md:py-24">
        <div className="max-w-2xl">
          {heading && (
            <h2 className="font-heading mb-6 text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.1] text-white">
              {heading}
            </h2>
          )}
          {body && (
            <div className="text-lg leading-relaxed text-gray-200">
              <FormattedText>{body}</FormattedText>
            </div>
          )}
        </div>
        {/* Carousel dot indicators */}
        <div className="flex items-center gap-2" aria-hidden="true">
          <div className="size-3 rounded-full bg-hiscox-red" />
          <div className="size-2 rounded-full bg-hiscox-divider" />
          <div className="size-2 rounded-full bg-hiscox-divider" />
          <div className="size-2 rounded-full bg-hiscox-divider" />
          <div className="size-2 rounded-full bg-hiscox-divider" />
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
