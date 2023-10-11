const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <div className="service-info">
        <div className="service-icon-title">
          <span className="service-icon">
            <i class={icon}></i>
          </span>
          <h4 className="service-title">{title}</h4>
        </div>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};
export default Service;
