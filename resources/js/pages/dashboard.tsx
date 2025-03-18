import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import SchoolMap from '@/components/ui/school-map';
import BranchStats from '@/components/ui/branch-stats';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Sample data for charts
const roleData = {
    labels: ['Teachers', 'Students', 'Admins'],
    datasets: [
        {
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const standardData = {
    labels: ['Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5'],
    datasets: [
        {
            label: 'Number of Teachers',
            data: [5, 4, 3, 4, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Student Attendance',
            data: [95, 92, 88, 94, 90],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
};

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <h3 className="mb-4 text-lg font-semibold">User Distribution</h3>
                        <Pie data={roleData} />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <h3 className="mb-4 text-lg font-semibold">Teachers per Standard</h3>
                        <Bar data={standardData} />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <h3 className="mb-4 text-lg font-semibold">Weekly Attendance</h3>
                        <Line data={attendanceData} />
                    </div>
                </div>
                
                <h2 className="mt-2 text-xl font-bold">School Branches in Kuala Lumpur</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                    {/* School Map */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                        <h3 className="mb-4 text-lg font-semibold">Branch Locations</h3>
                        <div className="h-[600px]">
                            <SchoolMap className="h-full w-full" />
                        </div>
                    </div>
                    
                    {/* Branch Statistics */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                        <BranchStats className="h-full" />
                    </div>
                </div>
                
                {/* Keep the placeholder for other content */}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[30vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
