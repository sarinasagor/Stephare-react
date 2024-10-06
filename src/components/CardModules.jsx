import PropTypes from "prop-types";

function CardModules({
  className,
  images,
  childLabel,
  label,
  time,
  views,
  descriptions,
}) {
  return (
    <li>
      <div className={`card-mycourses ${className}`}>
        <div className="card-thumbnail">
          <img src={images} alt="" />
          <div className="thumbnail-play">
            <a href="#" className="btn-play">
              <i className="bi bi-play-circle"></i>
            </a>
          </div>
        </div>
        <div className="card-descriptions">
          <span className="card-descriptions-label">{childLabel}</span>
          <div className="card-descriptions-headers">
            <h2 className="card-title truncate">{label}</h2>
            <ul className="card-title-right">
              <li>
                <i className="bi bi-clock text-[15.1px]"></i>
                <span> {time}</span>
              </li>
              <li>
                <span>{views}</span>
                <img
                  src="../../public/images/icons/mortar.svg"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </li>
            </ul>
          </div>
          <p className="text-sm mt-[3px] font-sorcesanspro">{descriptions}</p>
        </div>
      </div>
    </li>
  );
}

CardModules.propTypes = {
  className: PropTypes.string,
  images: PropTypes.string,
  childLabel: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  descriptions: PropTypes.string,
};

export default CardModules;
