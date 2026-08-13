import { useState } from 'react';
import { cn, FormattedText } from 'drupal-canvas';

const ChevronUp = () => (
  <svg aria-hidden="true" className="size-5 shrink-0" viewBox="0 0 14.3852 7.96367" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.189 1.96733L1.43333 7.723C1.27267 7.88367 1.07822 7.96389 0.85 7.96367C0.621778 7.96345 0.423112 7.87867 0.254001 7.70934C0.0846675 7.54022 0 7.34134 0 7.11267C0 6.88422 0.0846675 6.68545 0.254001 6.51634L6.45833 0.312002C6.66633 0.104002 6.90989 0 7.189 0C7.46811 0 7.71167 0.104002 7.91967 0.312002L14.1377 6.53C14.2983 6.69067 14.3808 6.88511 14.385 7.11334C14.3894 7.34156 14.307 7.54022 14.1377 7.70934C13.9686 7.87867 13.7697 7.96334 13.541 7.96334C13.3126 7.96334 13.1138 7.87867 12.9447 7.70934L7.189 1.96733Z" fill="currentColor"/>
  </svg>
);

const ChevronDown = () => (
  <svg aria-hidden="true" className="size-5 shrink-0" viewBox="0 0 14.3783 7.97" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.18933 7.97C7.04689 7.97 6.917 7.94667 6.79967 7.9C6.68233 7.85333 6.56867 7.775 6.45867 7.665L0.240667 1.447C0.0800005 1.28633 -0.000221762 1.08967 4.60405e-07 0.856999C0.000222683 0.62411 0.0850006 0.423111 0.254334 0.254C0.423445 0.0846665 0.622334 0 0.851 0C1.07944 0 1.27822 0.0846665 1.44733 0.254L7.18933 6.00967L12.945 0.254C13.1057 0.0933332 13.3001 0.0131099 13.5283 0.0133321C13.7566 0.0135543 13.9552 0.0983323 14.1243 0.267666C14.2937 0.436777 14.3783 0.635666 14.3783 0.864333C14.3783 1.09278 14.2937 1.29155 14.1243 1.46066L7.92 7.665C7.81 7.775 7.69633 7.85333 7.579 7.9C7.46167 7.94667 7.33178 7.97 7.18933 7.97Z" fill="currentColor"/>
  </svg>
);

const FaqItem = ({ question, answer, openByDefault = false, className }) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  return (
    <div
      className={cn(
        'border-b border-hiscox-divider transition-colors',
        isOpen && 'border-t-2 border-t-hiscox-red',
        className,
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left hover:text-hiscox-red transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hiscox-red"
      >
        <span className="font-heading text-lg font-semibold leading-snug text-hiscox-heading">
          {question}
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-6 text-base leading-relaxed text-hiscox-body">
            {answer && <FormattedText>{answer}</FormattedText>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
