import Topbar from '../components/Topbar';
import CraterInfo from '../components/CraterInfo';

function CraterExplorerPage() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <CraterInfo></CraterInfo>
        </div>
    );
}

export default CraterExplorerPage;
