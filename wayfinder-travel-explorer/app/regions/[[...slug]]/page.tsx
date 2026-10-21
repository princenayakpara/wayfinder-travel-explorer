import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, regions } from "@/data/catalog";
import DestinationCard from "@/components/DestinationCard";
export function generateStaticParams() {
  return [
    { slug: [] },
    ...regions.map((r) => ({ slug: [r.slug] })),
    { slug: ["asia"] },
    { slug: ["asia", "japan"] },
    { slug: ["asia", "japan", "kansai"] },
  ];
}
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  if (!slug.length)
    return (
      <div className="container">
        <h1>Geographic Regions</h1>
        <div className="region-grid">
          {regions.map((item) => (
            <div className="region-card" key={item.slug}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Link href={`/regions/${item.slug}`}>Browse region →</Link>
            </div>
          ))}
        </div>
      </div>
    );
  const key = slug.join("/");
  const region = regions.find((r) => r.slug === key || r.slug === slug.at(-1));
  const kansai = key === "asia/japan/kansai";
  if (!region && !["asia", "asia/japan", "asia/japan/kansai"].includes(key)) notFound();
  const title = kansai
    ? "Kansai Region"
    : key === "asia"
      ? "East Asia"
      : key === "asia/japan"
        ? "Japan"
        : (region?.name ?? "Region");
  const related = kansai
    ? destinations.filter((d) => d.slug === "kyoto")
    : region
      ? destinations.filter((d) => d.regionSlug === region.slug)
      : destinations.slice(0, 4);
  return (
    <div className="container">
      <div className="crumb">
        <Link href="/regions">Regions</Link> / Asia / Japan / {title}
      </div>
      <Link className="back" href="/regions">
        ← Back to regions
      </Link>
      <div className="heading">
        <div>
          <h1>{title}</h1>
          <p>
            {region?.description ??
              "The cultural and historical heart of western Honshu, encompassing ancient capitals, mountain pilgrimage routes, and major culinary ports."}
          </p>
          <span className="pill">Parent: Japan ↗　 Grandparent: Asia ↗</span>
        </div>
        <aside className="metrics">
          <b>SPATIAL INDEX METRICS</b>
          <p>
            Administrative Division　<strong>{title}</strong>
          </p>
          <p>
            Total Area　<strong>33,112.40 km²</strong>
          </p>
          <p>
            Population Index　<strong>~22.4M</strong>
          </p>
          <p>
            Principal Gateway　<strong>KIX</strong>
          </p>
        </aside>
      </div>
      <h2>Destinations in this region ({related.length})</h2>
      <div className="grid two">
        {related.map((item) => (
          <DestinationCard key={item.slug} item={item} />
        ))}
      </div>
      <section className="transit">
        <div>
          <h2>Regional Spatial Notes & Connectivity</h2>
          <p>
            Transit arteries, geographic microclimates, and topography are summarized from local
            reference data. This is illustrative demo content.
          </p>
        </div>
      </section>
    </div>
  );
}
