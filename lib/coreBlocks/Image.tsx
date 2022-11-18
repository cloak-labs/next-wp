import NextImage from 'next/image'
import parse from 'html-react-parser'
import classNames from '../utils/classNames';
import ConditionalWrapper from '../components/ConditionalWrapper';
import Link from '../components/Link'
import { useBlockStyleBuilder } from '../hooks/useBlockStyleBuilder';

export default function Image({block, className}) {
  const {classes, styles} = useBlockStyleBuilder(block.data)
  const { url, alt, caption, href } = block?.data?.attrs
  const captionColor = block?.parent?.attrs?.textColor || 'gray-700'
   
  return (
    <div className={classNames('relative', className)} style={styles}>
      <ConditionalWrapper
        condition={href}
        wrapper={(children) => <Link href={href}>{children}</Link>}
      >
        <NextImage src={url} className={classNames("rounded-lg", classes)} objectFit='cover' alt={alt} width="100%" height="100%" layout="responsive" />
      </ConditionalWrapper>
      {caption && <p className={classNames('text-sm text-center mt-2', `text-${captionColor}`)}>{parse(caption)}</p>}
    </div>
  );
}