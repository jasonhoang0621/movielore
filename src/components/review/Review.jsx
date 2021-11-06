import Post from "../post/Post";
import "./review.scss";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from '../filters/Filters'

function Review() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/movies')
            .then(function (res) {
                let data = res && res.data ? res.data : [];
                setMovies(data);
            })
    }, [])

    return (
        <div className="review-container">
            <Filters />
            <div className="post-list">
                {movies && movies.length > 0 && movies.map(item => {
                    return (
                        <Post key={item.id}
                            id={item.id}
                            athor={item.athor}
                            cast={item.cast}
                            director={item.director}
                            gerne={item.gerne}
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
        </div>

    )
}

export default Review;