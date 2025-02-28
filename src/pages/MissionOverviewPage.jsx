import Topbar from '../components/Topbar';
import Carousel from '../components/Carousel'
import Background from '../assets/images/space_bg_3.jpg';
import Fact_Card_1 from '../assets/images/fact_cards/mo_fc_1.png';
import Fact_Card_2 from '../assets/images/fact_cards/mo_fc_2.png';
import Fact_Card_3 from '../assets/images/fact_cards/mo_fc_3.png';

function MissionOverViewPage() {
    return (
        // Outer container, this takes the full viewport height and hides the overflow
        // <div className="h-screen overflow-hidden flex flex-col">
        <div
            className="h-screen flex flex-col bg-cover bg-center"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",       // Makes the image cover the entire area
                backgroundRepeat: "no-repeat", // Prevents tiling
                backgroundPosition: "center"   // Centers the image
            }}
        >
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <h1>Mission Overview</h1>
            {/* This flex-grow container centers the carousel */}
            <div className="flex-grow flex items-center justify-center">
                {/* Responsive carousel container with a 3:4 aspect ratio */}
                {/* <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-square"> */}
                <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-4/10 aspect-square">
                    <Carousel>
                    {/* <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/1.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <img src={Fact_Card_1} alt="Slide 1" className="w-full h-full object-cover" />
                    <img src={Fact_Card_2} alt="Slide 2" className="w-full h-full object-cover" />
                    <img src={Fact_Card_3} alt="Slide 3" className="w-full h-full object-cover" />
                    </Carousel>
                    
                </div>
            </div>
        </div>
    );
}

export default MissionOverViewPage;
