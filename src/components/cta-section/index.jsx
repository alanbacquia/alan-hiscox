import { cn, FormattedText } from 'drupal-canvas';

const CtaSection = ({
  heading,
  body,
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel,
  secondaryCtaUrl,
  className,
}) => {
  return (
    <section className={cn('w-full bg-white py-16 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-20">
        <div className="relative overflow-hidden rounded-3xl bg-hiscox-warm px-6 py-12 md:px-16 md:py-20">
          {/* FDL supergraphic */}
          <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[380px] opacity-20">
            <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 368 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M183.712 316.298C183.748 316.658 184.252 316.658 184.288 316.298C187.803 281.085 204.86 246.167 218.021 227.95C244.109 191.855 271.886 183.768 293.804 184.08C354.826 184.946 386.54 250.273 356.554 301.285C339.897 329.622 303.674 339.24 275.649 320.813C275.472 320.696 275.475 320.431 275.65 320.31C285.733 313.317 288.43 304.583 288.43 296.339C288.43 283.828 278.352 275.636 278.261 275.565C263.707 264.213 243.895 268.907 229.516 286.992C195.574 329.682 186.27 385.868 184.292 399.745C184.243 400.085 183.757 400.085 183.708 399.745C181.73 385.868 172.426 329.682 138.484 286.992C124.105 268.907 104.293 264.213 89.7393 275.565C89.6485 275.636 79.5704 283.828 79.5704 296.339C79.5704 304.583 82.2672 313.317 92.3505 320.31C92.5247 320.431 92.5278 320.696 92.3508 320.813C64.3263 339.24 28.1031 329.622 11.4458 301.285C-18.5405 250.273 13.1744 184.926 74.1961 184.06C96.0756 183.749 123.929 191.907 149.979 227.95C163.14 246.167 180.197 281.085 183.712 316.298ZM183.722 238.83C183.809 239.105 184.191 239.105 184.278 238.83C206.287 169.236 258.896 161.004 259.405 105.882C259.995 41.9022 187.62 1.7917 184.125 0.0320651C184.04 -0.0106884 183.96 -0.0106884 183.875 0.0320651C180.38 1.7917 108.005 41.9022 108.595 105.882C109.104 161.004 161.713 169.236 183.722 238.83Z" fill="#383232"/>
            </svg>
          </div>

          <div className="relative max-w-xl">
            {heading && (
              <h2 className="font-heading mb-6 text-3xl font-semibold text-hiscox-heading md:text-4xl">
                {heading}
              </h2>
            )}
            {body && (
              <div className="mb-8 text-base leading-relaxed text-hiscox-body">
                <FormattedText>{body}</FormattedText>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              {primaryCtaLabel && primaryCtaUrl && (
                <a
                  href={primaryCtaUrl}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-hiscox-red px-6 text-base font-semibold text-white transition-colors hover:bg-hiscox-red-dark"
                >
                  {primaryCtaLabel}
                </a>
              )}
              {secondaryCtaLabel && secondaryCtaUrl && (
                <a
                  href={secondaryCtaUrl}
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-hiscox-heading px-6 text-base font-semibold text-hiscox-heading transition-colors hover:bg-white/50"
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
