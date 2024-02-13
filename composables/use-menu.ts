import type { Menu } from '~/types';

export const useMenu = () => {
  const menu = ref<Menu[]>([
    {
      name: 'Home',
      path: '/',
      icon: 'mdi-home',
    },
    {
      name: 'Home',
      path: '/',
      icon: 'mdi-home',
    },
    {
      name: 'Home',
      path: '/',
      icon: 'mdi-home',
    },
    {
      name: 'Home',
      path: '/',
      icon: 'mdi-home',
    },
  ]);

  return { menu };
};
