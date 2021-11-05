import "./post.scss"
import { Grade } from '@material-ui/icons'

function Post(props) {
    return (
        <div className="post-container">
            <div className="single-post">
                <img src={props.poster} className="post-poster" alt={props.name} />
                <div className="post-rate">
                    <span className="post-rate-number">{props.rate}/10</span>
                    <Grade className="post-rate-start" />
                </div>
                <div className="post-title">{props.name}</div>
                <p className="post-description">Đây là một bộ phim rất hay</p>
            </div>
        </div>
    )
}

export default Post;