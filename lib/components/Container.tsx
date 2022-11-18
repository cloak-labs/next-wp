import classNames from '../utils/classNames';

export default function Container({ className, innerClassName, mobileFullWidth = false, children, ...props }) {
  return (
    <div
      className={classNames('sm:px-6 lg:px-9', !mobileFullWidth && 'px-4', className)}
      {...props}
    >
      <div className={classNames('mx-auto max-w-7xl lg:max-w-8xl', innerClassName)}>
          {children}
      </div>
    </div>
  )
}