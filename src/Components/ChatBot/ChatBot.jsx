import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.setAttribute('chatbotId', 'goch21b3osoQ79LjNIiIL');
        script.setAttribute('domain', 'www.chatbase.co');
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Script failed to load'));
        script.defer = true;
        document.body.appendChild(script);
      });
    };

    loadScript()
      .catch(error => console.error("Error loading Chatbase script:", error));

    return () => {
      // Cleanup script on component unmount
      const scripts = document.querySelectorAll('script[src="https://www.chatbase.co/embed.min.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
};

export default Chatbot;
