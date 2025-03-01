// CraterVisualizationInfo.jsx
import React from 'react';

const craterData = [
    {
        title: 'Relative Cratering Ages',
        content:
            'High-resolution imaging and topographic analyses are used to map crater populations on Psyche. By comparing crater densities and morphologies, researchers can infer the relative and absolute ages of different terrains, thereby reconstructing the asteroid’s geologic evolution.',
    },
    {
        title: 'Radar-Detected Depressions',
        content:
            "Radar observations have identified significant depressions—approximately 50–70 km wide—near Psyche's south pole. These features are interpreted as large impact craters that may have played a key role in altering the asteroid’s overall shape.",
    },
    {
        title: 'Surface Composition & Impact Processes',
        content:
            'Speculative models suggest that Psyche’s surface, likely a complex mix of metal and silicate, may display unique crater morphologies. Impact events could produce regolith with distinctive properties, potentially leading to metal-silicate mixing and unusual impact features compared to rocky bodies.',
    },
];

function CraterVisualizationInfo() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Craters on Psyche
            </h1>
            <p className="mb-6 text-gray-700">
                Impact cratering has significantly shaped the surface of
                asteroid 16 Psyche. The following key insights, drawn from
                recent studies, highlight how crater mapping helps us understand
                Psyche’s geologic history and surface evolution.
            </p>
            <div className="space-y-4">
                {craterData.map((item, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h2>
                        <p className="text-gray-700">{item.content}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
                Sources: Marchi et al. (2022), Shepard et al. (2017),
                Elkins-Tanton et al. (2019).
            </p>
        </div>
    );
}

export default CraterVisualizationInfo;
