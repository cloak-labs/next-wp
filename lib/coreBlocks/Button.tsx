import { useBlockConfig } from "../hooks/useBlockConfig"
import Button from "../components/Button" 
import { useBlockStyleBuilder } from "../hooks/useBlockStyleBuilder"

export default function ButtonBlock({block}) {
    const config = useBlockConfig()
    const {classes, styles} = useBlockStyleBuilder(block.data)
    let { backgroundColor, className, text, url } = block.data.attrs

    let color = 'blue'
    if(backgroundColor.includes('green')) color = 'green'
    else if(backgroundColor == 'blue-900') color = 'navy'

    let variant = 'outline'
    if(className.includes('is-style-fill')) variant = 'solid'

    if(url.includes(config.wpUrl)) url = url.replace(config.wpUrl, '/')

    return <Button href={url} color={color} variant={variant}>{text}</Button>
}