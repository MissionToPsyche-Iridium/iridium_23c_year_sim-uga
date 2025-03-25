import Topbar from '../components/util/Topbar';
import OrbitYearScene from '../components/r3f/scenes/OrbitYearScene';

function OrbitYearPage() {
    return (
        <div className="flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />

            <div className="flex-none" style={{ height: '60vh' }}>
                {' '}
                {/* Prevent stretching */}
                <OrbitYearScene />
            </div>

            <main className="flex-1 overflow-y-auto px-8 pt-20 pb-12 space-y-12 text-gray-300">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            Orbital Characteristics & Mission Timeline
                        </h1>
                        <p className="text-lg border-b border-gray-700 pb-4">
                            Analysis of 16 Psyche's solar orbit and the
                            spacecraft's journey
                        </p>
                    </div>

                    {/* Orbital Parameters */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Orbital Mechanics
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Key Metrics
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Semi-major axis:
                                        <span className="text-white">
                                            {' '}
                                            3.0 AU (450M km)
                                        </span>
                                    </li>
                                    <li>
                                        Eccentricity:
                                        <span className="text-white">
                                            {' '}
                                            0.134
                                        </span>
                                    </li>
                                    <li>
                                        Inclination:
                                        <span className="text-white">
                                            {' '}
                                            3.1°
                                        </span>
                                    </li>
                                    <li>
                                        Orbital period:
                                        <span className="text-white">
                                            {' '}
                                            4.99 Earth years
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Positional Range
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Earth distance:
                                        <span className="text-white">
                                            {' '}
                                            2.0-4.3 AU
                                        </span>
                                    </li>
                                    <li>
                                        Solar distance:
                                        <span className="text-white">
                                            {' '}
                                            2.5-3.3 AU
                                        </span>
                                    </li>
                                    <li>
                                        Belt location:
                                        <span className="text-white">
                                            {' '}
                                            Outer main belt
                                        </span>
                                    </li>
                                    <li>
                                        Nearest planetary neighbor:
                                        <span className="text-white">
                                            {' '}
                                            Mars (1.5 AU gap)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Mission Timeline */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Flight Profile
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Cruise Phase
                                    </h3>
                                    <ul className="space-y-1 list-disc pl-6">
                                        <li>Launch: Oct 2023 (Falcon Heavy)</li>
                                        <li>Mars Gravity Assist: 2026</li>
                                        <li>
                                            Deep Space Maneuvers: 3 scheduled
                                        </li>
                                        <li>Optical Comm Demo: 2023-2025</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Orbital Operations
                                    </h3>
                                    <ul className="space-y-1 list-disc pl-6">
                                        <li>Arrival: Aug 2029</li>
                                        <li>
                                            Prime mission duration: 26 months
                                        </li>
                                        <li>Orbit altitudes: 700km → 85km</li>
                                        <li>Data return: {'>'}2TB expected</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Scientific Significance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Orbital Context Importance
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Formation Constraints
                                    </h3>
                                    <p className="leading-relaxed">
                                        Current orbital parameters help
                                        reconstruct Psyche's dynamical history:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Collisional family analysis</li>
                                        <li>Yarkovsky effect measurements</li>
                                        <li>Planetesimal migration models</li>
                                    </ul>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Thermal Environment
                                    </h3>
                                    <p className="leading-relaxed">
                                        3 AU distance creates surface
                                        temperatures between
                                        <span className="text-white">
                                            {' '}
                                            -150°C to -50°C
                                        </span>
                                        , influencing material properties and
                                        observation strategies.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Collisional History
                                    </h3>
                                    <p className="leading-relaxed">
                                        Outer belt location suggests:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>
                                            Lower impact velocity collisions
                                        </li>
                                        <li>
                                            Preservation of ancient features
                                        </li>
                                        <li>Unique crater scaling laws</li>
                                    </ul>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Differentiation Evidence
                                    </h3>
                                    <p className="leading-relaxed">
                                        Orbital dynamics combined with density
                                        measurements may reveal:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Core-mantle separation timing</li>
                                        <li>Post-formation disruptions</li>
                                        <li>Radioisotope decay signatures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comparative Analysis */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Belt Contextualization
                        </h2>
                        <div className="p-4 border border-gray-700 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Asteroid Belt Position
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Between Mars (1.5 AU) and Jupiter
                                            (5.2 AU)
                                        </li>
                                        <li>
                                            Zones: Inner ({'<'}2 AU), Middle
                                            (2-3.3 AU), Outer ({'>'}3.3 AU)
                                        </li>
                                        <li>
                                            Psyche located in metal-rich outer
                                            region
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Orbital Resonance
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>5:2 resonance with Jupiter</li>
                                        <li>Stable orbital configuration</li>
                                        <li>Long-term dynamical simulations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default OrbitYearPage;
