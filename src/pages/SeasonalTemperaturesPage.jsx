import Topbar from '../components/Topbar';
import SeasonalTemperaturesInfo from '../components/SeasonalTemperaturesInfo';

function SeasonalTemperaturesPage() {
    return (
        <div>
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <SeasonalTemperaturesInfo></SeasonalTemperaturesInfo>
        </div>
    );
}

export default SeasonalTemperaturesPage;
