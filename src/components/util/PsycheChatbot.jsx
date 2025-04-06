import React, { useState } from 'react';

function PsycheChatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMessage = {
            id: Date.now(),
            sender: 'user',
            text: inputValue.trim(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                sender: 'bot',
                text: 'This is a simulated response. Your question about Psyche is intriguing!',
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-900 text-white">
            <div className="p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold">Psyche Chatbot</h1>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                    >
                        <div
                            className={`inline-block p-2 rounded ${
                                message.sender === 'user'
                                    ? 'bg-blue-600'
                                    : 'bg-gray-700'
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-700">
                <input
                    type="text"
                    placeholder="Ask a question about Psyche..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
                />
                <button
                    onClick={handleSend}
                    className="mt-2 w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default PsycheChatbot;
