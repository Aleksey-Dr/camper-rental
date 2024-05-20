import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EquipmentList from 'components/EquipmentList';
import Button from 'components/Button';
import ModalWindow from 'components/ModalWindow';

import { selectCampers, selectFavoritesIds } from '../../redux/selectors';
import { changeFavorites } from '../../redux/favoritesSlice';

import icons from 'images/icons.svg';
import css from './CardCamper.module.scss';

const CamperCard = ({ camperId }) => {
    const oneCamper = useSelector(selectCampers).find(
        camper => camper._id === camperId
    );
    const favoritesIds = useSelector(selectFavoritesIds);
    const { name, price, rating, details, reviews, gallery, description } =
        oneCamper;

    const dispatch = useDispatch();
    const addToFavorites = () => {
        dispatch(changeFavorites(oneCamper));
    };

    const equipment = Object.entries(details);

    const [isOpen, setIsOpen] = useState(false);
    const [currentFirstElement, setCurrentFirst] = useState(0);
    const [currentEndElement, setCurrentEndElement] = useState(6);

    const toggleOpen = () => setIsOpen(!isOpen);

    const toggleLeft = () => {
        if (currentEndElement <= equipment.length) {
            setCurrentFirst(currentFirstElement + 6);
            setCurrentEndElement(currentEndElement + 6);
        }
    };
    const toggleRight = () => {
        if (currentEndElement > 6) {
            setCurrentFirst(currentFirstElement - 6);
            setCurrentEndElement(currentEndElement - 6);
        }
    };

    const itemsInCard = equipment.slice(currentFirstElement, currentEndElement);

    return (
        <>
            <div className={css.card}>
                <img
                    src={gallery[0]}
                    alt="Camper"
                    className={css['card-img']}
                />
                <div className={css['card-information']}>
                    <div className={css['card-header']}>
                        <h2 className={css['card-title']}>{name}</h2>
                        <span className={css['card-price']}>
                            &#8364;{price},00
                        </span>
                        <button
                            onClick={addToFavorites}
                            type="button"
                            className={css['card-favorite-btn']}
                        >
                            <svg
                                width="24"
                                height="24"
                                className={favoritesIds.includes(camperId)
                                    ? css['card-icon-heart-active']
                                    : css['card-icon-heart']
                                }
                            >
                                <use href={`${icons}#icon-heart`}></use>
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
                    <p className={css['card-description']}>{description}</p>
                    <div className={css['card-equipment']}>
                        <EquipmentList items={itemsInCard} />
                        <div className={css['card-equipment-buttons']}>
                            <button
                                onClick={() => toggleLeft()}
                                type="button"
                                className={css['card-equipment-btn']}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    style={{
                                        fill:
                                            currentEndElement >
                                                equipment.length &&
                                            'rgba(16, 24, 40, 0.2)',
                                    }}
                                >
                                    <use
                                        href={`${icons}#icon-arrow-right`}
                                    ></use>
                                </svg>
                            </button>
                            <button
                                onClick={() => toggleRight()}
                                type="button"
                                className={css['card-equipment-btn']}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    style={{
                                        fill:
                                            currentEndElement <= 6 &&
                                            'rgba(16, 24, 40, 0.2)',
                                    }}
                                >
                                    <use
                                        href={`${icons}#icon-arrow-left`}
                                    ></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Button
                        onClick={toggleOpen}
                        title={'Show more'}
                    />
                </div>
            </div>
            <Outlet />
            {isOpen &&
                <ModalWindow
                    onClose={toggleOpen}
                    camperId={camperId}
                />
            }
        </>
    );
};

export default CamperCard;
