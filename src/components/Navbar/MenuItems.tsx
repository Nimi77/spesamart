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
    icon: <LuUser className="h-6 w-6" aria-hidden="true" />,
    title: 'Manage My Account',
    path: '',
  },
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: 'My Order',
    path: '',
  },
  {
    icon: <XMarkIcon className="h-6 w-6" />,
    title: 'My Cancellations',
    path: '',
  },
  { icon: <StarIcon className="h-6 w-6" />, title: 'My Reviews', path: '' },
  {
    icon: <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />,
    title: 'Logout',
    path: '',
  },
];
