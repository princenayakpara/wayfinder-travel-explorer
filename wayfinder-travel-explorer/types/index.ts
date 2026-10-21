export type Destination = {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionSlug: string;
  code: string;
  latitude: string;
  longitude: string;
  description: string;
  knownFor: string;
  bestSeason: string;
  tripLength: string;
  image: string;
  transit: string;
  tag: string;
};
export type Region = {
  slug: string;
  name: string;
  code: string;
  terrain: string;
  description: string;
  subregions: string;
  settlements: number;
  image: string;
};
