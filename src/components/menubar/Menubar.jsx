import "./menubar.scss"
import { actions } from "../../store";
import { useState, useContext } from 'react';
import { MovieContext } from "../../store";

function Menubar() {
    const [state, dispatch] = useContext(MovieContext);

    const gerne = ['Anime', 'Âm nhạc', 'Bí ẩn', 'Chiến tranh', 'Chính kịch', 'Drama',
        'Hoạt hình', 'Gia đình', 'Giật Gân', 'Hài', 'Hành động', 'Viễn tưởng', 'Kinh dị',
        'Lãng mạn', 'Phiêu lưu', 'Tài liệu', 'Tâm lí'];

    const movies = state.movies;
    const [filterGerne, setFilterGerne] = useState([]);
    const chosen = (filter, movie) => filter.every(r => movie.includes(r))

    const handleChosenGerne = (event) => {
        event.currentTarget.classList.toggle('active-section');
        let temp = filterGerne;

        if (event.currentTarget.className.includes('active-section')) {
            temp.push(event.target.childNodes[0].data)
        }
        else {
            temp = temp.filter(item => item !== event.target.childNodes[0].data);
        }
        setFilterGerne(temp);
        dispatch(actions.filterMenu(movies.filter(movie => chosen(temp, movie.gerne))))
    }

    return (
        <>
            <div className="menubar-container">
                <div className="menu-list">

                    {gerne.map((item, index) => {
                        return (
                            <p className="menu-items"
                                onClick={(event) => handleChosenGerne(event)}
                                key={index}>
                                {item}
                            </p>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Menubar;