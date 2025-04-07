import React, { useState, useRef, useEffect } from 'react';

function PsycheChatbot() {
    const [messages, setMessages] = useState([
        {
            id: 'initial-greeting',
            sender: 'bot',
            text: 'Hello! Ask me anything about the 16 Psyche mission.',
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        const trimmedInput = inputValue.trim();
        if (!trimmedInput || isLoading) return;

        const userMessage = {
            id: Date.now(),
            sender: 'user',
            text: trimmedInput,
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmedInput }),
            });

            if (!response.ok) {
                let errorMsg = `HTTP error! Status: ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorMsg;
                } catch (jsonError) {}
                throw new Error(errorMsg);
            }

            const data = await response.json();

            const botResponse = {
                id: Date.now() + 1,
                sender: 'bot',
                text: data.answer,
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error('Failed to send message:', error);
            const errorMessage = {
                id: Date.now() + 1,
                sender: 'bot',
                text: `Sorry, I encountered an error. ${error.message || 'Please try again later.'}`,
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-900 text-white">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 text-center">
                {' '}
                {/* Centered Header */}
                <h1 className="text-xl font-bold">Psyche Assistant</h1>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {' '}
                {/* Added space-y-4 */}
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`} // Use flex alignment
                    >
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg px-3 py-2 rounded-lg shadow ${
                                message.sender === 'user'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-white'
                            }`}
                        >
                            <span style={{ whiteSpace: 'pre-wrap' }}>
                                {message.text}
                            </span>
                        </div>
                    </div>
                ))}
                {/* Loading indicator */}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="px-3 py-2 rounded-lg shadow bg-gray-700 text-gray-400 italic">
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700 flex items-center">
                {' '}
                <textarea
                    rows={1}
                    placeholder={
                        isLoading
                            ? 'Waiting for response...'
                            : 'Ask a question about Psyche...'
                    }
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none resize-none overflow-y-auto max-h-28 mr-2" // Added max-height, margin-right
                    style={{ overflowWrap: 'break-word' }}
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading || !inputValue.trim()}
                    className={`p-2 rounded ${
                        isLoading || !inputValue.trim()
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default PsycheChatbot;
