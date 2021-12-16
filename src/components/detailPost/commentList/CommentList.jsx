import './commentList.scss'
import { Context } from '../../../store';
import { useContext } from 'react'
import Comment from './comment/Comment';


function CommentList(props) {
    const { userState } = useContext(Context.userContext);

    return (
        <div className="comment-container">
            {userState.name &&
                <>
                    <div className="user-comment">
                        <textarea placeholder='Để lại bình luận của bạn....'></textarea>
                        <button>Đăng</button>
                    </div>
                    <div className="clearfix"></div>
                    <div className="comment-seperate-line"></div>
                </>
            }

            {/* thêm class self cmt để edit */}
            <div className="list-comment">
                {props.comments.map(item => {
                    if (item.parentID === null) return <Comment key={item._id} comment={item} />
                    else return <Comment key={item._id} reply={item} />
                })}
            </div>
        </div>
    )
}

export default CommentList;