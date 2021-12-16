import './favorite.scss'
import PostList from '../../review/postList/PostList';

function Favorite(props) {
    return (
        <div className="favorite-container">
            {!props.otherInfo && <PostList favorite={true} />}
            {props.otherInfo && <PostList otherInfo={props.otherInfo} />}
        </div>
    )
}

export default Favorite;