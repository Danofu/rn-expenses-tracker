import moment from 'moment';

export const getFormattedDate = (date, format) => moment(date).format(format);
