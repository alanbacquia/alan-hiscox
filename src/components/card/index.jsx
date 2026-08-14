import { cn, Image, FormattedText } from 'drupal-canvas';

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Card = ({ title, body, image, linkUrl, linkLabel, className }) => {
  return (
    <div className={cn('group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm', className)}>
      {image?.src && (
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt ?? title ?? ''}
            width={image.width ?? 800}
            height={image.height ?? 600}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {title && (
          <h3 className="font-heading text-xl font-semibold leading-snug text-hiscox-heading">
            {title}
          </h3>
        )}
        {body && (
          <div className="flex-1 text-sm leading-relaxed text-hiscox-body">
            <FormattedText>{body}</FormattedText>
          </div>
        )}
        {linkLabel && linkUrl && (
          <a
            href={linkUrl}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-hiscox-red hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
          >
            {linkLabel}
            <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
