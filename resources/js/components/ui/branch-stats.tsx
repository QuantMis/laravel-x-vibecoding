import React from 'react';

type BranchStat = {
    id: number;
    name: string;
    totalStudents: number;
    totalTeachers: number;
    location: string;
};

const branchStats: BranchStat[] = [
    {
        id: 1,
        name: 'KLCC Branch',
        totalStudents: 450,
        totalTeachers: 35,
        location: 'Jalan P Ramlee, 50250 Kuala Lumpur',
    },
    {
        id: 2,
        name: 'Petaling Jaya Branch',
        totalStudents: 520,
        totalTeachers: 42,
        location: 'Jalan Utara, 46200 Petaling Jaya',
    },
    {
        id: 3,
        name: 'Cheras Branch',
        totalStudents: 320,
        totalTeachers: 28,
        location: 'Jalan Cheras, 56100 Kuala Lumpur',
    },
    {
        id: 4,
        name: 'Ampang Branch',
        totalStudents: 210,
        totalTeachers: 18,
        location: 'Jalan Ampang, 50450 Kuala Lumpur',
    },
    {
        id: 5,
        name: 'Bukit Bintang Branch',
        totalStudents: 380,
        totalTeachers: 30,
        location: 'Jalan Bukit Bintang, 55100 Kuala Lumpur',
    },
];

type BranchStatsProps = {
    className?: string;
};

const BranchStats: React.FC<BranchStatsProps> = ({ className }) => {
    const totalStudents = branchStats.reduce((sum, branch) => sum + branch.totalStudents, 0);
    const totalTeachers = branchStats.reduce((sum, branch) => sum + branch.totalTeachers, 0);
    
    return (
        <div className={className}>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                    <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Total Branches</h4>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{branchStats.length}</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                    <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</h4>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">{totalStudents}</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                    <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Total Teachers</h4>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-500">{totalTeachers}</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                    <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Student-Teacher Ratio</h4>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-500">
                        {(totalStudents / totalTeachers).toFixed(1)}:1
                    </div>
                </div>
            </div>
            
            <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Branch Details</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Details of all school branches in Kuala Lumpur</p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {branchStats.map((branch) => (
                            <li key={branch.id} className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{branch.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{branch.location}</p>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            Students: {branch.totalStudents}
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:ml-6">
                                            Teachers: {branch.totalTeachers}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                                        Ratio: {(branch.totalStudents / branch.totalTeachers).toFixed(1)}:1
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BranchStats; 