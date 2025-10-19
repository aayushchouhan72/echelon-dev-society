import React, { useState, useEffect, useRef } from "react";
const GROQ_API_KEY = "";
const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const MessageBoxIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M1.5 2.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h3.515a.75.75 0 0 1 .53.22L8.25 18.75a.75.75 0 0 0 1.5 0l2.755-2.78a.75.75 0 0 1 .53-.22h6.215a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75H1.5Z" />
    <path d="M22.5 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 1-.75.75h-3.515a.75.75 0 0 0-.53.22L14.25 18.75a.75.75 0 0 1-1.5 0l-2.755-2.78a.75.75 0 0 0-.53-.22H3.25a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-1.5 0v6A2.25 2.25 0 0 0 3.25 17.25h6.215c.14 0 .274.056.375.156L12 19.58l2.159-2.174a.563.563 0 0 1 .376-.156h6.215A2.25 2.25 0 0 0 23.25 15v-6a.75.75 0 0 0-.75-.75Z" />
  </svg>
);

const SendIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);

const SupportChat = ({ theme = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am a super-fast AI assistant powered by Groq. How can I help?",
      sender: "agent",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  useEffect(() => {
    if (!GROQ_API_KEY) {
      const warningMessage = {
        id: Date.now(),
        text: "Welcome! To enable the chat, please get a free API Key from Groq.com and add it to the source code.",
        sender: "agent",
        isError: true,
      };
      setMessages((prev) => [...prev, warningMessage]);
    }
  }, [GROQ_API_KEY]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "" || isBotTyping) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsBotTyping(true);

    await generateBotResponse(inputValue);
  };

  const generateBotResponse = async (userInput) => {
    if (!GROQ_API_KEY) {
      const errorResponse = {
        id: Date.now() + 1,
        text: "Groq API Key not provided. Please add your key in the code.",
        sender: "agent",
        isError: true,
      };
      setMessages((prev) => [...prev, errorResponse]);
      setIsBotTyping(false);
      return;
    }

    const API_URL = "https://api.groq.com/openai/v1/chat/completions";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: userInput }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API request failed: ${
            errorData.error?.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      const botText =
        data.choices[0]?.message?.content || "Sorry, I couldn't process that.";

      const agentResponse = {
        id: Date.now() + 1,
        text: botText,
        sender: "agent",
      };
      setMessages((prev) => [...prev, agentResponse]);
    } catch (error) {
      console.error("Groq API call failed:", error);
      const errorResponse = {
        id: Date.now() + 1,
        text: `Oops! ${error.message}`,
        sender: "agent",
        isError: true,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div
      id="support"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans"
    >
      <div
        className={`transition-all duration-300 ease-in-out mb-4 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className={`w-80 h-96 sm:w-96 sm:h-[500px] ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          } rounded-xl shadow-2xl flex flex-col overflow-hidden`}
        >
          <header className="bg-violet-600 text-white p-4 rounded-t-xl flex justify-between items-center shadow-md">
            <h3 className="font-bold text-lg">AI Support Chat</h3>
          </header>

          <div
            className={`flex-1 p-4 overflow-y-auto ${
              theme === "light" ? "bg-gray-50" : "bg-gray-800"
            }`}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-3 text-sm ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`py-2 px-4 max-w-[75%] rounded-2xl shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : msg.isError
                      ? "bg-red-100 text-red-700 border border-red-300 rounded-bl-none"
                      : theme === "light"
                      ? "bg-gray-200 text-gray-800 rounded-bl-none"
                      : "bg-gray-700 text-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isBotTyping && (
              <div className="flex justify-start mb-3">
                <div
                  className={`${
                    theme === "light" ? "bg-gray-200" : "bg-gray-700"
                  } rounded-2xl py-2 px-4 shadow-sm rounded-bl-none`}
                >
                  <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form
            onSubmit={handleSendMessage}
            className={`p-3 border-t ${
              theme === "light"
                ? "border-gray-200 bg-white"
                : "border-gray-700 bg-gray-900"
            } flex items-center rounded-b-xl shadow-inner`}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={!GROQ_API_KEY || isBotTyping}
              className={`flex-grow p-2 border ${
                theme === "light"
                  ? "border-gray-300 bg-gray-50 text-gray-800"
                  : "border-gray-600 bg-gray-800 text-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-100 text-sm`}
            />
            <button
              type="submit"
              disabled={!GROQ_API_KEY || isBotTyping}
              className="bg-violet-600 text-white p-2 ml-2 rounded-lg hover:bg-violet-700 disabled:bg-violet-300 transition-colors duration-200"
            >
              <SendIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-violet-600 text-white rounded-full p-4 shadow-lg hover:bg-violet-700 transition-transform transform hover:scale-110 focus:outline-none"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <XIcon className="h-8 w-8" />
        ) : (
          <MessageBoxIcon className="h-8 w-8" />
        )}
      </button>
    </div>
  );
};

export default SupportChat;
