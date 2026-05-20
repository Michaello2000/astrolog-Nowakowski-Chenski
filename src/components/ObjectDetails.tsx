import type { CelestialObject } from '../types';

interface ObjectDetailsProps {
    activeObject: CelestialObject | null;
}

export default function ObjectDetails({ activeObject }: ObjectDetailsProps) {
    if (!activeObject) {
        return (
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                border: '2px dashed #334155',
                height: '400px',
                color: '#94a3b8'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '3rem', margin: 0 }}>🔭</p>
                    <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
                        System prosi o wskazanie celu. Wybierz obiekt z katalogu...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            flex: 1,
            backgroundColor: '#1e293b',
            borderRadius: '12px',
            padding: '25px',
            border: '1px solid #334155'
        }}>
            <h2 style={{ color: '#a855f7', marginBottom: '20px', fontSize: '1.4rem' }}>
                Panel Obserwacyjny: {activeObject.name}
            </h2>

            <img
                src={activeObject.image}
                alt={activeObject.name}
                style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.1rem' }}>
                <div>
                    <strong style={{ color: '#94a3b8' }}>Typ obiektu:</strong>
                    <span style={{ marginLeft: '10px', color: '#f8fafc' }}>{activeObject.type}</span>
                </div>
                <div>
                    <strong style={{ color: '#94a3b8' }}>Odległość od Ziemi:</strong>
                    <span style={{ marginLeft: '10px', color: '#f8fafc' }}>{activeObject.distance}</span>
                </div>
            </div>
        </div>
    );
}