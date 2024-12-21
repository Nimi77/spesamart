import {
  ArrowLeftStartOnRectangleIcon,
  ShoppingBagIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { LuUser } from 'react-icons/lu';

export const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Contact', path: '/contact' },
  { title: 'About', path: '/about' },
  { title: 'Sign Up', path: '/signup' },
];

export const accountMenuItems = [
  {
    icon: <LuUser size={18} color="white" aria-hidden="true" />,
    title: 'Manage My Account',
    path: '',
  },
  { icon: <ShoppingBagIcon />, title: 'My Order', path: '' },
  { icon: <XMarkIcon />, name: 'My Cancellations', path: '' },
  { icon: <StarIcon className="h-5 w-5" />, title: 'My Reviews', path: '' },
  { icon: <ArrowLeftStartOnRectangleIcon />, title: 'Logout', path: '' },
];
