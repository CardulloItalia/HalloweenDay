"use client";

import { useState } from "react";
import { resolvePlaceDetail } from "@/application/resolve-place-detail";
import { siteContent } from "@/data/site-content";
import FilmList from "./films/film-list";
import PlaceDetail from "./places/place-detail";
import PlaceExplorer from "./places/place-explorer";

export default function HalloweenDashboard() {
  const [selectedCityId, setSelectedCityId] = useState(siteContent.cities[0]?.id ?? "");
  const [selectedPlace, setSelectedPlace] = useState<{ cityId: string; placeId: string } | null>(null);

  const selectedCity = siteContent.cities.find((city) => city.id === selectedPlace?.cityId);
  const place = selectedCity?.places.find((item) => item.id === selectedPlace?.placeId);
  const showDetail = Boolean(selectedCity && place);

  return (
    <main id="home" className={`dashboard${showDetail ? " detail-dashboard" : ""}`}>
      {showDetail && selectedCity && place ? (
        <PlaceDetail
          place={place}
          detail={resolvePlaceDetail(selectedCity, place, siteContent.placeDetailDefaults)}
          labels={siteContent.labels}
          photoPlaceholder={siteContent.photoPlaceholder}
          onBack={() => setSelectedPlace(null)}
        />
      ) : (
        <>
          <section className="left-column">
            <section className="section-block" id="recipes">
              <h2 className="section-title">{siteContent.labels.recipesTitle}</h2>
              <div className="recipe-grid">
                {siteContent.recipes.map((recipe) => (
                  <article className="recipe-card" key={recipe.id}>
                    <span>{recipe.name}</span>
                  </article>
                ))}
              </div>
            </section>
            <FilmList films={siteContent.films} title={siteContent.labels.filmsTitle} />
          </section>

          <PlaceExplorer
            cities={siteContent.cities}
            selectedCityId={selectedCityId}
            title={siteContent.labels.placesTitle}
            citySelectorLabel={siteContent.labels.citySelector}
            exploreLabel={siteContent.labels.explore}
            invasionLabel={siteContent.legend[0]?.label ?? ""}
            onCityChange={setSelectedCityId}
            onExplore={(cityId, placeId) => setSelectedPlace({ cityId, placeId })}
          />
        </>
      )}

      <footer className="dashboard-footer">
        <span>{siteContent.footer}</span>
        <div className="legend" aria-label={siteContent.legend.map((item) => item.label).join(", ")}>
          {siteContent.legend.map((item) => (
            <span className="legend-item" key={item.status}>
              <i className={`dot ${item.status}`} aria-hidden="true" />
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </footer>
    </main>
  );
}
