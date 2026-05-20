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
}