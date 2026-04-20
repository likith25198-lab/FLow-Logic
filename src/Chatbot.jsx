import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({ user_name: '', user_email: '', user_phone: '', message: '' });
  const [chatHistory, setChatHistory] = useState([{ type: 'bot', text: 'Hi! I’m the Flowlogic assistant. What is your name?' }]);
  const chatEndRef = useRef(null);

  const questions = [
    { key: 'user_name', text: 'Great! What is your email address?' },
    { key: 'user_email', text: 'And a phone number where we can reach you?' },
    { key: 'user_phone', text: 'Briefly, what water management challenges can we help you solve?' },
    { key: 'message', text: 'Thank you for your query. Our team will get back to you shortly!' }
  ];

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom() }, [chatHistory]);

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;
    if (!input) return;

    const currentQuestionKey = step === 0 ? 'user_name' : questions[step - 1].key;
    const updatedResponses = { ...responses, [currentQuestionKey]: input };
    setResponses(updatedResponses);

    setChatHistory([...chatHistory, { type: 'user', text: input }]);
    e.target.reset();

    if (step < questions.length - 1) {
      setTimeout(() => {
        setChatHistory(prev => [...prev, { type: 'bot', text: questions[step].text }]);
        setStep(step + 1);
      }, 600);
    } else {
      // Final Step: Send Email
      sendFinalEmail(updatedResponses);
      setTimeout(() => {
        setChatHistory(prev => [...prev, { type: 'bot', text: questions[3].text }]);
        setStep(step + 1);
      }, 600);
    }
  };

  const sendFinalEmail = (finalData) => {
    emailjs.send('service_nuv5kq4', 'template_6a3gm4f', finalData, 'ioi67JkkbtWPIziCW')
      .then(() => console.log('Chatbot mail sent!'))
      .catch((err) => console.error('Chatbot error:', err));
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-trigger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Flowlogic Assistant</div>
          <div className="chat-body">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.type}`}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          {step <= 3 && (
            <form className="chat-footer" onSubmit={handleSend}>
              <input name="userInput" placeholder="Type here..." autoComplete="off" />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
