import React from 'react';
import Logo from './Logo';

const details = [
    {
        id: 1,
        location: 'Kathmandu',
        street: 'Naxal, Gairidhara',
        contact: '+9779861691947',
        timing: { 'SUN-THU': '12-8pm', 'FRI-SAT': '12-10pm' },
    },
    {
        id: 2,
        location: 'Butwal',
        street: 'Kalika chowk',
        contact: '+9779861693967',
        timing: {
            'SUN-THU': '12-8pm',
            'FRI-SAT': '12-10pm'
        },
    },
    {
        id: 3,
        location: 'Bhaktapur',
        street: 'Suryabinayak chowk',
        contact: '+9779861692967',
        timing: {
            'SUN-THU': '12-8pm',
            'FRI-SAT': '12-10pm'
        },
    },
];

const LocationFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center py-8 bg-gray-900">
            <div className="text-3xl">
                <Logo />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-20 text-white py-9">
                {details.map((item) => (
                    <div key={item.id} className="text-center">
                        <p className="text-xl font-semibold">{item.location}</p>
                        <p className="text-sm px-6 py-2 ">
                            {item.street}
                        </p>
                        <p className="text-sm font-semibold text-[#977A46] py-2">{item.contact}</p>
                        <ul className="text-sm">
                            {Object.entries(item.timing).map(([day, time]) => (
                                <li key={day} className="mb-1">
                                    <span className="font-semibold">{day}:</span> {time}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationFooter;
