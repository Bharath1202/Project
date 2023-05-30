import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Customers',
    url: '/view',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Customer',
        url: '/home/view/customers'
      },
      {
        name: 'Game',
        url: '/home/view/game'
      },
    ]
  },
];
