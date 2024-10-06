import React from "react";

// Card Component
const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div className={`w-[190px] h-[136px] md:w-[240px] md:h-[153px] ${bgColor}`}>
      <p
        className={` text-center  md:w-[178px] md:h-[36px]md:w-[200px] md:h-[40px] text-[14px] md:text-[16px] font-medium font-montserrat ${textColor} m-4  md:m-5 leading-[17px] md:leading-[19px] `}
      >
        {description}
      </p>
      <p
        className={`text-[14px] md:text-[16px] font-bold font-montserrat ${textColor} text-center`}
      >
        {title}
      </p>
    </div>
  );
};

// Card Grid Component
const CardGrid = () => {
  // Example data for 9 cards
  const cardData = [
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      bgColor: "bg-frose",
      textColor: "text-bblue",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-bblue",
      textColor: "text-white",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-frose",
      textColor: "text-bblue",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-bblue",
      textColor: "text-white",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-frose",
      textColor: "text-bblue",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-bblue",
      textColor: "text-white",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-frose",
      textColor: "text-bblue",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-bblue",
      textColor: "text-white",
    },
    {
      title: "Article 10",
      description: "Lorem ipsum dolor sit amet, consectetur .",
      bgColor: "bg-frose",
      textColor: "text-bblue",
    },
  ];

  return (
    <div className=" w-[390px] md:w-[750px] md:h-[490px]">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
        {" "}
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            textColor={card.textColor}
          />
        ))}
      </div>
    </div>
  );
};
export default CardGrid;
