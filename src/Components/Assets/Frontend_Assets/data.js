
import p1_1_img from "./product_1.png";
import p1_2_img from "./product_1_2.png";
import p1_3_img from "./product_1_3.png";
import p1_4_img from "./product_1_4.png";

import p2_1_img from "./product_2_1.png";
import p2_2_img from "./product_2_2.png";
import p2_3_img from "./product_2_3.png";
import p2_4_img from "./product_2_4.png";

import p3_1_img from "./product_3_1.png";
import p3_2_img from "./product_3_2.png";
import p3_3_img from "./product_3_3.png";
import p3_4_img from "./product_3_4.jpeg";

import p5_1_img from "./product_5_1.jpg";
import p5_2_img from "./product_5_2.webp";

let data_product = [
  {
    id: 1,
    name: "Bose QuietComfort Ultra Headphones",
    category: "earphone",
    image_1: p1_2_img,
    image_2:p1_1_img,
    image_3:p1_3_img,
    image_4:p1_4_img,
    new_price: 1299,
    old_price: 1599,
    colors: ["White", "Black", "Pink","Brown"],
    product_desc:"World-class noise cancellation, quieter than ever before. Breakthrough spatialized audio for immersive listening, no matter the content or source. Elevated design and luxe materials for unrivaled comfort. It’s everything music makes you feel taken to new highs. Bose Immersive Audio pushes the boundary of what it means to listen by taking what you’re hearing out of your head and placing it in front of you. It sounds so real it’s almost like you could reach out and touch it.",
    product_desc_1:"The Bose QuietComfort Ultra Headphones offer a premium listening experience with a range of advanced features designed for ultimate comfort and convenience. Boasting superior noise cancellation technology, these headphones effectively minimize ambient sounds, allowing you to enjoy your music, podcasts, or calls without distractions. The premium sound quality is achieved through Bose's TriPort technology and active EQ, delivering rich, balanced audio with deep bass and clear highs. Designed for long-lasting comfort, they feature plush ear cushions, a lightweight frame, and an adjustable headband. With up to 24 hours of battery life on a single charge and quick charging capabilities providing 2.5 hours of playback from just 15 minutes of charging, these headphones ensure you stay powered throughout your day. Bluetooth 5.1 technology offers seamless wireless connectivity, while multi-point support allows easy switching between two devices. Intuitive touch-sensitive controls make managing music and calls effortless, and built-in voice assistants (Google Assistant and Amazon Alexa) enable hands-free task management. The durable, foldable design enhances portability, and customizable sound profiles through the companion app let you tailor your listening experience. Additionally, the high-performance microphone system ensures clear and natural voice transmission during calls, further enhancing the overall user experience.",
  },
  {
    id: 2,
    name: "Sony WH-CH520 Wireless Headphones",
    category: "earphone",
    image_1: p2_1_img,
    image_2:p2_2_img,
    image_3:p2_3_img,
    image_4:p2_4_img,
    new_price: 499,
    old_price: 699,
    colors: ["White", "Black", "Pink","Blue"],
    product_desc:"From airplane noise to people’s voices, our WH-1000XM5 wireless headphones with multiple microphone noise cancelling keep out more high and mid frequency sounds than ever. And with Auto NC Optimizer, noise cancelling is automatically optimised based on your wearing conditions and environment",
    product_desc_1:"The WH-1000XM5 Wireless Noise Cancelling Headphones offer superior sound quality with advanced noise-cancellation technology. Designed for all-day comfort, these headphones deliver crystal-clear audio and deep bass, making them perfect for music lovers and professionals alike. With a sleek, modern design and up to 30 hours of battery life, the WH-1000XM5 is ideal for those who demand the best in wireless audio performance.",
  },
  {
    id: 3,
    name: "Logitech: POP Keys",
    category: "keyboard",
    image_1: p3_1_img,
    image_2:p3_2_img,
    image_3:p3_3_img,
    image_4:p3_4_img,
    new_price: 1299,
    old_price: 1599,
    colors: ["White", "Black", "Pink","Brown"],
    product_desc:"From airplane noise to people’s voices, our WH-1000XM5 wireless headphones with multiple microphone noise cancelling keep out more high and mid frequency sounds than ever. And with Auto NC Optimizer, noise cancelling is automatically optimised based on your wearing conditions and environment",
    product_desc_1:"The WH-1000XM5 Wireless Noise Cancelling Headphones offer superior sound quality with advanced noise-cancellation technology. Designed for all-day comfort, these headphones deliver crystal-clear audio and deep bass, making them perfect for music lovers and professionals alike. With a sleek, modern design and up to 30 hours of battery life, the WH-1000XM5 is ideal for those who demand the best in wireless audio performance.",
  },
  {
    id: 5,
    name: "Logitech: G102 Gaming Mouse",
    category: "mouse",
    image_1: p5_1_img,
    image_2:p5_2_img,
    image_3:"",
    image_4:"",
    new_price: 69,
    old_price: 89,
    colors: ["Black","Purple"],
    product_desc:"Make the most of play time with G102—a gaming mouse in a variety of vibrant colors. With LIGHTSYNC technology, a gaming-grade sensor and a classic 6-button design, you’ll light up your game and your desk",
    product_desc_1:"Get accurate cursor tracking and responsive performance thanks to a gaming-grade sensor. With adjustable sensitivity from 200-8,000 DPI, pick the right level that fits your play preference. Use Logitech G HUB software to program up to 5 presets.",
  },
];

export default data_product;
