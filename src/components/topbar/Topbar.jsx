import { Search, Bookmark, Notifications } from '@material-ui/icons'
import "./topbar.scss"

function Topbar() {
    return (
        <div className="topbar-container">
            <div className="left-topbar">
                <span className="main-logo">MovieLore</span>
            </div>
            <div className="middle-topbar">
                <div className="search-bar">
                    <Search className="search-icon" />
                    <input className="seach-input" type="text" placeholder="Tìm kiếm..." />
                </div>
            </div>
            <div className="right-topbar">
                <div className="topbar-icon">
                    <Bookmark />
                    <span className="topbar-icon-badge"></span>
                </div>
                <div className="topbar-icon">
                    <Notifications />
                    <span className="topbar-icon-badge"></span>
                </div>
                <div className="topbar-login">Đăng nhập</div>
            </div>
        </div>
    )
}

export default Topbar;