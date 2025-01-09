import "./EventHero.css";
import eventsHero from "../../../../assets/images/eventshero.png";

const EventHero = () => {
  return (
    <section className="events-hero">
      <div className="hero-overlay">
        <div className="events-title">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <p>
          Join our webinars and Expert Session training sessions to learn how to
          build a real-life solution. We encourage you to register incase of
          recordings to be sent, even if you can&apos;t attend live,
        </p>
      </div>
    </section>
  );
};
export default EventHero;
