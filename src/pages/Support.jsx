import Icons from "../../public/";

function Support() {
  return (
    <>
      <section className="section-support">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center ">
          <img src={Icons.suportimage} alt="" />

          <div className="px-6 py-[31px]">
            <h2 className="font-mognolia text-[40px] text-center text-newprimary mb-[21px]">
              Support
            </h2>
            <p className="text-[18px] text-newprimary text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <span className="text-textPrimary font-bold">
                Duis aute irure dolor in reprehenderit in voluptate
              </span>
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
