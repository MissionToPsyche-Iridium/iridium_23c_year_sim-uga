import Topbar from '../components/util/Topbar';
import StillScene from '../components/r3f/scenes/StillScene';

function MissionOverviewPage() {
    return (
        <div className="flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />
            {/* 3D Scene Section */}
            <div className="flex-none" style={{ height: '60vh' }}>
                {' '}
                {/* Prevent stretching */}
                <StillScene />
            </div>
            <main className="flex-1 overflow-y-auto px-8 pt-20 pb-12 space-y-12 text-gray-300">
                {/* Hero Section */}
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-white">
                        Psyche Mission Overview
                    </h1>

                    {/* Overview Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                                Journey to a Metal World
                            </h2>
                            <p className="leading-relaxed">
                                NASA's Psyche mission is humanity's first visit
                                to a metal-rich asteroid, offering potentially
                                unprecedented insights into planetary core
                                formation. Targeting 16-Psyche in the main
                                asteroid belt between Mars and Jupiter, this
                                mission could also reveal secrets about the
                                history of collisions and accretion that led to
                                terrestrial planets.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                                Scientific Significance
                            </h2>
                            <p className="leading-relaxed">
                                Psyche's estimated density of 3,400-4,100 kg/m³
                                suggests a composition radically different from
                                most stony asteroids. Additionally, its triaxial
                                dimensions (278 × 238 × 171 km) make it one of
                                the largest metallic bodies in the asteroid
                                belt, potentially representing the exposed core
                                of a primordial planetesimal.
                            </p>
                        </div>
                    </div>

                    {/* Mission Objectives */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
                            Primary Objectives
                        </h2>
                        <ul className="grid gap-4 list-disc pl-6">
                            <li>
                                <span className="font-semibold">
                                    Core Verification:
                                </span>{' '}
                                Determine if Psyche represents a planetary core
                                or unmelted primordial material
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Surface Chronology:
                                </span>{' '}
                                Establish relative ages of surface features
                                through crater analysis
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Geological Mapping:
                                </span>{' '}
                                Map morphology and topography at ≤200 m/pixel
                                resolution
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Composition Analysis:
                                </span>{' '}
                                Characterize bulk elemental composition and
                                mineral phases
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Magnetic Field Study:
                                </span>{' '}
                                Detect and analyze any remnant magnetic field
                            </li>
                        </ul>
                    </section>

                    {/* Timeline & Participants */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
                            Mission Profile
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    Key Dates
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        • Launch: October 13, 2023 (Falcon
                                        Heavy)
                                    </li>
                                    <li>• Mars Flyby: 2026 Gravity Assist</li>
                                    <li>• Arrival at Psyche: August 2029</li>
                                    <li>
                                        • Prime Mission Conclusion: November
                                        2031
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    Collaborators
                                </h3>
                                <p className="leading-relaxed">
                                    Led by JPL with ASU managing science
                                    operations. Spacecraft chassis by Maxar
                                    Technologies. Partners include MIT for
                                    magnetometry, DTU for instrument design, and
                                    JPL/Caltech for managing the DSOC technology
                                    demonstration.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Instruments */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
                            Scientific Payload
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    Multispectral Imager
                                </h3>
                                <p className="text-gray-400">
                                    Dual-camera system for geological mapping
                                    and composition analysis
                                </p>
                            </div>
                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    GRNS
                                </h3>
                                <p className="text-gray-400">
                                    Gamma Ray and Neutron Spectrometer for
                                    elemental detection
                                </p>
                            </div>
                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    Magnetometer
                                </h3>
                                <p className="text-gray-400">
                                    High-sensitivity field detection (MIT/DTU
                                    collaboration)
                                </p>
                            </div>
                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    DSOC
                                </h3>
                                <p className="text-gray-400">
                                    Deep Space Optical Communications technology
                                    demonstrator
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default MissionOverviewPage;
