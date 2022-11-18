import Block from './Block'

export default function Blocks({data, ...props}) {
	return (
		<>
			{data?.map((block, i) => <Block key={i} block={block} {...props} /> )}
		</>
	)
}