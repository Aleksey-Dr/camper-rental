import IMAGES from '../../images/logotype';

const Logotype = () => {
    return (
        <img
            width='160'
            height='52'
            srcSet={`${IMAGES.logo1x} 1x,
                     ${IMAGES.logo2x} 2x,
                     ${IMAGES.logo2x} 3x`}
            src={IMAGES.logo1x}
            alt='Logotype'
        />
    );
};

export default Logotype;