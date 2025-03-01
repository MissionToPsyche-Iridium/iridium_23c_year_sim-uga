import Topbar from '../components/Topbar';
import GravityInfo from '../components/GravityInfo';

function GravityFieldPage() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <GravityInfo></GravityInfo>
        </div>
    );
}

export default GravityFieldPage;
