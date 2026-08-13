import { cn, Image, FormattedText } from 'drupal-canvas';

const PersonQuote = ({ image, quote, name, role, className }) => {
  return (
    <div
      className={cn('flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm', className)}
      style={{ width: 'min(480px, 85vw)', flexShrink: 0 }}
    >
      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden bg-gray-100">
        {image?.src ? (
          <Image
            src={image.src}
            alt={image.alt ?? name ?? ''}
            width={image.width ?? 480}
            height={image.height ?? 320}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      {/* Quote content */}
      <div className="flex flex-1 flex-col gap-4 p-8">
        {/* Quote mark */}
        <p className="font-heading text-[2.5rem] leading-none text-hiscox-red" aria-hidden="true">&ldquo;&ldquo;</p>
        {quote && (
          <div className="flex-1 text-base leading-relaxed text-hiscox-body">
            <FormattedText>{quote}</FormattedText>
          </div>
        )}
        {(name || role) && (
          <div className="mt-2 flex flex-col gap-0.5 border-t border-hiscox-divider pt-4">
            {name && (
              <p className="font-heading text-sm font-semibold text-hiscox-heading">
                {name}
              </p>
            )}
            {role && <p className="text-sm text-hiscox-caption">{role}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonQuote;
