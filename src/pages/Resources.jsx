import { useState } from "react";
import Icons from "../../public/";

function Resources() {
  const boxResources = Array.from({ length: 10 });
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <section className="section section-resources">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center ">
          <div className="text-welcome">
            <span>Courses Name</span>
            <span>Resources</span>
          </div>
          <p className="text-primary-custom text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enimad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center ">
          <div className="box-resources">
            {boxResources.map((_, index) => (
              <div
                className={`box-resource-card ${
                  index === isSelected ? "active" : ""
                }`}
                key={index}
                onMouseEnter={() => setIsSelected(index)} // Set isSelected saat hover
                onMouseLeave={() => setIsSelected(index)} // Reset isSelected saat mouse keluar
              >
                <img src={Icons.resources1} alt="" />
                <div className="cards-captions">
                  <p>TOPIC NAME {index + 1}</p>
                </div>
                <div className="box-resource-card-bottom">
                  <button>
                    <i className="bi bi-download"></i>
                    <span>Dowload Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mb-[43px]">
            <button className="btn-return">RETURN TO COURSE</button>
          </div>
        </div>
      </section>
      <section className="section section-resources">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center ">
          <div className="flex items-center justify-center text-center">
            <span className="font-mognolia text-[48px] text-newprimary">
              Topic Name
            </span>
          </div>
          <p className="text-newprimary text-center text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enimad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut
          </p>
        </div>
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center items-center px-6 pb-8">
          <ul className="list-disc">
            {boxResources.map((_, index) => (
              <li key={index}>
                <a href="#">Resource {index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Resources;
