"use client";

const NewArrival = () => {
  return (
    <section className="New my-14">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10 border-b border-customColor">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold">Featured</h5>
          </div>
          <h4 className="pt-5 font-semibold">New Arrival</h4>
        </div>
        <div className="new-product pb-14 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 items-center justify-center">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;