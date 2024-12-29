import Image from 'next/image';

const Story = () => {
  return (
    <section>
      <div className="flex flex-col-reverse items-center justify-center gap-12 md:flex-row">
        <div className="w-full">
          <h2 className="text-lg font-semibold">Our Story</h2>
          <p className="pb-6 pt-4">
            Launched in 2015, SpesaMart is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, SpesaMart
            has 10,500 sallers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p>
            SpesaMart has more than 1 Million products to offer, growing at a
            very fast. SpesaMart offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full flex-grow">
          <Image
            src="/african-ladies.png"
            alt="Two african ladies"
            width={340}
            height={300}
            className="h-auto w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
