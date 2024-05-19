import icons from 'images/icons.svg';

import css from './EquipmentList.module.scss';

const EquipmentList = ({ items }) => {
    return (
        <ul className={css.list}>
            {items.map(
                item =>
                    item[1] !== 0 && (
                        <li key={item} className={css['list-item']}>
                            <svg
                                width="20"
                                height="20"
                                className={css['list-icon']}
                            >
                                <use href={`${icons}#icon-${item[0]}`}></use>
                            </svg>
                            <ul className={css['list-details']}>
                                {item[1] !== 1 && <li>{item[1]}</li>}
                                <li>{item[0]}</li>
                            </ul>
                        </li>
                    )
            )}
        </ul>
    );
};

export default EquipmentList;
