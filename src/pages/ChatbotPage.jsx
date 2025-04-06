import Topbar from '../components/util/Topbar';
import PsycheChatbot from '../components/util/PsycheChatbot';

function ChatbotPage() {
    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex-1">
                <PsycheChatbot />
            </div>
        </div>
    );
}

export default ChatbotPage;
