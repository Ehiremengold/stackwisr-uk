import "./ResourcesHero.css";
import resourcesHeroImg from "../../../../assets/images/careerPathsHero.png";

const ResourcesHero = () => {
  return (
    <section className="resources">
      <div className="wrapper">
        <div className="stories-more-title">
          <h1>RESOURCES</h1>
        </div>
        <p>
          Get free and downloadable resources such as white paper, cheat sheets,
          reports around emerging industry trends, tech advancements, or
          valuable materials surrounding how tech skills intersect with other
          industries
        </p>
        <img src={resourcesHeroImg} alt="" />
      </div>
    </section>
  );
};

export default ResourcesHero;
