export default function About() {
  return (
    <section className="flex w-3/5 flex-col gap-2">
      <div className="flex flex-auto flex-col items-center  rounded-2xl bg-color-primary px-8 py-8 text-color-text shadow-md">
        <h2 className="mb-4 text-center text-4xl font-extrabold">
          Looking for a guilt-free dining experience?
        </h2>
        <p className="text-center text-3xl font-semibold">
          Nothing Burger has got you covered! We specialize in providing
          delicious meals with the lowest calorie content possible:
          <span
            className="mx-auto mt-4 block w-[min-content]  text-7xl font-bold uppercase italic"
            style={{
              WebkitTextStrokeWidth: "3px",
              WebkitTextFillColor: "transparent",
            }}
          >
            nothing.
          </span>
        </p>
      </div>

      <p className="flex-auto rounded-2xl bg-color-primary px-8 py-8 text-center text-3xl  text-color-text shadow-md">
        Our chefs have crafted a menu that is sure to satisfy your taste buds
        without sabotaging your health goals. Order now and enjoy a satisfying
        meal that won't weigh you down!
      </p>
    </section>
  );
}
