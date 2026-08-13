import { cn, JsonApiClient, sortMenu } from 'drupal-canvas';
import useSWR from 'swr';

const GlobeIcon = () => (
  <svg aria-hidden="true" className="size-3.5" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm5.657 4.686H11.1a12.6 12.6 0 0 0-1.115-2.428A6.478 6.478 0 0 1 13.657 4.686zM8 1.395c.613.859 1.094 1.968 1.41 3.291H6.59C6.906 3.363 7.387 2.254 8 1.395zM1.534 9.314A6.442 6.442 0 0 1 1.334 8c0-.455.069-.893.2-1.314h2.929A13.26 13.26 0 0 0 4.363 8c0 .443.035.884.1 1.314H1.534zm.809 1.333h2.558a12.6 12.6 0 0 0 1.115 2.428A6.478 6.478 0 0 1 2.343 10.647zm2.558-5.333H2.343a6.478 6.478 0 0 1 3.673-2.428A12.6 12.6 0 0 0 4.9 5.314zM8 14.605c-.613-.859-1.094-1.968-1.41-3.291h2.82C9.094 12.637 8.613 13.746 8 14.605zm1.637-.533a12.6 12.6 0 0 0 1.115-2.428h2.558a6.478 6.478 0 0 1-3.673 2.428zm1.329-3.758A13.26 13.26 0 0 0 11.637 9c0-.443-.035-.884-.1-1.314h2.929c.131.421.2.859.2 1.314 0 .455-.069.893-.2 1.314h-2.93zm-.229-2.628H9.662A13.64 13.64 0 0 0 9.74 8a13.64 13.64 0 0 0-.079 1.314H6.339A13.64 13.64 0 0 0 6.26 8c0-.443.027-.882.079-1.314H10.737zm.26-1.333H9.1a10.91 10.91 0 0 0-.99-2.285 6.497 6.497 0 0 1 2.887 2.285zM7.89 5.029a10.91 10.91 0 0 0-.99 2.285H5.002a6.497 6.497 0 0 1 2.888-2.285z"/>
  </svg>
);

const client = new JsonApiClient();

const FALLBACK_COLUMNS = [
  {
    id: 'products',
    title: 'Products',
    url: '/products',
    children: [
      { id: 'p1', title: 'Business Insurance', url: '/business-insurance' },
      { id: 'p2', title: 'Professional Liability', url: '/professional-liability' },
      { id: 'p3', title: 'Cyber Insurance', url: '/cyber-insurance' },
      { id: 'p4', title: 'Home Insurance', url: '/home-insurance' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    url: '/about',
    children: [
      { id: 'c1', title: 'About Hiscox', url: '/about' },
      { id: 'c2', title: 'Newsroom', url: '/newsroom' },
      { id: 'c3', title: 'Careers', url: '/careers' },
      { id: 'c4', title: 'Investors', url: '/investors' },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    url: '/contact',
    children: [
      { id: 's1', title: 'Get a Quote', url: '/get-a-quote' },
      { id: 's2', title: 'Contact Us', url: '/contact' },
      { id: 's3', title: 'Make a Claim', url: '/claims' },
      { id: 's4', title: 'FAQs', url: '/faqs' },
    ],
  },
];

const Footer = ({
  menuName = 'footer',
  copyrightText = '© 2025 Hiscox Ltd. All rights reserved.',
  localeLabel = 'UK',
  className,
}) => {
  const { data, error, isLoading } = useSWR(
    menuName ? ['menu_items', menuName] : null,
    ([type, id]) => client.getResource(type, id),
  );

  const rawLinks =
    !error && !isLoading && data ? Array.from(sortMenu(data)) : FALLBACK_COLUMNS;

  const columns = rawLinks.filter(
    (item) => item.children && item.children.length > 0,
  );
  const flatLinks = rawLinks.filter(
    (item) => !item.children || item.children.length === 0,
  );

  const hasColumns = columns.length > 0;

  return (
    <footer className={cn('w-full bg-hiscox-heading text-white', className)}>
      <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-8 md:px-20">
        <div className="mb-10 flex items-center">
          <a
            href="/"
            aria-label="Hiscox home"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
          >
            <svg className="h-10 w-auto" viewBox="0 0 165.975 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M44.7105 32.6995V6.37042H50.0305V18.731H63.3445V6.37042H68.6646V32.6995H63.3445V21.0884H50.0305V32.6995H44.7105ZM73.8052 8.36293C73.8052 10.0202 74.8713 11.0863 76.5285 11.0863C78.1858 11.0863 79.2518 9.98144 79.2518 8.36293C79.2518 6.74441 78.1858 5.6396 76.5285 5.6396C74.8713 5.6396 73.8052 6.70571 73.8052 8.36293ZM74.0128 32.6992H79.09V13.2082H74.0128V32.6992ZM96.1839 28.518C96.1839 30.3045 94.6003 31.4415 92.2451 31.4415C89.5247 31.4415 87.7786 29.7361 87.7786 27.1781H82.9061C82.9061 30.6701 86.632 33.0251 92.0827 33.0251C97.4832 33.0251 100.935 30.8325 100.935 27.2999C100.935 23.483 96.874 22.2242 93.8694 21.1685C90.5398 20.0315 88.0628 19.2601 88.0628 17.1486C88.0628 15.6057 89.5247 14.4686 91.5955 14.4686C94.0724 14.4686 95.6965 16.1742 95.6965 18.7322H100.569C100.569 15.2402 96.9585 12.8852 91.7579 12.8852C86.6011 12.8852 83.312 14.9965 83.312 18.3668C83.312 22.0618 87.3319 23.28 90.9458 24.5794C93.6663 25.5539 96.1839 26.2848 96.1839 28.518ZM117.801 26.3445C117.616 29.3778 115.891 31.4415 113.514 31.4415C110.468 31.4415 108.6 28.0308 108.6 22.9552C108.6 17.8389 110.468 14.4686 113.514 14.4686C115.888 14.4686 117.612 16.5276 117.801 19.4869H122.668C122.352 15.5942 118.638 12.8852 113.514 12.8852C107.301 12.8852 103.403 16.9051 103.403 22.9552C103.403 29.0052 107.301 33.0251 113.514 33.0251C118.641 33.0251 122.356 30.3124 122.669 26.3445H117.801ZM124.963 22.9552C124.963 29.0052 128.942 33.0251 134.952 33.0251C140.961 33.0251 144.981 29.0052 144.981 22.9552C144.981 16.9051 140.961 12.8852 134.952 12.8852C128.942 12.8852 124.963 16.9051 124.963 22.9552ZM130.16 22.9145C130.16 17.8389 132.069 14.4686 134.952 14.4686C137.834 14.4686 139.743 17.8389 139.743 22.9145C139.743 28.0308 137.834 31.4415 134.952 31.4415C132.069 31.4415 130.16 28.0308 130.16 22.9145ZM165.975 32.6992L158.015 21.8151L165.082 13.2082H161.89L156.522 19.7737L151.721 13.2082H145.997L153.501 23.4696L145.955 32.6992H149.08L154.988 25.5029L160.25 32.6992H165.975Z" fill="white"/>
              <path d="M18.3996 31.6298C18.4032 31.6658 18.4536 31.6658 18.4572 31.6298C18.8093 28.1085 20.5176 24.6167 21.8357 22.795C24.4486 19.1855 27.2307 18.3768 29.4258 18.408C35.5374 18.4946 38.7138 25.0273 35.7105 30.1285C34.0422 32.9622 30.4143 33.924 27.6075 32.0813C27.5898 32.0696 27.5901 32.0431 27.6075 32.031C28.6174 31.3317 28.8875 30.4583 28.8875 29.6339C28.8875 28.3828 27.8782 27.5636 27.8691 27.5565C26.4115 26.4213 24.4271 26.8907 22.9871 28.6992C19.5876 32.9682 18.6558 38.5868 18.4576 39.9745C18.4528 40.0085 18.4041 40.0085 18.3992 39.9745C18.2011 38.5868 17.2693 32.9682 13.8698 28.6992C12.4297 26.8907 10.4454 26.4213 8.9878 27.5565C8.9787 27.5636 7.96933 28.3828 7.96933 29.6339C7.96933 30.4583 8.23943 31.3317 9.24932 32.031C9.26677 32.0431 9.26708 32.0696 9.24934 32.0813C6.44257 33.924 2.81465 32.9622 1.14634 30.1285C-1.85691 25.0273 1.31947 18.4926 7.43108 18.406C9.6224 18.3749 12.4121 19.1907 15.0211 22.795C16.3392 24.6167 18.0475 28.1085 18.3996 31.6298ZM18.4006 23.883C18.4093 23.9105 18.4475 23.9105 18.4562 23.883C20.6606 16.9236 25.9296 16.1004 25.9805 10.5882C26.0397 4.19022 18.791 0.17917 18.441 0.00320651C18.4325 -0.00106884 18.4244 -0.00106884 18.4159 0.00320651C18.0659 0.17917 10.8172 4.19022 10.8763 10.5882C10.9273 16.1004 16.1963 16.9236 18.4006 23.883Z" fill="#E71000"/>
            </svg>
          </a>
        </div>

        {hasColumns && (
          <div className="mb-10 grid grid-cols-1 gap-8 border-b border-white/10 pb-10 md:grid-cols-3">
            {columns.map((col) => (
              <div key={col.id}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={child.url}
                        className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {flatLinks.length > 0 ? (
            <nav aria-label="Footer legal navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {flatLinks.map(({ id, title, url }) => (
                  <li key={id}>
                    <a
                      href={url}
                      className="text-sm text-white/50 transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <nav aria-label="Footer legal navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { id: 'pp', title: 'Privacy Policy', url: '/privacy' },
                  { id: 'tc', title: 'Terms & Conditions', url: '/terms' },
                  { id: 'cp', title: 'Cookie Policy', url: '/cookies' },
                ].map(({ id, title, url }) => (
                  <li key={id}>
                    <a
                      href={url}
                      className="text-sm text-white/50 transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="flex items-center gap-3">
            {localeLabel && (
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded border border-white/20 px-2.5 py-1 text-xs font-medium text-white/50 transition-colors hover:border-white/40 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
                aria-label={`Change locale: currently ${localeLabel}`}
              >
                <GlobeIcon />
                <span>{localeLabel}</span>
              </button>
            )}
            <p className="text-sm text-white/40">{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
