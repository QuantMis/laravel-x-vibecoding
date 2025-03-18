import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icons with TypeScript-safe approach
const defaultIcon = L.icon({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Set default icon for all markers
L.Marker.prototype.options.icon = defaultIcon;

type SchoolBranch = {
    id: number;
    name: string;
    position: [number, number];
    numStudents: number;
    numTeachers: number;
};

// Dummy data for KL area branches
const schoolBranches: SchoolBranch[] = [
    {
        id: 1,
        name: 'KLCC Branch',
        position: [3.1588, 101.7123],
        numStudents: 450,
        numTeachers: 35,
    },
    {
        id: 2,
        name: 'Petaling Jaya Branch',
        position: [3.1070, 101.6068],
        numStudents: 520,
        numTeachers: 42,
    },
    {
        id: 3,
        name: 'Cheras Branch',
        position: [3.0904, 101.7202],
        numStudents: 320,
        numTeachers: 28,
    },
    {
        id: 4,
        name: 'Ampang Branch',
        position: [3.1687, 101.7655],
        numStudents: 210,
        numTeachers: 18,
    },
    {
        id: 5,
        name: 'Bukit Bintang Branch',
        position: [3.1488, 101.7133],
        numStudents: 380,
        numTeachers: 30,
    },
];

type SchoolMapProps = {
    className?: string;
};

const SchoolMap: React.FC<SchoolMapProps> = ({ className }) => {
    return (
        <div className={className}>
            <MapContainer
                center={[3.1390, 101.6869]} // KL center
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', minHeight: '400px' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {schoolBranches.map((branch) => (
                    <Marker key={branch.id} position={branch.position}>
                        <Popup>
                            <div className="font-medium">{branch.name}</div>
                            <div>Students: {branch.numStudents}</div>
                            <div>Teachers: {branch.numTeachers}</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default SchoolMap; 