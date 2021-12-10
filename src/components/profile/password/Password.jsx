import './password.scss'

function Password() {
    return (
        <form className="password-container">
            <h1>Đổi mật khẩu</h1>

            <div className="password-label">
                <label>Mật khẩu hiện tại:</label>
                <label>Mật khẩu mới:</label>
                <label>Nhập lại mật khẩu:</label>
            </div>
            <div className="password-content">
                <input type="password" name="oldPassword" />
                <input type="password" name="newPassword" />
                <input type="password" name="rePassword" />
            </div>

            <div className='clearfix'></div>

            <input type="submit" value="Đổi" className="password-button" />
        </form>
    )
}

export default Password;
