import Block from './Block'
import ConditionalWrapper from './components/ConditionalWrapper'
import BlockConfigProvider from './context/blockConfig'

export default function Blocks({data, blockConfig, container, ...props}) {
	return (		
    <BlockConfigProvider value={blockConfig}>
      {data?.map((block, i) => (
        <Block
          key={i}
          block={block}
          container={container}
          {...props}
        />
      ))}
    </BlockConfigProvider>
	)
}