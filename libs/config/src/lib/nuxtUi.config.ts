import { tailwind } from './tailwind.config';

console.log(tailwind.theme.extend.colors.success);

export const nuxtUI = {
  primary: 'orange',
  gray: tailwind.theme.extend.colors.white,
};
