import { Rule } from 'antd/lib/form';

const MIN_FIELD_LENGTH = 6;
const MAX_FIELD_LENGTH = 20;

export const titleValidation: Rule[] = [
  { required: true, message: 'Введите название' },
  {
    max: MAX_FIELD_LENGTH,
    message: `Максимальная длинна заголовка - ${MAX_FIELD_LENGTH} символов`,
  },
];

export const loginValidation: Rule[] = [
  { required: true, message: 'Введите логин' },
  {
    max: MAX_FIELD_LENGTH,
    message: `Максимальная длинна логина - ${MAX_FIELD_LENGTH} символов`,
  },
];

export const passwordValidation: Rule[] = [
  { required: true, message: 'Введите пароль' },
  { min: MIN_FIELD_LENGTH, message: `Пароль должен быть не короче ${MIN_FIELD_LENGTH} символов` },
  {
    max: MAX_FIELD_LENGTH,
    message: `Максимальная длинна пароля - ${MAX_FIELD_LENGTH} символов`,
  },
];

export const urlValidation: Rule[] = [{ type: 'url', message: 'Значение не является url', validateTrigger: 'submit' }];
