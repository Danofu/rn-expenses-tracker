import moment from 'moment';

export const getFormattedDate = (date) => moment(date).format('DD/MM/YYYY');
