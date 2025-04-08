import React from 'react';
import InstructionsEnterButton from '../components/buttons/InstructionsEnterButton'; 
import BackButton from '../components/buttons/BackButton'; 

function InstructionsPage() {
    return (
        <div className="flex flex-col bg-gray-900 font-mono min-h-screen">
            <hr className="border-t border-gray-700 w-full" />

            <main className="flex-1 overflow-y-auto px-8 pt-12 pb-12 space-y-8 text-gray-300">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-10 text-white text-center">
                        Welcome to the Psyche Explorer!
                    </h1>

                    {/* Introduction */}
                    <p className="text-lg mb-10 leading-relaxed text-center">
                        This interactive experience guides you through the
                        fascinating world of asteroid 16 Psyche. Navigate
                        through the different sections using the top bar or the
                        buttons below to learn about its unique characteristics
                        and the NASA mission exploring it.
                    </p>

                    <div className="space-y-6">
                        {/* Mission Overview */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Mission Overview
                            </h2>
                            <p className="leading-relaxed">
                                Explore interactive 3D models of the Psyche
                                asteroid and the NASA spacecraft and use the
                                selector button to switch between views. Also read
                                about the mission's overview, objectives,
                                timeline, collaborators, and the scientific
                                instruments onboard.
                            </p>
                        </div>

                        {/* Shape and Rotation */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Shape and Rotation
                            </h2>
                            <p className="leading-relaxed">
                                Visualize Psyche's irregular shape with a
                                rotating 3D model featuring labeled dimensions, and learn about its shape and rotation
                                characteristics, their scientific significance,
                                and related mission goals.
                            </p>
                        </div>

                        {/* Orbit and Year */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Orbit and Year
                            </h2>
                            <p className="leading-relaxed">
                                Watch an animation of Psyche's journey through
                                the solar system. Adjust the animation speed
                                with the slider and see the relative passage of
                                Psyche and Earth years, and read about its orbital
                                mechanics, flight profile, and context within
                                the asteroid belt.
                            </p>
                        </div>

                        {/* Surface Characteristics and Composition */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Surface & Composition
                            </h2>
                            <p className="leading-relaxed">
                                Examine different potential compositions using
                                switchable 3D models (from mostly metal to
                                mostly silicate), and discover info about Psyche's surface
                                morphology, inferred material composition,
                                unique significance, and key investigation
                                goals for the mission.
                            </p>
                        </div>

                        {/* Impacts */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Impacts of Characteristics
                            </h2>
                            <p className="leading-relaxed">
                                Understand how Psyche's unique properties
                                (metal-rich composition, topography, fast
                                rotation, high obliquity, eccentric orbit)
                                influence its surface conditions. Also explore an
                                interactive chart showing estimated temperature variations based on its tilt.
                            </p>
                        </div>

                        {/* Chatbot */}
                        <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Psyche Chatbot
                            </h2>
                            <p className="leading-relaxed">
                                Interact with our AI assistant! Ask questions
                                about Psyche's unique properties and why it's a
                                valuable scientific target. The chatbot uses
                                information sourced from research papers to provide
                                detailed answers.
                            </p>
                        </div>

                         {/* Learn More */}
                         <div>
                            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-3 text-white">
                                Learn More
                            </h2>
                            <p className="leading-relaxed">
                                Find information about the project team, data sources used throughout the site, links to additional resources for deeper learning, and the disclaimer.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center space-x-6 mt-12">
                        <BackButton />
                        <InstructionsEnterButton />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default InstructionsPage;