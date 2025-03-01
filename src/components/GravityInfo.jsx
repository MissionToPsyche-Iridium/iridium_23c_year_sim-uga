// GravityVisualizationInfo.jsx
import React from 'react';

const gravityData = [
    {
        title: "Mapping Psyche's Gravity Field",
        content:
            'The Psyche Gravity Investigation leverages high-precision radio tracking via NASA’s Deep Space Network using X‑band telemetry. Doppler measurements—with an accuracy of ~0.1 mm/s at 60‑s integration times—enable the construction of a spherical harmonic model of the gravity field to degree and order 10.',
    },
    {
        title: 'Spherical Harmonic Expansion',
        content:
            'Gravity is represented through a spherical harmonic expansion based on Kaula’s rule. This approach provides a detailed view of Psyche’s mass distribution, revealing both global and regional variations in its internal structure.',
    },
    {
        title: 'Implications for Internal Structure',
        content:
            'Precise determinations of GM and bulk density constrain whether Psyche is a remnant metallic core or an unmelted, porous, metal‑rich body. Preliminary estimates (e.g., ~3780 ± 340 kg/m³) suggest significant porosity if Psyche were fully metallic.',
    },
    {
        title: 'Precision Orbit Determination',
        content:
            'Advanced orbit determination techniques—including corrections for solar radiation pressure and non‑gravitational forces—ensure the gravity model is robust. This precision allows spatial resolution of mass variations on scales of roughly 36 km.',
    },
    {
        title: 'Integration with Multidisciplinary Data',
        content:
            'By combining gravity data with topographic, magnetometric, and compositional measurements, scientists can develop a comprehensive understanding of Psyche’s formation, evolution, and current state.',
    },
];

function GravityVisualizationInfo() {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Gravity on Psyche
            </h1>
            <p className="mb-6 text-gray-700">
                The gravity investigation of asteroid 16 Psyche uses advanced
                radio tracking and spherical harmonic modeling to reveal its
                internal mass distribution. Below are key insights from the
                study:
            </p>
            <div className="space-y-4">
                {gravityData.map((item, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-green-500 pl-4"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h2>
                        <p className="text-gray-700">{item.content}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
                Source: Zuber et al. (2022)
            </p>
        </div>
    );
}

export default GravityVisualizationInfo;
