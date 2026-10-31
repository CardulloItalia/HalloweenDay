export type InfestationStatus = "invasion" | "none" | "medium";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Recipe {
  id: string;
  name: string;
}

export interface Film {
  id: string;
  title: string;
  description: string;
  posterAlt: string;
  posterPath: string;
}

export interface Invader {
  name: string;
  description: string;
}

export interface PlaceDetailContent {
  description: string;
  invaders: Invader[];
  strategyTitle: string;
  strategySteps: string[];
}

export type PlaceDetailOverride = Partial<PlaceDetailContent>;

export interface Place {
  id: string;
  name: string;
  status: InfestationStatus;
  imagePath: string | null;
  imageAlt: string | null;
  detail?: PlaceDetailOverride;
}

export interface City {
  id: string;
  name: string;
  places: Place[];
}

export interface PlaceDetailDefaults {
  descriptionTemplate: string;
  invaders: Invader[];
  strategyTitle: string;
  strategySteps: string[];
}

export interface SiteContent {
  metadata: { title: string; description: string };
  labels: {
    home: string;
    recipesTitle: string;
    filmsTitle: string;
    placesTitle: string;
    countdown: string;
    citySelector: string;
    explore: string;
    backToPlaces: string;
    description: string;
    invaders: string;
    primaryNavigation: string;
  };
  navigation: NavigationItem[];
  countdown: string;
  recipes: Recipe[];
  films: Film[];
  placeDetailDefaults: PlaceDetailDefaults;
  cities: City[];
  footer: string;
  legend: Array<{ label: string; status: InfestationStatus }>;
}
