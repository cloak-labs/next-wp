import {
	Heading,
	Paragraph,
	Columns,
    Column,
	Group,
	List,
    ListItem,
	Buttons,
    Button,
	Image,
    Html,
	Embed,
} from './coreBlocks'
import Container from './components/Container'
import ConditionalWrapper from './components/ConditionalWrapper'
import classNames from './utils/classNames'
import { deepMerge } from './utils/deepMerge'
import { useBlockConfig } from './hooks/useBlockConfig'

export default function Block({
	block,
	// blockConfig, at some point in future, allow this prop to override the blockConfig on a per-block basis by conditionally wrapping the rendered block with another <BlockConfigProvider />
	isNested = false,
	parentBlock,
	containerClasses = '',
	container, // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
	containerCondition,	// dev has the ability to override the default condition that determines whether to wrap a block with a container
	...props
}) {
    const blockConfig = useBlockConfig()
    
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
            'core/column': {
                component: Column,
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
            'core/button': {
                component: Button,
                container: true,
            },
        }
    } 

    // A collection of Booleans that tell us whether a user-provided 'container' prop is a function at all the possible levels (helps us determine which container to use later)
    let blockConfigComponentLevel = typeof blockConfig[block.blockName]?.container == "function",
        componentContainerPropLevel = typeof container == "function",
        // globalCustomBlocksLevel = typeof globalConfig?.blockConfig[block.blockName]?.container == "function",
        blockConfigGlobalLevel = typeof blockConfig?.container == "function",
        defaultComponentLevel = typeof defaults.blocks[block.blockName]?.container == "function"
    
	const finalConfig = deepMerge( // deeply merges the following configs to produce a final "master" config
        {...defaults.blocks}, // lowest priority (defaults)
        // globalConfig.blockConfig, // middle priority (global config)
        {...blockConfig} // highest priority (<Block blockConfig={{...}} />)
    )[block.blockName] // immediately after deep merging, we pick out the specific block we're currently rendering from the final config
    
    if(!finalConfig) {
        console.error(`Failed to render Block (${block.blockName}) due to missing config object for this particular block. You probably didn't provide a 'blockConfig' prop to your <Blocks /> component, or failed to include a sub-object for '${block.blockName}'.`)
        return <></>
    }
    
    const { component: Component, props: configProps = {} } = finalConfig

    container =
        blockConfigComponentLevel ? blockConfig[block.blockName]?.container : (
            componentContainerPropLevel ? container : (
                // globalCustomBlocksLevel ? blockConfig?.blockConfig[block.blockName]?.container : (
                    blockConfigGlobalLevel ? blockConfig?.container : (
                        defaultComponentLevel ? defaults.blocks[block.blockName]?.container : defaults.container
                    )
                // )
            )
        ); // lots of ways for devs to provide a custom container, each way takes a higher/lower precedent over the next way

    containerCondition = containerCondition ?? finalConfig.containerCondition ?? blockConfig.containerCondition ?? defaults.containerCondition
    
    const finalProps = deepMerge( // merge custom props provided to Block component with custom props provided by default/block config
        configProps,
        props
    )

    if(!Component) {
        console.error(`Failed to render Block (${block.blockName}) due to a missing component. You probably didn't provide this block with a 'component' prop in your 'blockConfig'.`)
        return <></>
    }

    const blockObj = {
        isNested,
        data: block,
        parent: parentBlock,
        config: finalConfig
    }

    return (
        <ConditionalWrapper
            condition={() => containerCondition({block: blockObj, finalProps})}
            wrapper={(children) => container({block: {...blockObj, rendered: children}, finalProps})}
        >
            <Component block={blockObj} {...finalProps} />
        </ConditionalWrapper>
    )
}