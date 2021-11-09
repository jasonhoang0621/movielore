import "./review.scss";
import Filters from '../filters/Filters'

function Review(props) {
    return (
        <div className="review-container">
            <Filters menuFilter={props.filter} />
        </div>
    )
}

export default Review;