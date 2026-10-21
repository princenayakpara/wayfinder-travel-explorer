import Link from "next/link";
import { Info } from "lucide-react";
import { destinations, regions } from "@/data/catalog";
import DestinationCard from "@/components/DestinationCard";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const { region } = await searchParams;
  const list = region
    ? destinations.filter(
        (d) =>
          d.regionSlug === region ||
          d.region.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and") === region,
      )
    : destinations;
  return (
    <div className="container">
      <div className="kicker">
        CATALOGUE // 01　•　<span>LIVE SURVEY</span>
      </div>
      <div className="heading">
        <div>
          <h1>Explore destinations</h1>
          <p>Browse curated travel places organized by geographic region and terrain.</p>
        </div>
        <strong>{String(list.length).padStart(2, "0")} NODES ACTIVE</strong>
      </div>
      <div className="filters">
        <Link href="/destinations">All Regions</Link>
        {regions.map((r) => (
          <Link key={r.slug} href={`/destinations?region=${r.slug}`}>
            {r.name}
          </Link>
        ))}
      </div>
      {list.length ? (
        <div className="grid">
          {list.map((item) => (
            <DestinationCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No destinations in this filter</h2>
          <Link href="/destinations">Reset filters</Link>
        </div>
      )}
      <div className="notice">
        <Info size={18} /> Destinations are systematically validated against public cartographic
        terrain datasets. <code>COORDINATE FORMAT: WGS84</code>
      </div>
    </div>
  );
}
