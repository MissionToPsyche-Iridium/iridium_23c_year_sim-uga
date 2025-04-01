import Topbar from '../components/util/Topbar';
import SurfaceCompositionScene from '../components/r3f/scenes/SurfaceCompositionScene';

function SCCPage() {
    return (
        <div className="flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />

            <div className="flex-none" style={{ height: '60vh' }}>
                {' '}
                {/* Prevent stretching */}
                <SurfaceCompositionScene />
            </div>

            <main className="flex-1 overflow-y-auto px-8 pt-20 pb-12 space-y-12 text-gray-300">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            Surface Composition & Characteristics
                        </h1>
                        <p className="text-lg border-b border-gray-700 pb-4">
                            Detailed analysis of 16 Psyche's unique surface
                            properties and material composition
                        </p>
                    </div>

                    {/* Surface Characteristics */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Morphological Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Structural Properties
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Triaxial dimensions:
                                        <span className="text-white">
                                            {' '}
                                            278 × 238 × 171 km
                                        </span>
                                    </li>
                                    <li>
                                        Surface porosity:
                                        <span className="text-white">
                                            {' '}
                                            High regolith porosity
                                        </span>
                                    </li>
                                    <li>
                                        Impact features:
                                        <span className="text-white">
                                            {' '}
                                            Depressions up to 80km
                                        </span>
                                    </li>
                                    <li>
                                        Thermal inertia:
                                        <span className="text-white">
                                            {' '}
                                            Variable across surface
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Radar & Spectral Data
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>Radar-bright surface features</li>
                                    <li>Dielectric constant variations</li>
                                    <li>Subtle 900nm absorption bands</li>
                                    <li>Red-sloped reflectance spectrum</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Composition Analysis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Material Composition
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Primary Components
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>
                                        Metal content:
                                        <span className="text-white">
                                            {' '}
                                            30-60 vol%
                                        </span>
                                    </li>
                                    <li>
                                        Iron-nickel alloy:
                                        <span className="text-white">
                                            {' '}
                                            Dominant metallic phase
                                        </span>
                                    </li>
                                    <li>
                                        Orthopyroxene:
                                        <span className="text-white">
                                            {' '}
                                            6% ±1% surface presence
                                        </span>
                                    </li>
                                    <li>
                                        Sulfides:
                                        <span className="text-white">
                                            {' '}
                                            Potential troilite/pentlandite
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Uncertainties
                                </h3>
                                <ul className="space-y-2 list-disc pl-6">
                                    <li>Silicate-sulfide ratios</li>
                                    <li>Material mixing scale</li>
                                    <li>Porosity distribution</li>
                                    <li>Impact vs primordial features</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Scientific Importance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Unique Significance
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Planetary Core Analog
                                    </h3>
                                    <p className="leading-relaxed">
                                        Potential exposed planetesimal core
                                        offering insights into:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Differentiation processes</li>
                                        <li>Metallic core formation</li>
                                        <li>Mantle stripping mechanisms</li>
                                    </ul>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Impact Dynamics
                                    </h3>
                                    <p className="leading-relaxed">
                                        Unique opportunity to study cratering on
                                        metal-rich surfaces:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Depth-diameter ratios</li>
                                        <li>Ejecta distribution patterns</li>
                                        <li>Shock metamorphism effects</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Material Processes
                                    </h3>
                                    <p className="leading-relaxed">
                                        Investigating unique surface evolution:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Ferrovolcanism evidence</li>
                                        <li>Thermal fracturing effects</li>
                                        <li>Regolith formation mechanisms</li>
                                    </ul>
                                </div>

                                <div className="p-4 border border-gray-700 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Instrument Synergy
                                    </h3>
                                    <p className="leading-relaxed">
                                        Combined data from:
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Multispectral Imager</li>
                                        <li>Gamma-Ray Spectrometer</li>
                                        <li>Magnetometer array</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Objectives */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Key Investigation Goals
                        </h2>
                        <div className="p-4 border border-gray-700 rounded-lg">
                            <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
                                <li>
                                    Resolve metal-silicate distribution patterns
                                </li>
                                <li>
                                    Characterize surface heterogeneity sources
                                </li>
                                <li>Detect sulfur-bearing mineral phases</li>
                                <li>Quantify impact crater morphology</li>
                                <li>Map global porosity variations</li>
                                <li>Determine differentiation evidence</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default SCCPage;
