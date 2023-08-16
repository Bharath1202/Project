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
        name: 'Pending Account',
        url: '/home/view/pendingAccount'
      },
    ]
  },
  {
    name: 'Bank',
    url: '/home/view/bank',
  }
];
export const navItems2: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Deposit',
    url: '/home/customer/deposit',
    iconComponent: { name: 'cil-user' },

  }

]
