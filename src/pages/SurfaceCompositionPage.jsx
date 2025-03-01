import React from 'react';
import Topbar from '../components/Topbar';
import SPG_img from '../assets/images/surface_images/SPG_cov.jpg';
import SPC_img from '../assets/images/surface_images/SPC_cov.png';
import Crater_img from '../assets/images/surface_images/crater_cov.jpg';
import Regolith_img from '../assets/images/surface_images/regolith_cov.jpg';
import Background from '../assets/images/space_bg_3.jpg';

// Reusable Card component
const Card = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4">
        {imageUrl && (
            <img
                src={imageUrl}
                alt={title}
                // h controlls the height, w controls the width, i've made it so that the width is full,
                // you can control the height to go higher or lower as you want
                // className="w-full h-48 object-cover rounded-t-lg"
                className="w-full h-72 object-cover rounded-t-lg"
            />
        )}
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

function SurfaceCompositionPage() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Topbar />
            <hr className="border-t border-white w-full" />

            <main className="container mx-auto py-8 px-4">
                {/* <h1 className="text-3xl font-bold mb-4">Surface Composition</h1> */}

                {/* Introductory Section */}
                <section className="mb-8">
                    <p className="text-gray-100">
                        While the Psyche Spacecraft is yet to reach 16-Psyche,
                        the Psyche Mission will be sure to capture amazing
                        visual and geologic data about the asteroid using
                        several cool imaging techniques! The main imaging
                        strategy involes capturing images that cover the entire
                        surface through multiple orbits, using both direct nadir
                        and angled off-nadir shots. The strategy sets optimal
                        ranges for illumination, stereo separation, and
                        incidence/emission angles to ensure high-quality,
                        overlapping images. These varied viewing geometries
                        support the creation of detailed DTMs and comprehensive
                        maps that capture both geological and compositional
                        nuances. Read more about some of the imaging and data
                        gathering techniques used below!
                    </p>
                </section>

                {/* Cards or Content Sections */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                        title="Stereo Photogrammetry (SPG) Mapping"
                        description="SPG Mapping uses multiple overlapping images to create a three-dimensional digital terrain model by capturing surface 
            details from different angles. Images are processed through photogrammetric block adjustments and tie point 
            identification, ensuring sub-pixel accuracy. This iterative approach transforms raw camera data into a precise,
             geodetically referenced model that quantifies elevations, slopes, and other geomorphological features."
                        imageUrl={SPG_img}
                    />
                    <Card
                        title="Stereo Photoclinometry (SPC) Mapping"
                        description="In SPC Mapping, brightness variations under different illumination conditions are used to construct
             detailed maplets of the surface. By minimizing brightness residuals across images, fine-scale slope and albedo 
             variations are captured with nearly single-pixel resolution. This method complements SPG by enhancing detail 
             where geometric parallax is limited and can be further refined using photoclinometry by deformation (PCD)."
                        imageUrl={SPC_img}
                    />
                    {/* Add more cards as needed */}
                    <Card
                        title="Surface Geomorphology & Landforms"
                        description="Psyche’s surface features an array of landforms—large impact craters, depressions, and tectonic 
            structures shaped by rapid rotation and low gravity. Asymmetric crater shapes, steep slopes, and signs of mass-wasting 
            suggest that there could have been multiple impact events and subsequent gravitational adjustments in its past as well.
             Global deformations, like contraction scarps and fault systems, also suggest that there may have been internal stresses 
             and thermal evolution over time."
                        imageUrl={Crater_img}
                    />
                    {/* Add more cards as needed */}
                    <Card
                        title="Surface Weathering and Regolith Formation"
                        description="Space weathering, impact bombardment, and regolith production continuously modify the surface of 16-Psyche. 
            The clash between metallic and silicate materials results in unique regolith properties, influencing particle size 
            distribution, mechanical strength, and thermal inertia. These factors determine slope stability, mass-wasting events,
             and overall surface texture on a low-gravity, metal-rich body."
                        imageUrl={Regolith_img}
                    />
                    {/* Add more cards as needed */}
                </section>
            </main>

            {/* Optional Footer
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </footer> */}
        </div>
    );
}

export default SurfaceCompositionPage;
