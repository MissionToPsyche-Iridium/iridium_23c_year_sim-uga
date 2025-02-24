import Topbar from '../components/Topbar';
import Carousel from '../components/Carousel'

function MissionOverViewPage() {
    return (
        <div>
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <h1>Mission Overview</h1>
            <div className="mt-4 max-w-4xl mx-auto h-64">
                <Carousel>
                <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/1.jpg" width="300" height="300" alt="Slide 1" className="w-full" />
                <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/2.jpg" width="300" height="300" alt="Slide 2" className="w-full" />
                <img src="https://juazeiro.gteducacao.com.br/assets/images/samples/300x300/3.jpg" width="300" height="300" alt="Slide 3" className="w-full" />
                </Carousel>
            </div>
        </div>
    );
}

export default MissionOverViewPage;
