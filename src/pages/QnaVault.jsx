import React, { useState } from "react";
import CardGrid from "../components/QnaVault/Card";

const QnaVault = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#FAF5F0] py-10">
        {/* Container for Search Bar and Image */}
        <div className=" h-[350px]  md:h-[500px] md:mt-[100px]">
          <div className="  text-center mb-[100px]">
            <div className="text-[40px] leading-[40px] text-[#376489] md:text-[64px] font-magnolia md:leading-[90px]">
              Course Name
            </div>
            <div className="text-[40px] leading-[40px] text-[#376489] md:text-[40px] font-magnolia md:leading-[56px]">
              Q&A Vault
            </div>
          </div>

          <div className=" flex items-center w-full justify-center ">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search feed ..."
              className="w-[350px] text-bblue  md:w-[627px] p-2 h-[40px] border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className=" ml-1 flex justify-center items-center w-[39px] h-[40px] bg-dark-blue">
              <img
                src={"/assets/search.svg"}
                alt="search-img"
                className="w-[12px] h-[17px]"
              />
            </div>
          </div>

          {/* Image next to the search bar */}
        </div>

        <CardGrid />

        <div className="flex justify-center mb-8 mt-4">
          <button className="bg-brown font-montserrat font-semibold text-[18px] md:text-[18px] text-white w-[270px] h-[50px] md:w-[258px] md:h-[45px] rounded-full flex items-center justify-center gap-3">
            RETURN TO COURSE
            <img
              src={"/assets/next.svg"}
              alt="Next"
              className=" hidden md:block  w-[4px] h-[9px] md:w-[8px] md:h-[15px] object-cover"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default QnaVault;
