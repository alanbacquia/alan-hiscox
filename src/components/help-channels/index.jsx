import { cn, JsonApiClient } from 'drupal-canvas';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import useSWR from 'swr';
import HelpChannel from '@/components/help-channel';

const client = new JsonApiClient();

const HelpChannels = ({ heading, items, className }) => {
  const { data, error, isLoading } = useSWR(
    'node--help_channel',
    () =>
      client.getCollection('node--help_channel', {
        queryString: new DrupalJsonApiParams()
          .addFields('node--help_channel', ['title', 'icon', 'description', 'link_label', 'link_url'])
          .addFilter('id', [
            '0d79e6d1-6271-4f38-8d4b-3a6c3e3015e7',
            'c3131787-7c1a-42d6-a45c-bec1c757df96',
            '9851381e-b50b-48ac-a41d-9547271caa99',
          ], 'IN')
          .getQueryString(),
      }),
  );

  const renderedItems =
    !error && !isLoading && data?.length
      ? data.map((node) => (
          <HelpChannel
            key={node.id}
            icon={node.icon?.value ?? 'chat'}
            title={node.title}
            description={node.description?.value}
            linkLabel={node.link_label}
            linkUrl={node.link_url}
          />
        ))
      : items;

  return (
    <section
      className={cn(
        'w-full bg-hiscox-warm px-5 py-16 md:px-20 md:py-20',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1360px]">
        {heading && (
          <h2 className="font-heading mb-12 text-3xl font-semibold text-hiscox-heading md:text-4xl">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">{renderedItems}</div>
      </div>
    </section>
  );
};

export default HelpChannels;
