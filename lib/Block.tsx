import {
	Heading,
	Columns,
	Paragraph,
	Embed,
	Image,
	List,
	Buttons,
	Group,
    ListItem
} from './coreBlocks'
import Container from './components/Container'
import ConditionalWrapper from './components/ConditionalWrapper'
import { useBlockConfig } from './hooks/useBlockConfig'
import classNames from './utils/classNames'
import { deepMerge } from './utils/deepMerge'
import Html from './coreBlocks/Html'

export default function Block({
	block,
	isNested = false,
	parentBlock,
	customBlocks = [],
	containerClasses = '',
	container, // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
	containerCondition,	// dev has the ability to override the default condition that determines whether to wrap a block with a container
	...props
}) {

    const globalConfig = useBlockConfig()
    
    /*  
        next-wp provides simple/sensible defaults for core block components, the block container, 
        and the condition for which the block container is used (devs can override all these 
        defaults via the Block component's props or the global config's props) 
    */
    const defaults = {
        container: ({block}) => <Container className={classNames("relative", block.config.containerClasses)}>{block.rendered}</Container>,
        containerCondition: ({block}) => block.isNested == false && block.config.container,
        blocks: {
            'core/paragraph': {
                component: Paragraph,
                container: true,
                containerClasses: 'py-2',
            },
            'core/heading': {
                component: Heading,
                container: true,
                containerClasses: 'py-2',
            },
            'core/image': {
                component: Image,
                container: true,
                containerClasses: 'py-2',
            },
            'core/embed': {
                component: Embed,
                container: true,
                containerClasses: 'py-2',
            },
            'core/html': {
                component: Html,
                container: true,
                containerClasses: 'py-2',
            },
            'core/columns': {
                component: Columns,
                container: false,
            },
            'core/group': {
                component: Group,
                container: false,
            },
            'core/list': {
                component: List,
                container: true,
            },
            'core/list-item': {
                component: ListItem,
                container: false,
            },
            'core/buttons': {
                component: Buttons,
                container: true,
            },
        }
    } 

    // container = container ?? (typeof globalBlockSpecificContainer != "boolean" && ) ?? globalConfig.container ?? defaults.container

    // * Moved the following 2 lines below
    // container = container ?? globalConfig.container ?? defaults.container
    // containerCondition = containerCondition ?? globalConfig.containerCondition ?? defaults.containerCondition

    // A collection of Booleans that tell us whether a user-provided 'container' prop is a function at all the possible levels (helps us determine which container to use later)
    let componentCustomBlocksLevel = typeof customBlocks[block.blockName]?.container == "function",
        componentLevel = typeof container == "function",
        globalCustomBlocksLevel = typeof globalConfig?.customBlocks[block.blockName]?.container == "function",
        globalLevel = typeof globalConfig?.container == "function",
        defaultCustomBlocksLevel = typeof defaults.blocks[block.blockName]?.container == "function"
    
	const blockConfig = deepMerge( // deeply merges the following configs to produce a final "master" config
        defaults.blocks, // lowest priority (defaults)
        globalConfig.customBlocks, // middle priority (global config)
        customBlocks // highest priority (<Block customBlocks={{...}} />)
    )[block.blockName] // immediately after deep merging, we pick out the specific block we're currently rendering from the final config
    
    if(!blockConfig) return <></>
    
    const { component: Component, props: configProps } = blockConfig

    container =
        componentCustomBlocksLevel ? customBlocks?.[block.blockName].container : (
            componentLevel ? container : (
                globalCustomBlocksLevel ? globalConfig?.customBlocks[block.blockName]?.container : (
                    globalLevel ? globalConfig.container : (
                        defaultCustomBlocksLevel ? defaults.blocks[block.blockName]?.container : defaults.container
                    )
                )
            )
        ); // lots of ways for devs to provide a custom container, each way takes a higher/lower precedent over the next way

    containerCondition = containerCondition ?? globalConfig.containerCondition ?? defaults.containerCondition

    props = { // merge custom props provided to Block component with custom props provided by global config
        ...configProps,
        ...props // props provided to Block component will override matching props in global config
    }

    if(!Component) return <></>

    const blockObj = {
        isNested,
        data: block,
        parent: parentBlock,
        config: blockConfig
    }

    return (
        <ConditionalWrapper
            condition={() => containerCondition({block: blockObj, props})}
            wrapper={(children) => container({block: {...blockObj, rendered: children}, props})}
        >
            <Component block={blockObj} {...props} />
        </ConditionalWrapper>
    )
}