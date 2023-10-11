import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>What Makes Us Unique</h3>
          <p>
            At Northern Bliss, we are passionate about transforming ordinary
            journeys into extraordinary adventures. With years of experience and
            a deep love for winter wonderlands, our team is dedicated to
            curating the most unforgettable snow-filled experiences.
          </p>
          <p>
            Our mission is to take you beyond the beaten path and immerse you in
            the enchanting beauty of winter, creating memories that will warm
            your heart long after the snow has melted. Join us and let's explore
            the world of snow and ice together.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
