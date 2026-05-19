import type { CelestialObject } from '../types';

interface CatalogListProps {
    objects: CelestialObject[];
    onSelectObject: (obj: CelestialObject) => void;
}