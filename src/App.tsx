import { useState } from 'react';
import type { CelestialObject } from './types.ts';
import CatalogList from "./components/CatalogList.tsx";

const INITIAL_ASTRO_DATA = [
  {
    id: 1,
    name: "Mgławica Oriona (M42)",
    type: "Mgławica emisyjna",
    distance: "1344 lata świetlne",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1280px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg"
  },
  {
    id: 2,
    name: "Galaktyka Andromeda (M31)",
    type: "Galaktyka spiralna",
    distance: "2.5 mln lat świetlnych",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg"
  },
  {
    id: 3,
    name: "Gromada Herkulesa (M13)",
    type: "Gromada kulista",
    distance: "25 100 lat świetlnych",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Messier_13_-_The_Hercules_Globular_Cluster.jpg"
  },
  {
    id: 4,
    name: "Galaktyka Wir (M51)",
    type: "Galaktyka spiralna",
    distance: "23 mln lat świetlnych",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Messier51.jpg/1280px-Messier51.jpg"
  },
  {
    id: 5,
    name: "Supernova SN 1987A",
    type: "Pozostałość po supernowej",
    distance: "168 000 lat świetlnych",
    image: "https://cdn.eso.org/images/large/eso1032a.jpg"
  }
];

function App() {
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>(INITIAL_ASTRO_DATA);
  const [selectedObject, setSelectedObject] = useState<CelestialObject | null>(null);
  
  return (
      <div className="app-container" style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
        <h1>🌌 AstroLog — Panel Obserwacyjny</h1>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <CatalogList
              objects={celestialObjects}
              onSelectObject={setSelectedObject}
          />
        </div>
      </div>
  )
}

export default App
