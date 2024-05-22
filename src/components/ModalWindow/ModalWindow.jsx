import ReactDOM from 'react-dom';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Features from 'components/Features';
import Reviews from 'components/Reviews';

import { selectCampers } from '../../redux/selectors';

import icons from 'images/icons.svg';

import css from './ModalWindow.module.scss';

const portal = document.getElementById('modal_window');

const ModalWindow = ({ camperId, onClose }) => {
    const [featurePage, setFeaturePage] = useState(true);
    const [reviewsPage, setReviewsPage] = useState(false);

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

    const onFeature = () => {
        setFeaturePage(true);
        setReviewsPage(false)
    };
    const onReviews = () => {
        setFeaturePage(false);
        setReviewsPage(true)
    };

    return ReactDOM.createPortal(
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
                <span className={css['card-price']}>&#8364;{price},00</span>
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
                    <nav className={css.toggle}>
                        <ul className={css['toggle-list']}>
                            <li>
                                <button
                                    onClick={onFeature}
                                    type='button'
                                    className={featurePage
                                        ? `${css['toggle-btn']} ${css.current}`
                                        : css['toggle-btn']
                                    }
                                >
                                    Features
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onReviews}
                                    type='button'
                                    className={reviewsPage
                                        ? `${css['toggle-btn']} ${css.current}`
                                        : css['toggle-btn']
                                    }
                                >
                                    Reviews
                                </button>
                            </li>
                        </ul>
                    </nav>
                    {featurePage
                        ? <Features camperId={camperId} />
                        : <Reviews camperId={camperId} />
                    }
                </div>
            </div>
        </div>,
        portal
    );
};

export default ModalWindow;
