import { memo, SVGProps } from 'react';

const ScrollNavigationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 136' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26 13C26 20.1797 20.1797 26 13 26C5.82033 26 3.22919e-05 20.1797 3.22919e-05 13C3.22919e-05 5.8203 5.82033 0 13 0C20.1797 0 26 5.8203 26 13Z'
      stroke='white'
    />
    <path
      d='M19.9144 13C19.9144 16.5899 16.7804 19.5 12.9144 19.5C9.04844 19.5 5.91443 16.5899 5.91443 13C5.91443 9.41015 9.04844 6.5 12.9144 6.5C16.7804 6.5 19.9144 9.41015 19.9144 13Z'
      fill='white'
    />
    <path
      d='M20 55.5C20 59.0899 16.866 62 13 62C9.13401 62 6 59.0899 6 55.5C6 51.9101 9.13401 49 13 49C16.866 49 20 51.9101 20 55.5Z'
      fill='white'
      fillOpacity={0.7}
    />
    <circle cx={13} cy={92} r={7} fill='white' fillOpacity={0.7} />
    <circle cx={13} cy={129} r={7} fill='white' fillOpacity={0.7} />
  </svg>
);
const Memo = memo(ScrollNavigationIcon);
export { Memo as ScrollNavigationIcon };
