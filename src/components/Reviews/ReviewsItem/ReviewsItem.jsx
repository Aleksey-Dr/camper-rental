import Stars from "components/Stars";

import css from './ReviewsItem.module.scss';

const ReviewsItem = ({ name, comment, rating }) => {
    return (
        <li className={css.item}>
            <div className={css['item-top']}>
                <div className={css['item-avatar']}>{name[0]}</div>
                <div className={css['item-info']}>
                <p className={css['item-name']}>{name}</p>
                <Stars rating={rating} />
                </div>
            </div>
            <p className={css['item-text']}>{comment}</p>
        </li>
    );
};

export default ReviewsItem;