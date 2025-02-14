import Topbar from '../components/Topbar';

function HomePage() {
    return (
        <div className="relative w-full h-screen bg-black">
            <div className="absolute top-0 left-0 w-full z-20">
                <Topbar />
                <hr className="border-t border-white w-full" />
            </div>
        </div>
    );
}

export default HomePage;
