import SideBar from 'components/SideBar';
import FavoritesList from 'components/FavoritesList';

import css from './Favorites.module.scss';

const Favorites = () => {
    return (
        <div className={css.wrapper}>
            <SideBar />
            <FavoritesList />
        </div>
    );
};

export default Favorites;