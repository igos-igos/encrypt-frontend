import { Rule } from 'antd/lib/form';

export const emailValidation: Rule[] = [
  { required: true, message: 'Введите email' },
  {
    type: 'email',
    message: 'Значение не является email',
    validateTrigger: 'submit',
  },
];

export const passwordValidation: Rule[] = [
  { required: true, message: 'Введите пароль' },
  { min: 6, message: 'Пароль должен быть не короче 6 символов' },
];
