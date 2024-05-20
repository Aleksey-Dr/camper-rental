import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Features from 'components/Features';
// import Reviews from 'components/Reviews';

import { selectCampers } from '../../redux/selectors';

import icons from 'images/icons.svg';

import css from './ModalWindow.module.scss';

const ModalWindow = ({ camperId, onClose }) => {
    const campers = useSelector(selectCampers);
    const camperInfo = campers.find(camper => camper._id === camperId);
    const {
        name,
        price,
        rating,
        reviews,
        gallery,
        description,
    } = camperInfo;

    return (
        <div
            className={css['modal-backdrop']}
        >
            <div className={css['modal-window']}>
                <div className={css['card-header']}>
                    <h2 className={css['card-title']}>{name}</h2>
                    <button
                        onClick={onClose}
                        type='button'
                        className={css['modal-btn']}
                    >
                        <svg
                            width="32"
                            height="32"
                            className={css['modal-icon']}
                        >
                            <use href={`${icons}#icon-cross`}></use>
                        </svg>
                    </button>
                </div>
                <span className={css['card-reviews']}>
                    <svg
                        width="16"
                        height="16"
                        className={css['card-icon-star']}
                    >
                        <use href={`${icons}#icon-star`}></use>
                    </svg>
                    {rating}({reviews.length} Reviews)
                </span>
                <span className={css['card-location']}>
                    <svg
                        width="16"
                        height="16"
                        className={css['card-icon-location']}
                    >
                        <use href={`${icons}#icon-map-pin`}></use>
                    </svg>
                    Kyiv, Ukraine
                </span>
                <span className={css['card-price']}>&#8364;{price}</span>
                <div className={css['modal-window-scroll']}>
                    <ul className={css['card-gallery']}>
                        <li>
                            <img
                                src={gallery[0]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                        <li>
                            <img
                                src={gallery[1]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                        <li>
                            <img
                                src={gallery[2]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                    </ul>
                    <p className={css['card-description']}>{description}</p>
                    <nav className={css.navigation}>
                        <ul className={css['navigation-list']}>
                            <li>
                                <NavLink
                                    to={`${camperId}/features`}
                                    className={css['navigation-link']}
                                >
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='reviews'
                                    className={css['navigation-link']}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Features camperId={camperId} />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
