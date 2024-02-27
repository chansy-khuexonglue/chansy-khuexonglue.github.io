import type { Menu } from '~/types';

export const useMenu = () => {
  const menu = ref<Menu[]>([
    {
      name: 'About',
      path: '#about',
      icon: 'mdi-home',
    },
    {
      name: 'Tech Stack',
      path: '#tech-stack',
      icon: 'mdi-home',
    },
    {
      name: 'Work',
      path: '#work',
      icon: 'mdi-home',
    },
    {
      name: 'Contact',
      path: '#contact',
      icon: 'mdi-home',
    },
  ]);

  return { menu };
};
