import {
	Heading,
	Columns,
	Paragraph,
	Embed,
	Image,
	List,
	Buttons,
	Group,
} from './coreBlocks'
import Container from './components/Container'
import ConditionalWrapper from './components/ConditionalWrapper'
import useBlockConfig from './hooks/useBlockConfig'
import classNames from './utils/classNames'
import { deepMerge } from './utils/deepMerge'


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
        nextwp provides simple/sensible defaults for core block components, the block container, 
        and the condition for which the block container is used (devs can override all these 
        defaults via the Block component's props or the global config's props) 
    */
    const defaults = {
        container: ({block}) => <Container className={classNames("relative", block.config.containerClasses)}>{block.rendered}</Container>,
        containerCondition: ({block}) => block.isNested == false && block.config.hasContainer,
        blocks: {
            'core/paragraph': {
                component: Paragraph,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/heading': {
                component: Heading,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/image': {
                component: Image,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/embed': {
                component: Embed,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/columns': {
                component: Columns,
                hasContainer: false,
            },
            'core/group': {
                component: Group,
                hasContainer: false,
            },
            'core/list': {
                component: List,
                hasContainer: true,
            },
            'core/buttons': {
                component: Buttons,
                hasContainer: true,
            },
        }
    } 

    container = container ?? globalConfig.container ?? defaults.container
    containerCondition = containerCondition ?? globalConfig.containerCondition ?? defaults.containerCondition
    
	const blockConfig = deepMerge(
        defaults.blocks, // lowest priority
        globalConfig.customBlocks, // middle priority (global config)
        customBlocks // highest priority (Block "customBlocks" prop)
    )[block.blockName]

    if(!blockConfig) return <></>

    const { component: Component, props: configProps } = blockConfig

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