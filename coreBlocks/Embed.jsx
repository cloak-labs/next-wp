import ReactPlayer from "react-player";

export default function Embed({block, className}) {
    return (
        <div className={className}>
          <ReactPlayer url={block.data.attrs.url} width="100%" />
        </div>
    )
}