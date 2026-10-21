import Link from "next/link";
import { ArrowRight, LayoutGrid, ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="crumb">
        <Link href="/destinations">Wayfinder</Link> / <b>Error 404</b>
      </div>
      <section className="error-panel">
        <div className="error-meta">
          <span className="pill">● 404 · Unresolved Destination Path</span>
          <code>REF: ERR_PATH_UNRESOLVED</code>
        </div>
        <hr />
        <h1>Destination or region not found</h1>
        <p>
          The requested geographic route identifier could be resolved within the Wayfinder spatial
          database. The path may have changed or the slug syntax is invalid.
        </p>
        <div className="actions">
          <Link className="primary" href="/destinations">
            <ArrowUpRight /> Return to Destinations
          </Link>
          <Link className="secondary" href="/regions">
            <LayoutGrid /> Browse All Regions
          </Link>
        </div>
        <hr />
        <h3>Suggested Directory Shortcuts</h3>
        {[
          ["Kyoto, Japan", "/destinations/kyoto"],
          ["Bergen, Norway", "/destinations/bergen"],
          ["Kansai Region", "/regions/asia/japan/kansai"],
        ].map(([name, path]) => (
          <Link className="shortcut" href={path} key={path}>
            <b>{name}</b>
            <code>{path}</code>
            <ArrowRight size={16} />
          </Link>
        ))}
        <div className="diagnostic">
          <b>ROUTER DIAGNOSTIC NOTE</b>
          <code>query_target: srcdoc</code>
          <code>resolution_tree: null [index match fail at root:destinations/]</code>
          <code>dispatch_timestamp: local static index</code>
        </div>
      </section>
      <p className="support">
        ⓘ Persistent path error?{" "}
        <a href="mailto:support@wayfinder.example">Contact Spatial Index Support</a>
      </p>
    </div>
  );
}
