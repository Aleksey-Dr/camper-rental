import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import CardCamper from 'components/CardCamper';

import { fetchCampers } from '../../redux/operations';
import {
    selectInitial,
    selectCampers,
    selectSubmit,
} from '../../redux/selectors';

import css from './MainContent.module.scss';

const MainContent = () => {
    const [noOfElement, setNoOfElement] = useState(4);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const filter = useSelector(selectSubmit).join(' ');
    const campers = useSelector(selectCampers);
    const { isLoading, error } = useSelector(selectInitial);
    const normalizedFilter = filter.toLowerCase();
    const filterCampers = campers.filter(camper => 
        Object.keys(camper.details).join(' ').toLowerCase().includes(normalizedFilter)
    );

    const cardsOnPage = filterCampers.slice(0, noOfElement);

    return (
        <div className={css.content}>
            {isLoading && <Loader />}
            {error && (
                <p>
                    <b>Error: </b>
                    {error}
                </p>
            )}
            <ul className={css['content-list']}>
                {cardsOnPage.map(camper => (
                    <CardCamper
                        key={camper._id}
                        camperId={camper._id}
                    />
                ))}
            </ul>
            {noOfElement <= filterCampers.length && (
                <button
                    onClick={() => loadMore()}
                    className={css['content-btn']}
                >
                    Load more
                </button>
            )}
        </div>
    );
};

export default MainContent;
