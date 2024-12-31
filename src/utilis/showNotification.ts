import Swal from 'sweetalert2';

type ShowNotificationProps = {
  icon: 'success' | 'error' | 'info';
  title: string;
  titleText?: string;
  timer?: number;
  position?: 'top' | 'top-end';
};

// helper function for showing Swal notifications
export const showNotification = async (props: ShowNotificationProps) => {
  const {
    icon,
    title = '',
    titleText = '',
    timer = 2000,
    position = 'top',
  } = props;

  return await Swal.fire({
    icon,
    title,
    titleText,
    showConfirmButton: false,
    timer,
    toast: true,
    position,
  });
};
