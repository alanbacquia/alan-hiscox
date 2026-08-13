import { cn, JsonApiClient } from 'drupal-canvas';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import useSWR from 'swr';
import { useRef } from 'react';
import PersonQuote from '@/components/person-quote';

const client = new JsonApiClient();

const SCROLL_AMOUNT = 504; // 480px card + 24px gap

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

const PeopleQuotes = ({ heading, items, className }) => {
  const scrollRef = useRef(null);

  const { data, error, isLoading } = useSWR(
    'node--testimonial',
    () =>
      client.getCollection('node--testimonial', {
        queryString: new DrupalJsonApiParams()
          .addFields('node--testimonial', ['title', 'quote', 'person_name', 'person_role', 'portrait'])
          .addInclude(['portrait', 'portrait.thumbnail'])
          .addFields('file--file', ['uri', 'url'])
          .getQueryString(),
      }),
  );

  const renderedItems =
    !error && !isLoading && data?.length
      ? data.map((node) => {
          const file = node.portrait?.thumbnail;
          const imageUrl = file?.links?.small_w568?.href ?? file?.links?.medium_w768?.href ?? null;
          const imageAlt = file?.resourceIdObjMeta?.alt ?? node.person_name ?? '';
          return (
            <PersonQuote
              key={node.id}
              quote={node.quote?.value}
              name={node.person_name}
              role={node.person_role}
              image={imageUrl ? { src: imageUrl, alt: imageAlt, width: 480, height: 320 } : null}
            />
          );
        })
      : items;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <section className={cn('w-full bg-white py-16 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-20">
        {heading && (
          <h2 className="font-heading mb-10 text-3xl font-semibold text-hiscox-heading md:text-4xl">
            {heading}
          </h2>
        )}
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous testimonial"
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-hiscox-divider bg-white text-hiscox-heading shadow-sm transition-colors hover:border-hiscox-red hover:text-hiscox-red focus-visible:outline-2 focus-visible:outline-hiscox-red"
        >
          <ArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-5 pb-2 md:px-20" style={{ minWidth: 'max-content' }}>
            {renderedItems}
          </div>
        </div>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next testimonial"
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-hiscox-divider bg-white text-hiscox-heading shadow-sm transition-colors hover:border-hiscox-red hover:text-hiscox-red focus-visible:outline-2 focus-visible:outline-hiscox-red"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default PeopleQuotes;
