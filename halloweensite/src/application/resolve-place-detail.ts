import type { City, Place, PlaceDetailContent, PlaceDetailDefaults } from "@/domain/site-content";

function interpolate(value: string, city: City, place: Place): string {
  return value.replaceAll("{city}", city.name).replaceAll("{place}", place.name);
}

export function resolvePlaceDetail(
  city: City,
  place: Place,
  defaults: PlaceDetailDefaults,
): PlaceDetailContent {
  const overrides = place.detail ?? {};
  const description = overrides.description ?? defaults.descriptionTemplate;
  const invaders = overrides.invaders ?? defaults.invaders;
  const strategyTitle = overrides.strategyTitle ?? defaults.strategyTitle;
  const strategySteps = overrides.strategySteps ?? defaults.strategySteps;

  return {
    description: interpolate(description, city, place),
    invaders: invaders.map((invader) => ({
      name: interpolate(invader.name, city, place),
      description: interpolate(invader.description, city, place),
    })),
    strategyTitle: interpolate(strategyTitle, city, place),
    strategySteps: strategySteps.map((step) => interpolate(step, city, place)),
  };
}
