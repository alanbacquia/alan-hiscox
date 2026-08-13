import { cn, JsonApiClient } from 'drupal-canvas';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import useSWR from 'swr';
import FaqItem from '@/components/faq-item';

const client = new JsonApiClient();

const FaqAccordion = ({ heading, items, className }) => {
  const { data, error, isLoading } = useSWR(
    'node--faq',
    () =>
      client.getCollection('node--faq', {
        queryString: new DrupalJsonApiParams()
          .addFields('node--faq', ['title', 'question', 'answer'])
          .addFilter('id', [
            'd6b50c69-c693-4350-a3a1-12d4d6473883',
            '31c0a1a1-48b4-4859-bad3-30a62861aa58',
            '3121b1ea-610b-4a8a-9249-51222ecf66db',
            '1f417588-dc55-4eae-81cd-4c528eb87fd8',
            '5be5e406-5803-4513-9ceb-070ad9422776',
            '061d6bf9-98fc-4fb2-8de4-24dda2a1ec3f',
          ], 'IN')
          .getQueryString(),
      }),
  );

  const renderedItems =
    !error && !isLoading && data?.length
      ? data.map((node) => (
          <FaqItem
            key={node.id}
            question={node.question || node.title}
            answer={node.answer?.value}
          />
        ))
      : items;

  return (
    <section className={cn('w-full bg-white px-5 py-16 md:px-20 md:py-20', className)}>
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
          {heading && (
            <div>
              <h2 className="font-heading text-3xl font-semibold text-hiscox-heading md:text-4xl">
                {heading}
              </h2>
            </div>
          )}
          <div className="overflow-hidden rounded-2xl border border-hiscox-divider">
            {renderedItems}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
