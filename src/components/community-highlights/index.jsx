import { cn, FormattedText } from 'drupal-canvas';

const getYoutubeId = (url) => {
  if (!url) return null;
  const match = url.match(/[?&]v=([^&]+)|youtu\.be\/([^?]+)/);
  return match?.[1] ?? match?.[2] ?? null;
};

const PlayIcon = () => (
  <svg aria-hidden="true" className="size-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CommunityHighlights = ({
  heading,
  body,
  ctaLabel,
  ctaUrl,
  videoUrl,
  videoTitle,
  className,
}) => {
  const youtubeId = getYoutubeId(videoUrl);
  const thumbnailSrc = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <section className={cn('w-full bg-white py-16 md:py-24', className)}>
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:items-start md:gap-16 md:px-20">
        <div>
          {heading && (
            <h2 className="font-heading text-3xl font-semibold text-hiscox-heading md:text-4xl">
              {heading}
            </h2>
          )}
        </div>
        <div className="flex flex-col items-start gap-6">
          {body && (
            <div className="text-base leading-relaxed text-hiscox-body">
              <FormattedText>{body}</FormattedText>
            </div>
          )}
          {ctaLabel && ctaUrl && (
            <a
              href={ctaUrl}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-hiscox-red px-6 text-sm font-semibold text-white transition-colors hover:bg-hiscox-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1360px] px-5 md:px-20">
        {thumbnailSrc ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={videoTitle ? `Play: ${videoTitle}` : 'Play video'}
            className="group relative block overflow-hidden rounded-2xl"
          >
            <img
              src={thumbnailSrc}
              alt=""
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-transform group-hover:scale-110">
                <PlayIcon />
              </span>
              {videoTitle && (
                <p className="text-base font-semibold text-white md:text-lg">
                  {videoTitle}
                </p>
              )}
            </div>
          </a>
        ) : (
          <div className="aspect-video w-full rounded-2xl bg-hiscox-warm" />
        )}
      </div>
    </section>
  );
};

export default CommunityHighlights;
