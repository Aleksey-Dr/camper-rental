import { useSelector } from 'react-redux';

import CardCamper from 'components/CardCamper';
import { selectFavorites } from '../../redux/selectors';

import css from './FavoritesList.module.scss';

const FavoritesList = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <ul className={css['favorites-list']}>
            {favorites.length !== 0
                ? (favorites.map(camper => (
                    <CardCamper
                        key={camper._id}
                        camperId={camper._id}
                    />
                  )))
                : <h2>You don't have a list of favorites yet, create that list!</h2>
            }
        </ul>
    );
};

export default FavoritesList;