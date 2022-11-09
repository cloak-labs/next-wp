import { useBlockStyleBuilder } from '../hooks/useBlockStyleBuilder'
import parse from 'html-react-parser'
import classNames from '../utils/classNames'

export default function List({block, className}) {
    const {classes, styles} = useBlockStyleBuilder(block.data)
    const { ordered, values } = block.data.attrs
    const ListType = ordered ? 'ol' : 'ul'

    return (
        <ListType className={classNames("space-y-3 pb-6", classes, className)} style={styles}>
            {parse(values)}
        </ListType>
    );
}