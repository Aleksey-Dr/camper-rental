import { useSelector } from "react-redux";

import FormBookNow from 'components/FormBookNow';
import ReviewsItem from "./ReviewsItem";

import { selectCampers } from "../../redux/selectors";

import css from './Reviews.module.scss';

const Reviews = ({ camperId }) => {
    const campers = useSelector(selectCampers);
    const oneCamper = campers.find(camper => camper._id === camperId);
    
    return (
        <div className={css.reviews}>
            <ul className={css['reviews-list']}>
                {oneCamper.reviews.map(item => (
                    <ReviewsItem
                        key={item.comment}
                        name={item.reviewer_name}
                        comment={item.comment}
                        rating={item.reviewer_rating}
                    />
                ))}
            </ul>
            <div className={css['reviews-form']}>
                <FormBookNow />
            </div>
        </div>
    );
};

export default Reviews;