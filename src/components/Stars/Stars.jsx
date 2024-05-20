import icons from 'images/icons.svg';
import css from './Stars.module.scss';

const Stars =({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <div key={index} className={index < rating ? `${css.star} ${css.active}` : css.star}>
            <svg
                width="16"
                height="16"
                className={css['card-icon-star']}
            >
                <use href={`${icons}#icon-star`}></use>
            </svg>
        </div>
    ));

    return (
        <div className={css.rating}>{stars}</div>
    );
};

export default Stars;