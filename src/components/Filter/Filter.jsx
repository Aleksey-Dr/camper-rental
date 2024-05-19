import { useDispatch } from "react-redux";

import FilterItem from 'components/FilterItem';

import { submitFilter } from '../../redux/filterSlice';

import filterEquipment from 'data/filterEquipment.json';
import filterType from 'data/filterType.json';

import icons from 'images/icons.svg';
import css from './Filter.module.scss';

const Filter = () => {
    const dispatch = useDispatch();

    const filterSubmit = event => {
        event.preventDefault();
        dispatch(submitFilter());
      };

    return (
        <div className={css.filter}>
            <h2 className={css['filter-title']}>Filters</h2>
            <form onSubmit={filterSubmit}>
                <div className={css['filter-equipment']}>
                    <h3 className={css['filter-subtitle']}>Vehicle equipment</h3>
                    <ul className={css['filter-list-transparent']}>
                        {filterEquipment.map(item =>
                            <FilterItem
                                key={item.id}
                                width={32}
                                height={32}
                                name='equipment'
                                value={item.value}
                                href={`${icons}${item.href}`}
                                description={item.description}
                            />
                        )}
                    </ul>
                </div>
                <div className={css['filter-type']}>
                <h3 className={css['filter-subtitle']}>Vehicle type</h3>
                    <ul className={css['filter-list']}>
                        {filterType.map(item =>
                            <FilterItem
                                key={item.id}
                                width={40}
                                name='type'
                                height={28}
                                href={`${icons}${item.href}`}
                                description={item.description}
                            />
                        )}
                    </ul>
                </div>
                <button type='submit' className={css['filter-btn']}>Search</button>
            </form>
        </div>
    );
};

export default Filter;