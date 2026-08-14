import { cn } from 'drupal-canvas';

const ThreeColumnCards = ({ heading, items, className }) => {
  return (
    <section className={cn('w-full bg-white px-5 py-16 md:px-20 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px]">
        {heading && (
          <h2 className="font-heading mb-10 text-3xl font-semibold text-hiscox-heading md:text-4xl">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{items}</div>
      </div>
    </section>
  );
};

export default ThreeColumnCards;
