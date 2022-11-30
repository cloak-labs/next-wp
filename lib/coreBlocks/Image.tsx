import NextImage from 'next/future/image'
import parse from 'html-react-parser'
import classNames from '../utils/classNames';
import ConditionalWrapper from '../components/ConditionalWrapper';
import Link from '../components/Link'
import { useBlockStyleBuilder } from '../hooks/useBlockStyleBuilder';

export default function Image({block, className, quality = 75, priority = false, placeholder = 'empty', blurDataURL}) {
  let {classes, styles} = useBlockStyleBuilder(block.data)
  let { url, alt, caption, href, width, height, align, className: wpClassName } = block?.data?.attrs
  const captionColor = block?.parent?.attrs?.textColor || 'gray-700'

  // width = !block.isNested && width ? width : '1300'
  // height = !block.isNested && height ? height : '1300'
  // width = !block.isNested && width ? width : '1300'
  // height = !block.isNested && height ? height : '1300'

  styles = {
    ...styles,
    width: width || '100%',
    maxWidth: '100%'
  }
  
  return (
    <div className={classNames('relative', align == 'center' && 'mx-auto', align == 'right' && 'ml-auto')} style={styles}>
      <Link href={href} className="relative">
        <NextImage
          src={url}
          className={classNames("rounded-lg", (block.isNested || width == 0) && "w-full h-full", wpClassName.includes("is-style-rounded") && "rounded-full", className, classes)}
          alt={alt}
          // fill={true}
          quality={quality}
          priority={priority}
          placeholder={(placeholder == 'blur' && !blurDataURL) ? 'empty' : placeholder} // prevent user error by not allowing placeholder == 'blur' when user hasn't defined a blurDataURL
          blurDataURL={blurDataURL}
          width={width || 1300}
          height={height}
          // layout="responsive"
        />
      </Link>
      {caption && <p className={classNames('text-sm text-center mt-2', `text-${captionColor}`)} style={{width: width || '100%', maxWidth: "100%"}}>{parse(caption)}</p>}
    </div>
  )
}