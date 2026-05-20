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
                color: '#94a3b8',
                marginTop: '20px'
            }}>
                <div style={{ textAlign: 'center' }}>
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
            border: '1px solid #a855f7'
        }}>
            <h2 style={{marginBottom: '20px', fontSize: '1.4rem', textAlign: 'left' }}>
                Panel Obserwacyjny
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

            <h2 style={{marginBottom: '20px', fontSize: '1.8rem', textAlign: 'left'}}>
                {activeObject.name}
            </h2>

            <div style={{ padding: '15px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', 
                fontSize: '1.1rem', border: '1px solid', borderRadius: '12px' }}>
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