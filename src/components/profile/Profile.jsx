import './profile.scss'
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Information from './information/Information';
import Password from './password/Password';
import Favorite from './favorite/Favorite';
import axios from 'axios';

function Profile(props) {
    const { id } = useParams();
    const [section, setSection] = useState('');
    const [otherInfo, setOtherInfo] = useState({
        id: null,
        name: null,
        email: null,
        role: null,
        favorite: []
    });
    const location = useLocation();
    let request = 'information';
    if (!id) {
        request = location?.state?.request;
    }

    useEffect(() => {
        setSection(request);
    }, [request])

    useEffect(() => {
        if (id) {
            axios.get(`https://movielore-database.herokuapp.com/user/profile/${id}`)
                .then(res => {
                    if (!res.data.error) {
                        setOtherInfo({ ...res.data });
                    }
                })
        }
    }, [id])
    return (
        <div className='profile-container'>

            <div className="profile-menu">
                <div className={section === 'information' ? 'profile-menu-item active' : 'profile-menu-item'} onClick={e => setSection('information')}>Tài khoản</div>
                {!id && <div className={section === 'password' ? 'profile-menu-item active' : 'profile-menu-item'} onClick={e => setSection('password')}>Mật khẩu</div>}
                <div className={section === 'favorite' ? 'profile-menu-item active' : 'profile-menu-item'} onClick={e => setSection('favorite')}>Yêu thích</div>
            </div>

            <div className="profile-content">
                {section === 'information' && <Information otherInfo={otherInfo} />}
                {section === 'password' && <Password />}
                {section === 'favorite' && <Favorite otherInfo={otherInfo} />}
            </div>

        </div>
    )
}

export default Profile;
