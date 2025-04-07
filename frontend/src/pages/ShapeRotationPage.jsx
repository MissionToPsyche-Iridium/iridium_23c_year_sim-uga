import Topbar from '../components/util/Topbar';
import ShapeRotationScene from '../components/r3f/scenes/ShapeRotationScene';

function ShapeRotationPage() {
    return (
        <div className="flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />

            <div className="flex-none" style={{ height: '60vh' }}>
                {' '}
                {/* Prevent stretching */}
                <ShapeRotationScene />
            </div>

            <main className="flex-1 overflow-y-auto px-8 pt-20 pb-12 space-y-12 text-gray-300">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            Shape & Rotation Characteristics
                        </h1>
                        <p className="text-lg border-b border-gray-700 pb-4">
                            Detailed analysis of 16 Psyche's unique morphology
                            and rotational properties
                        </p>
                    </div>

                    {/* Shape Characteristics */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Morphological Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Dimensional Analysis
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Triaxial ellipsoid dimensions:
                                        <span className="text-white">
                                            {' '}
                                            278 × 238 × 171 km
                                        </span>
                                    </li>
                                    <li>
                                        Effective spherical diameter:
                                        <span className="text-white">
                                            {' '}
                                            222 km
                                        </span>
                                    </li>
                                    <li>
                                        Surface area:
                                        <span className="text-white">
                                            {' '}
                                            165,800 km²
                                        </span>
                                    </li>
                                    <li>
                                        Equal-volume ellipsoid:
                                        <span className="text-white">
                                            {' '}
                                            274 × 234 × 171 km
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Surface Features
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Major depressions:
                                        <span className="text-white">
                                            {' '}
                                            67 km, 53 km, and 80 km diameters
                                        </span>
                                    </li>
                                    <li>Equatorial crater-like formations</li>
                                    <li>10% variance in major axis lengths</li>
                                    <li>Possible impact-induced flattening</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Rotation Characteristics */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Rotational Dynamics
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Key Metrics
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Sidereal rotation period:
                                        <span className="text-white">
                                            {' '}
                                            4.195948 ±0.000001 hrs
                                        </span>
                                    </li>
                                    <li>
                                        Spin pole coordinates:
                                        <span className="text-white">
                                            {' '}
                                            (36°, −8°) ±2°
                                        </span>
                                    </li>
                                    <li>
                                        Obliquity:
                                        <span className="text-white"> 95°</span>
                                    </li>
                                    <li>
                                        Possible primordial rotation:
                                        <span className="text-white">
                                            {' '}
                                            3.5 hrs
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Unique Properties
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>High metallicity (30-60% volume)</li>
                                    <li>Non-hydrostatic equilibrium shape</li>
                                    <li>Extreme thermal variations</li>
                                    <li>Impact-modified rotation history</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Scientific Significance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Scientific Importance
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Internal Structure Insights
                                    </h3>
                                    <p className="leading-relaxed">
                                        Combined shape-gravity analysis will
                                        reveal density variations critical for
                                        determining core formation history.
                                        Radial density patterns could confirm
                                        differentiation processes.
                                    </p>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Impact History
                                    </h3>
                                    <p className="leading-relaxed">
                                        Crater morphology analysis on metallic
                                        surfaces may show unique depth-diameter
                                        ratios compared to rocky bodies,
                                        informing collision models.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Surface Processes
                                    </h3>
                                    <p className="leading-relaxed">
                                        High-resolution imaging (≤20 m/px) will
                                        enable detection of tectonic features
                                        and volcanic remnants unique to
                                        metal-rich worlds.
                                    </p>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Thermal Evolution
                                    </h3>
                                    <p className="leading-relaxed">
                                        95° obliquity creates extreme seasonal
                                        variations, potentially driving regolith
                                        formation through thermal fracturing of
                                        metallic surface material.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Contribution */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Psyche Mission Contributions
                        </h2>
                        <div className="p-4 border border-gray-700 rounded-lg">
                            <p className="leading-relaxed">
                                The spacecraft's Multispectral Imager will map{' '}
                                {'>'}
                                80% surface coverage at unprecedented
                                resolution, enabling:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Sub-100m feature recognition</li>
                                <li>3D shape modeling with ±5km accuracy</li>
                                <li>Crater chronology determination</li>
                                <li>Surface-process discrimination</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ShapeRotationPage;
