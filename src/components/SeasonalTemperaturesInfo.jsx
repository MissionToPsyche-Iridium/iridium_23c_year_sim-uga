// SeasonalTemperaturesInfo.jsx
import React from 'react';

const temperatureData = [
    {
        title: 'Extreme Obliquity & Eccentricity',
        content:
            '16 Psyche’s obliquity (~95°) and eccentricity (0.134) create unusual seasonal cycles, with large swings in solar insolation across its surface.',
    },
    {
        title: 'Diurnal and Seasonal Variations',
        content:
            'Models predict significant diurnal and annual temperature changes. Equatorial regions experience strong day–night contrasts, while polar areas have more stable temperatures.',
    },
    {
        title: 'Polar Temperature Differences',
        content:
            'There is an estimated ~20 K difference in mean temperature between the two poles—with the northern hemisphere enjoying a longer, milder summer and the southern a shorter, more intense one.',
    },
    {
        title: 'Geologic Implications',
        content:
            'Large thermal variations drive processes such as thermal cracking and regolith development, which are key to understanding Psyche’s surface evolution.',
    },
    {
        title: 'Water Ice Stability',
        content:
            'Due to maximum surface temperatures often exceeding 200 K, water ice is not expected to be stable at any latitude.',
    },
    {
        title: 'Topographic Context',
        content:
            'High-resolution topographic mapping further informs how surface features modulate local thermal environments.',
    },
];

function SeasonalTemperaturesInfo() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Seasonal Temperatures on Psyche
            </h1>
            <p className="mb-6 text-gray-700">
                Recent studies reveal that 16 Psyche’s unique orbit produces
                striking thermal variations. Below are key insights derived from
                modeling and observational data:
            </p>
            <div className="space-y-4">
                {temperatureData.map((item, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h2>
                        <p className="text-gray-700">{item.content}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
                Sources: Bierson et al. (2022), Jaumann et al. (2022)
            </p>
        </div>
    );
}

export default SeasonalTemperaturesInfo;
