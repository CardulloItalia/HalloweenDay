import type { City } from "@/domain/site-content";
import PlaceCard from "./place-card";

interface PlaceExplorerProps {
  cities: City[];
  selectedCityId: string;
  title: string;
  citySelectorLabel: string;
  exploreLabel: string;
  invasionLabel: string;
  onCityChange: (cityId: string) => void;
  onExplore: (cityId: string, placeId: string) => void;
}

export default function PlaceExplorer({
  cities,
  selectedCityId,
  title,
  citySelectorLabel,
  exploreLabel,
  invasionLabel,
  onCityChange,
  onExplore,
}: PlaceExplorerProps) {
  const selectedCity = cities.find((city) => city.id === selectedCityId) ?? cities[0];

  if (!selectedCity) return null;

  return (
    <section className="places-section" id="explore">
      <div className="places-heading">
        <h2 className="section-title">{title}</h2>
        <label className="city-selector">
          <span aria-hidden="true">📍</span>
          <select
            aria-label={citySelectorLabel}
            value={selectedCity.id}
            onChange={(event) => onCityChange(event.target.value)}
          >
            {cities.map((city) => (
              <option value={city.id} key={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="places-grid">
        {selectedCity.places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            statusLabel={invasionLabel}
            exploreLabel={exploreLabel}
            onExplore={() => onExplore(selectedCity.id, place.id)}
          />
        ))}
      </div>
    </section>
  );
}
