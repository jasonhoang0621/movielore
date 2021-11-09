import './postList.scss'
import Post from "../post/Post";

function PostList(props) {
    return (
        <div className="post-list">
            {props.final && props.final.length > 0 && props.final.map(item => {
                return (
                    <Post key={item.id}
                        id={item.id}
                        athor={item.athor}
                        cast={item.cast}
                        director={item.director}
                        gerne={item.gerne.join(', ')}
                        name={item.name}
                        plot={item.plot}
                        poster={item.poster}
                        rate={item.rate}
                        releaseDate={item.releaseDate}
                        review={item.review}
                        time={item.time}
                    />
                )
            })}
        </div>
    )
}

export default PostList;