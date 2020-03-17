import moment from 'moment';

export const getDateTimeFormat = (date, format = 'DD/MM/YYYY HH:mm:ss') => moment(date).format(format);

export const formatCPF = cpf => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

export const formatCNPJ = cnpj => cnpj.replace(/(\d{2})(\d{5})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

export const sanitizePriceValue = price => price.replace(/[^0-9,]/g, '');
