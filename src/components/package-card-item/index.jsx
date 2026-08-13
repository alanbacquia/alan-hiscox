import { cn, Image } from 'drupal-canvas';

const PackageCardItem = ({ image, title, linkUrl, className }) => {
  const inner = (
    <div className={cn('group relative overflow-hidden rounded-2xl', className)} style={{ width: 'min(320px, 80vw)', flexShrink: 0 }}>
      {image?.src ? (
        <Image
          src={image.src}
          alt={image.alt ?? ''}
          width={image.width ?? 320}
          height={image.height ?? 400}
          className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-[400px] w-full bg-gray-200" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(19,0,0,0.75)] via-[rgba(19,0,0,0.2)] to-transparent" />
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-heading text-xl font-semibold leading-snug text-white">
            {title}
          </p>
          <div className="mt-3 h-0.5 w-12 bg-hiscox-red" />
        </div>
      )}
    </div>
  );

  return linkUrl ? (
    <a
      href={linkUrl}
      className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
    >
      {inner}
    </a>
  ) : (
    inner
  );
};

export default PackageCardItem;
