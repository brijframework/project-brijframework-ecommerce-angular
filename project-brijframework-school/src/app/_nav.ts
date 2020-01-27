import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Student',
    url: '/student',
    icon: 'icon-heart',
    children: [
      {
        name: 'Student Detail',
        url: '/student/detail',
        icon: 'icon-info'
      },
      {
        name: 'Student Gatepass',
        url: '/student/gatepass',
        icon: 'icon-target'
      },
      {
        name: 'Student attendance',
        url: '/student/attendance',
        icon: 'icon-target'
      },
      {
        name: 'Student Exam',
        url: '/student/exam',
        icon: 'icon-emotsmile'
      },
      {
        name: 'Student Promote',
        url: '/student/promote',
        icon: 'icon-emotsmile'
      },
      {
        name: 'Student Transfer',
        url: '/student/transfer',
        icon: 'icon-emotsmile'
      }
    ]
  },
  {
    name: 'Employees',
    url: '/employee',
    icon: 'icon-drop',
    children: [
      {
        name: 'Employee Detail',
        url: '/employee/detail',
        icon: 'icon-info'
      },
      {
        name: 'Employee Gatepass',
        url: '/employee/gatepass',
        icon: 'icon-target'
      },
      {
        name: 'Employee attendance',
        url: '/employee/attendance',
        icon: 'icon-target'
      }
    ]
  },
  {
    name: 'Library',
    url: '/library/',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Book Detail',
        url: '/book/detail',
        icon: 'icon-info'
      },
      {
        name: 'Book purchase',
        url: '/book/purchase',
        icon: 'icon-target'
      },
      {
        name: 'Book Sell',
        url: '/book/sell',
        icon: 'icon-target'
      }
    ]
  },
  {
    name: 'Account',
    url: '/library/',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Book Detail',
        url: '/book/detail',
        icon: 'icon-info'
      },
      {
        name: 'Book purchase',
        url: '/book/purchase',
        icon: 'icon-target'
      },
      {
        name: 'Book Sell',
        url: '/book/sell',
        icon: 'icon-target'
      }
    ]
  },
  {
    name: 'Setting',
    url: '/setting',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      }
    ]
  }
];
