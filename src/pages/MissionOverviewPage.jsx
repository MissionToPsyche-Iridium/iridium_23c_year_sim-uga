import Topbar from '../components/Topbar';
import Carousel from '../components/Carousel'

function MissionOverViewPage() {
    return (
        // Outer container, this takes the full viewport height and hides the overflow
        // <div className="h-screen overflow-hidden flex flex-col">
        <div className="h-screen flex flex-col">
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <h1>Mission Overview</h1>
            {/* This flex-grow container centers the carousel */}
            <div className="flex-grow flex items-center justify-center">
                {/* Responsive carousel container with a 3:4 aspect ratio */}
                {/* <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-square"> */}
                <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-4/10 aspect-square">
                    <Carousel>
                    <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                    <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                    <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
                    </Carousel>
                    
                </div>
            </div>
        </div>
    );
}

export default MissionOverViewPage;
