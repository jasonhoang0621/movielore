import './commentList.scss'
import { Context } from '../../../store';
import { useContext, useState, useEffect } from 'react'
import Comment from './comment/Comment';
import axios from 'axios';


function CommentList(props) {
    const { userState } = useContext(Context.userContext);
    const [comments, setComments] = useState([]);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

    const [newComment, setNewCommnet] = useState({
        _id: 1,
        reviewID: props.reviewID,
        userID: userState.id,
        name: userState.name,
        content: '',
        parentID: null,
    })

    useEffect(() => {
        setComments(props.comments)
    }, [props.comments])

    const handlePostNewComment = () => {
        if (newComment.content !== '') {
            setIsLoadingBtn(true);
            axios.post('https://movielore-database.herokuapp.com/comment', newComment)
                .then(res => {
                    if (!res.data.error) {
                        setComments([res.data, ...comments])
                        setNewCommnet({ ...newComment, content: '' })
                        setIsLoadingBtn(false);
                    }
                })
                .catch(err => {
                    setIsLoadingBtn(false);
                    console.log(err);
                });
        }
    }

    const handleDeleteComment = (id) => {
        axios.delete(`https://movielore-database.herokuapp.com/comment/${id}`)
            .then(res => {
                if (res.data.error === 0) {
                    const newList = comments.filter(item => item._id !== id);
                    setComments(newList);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="comment-container">
            {userState.name &&
                <>
                    <div className="user-comment">
                        <textarea placeholder='Để lại bình luận của bạn....' value={newComment.content} onChange={e => setNewCommnet({ ...newComment, content: e.target.value })}></textarea>
                        <button onClick={isLoadingBtn ? null : handlePostNewComment}>{isLoadingBtn ? 'Đang đăng...' : 'Đăng'}</button>
                    </div>
                    <div className="clearfix"></div>
                    <div className="comment-seperate-line"></div>
                </>
            }

            {/* thêm class self cmt để edit */}
            <div className="list-comment">
                {comments.map(item => {
                    if (item.parentID === null) return <Comment key={item._id} comment={item} handleDeleteComment={handleDeleteComment} />
                    else return <Comment key={item._id} reply={item} handleDeleteComment={handleDeleteComment} />
                })}
            </div>
        </div>
    )
}

export default CommentList;