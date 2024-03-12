export default function Lead() {
  return (
    <section className="flex h-[90vh] flex-col px-14 pb-9 italic">
      <h1 className="m-auto mb-14 w-[min-content] rotate-[-8deg] text-[7rem] font-extrabold uppercase leading-[10rem] text-color-primary">
        <span
          className=" text-color-primary"
          // inline styling as plugins are currently not working.
          // todo style as plugin
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "4px",
          }}
        >
          Nothing
        </span>
        Burger!
      </h1>
      <p className="mx-auto mt-auto w-[fit-content] text-[3rem] text-color-primary">
        Your healthiest personal restaurant.
      </p>
    </section>
  );
}
// todo transparent lettering
