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
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Academic Sources
                        </h2>
                        <ol className="list-decimal pl-6 space-y-4 text-sm">
                            <li>
                                Bierson, C. J., et al. (2022). Psyche Surface
                                Temperatures...
                            </li>
                            <li>
                                Cambioni, S., et al. (2022). Heterogeneous
                                Surface of Asteroid...
                            </li>
                            <li>
                                Dibb, S. D., et al. (2022). Spectral reflectance
                                variations...
                            </li>
                            <li>
                                Dibb, S. D., et al. (2023). Visible to
                                Near-Infrared...
                            </li>
                            <li>
                                Dibb, S. D., et al. (2024). Post‐Launch Science
                                Investigations...
                            </li>
                            <li>
                                Elkins-Tanton, L., et al. (2019). Psyche
                                Possible Geometries...
                            </li>
                            <li>
                                Elkins-Tanton, L. T., et al. (2020).
                                Observations, meteorites...
                            </li>
                            <li>
                                Elkins-Tanton, L. T., et al. (2022).
                                Distinguishing formation scenarios...
                            </li>
                            <li>
                                Jaumann, R., et al. (2022). The Psyche
                                topography...
                            </li>
                            <li>
                                Marchi, S., et al. (2022). Determining the
                                relative cratering ages...
                            </li>
                            <li>Shepard, M. K. Radar observations...</li>
                            <li>
                                Shepard, M. K., et al. (2021). Asteroid (16)
                                Psyche: A Global Shape Model...
                            </li>
                            <li>
                                Weiss, B. P., et al. (2023). The Psyche
                                magnetometry investigation...
                            </li>
                            <li>
                                Zuber, M. T., et al. (2022). The Psyche gravity
                                investigation...
                            </li>
                        </ol>
                    </section>

                    {/* Additional Links Template */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                            Additional Resources
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>[Link Title 1] - [URL Placeholder]</li>
                            <li>[Link Title 2] - [URL Placeholder]</li>
                            <li>[Link Title 3] - [URL Placeholder]</li>
                            <li>[Link Title 4] - [URL Placeholder]</li>
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
