import { useState } from 'react';
import type { CelestialObject } from './types.ts';

const INITIAL_ASTRO_DATA = [
  {
    id: 1,
    name: "Mgławica Oriona (M42)",
    type: "Mgławica emisyjna",
    distance: "1344 lata świetlne",
    image: ""
  },
  {
    id: 2,
    name: "Galaktyka Andromeda (M31)",
    type: "Galaktyka spiralna",
    distance: "2.5 mln lat świetlnych",
    image: ""
  },
  {
    id: 3,
    name: "Gromada Herkulesa (M13)",
    type: "Gromada kulista",
    distance: "25 100 lat świetlnych",
    image: ""
  },
  {
    id: 4,
    name: "Galaktyka Wir (M51)",
    type: "Galaktyka spiralna",
    distance: "23 mln lat świetlnych",
    image: ""
  },
  {
    id: 5,
    name: "Supernova SN 1987A",
    type: "Pozostałość po supernowej",
    distance: "168 000 lat świetlnych",
    image: ""
  }
];

function App() {
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>(INITIAL_ASTRO_DATA);
  const [selectedObject, setSelectedObject] = useState<CelestialObject>;
  
  return (
      <div className="app-container" style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
        <h1>🌌 AstroLog — Panel Obserwacyjny</h1>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {}
        </div>
      </div>
  )
}

export default App
