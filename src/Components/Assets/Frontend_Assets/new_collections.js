
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

import p4_1_img from "./product_4_1.png";

import p5_1_img from "./product_5_1.jpg";
import p5_2_img from "./product_5_2.webp";

import p6_1_img from "./product_6_1.webp";
import p6_2_img from "./product_6_2.webp";

import p7_1_img from "./product_7_1.webp";

import p8_1_img from "./product_8_1.webp";
import p8_2_img from "./product_8_2.webp";
import p8_3_img from "./product_8_3.webp";
import p8_4_img from "./product_8_4.webp";

let new_collections = [
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
    id: 4,
    name: "Logitech: MX Mechanical Mini for Mac",
    category: "keyboard",
    image_1: p4_1_img,
    image_2:"",
    image_3:"",
    image_4:"",
    new_price: 859,
    old_price: 959,
    colors: ["Black"],
    product_desc:"Unleash your potential with a combination of MX solutions that work best for you. Whether you're dedicated to building your most productive setup, are a creative professional, are always on the go, or are mindful of your physical wellbeing.",
    product_desc_1:"EasyThe Logitech MX Mechanical Mini for Mac is a compact, high-performance keyboard designed specifically for Mac users. Featuring mechanical keys for a satisfying and responsive typing experience, this keyboard is perfect for professionals who demand precision and speed. Its minimalist design saves desk space, while the backlit keys ensure visibility in low-light environments. The MX Mechanical Mini offers seamless Bluetooth connectivity and compatibility with macOS, making it an ideal choice for those who value both functionality and style in their workspace. Switch Keys: Easy-switch keys to connect up to three devices and easily switch between them. Sensor: Hand proximity sensor activated backlighting Auto-adjust ambient light sensor",
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
  {
    id: 6,
    name: "Logitech: PRO X SUPERLIGHT 2",
    category: "mouse",
    image_1: p6_1_img,
    image_2:p6_2_img,
    image_3:"",
    image_4:"",
    new_price: 689,
    old_price: 728,
    colors: ["Black","Pink"],
    product_desc:"The next evolution of our championship-winning mouse. Meet the new weapon of choice for the world’s top esports athletes.",
    product_desc_1:"Introducing the next evolution of a pro gaming icon—now faster and more precise. Our championship-winning 60g gaming mouse was designed in collaboration with the world’s leading pro gamers to break down any barrier between you and the win."
  },
  {
    id: 7,
    name: "Logitech: G304 LIGHTSPEED Wireless Gaming Mouse",
    category: "mouse",
    image_1: p7_1_img,
    image_2:"",
    image_3:"",
    image_4:"",
    new_price: 129.9,
    old_price: 245,
    colors: ["Black"],
    product_desc:"LIGHTSPEED wireless gaming mouse designed for serious performance with latest technology innovations. Impressive 250-hour battery life. Now in a variety of vibrant colors.",
    product_desc_1:"G305 is a LIGHTSPEED wireless gaming mouse designed for serious performance with latest technology innovations at an affordable price point. Now in a variety of vibrant colors.",
  },
  {
    id: 8,
    name: "Logitech: Pro X Superlight Wireless Gaming Mouse",
    category: "mouse",
    image_1: p8_3_img,
    image_2:p8_2_img,
    image_3:p8_1_img,
    image_4:p8_4_img,
    new_price: 359,
    old_price: 690,
    colors: ["Black","White","Pink","Red"],
    product_desc:"Less than 63 grams. Advanced low-latency LIGHTSPEED wireless. Sub-micron precision with HERO 25K sensor. Remove all obstacles with our lightest and fastest PRO mouse ever.",
    product_desc_1:"Remove all obstacles in the way of winning with our lightest and fastest PRO mouse ever. The new weapon of choice for the world’s top esports professional athletes, it weighs less than 63 grams and delivers near frictionless glide. PRO X SUPERLIGHT continues our design philosophy of ZERØ OPPOSITION—our commitment to remove all obstacles to create the purest possible connection between the player and the game.",
  },
];

export default new_collections;
