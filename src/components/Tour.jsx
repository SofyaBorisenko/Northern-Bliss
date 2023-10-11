const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <div className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i class="fa-solid fa-map-location-dot"></i>
            </span>
            {location}
          </p>
          <p>from {cost} EUR p.p.</p>
          <p>{duration} days</p>
        </div>
      </div>
    </div>
  );
};
export default Tour;
