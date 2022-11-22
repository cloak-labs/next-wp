import Block from './Block'
import ConditionalWrapper from './components/ConditionalWrapper'
import BlockConfigProvider from './context/blockConfig'

export default function Blocks({data, blockConfig, container, ...props}) {
	return (
		<ConditionalWrapper
			condition={blockConfig}
			wrapper={(children) => (
				<BlockConfigProvider value={blockConfig} >
					{children}
				</BlockConfigProvider>
			)}
		>
			{data?.map((block, i) => <Block key={i} index={i} block={block} container={container} {...props} /> )}
		</ConditionalWrapper>
	)
}