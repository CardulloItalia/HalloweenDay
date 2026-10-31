import type { Place, PlaceDetailContent } from "@/domain/site-content";

interface PlaceDetailProps {
  place: Place;
  detail: PlaceDetailContent;
  labels: {
    backToPlaces: string;
    description: string;
    invaders: string;
  };
  onBack: () => void;
}

export default function PlaceDetail({
  place,
  detail,
  labels,
  onBack,
}: PlaceDetailProps) {
  return (
    <section className="place-detail" aria-labelledby="place-detail-title">
      <div className="detail-heading">
        <button className="detail-back" type="button" onClick={onBack} aria-label={labels.backToPlaces}>
          ×
        </button>
        <h1 id="place-detail-title">{place.name}</h1>
      </div>

      <div className={`detail-content${place.imagePath ? " has-photo" : ""}`}>
        {place.imagePath && (
          <figure className="detail-figure">
            <img className="detail-photo" src={place.imagePath} alt={place.imageAlt ?? place.name} />
          </figure>
        )}

        <div className="detail-copy">
          <section>
            <h2>{labels.description}</h2>
            <p>{detail.description}</p>
          </section>
          <section>
            <h2>{labels.invaders}</h2>
            {detail.invaders.map((invader) => (
              <p key={invader.name}>
                <strong>{invader.name}</strong> {invader.description}
              </p>
            ))}
          </section>
          <section>
            <h2>{detail.strategyTitle}</h2>
            <ol>
              {detail.strategySteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        </div>
      </div>
    </section>
  );
}
