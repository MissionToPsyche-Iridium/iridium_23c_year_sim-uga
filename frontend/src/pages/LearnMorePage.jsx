import Topbar from '../components/util/Topbar';

function LearnMorePage() {
    return (
        <div className="h-screen flex flex-col bg-gray-900 font-mono">
            <Topbar />
            <hr className="border-t border-gray-700 w-full" />

            <main className="flex-1 overflow-y-auto p-8 text-gray-300">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            Learn More
                        </h1>
                        <hr className="border-b border-gray-700" />
                    </div>

                    {/* Team Section */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Team 23C Iridium
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">
                                University of Georgia
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-semibold">
                                        Venn Reddy
                                    </span>{' '}
                                    - Team Leader, Development, Research
                                    <br />
                                    <span className="text-gray-400">
                                        Computer Science
                                    </span>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Dylan Carter
                                    </span>{' '}
                                    - Development, Research
                                    <br />
                                    <span className="text-gray-400">
                                        Computer Science
                                    </span>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Connor Morris
                                    </span>{' '}
                                    - Research
                                    <br />
                                    <span className="text-gray-400">
                                        Mechanical Engineering
                                    </span>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Warner Johnson
                                    </span>{' '}
                                    - Research
                                    <br />
                                    <span className="text-gray-400">
                                        Mechanical Engineering
                                    </span>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Zoe Wagner
                                    </span>{' '}
                                    - Research
                                    <br />
                                    <span className="text-gray-400">
                                        Mechanical Engineering
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Research Sources */}
                    {/* Research Sources */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Academic Sources
                        </h2>
                        <ol className="list-decimal pl-6 space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://www.jpl.nasa.gov/press-kits/psyche/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    NASA (2023). Psyche Press Kit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iopscience.iop.org/article/10.3847/PSJ/ac83a7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Bierson, C. J., et al. (2022). The Geologic
                                    Impact of 16 Psyche's Surface Temperatures
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007091"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Cambioni, S., et al. (2022). The
                                    Heterogeneous Surface of Asteroid (16)
                                    Psyche
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://onlinelibrary.wiley.com/doi/10.1111/maps.13891"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Dibb, S. D., et al. (2022). Spectral
                                    reflectance variations of aubrites,
                                    metal-rich meteorites, and sulfides:
                                    Implications for exploration of (16) Psyche
                                    and other “spectrally featureless” asteroids
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022EA002694"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Dibb, S. D., et al. (2023). Visible to
                                    Near-Infrared Reflectance Spectroscopy of
                                    Asteroid (16) Psyche: Implications for the
                                    Psyche Mission's Science Investigations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023AV001077"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Dibb, S. D., et al. (2024). A Post‐Launch
                                    Summary of the Science of NASA's Psyche
                                    Mission
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006296"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Elkins-Tanton, L. T., et al. (2020).
                                    Observations, Meteorites, and Models: A
                                    Preflight Assessment of the Composition and
                                    Formation of (16) Psyche
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://link.springer.com/article/10.1007/s11214-022-00880-9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Elkins-Tanton, L. T., et al. (2022).
                                    Distinguishing the Origin of Asteroid (16)
                                    Psyche
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://link.springer.com/article/10.1007/s11214-022-00874-7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Jaumann, R., et al. (2022). The Psyche
                                    Topography and Geomorphology Investigation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://link.springer.com/article/10.1007/s11214-022-00891-6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Marchi, S., et al. (2022). Determining the
                                    Relative Cratering Ages of Regions of
                                    Psyche’s Surface
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516300288?via%3Dihub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Shepard, M. K., et al. (2016) Radar
                                    observations and shape model of asteroid 16
                                    Psyche
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iopscience.iop.org/article/10.3847/PSJ/abfdba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Shepard, M. K., et al. (2021). Asteroid 16
                                    Psyche: Shape, Features, and Global Map
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://link.springer.com/article/10.1007/s11214-023-00965-z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Weiss, B. P., et al. (2023). The Psyche
                                    Magnetometry Investigation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://link.springer.com/article/10.1007/s11214-022-00905-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    Zuber, M. T., et al. (2022). The Psyche
                                    Gravity Investigation
                                </a>
                            </li>
                        </ol>
                    </section>

                    {/* Additional Links Template */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Additional Resources
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <a
                                    href="https://science.nasa.gov/mission/psyche/#:~:text=Psyche%20was%20discovered%20in%201852,a%20butterfly%2Dwinged%20female%20figure."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    NASA: Comprehensive Psyche Website
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://science.nasa.gov/mission/psyche/#:~:text=Psyche%20was%20discovered%20in%201852,a%20butterfly%2Dwinged%20female%20figure."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    NASA/ASU: Asteroid & Mission Info
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://psyche.asu.edu/gallery/psyche-asteroid-rotation-animation/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                >
                                    NASA/ASU: Psyche Rotation Animation
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Disclaimer
                        </h2>
                        <p className="pt-2">
                            This work was created in partial fulfillment of The
                            University of Georgia Capstone Course CSCI/MCHE
                            4910. The work is a result of the Psyche Student
                            Collaborations component of NASA’s Psyche Mission
                            (https://psyche.asu.edu). “Psyche: A Journey to a
                            Metal World” [Contract number NNM16AA09C] is part of
                            the NASA Discovery Program mission to solar system
                            targets. Trade names and trademarks of ASU and NASA
                            are used in this work for identification only. Their
                            usage does not constitute an official endorsement,
                            either expressed or implied, by Arizona State
                            University or National Aeronautics and Space
                            Administration. The content is solely the
                            responsibility of the authors and does not
                            necessarily represent the official views of ASU or
                            NASA.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default LearnMorePage;
