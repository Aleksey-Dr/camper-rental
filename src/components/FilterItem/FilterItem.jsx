import { useDispatch } from "react-redux";

import { changeFilter } from '../../redux/filterSlice';

import css from './FilterItem.module.scss';

const FilterItem = ({ width, height, name, value, href, description }) => {
    const dispatch = useDispatch();
    const filterValue = event => {
        dispatch(changeFilter(event.currentTarget.value));
    };

    return (
        <li className={css.item}>
            <input
                onChange={filterValue}
                type="checkbox"
                id={description}
                name={name}
                value={value}
                className={
                    `${css['item-checkbox']}
                     ${css['visually-hidden']}`
                }
            />
            <label htmlFor={description} className={css['item-label']}>
                <span className={css['item-wrapper']}>
                    <svg width={width} height={height}>
                        <use href={href}></use>
                    </svg>
                    <div>{description}</div>
                </span>
            </label>
        </li>
    );
}

export default FilterItem;