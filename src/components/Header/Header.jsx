import { Link, NavLink } from "react-router-dom";

import Logotype from 'components/Logotype';

import css from './Header.module.scss';

const Header = () => {
    return (
        <header className={css.header}>
            <Link to='/'>
                <Logotype />
            </Link>
            <nav className={css.navigation}>
                <ul className={css['navigation-list']}>
                    <li className={css['navigation-item']}>
                        <NavLink
                            to="/"
                            className={css['navigation-link']}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={css['navigation-item']}>
                        <NavLink
                            to="/catalog"
                            className={css['navigation-link']}
                        >
                            Catalog
                        </NavLink>
                    </li>
                    <li className={css['navigation-item']}>
                        <NavLink
                            to="/favorites"
                            className={css['navigation-link']}
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;