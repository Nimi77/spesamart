import localFont from 'next/font/local';

const afacad = localFont({
  src: [
    {
      path: './AfacadFlux-Regular.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './AfacadFlux-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './AfacadFlux-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './AfacadFlux-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['Tahoma', 'sans-serif'],
});

export default afacad;
