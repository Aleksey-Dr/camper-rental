import icons from 'images/icons.svg';

import css from './EquipmentList.module.scss';

const EquipmentList = ({ items }) => {
    return (
        <ul className={css.list}>
            {items.map(item => (
                <li
                    key={item}
                    className={css['list-item']}
                >
                    <svg
                        width="20" height="20"
                        className={css['list-icon']}
                    >
                        <use href={`${icons}#icon-${item}`}></use>
                    </svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default EquipmentList;