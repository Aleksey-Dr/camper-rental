import SideBar from 'components/SideBar';

import css from './Favorites.module.scss';

const Favorites = () => {
    return (
        <div className={css.wrapper}>
            <SideBar />
        </div>
    );
};

export default Favorites;