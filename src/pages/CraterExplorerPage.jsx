import Topbar from '../components/Topbar';
import CraterInfo from '../components/CraterInfo';

function CraterExplorerPage() {
    return (
        <div>
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <CraterInfo></CraterInfo>
        </div>
    );
}

export default CraterExplorerPage;
