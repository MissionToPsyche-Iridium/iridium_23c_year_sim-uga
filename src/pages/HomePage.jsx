import Topbar from '../components/Topbar';
import PsycheClose from '../components/PsycheClose';

function HomePage() {
    return (
        <div className="relative w-full bg-black">
            <div className="absolute top-0 left-0 w-full z-20">
                <Topbar />
                <hr className="border-t border-white w-full" />
                <PsycheClose></PsycheClose>
            </div>
        </div>
    );
}

export default HomePage;
