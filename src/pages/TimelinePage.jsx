import Topbar from '../components/Topbar';
import Timeline from '../components/Timeline';

function TimelinePage() {
    return (
        <div>
            <Topbar></Topbar>
            <hr className="border-t border-white w-full" />
            <Timeline></Timeline>
        </div>
    );
}

export default TimelinePage;
