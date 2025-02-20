import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const MoreInfo = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded p-4 shadow md:w-1/3 md:p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary3">
            <FaPhoneAlt size={20} color="white" aria-hidden="true" />
          </div>
          <h2 className="font-semibold">Call To Us</h2>
        </div>
        <div className="info-text">
          <p className="pb-2">We are available 24/7, 7 days a week.</p>
          <p>
            <span className="font-medium">Phone:</span> +2348145678901
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-custom pt-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary3">
            <AiOutlineMail size={20} color="white" aria-hidden="true" />
          </div>
          <h2 className="font-semibold">Write to Us</h2>
        </div>
        <div className="info-text space-y-2">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>
            <span className="font-medium">Email:</span> customer@spesamart.com
          </p>
          <p>
            <span className="font-medium">Email:</span> support@spesamart.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
