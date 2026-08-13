import { cn, FormattedText } from 'drupal-canvas';

const FeatureIcons = ({ heading, items, className }) => {
  return (
    <section className={cn('w-full bg-white px-5 py-16 md:px-20 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px]">
        {heading && (
          <h2 className="font-heading mb-14 text-[clamp(1.75rem,3vw,3rem)] font-semibold leading-[1.08] text-hiscox-heading">
            <FormattedText>{heading}</FormattedText>
          </h2>
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">{items}</div>
      </div>
    </section>
  );
};

export default FeatureIcons;
