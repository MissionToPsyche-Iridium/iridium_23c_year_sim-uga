import NasaImage from '../assets/images/nasa.png';
import PresentedByImage from '../assets/images/presented-by.png';
import YearOnPsycheImage from '../assets/images/year-on-psyche.png';
import SpaceAnimation from '../assets/animations/space-animation.mp4';
import InstructionsButton from '../components/buttons/InstructionsButton';
import EnterButton from '../components/buttons/EnterButton';

function LandingPage() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={SpaceAnimation} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative flex flex-col items-center justify-center h-full space-y-8">
                {/* Stacked Images */}
                <div className="flex flex-col space-y-4">
                    <img src={NasaImage} alt="Nasa Image" className="w-150" />
                    <img
                        src={YearOnPsycheImage}
                        alt="Year on Psyche Image"
                        className="w-150"
                    />
                    <img
                        src={PresentedByImage}
                        alt="Presented By Image"
                        className="w-150"
                    />
                </div>

                {/* Stacked Buttons */}
                <div className="flex flex-col space-y-4 mt-6">
                    <InstructionsButton></InstructionsButton>
                    <EnterButton></EnterButton>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
