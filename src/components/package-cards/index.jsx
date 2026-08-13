import { cn, FormattedText, JsonApiClient } from 'drupal-canvas';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import { useRef, useState } from 'react';
import useSWR from 'swr';
import PackageCardItem from '@/components/package-card-item';

const client = new JsonApiClient();

const SCROLL_AMOUNT = 345; // 320px card + 20px gap (md:px-5)

const ArrowLeft = () => (
  <svg aria-hidden="true" className="size-5" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg aria-hidden="true" className="size-5" viewBox="0 0 20 20" fill="none">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PackageCards = ({ heading, body, items, className }) => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const { data, error, isLoading } = useSWR(
    'node--insurance_package',
    () =>
      client.getCollection('node--insurance_package', {
        queryString: new DrupalJsonApiParams()
          .addFields('node--insurance_package', ['title', 'description', 'link_url', 'image'])
          .addInclude(['image', 'image.thumbnail'])
          .addFields('file--file', ['uri', 'url'])
          .getQueryString(),
      }),
  );

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
  };

  const renderedItems =
    !error && !isLoading && data?.length
      ? data.map((node) => {
          const file = node.image?.thumbnail;
          const imageUrl = file?.links?.small_w568?.href ?? file?.links?.medium_w768?.href ?? null;
          const imageAlt = file?.resourceIdObjMeta?.alt ?? node.title ?? '';
          return (
            <PackageCardItem
              key={node.id}
              title={node.title}
              linkUrl={node.link_url}
              image={imageUrl ? { src: imageUrl, alt: imageAlt, width: 320, height: 400 } : null}
            />
          );
        })
      : items;

  return (
    <section className={cn('w-full bg-white py-16 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:gap-20">
          {heading && (
            <h2 className="font-heading flex-1 text-3xl font-semibold leading-[1.1] text-hiscox-heading md:text-4xl">
              {heading}
            </h2>
          )}
          {body && (
            <div className="flex-1 text-base leading-relaxed text-hiscox-body">
              <FormattedText>{body}</FormattedText>
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous packages"
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-hiscox-divider bg-white text-hiscox-heading shadow-sm transition-colors hover:border-hiscox-red hover:text-hiscox-red focus-visible:outline-2 focus-visible:outline-hiscox-red"
        >
          <ArrowLeft />
        </button>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-5 px-5 pb-2 md:px-20" style={{ minWidth: 'max-content' }}>
            {renderedItems}
          </div>
        </div>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next packages"
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-hiscox-divider bg-white text-hiscox-heading shadow-sm transition-colors hover:border-hiscox-red hover:text-hiscox-red focus-visible:outline-2 focus-visible:outline-hiscox-red"
        >
          <ArrowRight />
        </button>
      </div>
      {/* Scroll progress bar */}
      <div className="mx-auto mt-6 w-full max-w-[1360px] px-5 md:px-20">
        <div className="h-0.5 w-full bg-hiscox-divider">
          <div
            className="h-full bg-hiscox-red transition-all duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default PackageCards;
