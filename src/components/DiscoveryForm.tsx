import { useState } from 'react';
import type { CelestialObject } from '../types';

interface DiscoveryFormProps {
    onAdd: (obj: CelestialObject) => void;
}

export default function DiscoveryForm({ onAdd }: DiscoveryFormProps) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [distance, setDistance] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !type || !distance) return;

        onAdd({
            id: Date.now(),
            name,
            type,
            distance,
            image: image || 'https://picsum.photos/seed/space/400/300',
        });

        setName('');
        setType('');
        setDistance('');
        setImage('');
    };

    const inputStyle = {
        display: 'block', width: '99%', padding: '10px',
        marginBottom: '10px', backgroundColor: '#0f172a',
        border: '1px solid #334155', borderRadius: '8px',
        color: '#fff', fontSize: '0.95rem',
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '30px', padding: '20px', background: '#1e293b', borderRadius: '12px' }}>
            <h3 style={{ color: '#38bdf8', marginBottom: '16px' }}>🔭 Zgłoś Nowe Odkrycie</h3>
            <input style={inputStyle} value={name} onChange={e => setName(e.target.value)} placeholder="Nazwa obiektu" required />
            <input style={inputStyle} value={type} onChange={e => setType(e.target.value)} placeholder="Typ (np. Galaktyka spiralna)" required />
            <input style={inputStyle} value={distance} onChange={e => setDistance(e.target.value)} placeholder="Odległość (np. 2.5 mln l.św.)" required />
            <input style={inputStyle} value={image} onChange={e => setImage(e.target.value)} placeholder="URL zdjęcia (opcjonalnie)" />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                Dodaj do katalogu
            </button>
        </form>
    );
}