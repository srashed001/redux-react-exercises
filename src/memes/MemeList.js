import {useSelector} from "react-redux"
import Meme from "./Meme"

function MemeList(){

    const memes = useSelector(store => store.memes)
    return (
        <div className="d-flex flex-row"> 
            {memes.map(meme => <Meme id={meme.id} key={meme.id} top={meme.top} bottom={meme.bottom} imgUrl={meme.imgUrl}/>)}
        </div>
    )

}

export default MemeList