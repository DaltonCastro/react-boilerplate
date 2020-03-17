import React, { Fragment } from 'react';
import {
  email,
  required,
  length,
  confirmation,
  date,
  addValidator
} from 'redux-form-validators';

import {
  createNumberMask,
  createTextMask
} from 'redux-form-input-masks';

const cpf = require('@fnando/cpf/dist/node');

export const isCpfValid = value => (cpf.isValid(value, true) ? undefined : '* CPF inválido');

export const TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
  DATE: 'date',
  FILE: 'file'
};

export const prepareFieldValidation = ({
  readOnly, validate, label, min = 6, fieldToCompare = 'password'
}) => {
  if (readOnly) return [];

  const msgs = {
    required: `${label} obrigatório`,
    min: `Mínimo ${min} caractéres`,
    same: 'Deve ser a mesma inserida acima',
    email: 'E-mail inválido',
    cpf: 'CPF inválido',
    cnpj: 'CNPJ inválido',
    rg: 'RG inválido',
    cep: 'CEP inválido',
    date: 'Data inválida',
    digit: 'Dígito Inválido'
  };
  const dateFormat = 'DD/MM/YYYY';

  const validations = {
    email: [required({ msg: msgs.required }), email({ msg: msgs.email })],
    required: [required({ msg: msgs.required })],
    password: [required({ msg: msgs.required }), length({ min, msg: msgs.min })],
    confirmation: [required({ msg: msgs.required }), confirmation({ field: fieldToCompare, msg: msgs.same })],
    date: [required({ msg: msgs.required }), date({ format: dateFormat, msg: msgs.date })],
    cpf: [required({ msg: msgs.required }), cpfValidator()],
    cnpj: [required({ msg: msgs.required }), length({ min: 16, msg: msgs.cnpj })],
    rg: [required({ msg: msgs.required }), length({ min: 8, msg: msgs.rg })],
    cep: [required({ msg: msgs.required }), length({ min: 8, msg: msgs.cep })],
    digit: [required({ msg: msgs.required }), length({ min: 1, max: 1, msg: msgs.digit })],
    '': []

  };
  return validations[validate];
};

const cpfValidator = addValidator({
  validator(options, value) {
    if (!cpf.isValid(value, true)) {
      return {
        defaultMessage: 'CPF inválido',
      };
    }
    return undefined;
  }
});

export const hasWarn = meta => (
  <div className='warn'>
    {meta.touched && meta.error}
  </div>
);

export const hasError = meta => (meta.touched ? 'danger' : '');


// Masks

export const cpfMask = createTextMask({
  pattern: '999.999.999-99',
});

export const cnpjMask = createTextMask({
  pattern: '99.99999.999/9999-99',
});

export const rgMask = createTextMask({
  pattern: '99999999',
});

export const cepMask = createTextMask({
  pattern: '99999-999',
});

export const dateMask = createTextMask({
  pattern: '99/99/9999',
});

export const numberMask = createNumberMask({
  allowEmpty: true
});

/**
 * Return false when it is not a digit typed
 */
export const onlyNumbers = value => value.replace(/[^\d.]/g, '');

export const getModalId = (a, b) => `${a}@${b}`;

export const ImageModal = ({ file }) => (
  <Fragment>
    <div className='text-center'>
      <img alt='' className='img-fluid' src={file} />
    </div>
  </Fragment>
);
