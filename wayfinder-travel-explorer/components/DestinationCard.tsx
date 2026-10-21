import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types";
export default function DestinationCard({ item }: { item: Destination }) {
  return (
    <article className="card">
      <div
        className="card-map"
        style={{ backgroundImage: `linear-gradient(90deg,#e9edffdd,#e9edff88),url(${item.image})` }}
      >
        <span>
          <MapPin size={15} /> LOC-{item.latitude}
        </span>
        <code>{item.code}</code>
      </div>
      <h2>
        {item.name}
        <small>{item.countryCode}</small>
      </h2>
      <p className="muted">
        {item.country} · {item.region}
      </p>
      <p>{item.description}</p>
      <div className="card-foot">
        <Link href={`/destinations/${item.slug}`}>
          View destination <ArrowUpRight size={15} />
        </Link>
        <i />
      </div>
    </article>
  );
}
