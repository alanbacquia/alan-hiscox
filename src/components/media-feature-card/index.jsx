import { cn, Image } from 'drupal-canvas';

const PlayIcon = () => (
  <div
    aria-hidden="true"
    className="flex size-[61px] shrink-0 items-center justify-center rounded-full border-2 border-white text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 translate-x-0.5"
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  </div>
);

const MediaFeatureCard = ({
  image,
  title,
  logoImage,
  videoUrl,
  showPlayIcon = true,
  className,
}) => {
  const content = (
    <div
      className={cn('relative w-full overflow-hidden rounded-3xl', className)}
    >
      {image?.src && (
        <>
          <Image
            src={image.src}
            alt={image.alt ?? ''}
            width={image.width}
            height={image.height}
            className="h-[260px] w-full object-cover md:h-[530px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[rgba(19,0,0,0.4)]" />
        </>
      )}
      <div className="absolute bottom-0 left-0 flex items-center gap-4 p-5 md:gap-6 md:p-10">
        {logoImage?.src && (
          <Image
            src={logoImage.src}
            alt={logoImage.alt ?? ''}
            width={logoImage.width ?? 61}
            height={logoImage.height ?? 61}
            className="size-[61px] shrink-0"
          />
        )}
        {showPlayIcon && !logoImage?.src && <PlayIcon />}
        {title && (
          <h4 className="font-heading text-lg leading-[1.15] font-semibold text-white md:text-[26px]">
            {title}
          </h4>
        )}
      </div>
    </div>
  );

  const card = videoUrl ? (
    <a
      href={videoUrl}
      className="block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
      aria-label={title ?? 'Watch video'}
    >
      {content}
    </a>
  ) : (
    content
  );

  return (
    <section className="w-full bg-white px-5 pb-20 md:px-20 md:pb-40">
      {card}
    </section>
  );
};

export default MediaFeatureCard;
