import './comment.scss'
import { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../../../../store'


function Comment(props) {
    const { userState } = useContext(Context.userContext);
    const [showRootOption, setShowRootOption] = useState(false);

    let authenticate = null;
    if (userState.id === (props.comment.userID || props.reply.userID)) {
        authenticate = 'owner';
    } else if (userState.role) {
        authenticate = 'admin'
    } else if (userState.name !== null) {
        authenticate = 'user'
    }

    const handleShowRootOption = () => setShowRootOption(true);
    const handleHiddenRootOption = () => setShowRootOption(false);


    return (
        <>
            {props.comment ?
                <div className="comment-item">
                    <div className="root-comment">
                        {/* other name */}
                        {authenticate !== 'owner' &&
                            <div className='mb-1'>
                                <span className='comment-username'>{props.comment.name}</span>
                            </div>}

                        {/* owner name */}
                        {authenticate === 'owner' &&
                            <div className='mb-1'>
                                <span className='comment-username owner-username'>Tôi</span>
                            </div>}

                        {authenticate === 'owner' &&
                            <div className='list-comment-content feature-notice' tabIndex={0} onClick={showRootOption ? handleHiddenRootOption : handleShowRootOption} onBlur={handleHiddenRootOption}>
                                {props.comment.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}


                                {showRootOption &&
                                    <ul className='root-item-dropbox'>
                                        <li className='dropbox-item'>Chỉnh sửa</li>
                                        <li className='dropbox-item' onClick={() => props.handleDeleteComment(props.comment._id)}>Xóa</li>
                                    </ul>}
                            </div>
                        }

                        {authenticate === 'admin' &&
                            <div className='list-comment-content feature-notice' tabIndex={0} onClick={showRootOption ? handleHiddenRootOption : handleShowRootOption} onBlur={handleHiddenRootOption}>
                                {props.comment.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}



                                {showRootOption &&
                                    <ul className='root-item-dropbox'>
                                        <li className='dropbox-item'>Trả lời</li>
                                        <li className='dropbox-item'>Xóa</li>
                                    </ul>}
                            </div>
                        }

                        {authenticate === 'user' &&
                            <div className='list-comment-content feature-notice' tabIndex={0} onClick={showRootOption ? handleHiddenRootOption : handleShowRootOption} onBlur={handleHiddenRootOption}>
                                {props.comment.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}



                                {showRootOption &&
                                    <ul className='root-item-dropbox'>
                                        <li className='dropbox-item'>Trả lời</li>
                                    </ul>}
                            </div>
                        }

                        {authenticate === null &&
                            <div className='list-comment-content'>
                                {props.comment.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}
                            </div>
                        }
                    </div>
                </div>
                :
                <div className="comment-item">
                    <div className="child-comment">
                        {/* other name */}
                        {authenticate !== 'owner' &&
                            <div className='mb-1'>
                                <span className='comment-username'>{props.reply.name}</span>
                            </div>}

                        {/* owner name */}
                        {authenticate === 'owner' &&
                            <div className='mb-1'>
                                <span className='comment-username owner-username'>Tôi</span>
                            </div>}
                        {authenticate === 'owner' &&
                            <div className='list-comment-content feature-notice' tabIndex={0} onClick={showRootOption ? handleHiddenRootOption : handleShowRootOption} onBlur={handleHiddenRootOption}>
                                {props.reply.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}

                                {showRootOption &&
                                    <ul className='child-item-dropbox'>
                                        <li className='dropbox-item'>Chỉnh sửa</li>
                                        <li className='dropbox-item'>Xóa</li>
                                    </ul>}
                            </div>
                        }

                        {authenticate === 'admin' &&
                            <div className='list-comment-content feature-notice' tabIndex={0} onClick={showRootOption ? handleHiddenRootOption : handleShowRootOption} onBlur={handleHiddenRootOption}>
                                {props.reply.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}

                                {showRootOption &&
                                    <ul className='child-item-dropbox'>
                                        <li className='dropbox-item'>Xóa</li>
                                    </ul>}
                            </div>
                        }

                        {(authenticate === 'user' || authenticate === null) &&
                            <div className='list-comment-content'>
                                {props.reply.content.split('\n').map((item, index) => <div key={index}>{item}</div>)}
                            </div>
                        }
                        <div className="clearfix"></div>
                    </div>


                </div>
            }
        </>
    )
}

export default Comment;