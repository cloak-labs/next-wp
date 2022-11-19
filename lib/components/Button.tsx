import classNames from '../utils/classNames';
import ConditionalWrapper from './ConditionalWrapper';
import Link from 'next/link';
import HeroIcon from './HeroIcon';

const baseStyles = {
  solid: 'text-sm outline-2 outline-offset-2 transition-colors',
  outline: 'border text-sm outline-2 outline-offset-2 transition-colors',
  link: 'text-sm',
}

const variantStyles = {
  solid: {
    green: 'text-white bg-green-100 hover:bg-green-200 hover:text-blue-800',
    navy: 'text-white bg-blue-900 hover:bg-blue-700',
    blue: 'text-white bg-blue-800 hover:bg-blue-400',
  },
  outline: {
    green: 'border-green-100 text-blue-800 hover:border-green-300 hover:bg-green-100 hover:text-white',
    navy: 'border-blue-900 text-blue-800 hover:border-blue-700 hover:bg-blue-900 hover:text-white',
    blue: 'border-blue-800 text-blue-800 hover:border-blue-400 hover:bg-blue-800 hover:text-white',
  },
  link: {
    green: 'text-green-100 hover:text-green-300 active:text-green-100/80',
  },
}

export default function Button({
  color = 'navy',
  variant = 'solid',
  size = 'reg',
  href,
  icon,
  trailingIcon = true,
  isLoading = false,
  className,
  children
}) {
  
  return (
    <ConditionalWrapper
      condition={href}
      wrapper={children => <Link href={href}><a className={className}>{children}</a></Link>}
    >
      <button
        type="button"
        className={classNames(
          "inline-flex items-center justify-center border border-transparent font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
          size === 'small' && 'text-xs px-4 py-1.5',
          size === 'reg' && 'text-sm px-6 py-2.5',
          size === 'large' && 'text-base px-8 py-3',
          baseStyles[variant],
          variantStyles[variant][color],
          !href && className,
        )}
      >
        <span className="w-full">{children}</span>
      </button>
    </ConditionalWrapper>
  );
}