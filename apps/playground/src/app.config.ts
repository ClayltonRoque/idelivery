import { nuxtUI } from '@idelivery/config';

export default defineAppConfig({
  ui: {
    strategy: 'override',
    ...nuxtUI,
  },
});
