import {Colors} from '../../../constant/theme';
export const HomeData = [
  {
    id: 1,
    title: 'Balance',
    value: `${'\u20A6 '}300,000`,
    bgColor: '#3b2f84',
    textColor: 'white',
    image: '',
    actionText: 'Topup',
  },
  {
    id: 2,
    title: 'Apply for a loan',
    value: `Receive funds in your account in as little as 5 minutes`,
    bgColor: '#cbeeea',
    textColor: '#333',
    image: require('../../../../assets/images/loan.png'),
    actionText: 'top up',
  },
  {
    id: 3,
    title: 'Invest with fast credit',
    value: `Earn the highest interest rate by investing in fixed plans`,
    bgColor: '#dbd4f2',
    textColor: '#333',
    image: require('../../../../assets/images/invest.png'),
    actionText: 'top up',
  },
];

export const RecentActivityData = [
  {
    id: 1,
    name: 'Nkechi Aniugbo',
    service: `Wallet Topup`,
    amount: '300,000',
    date: 'Jan 19, 2022',
    isDeposit: true,
  },
  {
    id: 2,
    name: 'David Johnson',
    service: `Wallet Topup`,
    amount: '300,000',
    date: 'Jan 19, 2022',
    isDeposit: false,
  },
];
