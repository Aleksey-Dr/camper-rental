import { useSelector } from 'react-redux';

import CardCamper from 'components/CardCamper';
import { selectFavorites } from '../../redux/selectors';

import css from './FavoritesList.module.scss';

const FavoritesList = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <ul className={css['favorites-list']}>
            {favorites.map(camper => (
                <CardCamper
                    key={camper._id}
                    camperId={camper._id}
                />
            ))}
        </ul>
    );
};

export default FavoritesList;