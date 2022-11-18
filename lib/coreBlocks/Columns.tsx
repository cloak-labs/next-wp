import ConditionalWrapper from "../components/ConditionalWrapper"
import Container from "../components/Container"
import { useBlockStyleBuilder } from "../hooks/useBlockStyleBuilder"
import { Fragment } from "react"
import classNames from "../utils/classNames"
import Column from "./Column"

export default function Columns({block}) {
    const {classes, styles} = useBlockStyleBuilder(block.data)
    const columns = block.data.innerBlocks
    let columnWidths = columns.map(col => parseFloat(col.attrs.width))
    
    // Ensure column widths add up to 100% (Gutenberg doesn't force the columns to add up to 100%; they can add up to more or less but we don't want that)
    // eg. 2 columns with 60% and 45% widths (total of 105%) will be adjusted below to become 57.5% and 42.5% (total of 100%)
    let totalWidth = 0
    columnWidths.forEach(width => totalWidth += width)
    const isOver = totalWidth > 100
    const isUnder = totalWidth < 100
    if(isOver || isUnder){
      const extra = Math.abs(100 - totalWidth)
      const adjustment = extra / columns.length
      columnWidths = columnWidths.map(width => isOver ? width - adjustment : width + adjustment)
    }

    return (
        <ConditionalWrapper
            condition={block.isNested == false}
            wrapper={(children) => <Container className={classNames("py-12", classes)} style={styles} innerClassName={`grid grid-cols-1 grid-cols-12 gap-10 lg:gap-20`}>{children}</Container>}
        >
            {columns?.map((column, i) => (
                <Fragment key={i}>
                    <Column column={column} index={i} width={columnWidths[i]} />
                </Fragment>                
            ) )}
        </ConditionalWrapper>
    )
}