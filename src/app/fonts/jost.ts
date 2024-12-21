import localFont from 'next/font/local';

const jost = localFont({
  src: [
    {
      path: './Jost-Regular.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './Jost-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Jost-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Jost-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default jost;
