import type { InfestationStatus, Place } from "@/domain/site-content";

interface PlaceCardProps {
  place: Place;
  statusLabel: string;
  exploreLabel: string;
  onExplore: () => void;
}

const statusClass: Record<InfestationStatus, string> = {
  invasion: "invasion",
  none: "none",
  medium: "medium",
};

export default function PlaceCard({ place, statusLabel, exploreLabel, onExplore }: PlaceCardProps) {
  return (
    <article className="place-card">
      {place.status === "invasion" && <i className={`dot ${statusClass[place.status]}`} aria-label={statusLabel} />}
      <p>{place.name}</p>
      <button type="button" className="explore-button" onClick={onExplore}>
        {exploreLabel}
      </button>
    </article>
  );
}
