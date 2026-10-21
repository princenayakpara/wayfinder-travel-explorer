import { Compass, MapPinned, Database } from "lucide-react";
export default function Page() {
  return (
    <div className="container about">
      <div className="kicker">WAYFINDER / ABOUT · SPATIAL INDEX</div>
      <h1>Travel with a sense of place.</h1>
      <p className="lead">
        Wayfinder is a local-first travel destination explorer for discovering places, understanding
        regions, and planning thoughtful routes.
      </p>
      <div className="about-grid">
        <article>
          <Compass />
          <h2>Explore with context</h2>
          <p>
            Destination records combine descriptive notes, coordinates, seasonal guidance, and
            transit context.
          </p>
        </article>
        <article>
          <MapPinned />
          <h2>Understand geography</h2>
          <p>Nested region routes organize geographic indexes into useful hierarchies.</p>
        </article>
        <article>
          <Database />
          <h2>Local reference data</h2>
          <p>
            This educational project uses local dummy data and does not require a backend or
            database.
          </p>
        </article>
      </div>
    </div>
  );
}
