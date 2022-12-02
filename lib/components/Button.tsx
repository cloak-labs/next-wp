import { classNames } from '../utils/classNames';
import ConditionalWrapper from './ConditionalWrapper';
import Link from './Link';
import HeroIcon from './HeroIcon';

const baseStyles = {
  solid: 'text-sm outline-2 outline-offset-2 transition-colors',
  outline: 'border text-sm outline-2 outline-offset-2 transition-colors',
  link: 'text-sm',
}

const variantStyles = {
  solid: {
    white: 'text-gray-800 bg-white hover:bg-gray-100',
    gray: 'text-white bg-gray-700 hover:bg-gray-800',
    black: 'text-white bg-black hover:bg-gray-900',
  },
  outline: {
    white: 'border-white text-black hover:bg-white hover:text-gray-800',
    gray: 'border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white',
    black: 'border-black text-black hover:bg-black hover:text-white',
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
  linkProps = {},
  children
}) {
  return (
    <Link href={href} {...linkProps}>
      <button
        type="button"
        className={classNames(
          "inline-flex items-center justify-center border border-transparent font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
          size === 'small' && 'text-xs px-4 py-1.5',
          size === 'reg' && 'text-sm px-6 py-2.5',
          size === 'large' && 'text-base px-8 py-3',
          baseStyles[variant],
          variantStyles[variant][color],
          className,
        )}
      >
        <span className="w-full">{children}</span>
      </button>
    </Link>
  )
}