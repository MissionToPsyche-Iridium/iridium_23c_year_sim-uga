// PsycheTimelineInfo.jsx
import React from 'react';

const timelineEvents = [
    {
        date: '2017',
        title: 'Mission Selection & Concept',
        description:
            'The Psyche mission was selected as part of NASA’s Discovery Program to explore the metallic asteroid 16 Psyche—believed to be the exposed core of a protoplanet. This marked the beginning of a new era in exploring metal-rich bodies in our solar system.',
    },
    {
        date: '2018 - 2020',
        title: 'Preliminary Design & Development',
        description:
            'Early design efforts focused on establishing mission feasibility, refining the scientific objectives, and selecting initial spacecraft designs and instruments. Engineering teams laid the groundwork for the unique challenges of a metal asteroid mission.',
    },
    {
        date: '2020 - 2023',
        title: 'Final Design & Construction',
        description:
            'With the mission concept validated, NASA and its partners finalized the spacecraft design, integrated key scientific instruments, and selected the appropriate launch vehicle. This phase involved detailed engineering and rigorous testing to ensure mission success.',
    },
    {
        date: 'October 2023 (Tentative)',
        title: 'Launch',
        description:
            'The Psyche spacecraft is scheduled to launch, marking the commencement of its multi-year journey toward 16 Psyche. This event is a pivotal moment, transitioning from design and construction to the operational phase of the mission.',
    },
    {
        date: '2023 - 2026',
        title: 'Cruise Phase',
        description:
            'During the cruise phase, the spacecraft will perform critical trajectory corrections, system checks, and instrument calibrations. These months of deep-space travel are essential to prepare for the orbital insertion around 16 Psyche.',
    },
    {
        date: '2026 (Tentative)',
        title: 'Arrival & Orbital Insertion',
        description:
            'Upon reaching 16 Psyche, the spacecraft will enter orbit around the asteroid. This milestone enables detailed mapping and analysis of the asteroid’s surface, geology, and potential magnetic fields—offering unprecedented insight into the building blocks of planet formation.',
    },
    {
        date: '2026 - 2028',
        title: 'Science Operations',
        description:
            'The primary mission phase will involve comprehensive scientific observations. Instruments will capture high-resolution imagery, perform spectral analysis, and measure magnetic fields, all aimed at deciphering the asteroid’s composition and internal structure.',
    },
    {
        date: 'Post-2028 (If Extended)',
        title: 'Extended Mission & Conclusion',
        description:
            'Depending on the spacecraft’s condition and the scientific yield, an extended mission phase may be pursued to further investigate 16 Psyche. This extension could provide additional data on planetary core formation before the mission winds down.',
    },
];

function Timeline() {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Psyche Mission Timeline
            </h1>
            <div className="relative border-l-2 border-blue-500">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="mb-10 ml-4">
                        <div className="absolute -left-3.5 top-0 w-7 h-7 bg-blue-500 rounded-full border border-white"></div>
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {event.title}
                        </h2>
                        <p className="mt-2 text-gray-700">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
                Note: Dates and milestones are tentative and subject to change
                as the mission progresses.
            </p>
        </div>
    );
}

export default Timeline;
