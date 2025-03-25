import Topbar from '../components/util/Topbar';

function ImpactPage() {
    return (
        <div className="h-screen flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />

            <main className="flex-1 overflow-y-auto p-8 text-gray-300">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            Impacts of Psyche's Unique Characteristics
                        </h1>
                        <p className="text-lg border-b border-gray-700 pb-4">
                            How Psyche's physical properties shape its
                            environmental conditions
                        </p>
                    </div>

                    {/* Mixed Metal Composition */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Metal-Rich Composition
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Lateral Temperature Variations:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Metal vs silicate regions create 100K+
                                    differences
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Thermal Anomalies:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Observed inconsistencies in heat retention
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Material Response:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Metals heat/cool faster than silicates
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Potato-like Shape */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Irregular Topography
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Shadow Effects:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Depressions trap heat or remain cooler
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Local Microclimates:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    80km craters create temperature pockets
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Global Heat Distribution:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Non-spherical shape disrupts thermal flow
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Short Day */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            4.2-Hour Rotation
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Rapid Diurnal Cycle:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Full temperature swing every 2.1 hours
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Thermal Stress:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Extreme heating/cooling rates fracture
                                    surface material
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Surface Processing:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Accelerated regolith formation
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Rotisserie Rotation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            95° Obliquity
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Extreme Seasons:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Poles alternate between constant
                                    sun/darkness
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Polar Temperature Swings:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    100K+ variation between seasonal extremes
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Precession Effects:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Warming pole shifts every 6 months (Earth
                                    time)
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Orbital Characteristics */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Eccentric Orbit
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Seasonal Asymmetry:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Closest approach creates hotter summers
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Polar Dichotomy:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Opposing pole temperatures during perihelion
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Long-term Cycling:
                                </span>
                                <span className="text-white">
                                    {' '}
                                    Precession modulates temperature patterns
                                    over decades
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Combined Effects */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Cumulative Impacts
                        </h2>
                        <div className="p-4 border border-gray-700 rounded-lg">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    No stable water ice - mean temperatures too
                                    high
                                </li>
                                <li>
                                    Global porous regolith from thermal
                                    fracturing
                                </li>
                                <li>Unique crater preservation patterns</li>
                                <li>
                                    Instrumentation challenges due to rapid
                                    thermal changes
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ImpactPage;
