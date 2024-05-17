import { Link } from "react-router-dom";

import images from '../../images/404.svg'

import css from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={css.box}>
            <img width='750' src={images} alt='404'></img>
            <h1 className={css.message}>
                We&#10076;re sorry, the page you requested could not be found. Please go
                back to the homepage
            </h1>
            <Link to='/'
                className={css.link}
            >
                Back to home
            </Link>
        </div>
    );
};

export default NotFound;