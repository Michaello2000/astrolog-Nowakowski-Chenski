import type { CelestialObject } from '../types';

interface CatalogListProps {
    objects: CelestialObject[];
    onSelectObject: (obj: CelestialObject) => void;
}

export default function CatalogList({ objects, onSelectObject }: CatalogListProps) {
    return (
        <div style={{ width: '30%', borderRight: '1px solid #334155', paddingRight: '20px' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#38bdf8' }}>
                Katalog Obiektów
            </h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {objects.map((obj) => (
                    <li
                        key={obj.id}
                        onClick={() => onSelectObject(obj)}
                        style={{
                            padding: '12px',
                            marginBottom: '10px',
                            backgroundColor: '#1e293b',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            border: '1px solid #334155',
                            cursor: 'pointer'
                        }}
                    >
                        <img
                            src={obj.image}
                            alt={obj.name}
                            style={{ width: '45px', height: '45px', borderRadius: '6px', objectFit: 'cover' }}
                        />
                        <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{obj.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}