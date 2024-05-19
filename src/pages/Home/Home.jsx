import { Link } from "react-router-dom";

import IMAGES from '../../images/homePage';

import css from './Home.module.scss';

const Home = () => {
    return (
        <div className={css.home}>
            <img
                width='512'
                src={IMAGES.camper1x}
                srcSet={`${IMAGES.camper1x} 1x,
                     ${IMAGES.lcamper2x} 2x,
                     ${IMAGES.camper2x} 3x`}
                alt='Camper "Let&#10076;s Travel!"'
                className={css['home-image']}
            />
            <div>
                <p className={css['home-description']}>Leave the daily routine behind you and start your next adventure
                    - We enable the possibility to you to go on
                    an adventurous vacation worldwide with
                    a rental motorhome for an affordable price and with
                    the best offers of Camper-Rental. Come and try us… fair
                    - easy - safe, that is our philosophy!
                    As a throughout Europe operating motorhome rental company
                    we offer the right motorhome and camper for everyone;
                    whether practical overcabs, sleek semi-integrated or
                    luxurious fully-integrated motorhomes,
                    all of our vehicles in a top condition at all times
                </p>
                <Link to='/catalog'
                    className={css['home-link']}
                >
                    Let&#10076;s Travel !
                </Link>
            </div>
        </div>
    );
};

export default Home;