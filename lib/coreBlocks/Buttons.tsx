import Button from "./Button" 
import { useBlockStyleBuilder } from "../hooks/useBlockStyleBuilder"
import { Fragment } from "react"
import classNames from "../utils/classNames"

export default function Buttons({block, className}) {
    const {classes, styles} = useBlockStyleBuilder(block.data)

    console.log('%%% button classes', classes)

    return (
        <div className={classNames("flex items-start gap-3", classes, className)} style={styles}>
            {block.data.innerBlocks.map((buttonBlock, i) => (
                <Fragment key={i}>
                    <Button block={{data: buttonBlock, parent: block.data, isNested: true}} />
                </Fragment>
            ))}
        </div>
    )
}