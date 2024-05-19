import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import icons from 'images/icons.svg';

import css from './Calendar.module.scss';

const Calendar = ({ onChange, placeholder, selected, }) => {
    return (
        <div className={css.wrapper}>
            <DatePicker
                placeholderText={placeholder}
                className={css.input}
            />
            <div className={css.icon}>
                <svg width='20' height='20'>
                    <use href={`${icons}#icon-calendar`}/>
                </svg>
            </div>
        </div>
    );
};

export default Calendar;