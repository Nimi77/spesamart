import { CiDollar, CiGift, CiShop } from 'react-icons/ci';
import { FaSackDollar } from 'react-icons/fa6';

const brandData = [
  {
    logo: <CiShop className="h-8 w-8" />,
    value: 10.5,
    label: 'Sellers active in our site',
  },
  {
    logo: <CiDollar className="h-8 w-8" />,
    value: 33,
    label: 'Montly product sales',
  },
  {
    logo: <CiGift className="h-8 w-8" />,
    value: 45.5,
    label: 'Customers active in our site',
  },
  {
    logo: <FaSackDollar className="h-6 w-6" />,
    value: 25,
    label: 'Annual gross sale in our site',
  },
];

const BrandAcheivement = () => {
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-6">
        {brandData.map((stat, index) => (
          <div
            key={index}
            className="group rounded border border-neutral-100 bg-white py-6 transition-colors ease-out hover:bg-secondary3 hover:text-white hover:shadow-md"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9D9D9] group-hover:bg-[rgba(0,0,0,0.3)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black">
                  {stat.logo}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{stat.value}k</h3>
                <p className="min-w-max">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandAcheivement;
