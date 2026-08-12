import { cn, FormattedText } from 'drupal-canvas';

const ContentIntro = ({ heading, body, ctaLabel, ctaUrl, className }) => {
  return (
    <section
      className={cn('w-full bg-white px-5 py-20 md:px-20 md:py-40', className)}
    >
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 md:flex-row md:gap-10">
        <div className="flex min-w-0 flex-1 flex-col">
          {heading && (
            <h1 className="font-heading text-5xl leading-[1.08] font-semibold text-balance text-hiscox-heading">
              {heading}
            </h1>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          {body && (
            <div className="text-lg leading-[1.22] text-hiscox-body">
              <FormattedText>{body}</FormattedText>
            </div>
          )}
          {ctaLabel && ctaUrl && (
            <a
              href={ctaUrl}
              className={cn(
                'inline-flex h-12 items-center justify-center rounded-lg px-4',
                'bg-hiscox-red text-base font-medium text-white',
                'hover:bg-hiscox-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red',
                'transition-colors',
              )}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentIntro;
