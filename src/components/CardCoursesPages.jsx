import PropTypes from "prop-types";
import Icons from "../../public";

function CardCoursesPages({
  key,
  images,
  title,
  status,
  views,
  description,
  boxCaptionsClass,
}) {
  return (
    <div key={key ? key : null} className="box">
      <div className="box-image">
        <img src={images ? images : null} alt="Courses Images " />
      </div>
      <div
        className={`box-captions ${boxCaptionsClass ? boxCaptionsClass : ""}`}
      >
        <div className="box-headers">
          <h2 className="title">{title}</h2>
          {status == "Completed" ? (
            <span className="status">
              <i className="bi bi-check2 text-white text-[27.15px]"></i>
            </span>
          ) : null}
        </div>

        {status == "Scheduled" ? (
          <div className="bottom">
            <p>{description}</p>
            <div className="indicators-percent">
              <div className="indicators-percent-top">
                <span>80% to completed</span>
                <span className="views">
                  <img src="/images/icons/layericons.png" alt="" />
                  {views}
                </span>
              </div>
              <label>
                <div className="indicators w-[80%]"></div>
              </label>
            </div>
          </div>
        ) : null}
        {status == "Completed" ? (
          <div className="px-4">
            <div className="indicators-percent">
              <label>
                <div className="indicators w-[100%]"></div>
              </label>
            </div>
          </div>
        ) : null}

        {status == "Locked" ? (
          <span className="status px-[16px] py-[39px] flex items-center justify-end">
            <img
              src="/images/icons/lockicons.svg"
              alt=""
              className="w-14 h-14"
            />
          </span>
        ) : null}
      </div>
    </div>
  );
}

CardCoursesPages.propTypes = {
  key: PropTypes.number,
  className: PropTypes.string,
  images: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  views: PropTypes.number,
  description: PropTypes.string,
  boxCaptionsClass: PropTypes.string,
};

export default CardCoursesPages;
