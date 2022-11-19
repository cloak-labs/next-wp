import { twMerge } from 'tailwind-merge'

const classNames = (...classes) => twMerge(classes.filter(Boolean).join(' '))

export default classNames