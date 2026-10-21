import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/catalog";
import { ArrowLeft, CalendarDays, Compass, Clock, TrainFront } from "lucide-react";
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();
  return (
    <div className="detail">
      <div className="crumb">
        <Link href="/destinations">Destinations</Link> / {d.region} / {d.name}
      </div>
      <Link href="/destinations" className="back">
        <ArrowLeft size={15} /> Back to destinations
      </Link>
      <div className="detail-title">
        <div>
          <span className="pill">
            ● {d.country} · {d.region}
          </span>
          <h1>{d.name}</h1>
        </div>
        <code>
          GEO: {d.latitude}, {d.longitude}
          <br />
          INDEX: {d.code}
        </code>
      </div>
      <section className="overview">
        <div>
          <span className="eyebrow">CARTOGRAPHIC OVERVIEW</span>
          <p>{d.description}</p>
          <div className="meta">
            <span>Country: {d.country}</span>
            <span>Index: {d.code}</span>
          </div>
        </div>
        <div className="hero-photo" style={{ backgroundImage: `url(${d.image})` }} />
      </section>
      <h2 className="section-title">▏Key Information</h2>
      <div className="facts">
        <div>
          <span>
            <CalendarDays size={16} /> Best season
          </span>
          <strong>{d.bestSeason}</strong>
        </div>
        <div>
          <span>
            <Compass size={16} /> Known for
          </span>
          <strong>{d.knownFor}</strong>
        </div>
        <div>
          <span>
            <Clock size={16} /> Typical trip length
          </span>
          <strong>{d.tripLength}</strong>
        </div>
      </div>
      <section className="transit">
        <TrainFront />
        <div>
          <h2>Practical Transit Notes</h2>
          <p>{d.transit}</p>
        </div>
      </section>
      <div className="detail-bottom">
        Spatial Taxonomy Division: {d.region}
        <Link href={`/regions/${d.regionSlug}`}>Explore regional index →</Link>
      </div>
    </div>
  );
}
