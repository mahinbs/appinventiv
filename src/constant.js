import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";
import fiveGHome from "./assets/images/portfolio/web-development/5ghomes.webp";
import coldCreek from "./assets/images/portfolio/web-development/cold-creekcap.webp";
import thinkReality from "./assets/images/portfolio/web-development/think-reality.webp";
import akashMegaMart from "./assets/images/portfolio/web-development/akash-mega-mart.webp";
import midwam from "./assets/images/portfolio/web-development/midwam.webp";
import akashApp from "./assets/images/portfolio/app-development/akash_mega_mart-app.webp";
import feelitApp from "./assets/images/portfolio/app-development/feelit_app.webp";
import klikomicsApp from "./assets/images/portfolio/app-development/klikomics.webp";
import autosnapApp from "./assets/images/portfolio/app-development/autosnap-app.webp";
import rentopApp from "./assets/images/portfolio/app-development/rentop.webp";
import aiArtGenerator from "./assets/images/portfolio/ai/AI Art Generator – Vyro AI.webp";
import findMyAiTool from "./assets/images/portfolio/ai/Find My AI Tool.png";
import musiclyAi from "./assets/images/portfolio/ai/Musicly – AI Music Generator.webp";
import nanoflow from "./assets/images/portfolio/blockchain/nanoflow.webp";
import padipal from "./assets/images/portfolio/blockchain/padipal.webp";
import cryptopadie from "./assets/images/portfolio/blockchain/cryptopadie.webp";
import bowling3d from "./assets/images/portfolio/game development/3d bowling game.webp";
import carStuntExtremeRacing from "./assets/images/portfolio/game development/car stunt extreme racing.webp";

// All assets served from /public/assets — no webpack processing, no bundle bloat
const logoImg = "/assets/images/logo/logo.png";
const whyChooseUsIcon1 = "/assets/images/ph_target-light.png";
const whyChooseUsIcon2 = "/assets/images/mage_light-bulb.png";
const whyChooseUsIcon3 = "/assets/images/tdesign_user-talk.png";
const whyChooseUsIcon4 = "/assets/images/healthicons_ui-secure-outline.png";
const whyChooseUsPng = "/assets/images/whychooseus-png.png";
const faqPng = "/assets/images/faq-character.png";
const appDevBanner = "/assets/images/app-dev-banner.jpg";
const webDevBanner = "/assets/images/web-landing-banner.jpg";
const webLandingAbout = "/assets/images/web-landing-about1.jpg";
const appLandingAbout = "/assets/images/app-landing-about.jpg";
const endlessOpportunitiesImg1 = "/assets/images/section-8-img-1.png";
const endlessOpportunitiesImg2 = "/assets/images/section-8-img-2.png";
const endlessOpportunitiesImg3 = "/assets/images/section-8-img-3.png";
const homeBannerVideo = "/assets/videos/home-banner.mp4";
const defaultBanner = "/assets/images/banner.jpg";
const aboutUsBanner = "/assets/images/aboutusbanner.jpg";
const contactusbanner = "/assets/images/contactusbanner1.jpg";
const aboutUsGridImg1 = "/assets/images/aboutus-png1.png";
const aboutUsGridImg2 = "/assets/images/aboutus-png2.png";
const aboutUsGridImg3 = "/assets/images/aboutus-png3.png";
const aboutUsGridImg4 = "/assets/images/aboutus-png4.png";
const aboutUsGridImg5 = "/assets/images/aboutus-png5.png";
const profileImg1 = "/assets/images/profileimg-1.jpg";
const profileImg2 = "/assets/images/profileimg-2.jpg";
const serviceswebdevelopment = "/assets/images/services/serviceswebdevelopment.jpg";
const serviceaidevelopment = "/assets/images/services/serviceaidevelopment.jpg";
const chatbotdevelopment = "/assets/images/services/chatbotdevelopment.jpg";
const datadevelopment = "/assets/images/services/datadevelopment.jpg";
const gamedevelopment = "/assets/images/services/gamedevelopment.jpg";
const blockchaindevelopment = "/assets/images/services/blockchaindevelopment.jpg";
const machinelearning = "/assets/images/services/machinelearning.jpg";
const clouddevelopment = "/assets/images/services/clouddevelopment.jpg";
const rpa = "/assets/images/services/rpa.jpg";
const aboutone = "/assets/images/aboutone.jpg";
const abouttwo = "/assets/images/abouttwo.jpg";
const aboutthree = "/assets/images/aboutthree.jpg";
const aboutfour = "/assets/images/aboutfour.jpg";
const aboutfive = "/assets/images/aboutfive.jpg";
const aboutusintroone = "/assets/images/aboutusintroone.jpg";
const aboutusintrotwo = "/assets/images/aboutusintrotwo.jpg";
const allbgimage = "/assets/images/allbgimage.jpg";
const bannerVid = "/assets/videos/banner.mp4";

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage, bannerVid
};

// company details
export const companyDetails = {
  phone: "+91 000000000",
  whatsapp: "91000000000",
  whatsappbox: "000000000",
  email: "artpur3@gmail.com",
  address: "Suite 401, 4th floor, Plot I-15, Sector 83, Alpha IT City, Sahibzada Ajit Singh Nagar, Punjab 140306",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://x.com/",
};

// website routes
export const routes = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Industries", path: "/industries" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
];

export const faqs = [
  {
    id: 1,
    question: "How do we begin our partnership?",
    answer:
      "Start with a discovery call where we analyze your requirements and map out a strategic path for your digital evolution.",
  },
  {
    id: 2,
    question: "Is deep tech expertise required on my end?",
    answer:
      "Not at all. We bridge the technical gap, allowing you to focus on your business goals while we engineer the underlying intelligence.",
  },
  {
    id: 3,
    question: "What is the typical development cycle?",
    answer:
      "Most specialized solutions reach a launchable state within 12-20 weeks, depending on the complexity of the custom integrations.",
  },
  {
    id: 4,
    question: "How do you validate a new concept?",
    answer:
      "We perform rigorous feasibility studies and market alignment checks to ensure your project has a solid foundation for long-term growth.",
  },
  {
    id: 5,
    question: "What specific technologies do you specialize in?",
    answer:
      "Our core focus spans predictive modeling, cognitive computing, automated forensics, and scalable cloud architectures tailored for modern enterprises.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Digital Commerce",
    icon: "/assets/images/icons/online-shopping.png",
    img: <CgWebsite />,
    description:
      "Driving digital commerce through intelligent storefronts that prioritize user lifecycle and automated inventory management, resulting in superior conversion rates and operational clarity.",
  },
  {
    id: 2,
    title: "Interactive Communities",
    img: <GoFileMedia />,
    icon: "/assets/images/icons/socialmedia.png",
    description:
      "Engineering interactive community spaces with smart content moderation and hyper-personalized discovery algorithms that foster organic growth and long-term user retention.",
  },
  {
    id: 3,
    title: "Conversion Engines",
    img: <TfiLayoutMediaRightAlt />,
    icon: "/assets/images/icons/landing-page.png",
    description:
      "Building specialized conversion engines that use behavior-tracking to dynamically adapt to visitor intent, ensuring your brand message resonates with every potential client.",
  },
  {
    id: 4,
    title: "Bespoke Web Solutions",
    img: <MdOutlineDashboardCustomize />,
    icon: "/assets/images/icons/software-development.png",
    description:
      "Constructing unique web-based tools that solve specific operational bottlenecks through clean architecture, modern UX, and seamless integration with your existing business workflows.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native iOS Apps",
    img: <FaAppStoreIos />,
    icon: "/assets/images/icons/ios-development.png",
    description:
      "Building premium mobile experiences that harness the full power of Apple's ecosystem, focusing on fluid animations, high performance, and ultra-secure data handling for your users.",
  },
  {
    id: 2,
    title: "Android Solutions",
    img: <IoLogoAndroid />,
    icon: "/assets/images/icons/android-development.png",
    description:
      "Crafting versatile mobile solutions optimized for a wide array of devices, ensuring consistent performance and deep system integration across the entire Android landscape.",
  },
  {
    id: 3,
    title: "Unified Multi-platform",
    img: <SiFlutter />,
    icon: "/assets/images/icons/flutter-development.png",
    description:
      "Deploying unified codebases that deliver native-grade experiences across both iOS and Android, significantly reducing time-to-market while maintaining uncompromising code quality.",
  },
  {
    id: 4,
    title: "Lean Hybrid Apps",
    img: <TbDeviceMobileCode />,
    icon: "/assets/images/icons/hybrid-app-development.png",
    description:
      "Delivering efficient, web-powered mobile applications that offer broad compatibility and rapid deployment cycles, perfectly suited for agile business requirements.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/web-app-development",
    title: "Agile Web & Mobile Systems",
    desc: "Building sophisticated digital interfaces that combine elegant design with high-performance backends for a seamless user journey across all devices.",
    detailContent:
      "We design and build mobile apps and websites that elevate your brand’s digital presence. From sleek designs to smooth user experiences, our team develops robust solutions that not only look great but also engage and retain your audience. Whether it’s a user-friendly app or a responsive website, we’ve got you covered. We focus on scalability, performance optimization, and seamless integration with your existing systems. Our approach begins with a deep understanding of your goals and audience to create a product that aligns with your vision. Using modern frameworks, we ensure your app or website is future-ready, secure, and adaptable to evolving user needs. Our development process is transparent and collaborative, allowing you to stay involved at every stage. From concept and wireframing to design, coding, testing, and launch, we handle all aspects of development with a commitment to excellence. Additionally, we offer ongoing support and maintenance to keep your digital presence fresh, relevant, and optimized for performance. Our ultimate aim is to deliver solutions that not only meet your current needs but also provide a strong foundation for growth and success in the competitive digital landscape.",
  },
  {
    id: 2,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    link: "/services/ai-development",
    title: "Cognitive Computing Solutions",
    desc: "Transform your operational efficiency with custom AI models. We help you unlock the hidden power of your data through predictive modeling and intelligent automation.",
    detailContent:
      "Our cognitive services help you make smarter decisions and automate processes that boost productivity. From intelligent data analysis to custom machine learning algorithms, we build solutions that enhance efficiency and uncover new growth opportunities. We specialize in natural language processing, image recognition, predictive modeling, and intelligent automation. Our team focuses on understanding your unique challenges and tailoring solutions that drive meaningful results. With advanced modeling, you can identify patterns in large datasets, forecast trends, and personalize customer experiences like never before. Our solutions seamlessly integrate into your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations. We use cutting-edge tools and technologies to build systems that are robust, secure, and scalable. Whether you are looking to implement intelligent chatbots, recommendation engines, fraud detection systems, or predictive analytics, our expertise ensures your business stays ahead of the curve.",
  },
  {
    id: 3,
    img: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
    link: "/services/chatbot-development",
    title: "Next-Gen Conversational Agents",
    desc: "Deploy automated support systems that understand context and intent. Our conversational agents provide 24/7 engagement while maintaining your brand's unique voice.",
    detailContent:
      "Keep your customers engaged and supported with custom automated agents that streamline communication. Our conversational interfaces are designed to answer complex inquiries, improve customer satisfaction, and provide real-time assistance 24/7, enhancing your service without added effort. From intent-based bots to advanced conversational agents, we ensure your system is equipped to handle diverse scenarios. Our development process involves understanding your business needs and crafting an agent that aligns with your brand’s tone and personality. We incorporate natural language processing (NLP) to make interactions more human-like and intuitive. Our systems are capable of integrating with various platforms, including websites, social media, and messaging apps, to provide a seamless user experience. We also focus on scalability, ensuring your support system can handle increasing traffic as your business grows.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    link: "/services/data-analytics",
    title: "Strategic Data Intelligence",
    desc: "Convert raw information into actionable strategic direction. Our analytical frameworks provide clarity on performance and identify untapped market opportunities.",
    detailContent:
      "We turn data into insights that drive results. Our data analytics and BI services empower you to make informed, data-driven decisions. We help you visualize key metrics, understand trends, and gain actionable intelligence that aligns with your business strategy. Using cutting-edge tools and methodologies, we identify patterns, detect anomalies, and provide intelligence-based recommendations for optimizing performance. Our solutions are tailored to meet your unique business needs, ensuring you gain a competitive edge in your industry. From real-time dashboards to predictive analytics, we help you stay ahead of market trends and customer demands. By integrating advanced data processing technologies, we enable you to harness the full potential of your data while ensuring security and compliance.",
  },
  {
    id: 5,
    img: <FaGamepad className="w-6 h-6" />,
    link: "/services/game-development",
    title: "Immersive Digital Experiences",
    desc: "Engineer captivating gaming worlds across all platforms. We handle everything from physics-based mechanics to intelligent NPC behaviors for maximum engagement.",
    detailContent:
      "Our development team transforms ideas into engaging digital experiences that captivate players. From character design to immersive storylines and detailed gameplay mechanics, we bring each element to life, creating games that resonate with audiences across platforms. We specialize in mobile, console, and PC development, ensuring each product is optimized for performance and player satisfaction. Our end-to-end services include concept design, intelligent prototyping, testing, and post-launch support, ensuring your project exceeds expectations at every stage. We use advanced technologies and frameworks to deliver high-quality graphics, smooth performance, and engaging gameplay. Our team focuses on understanding your vision and audience, tailoring each experience to meet your goals.",
  },
  {
    id: 6,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    link: "/services/blockchain-development",
    title: "Secure Distributed Ledgers",
    desc: "Harness the transparency of blockchain for enterprise security. We build immutable systems for smart contracts and decentralized asset management.",
    detailContent:
      "Distributed ledger technology is revolutionizing industries, and we’re here to help you harness its potential. Our blockchain development services empower your business with secure, transparent, and decentralized systems that drive trust and efficiency. Whether you need a smart contract platform, or a decentralized app (dApp), we provide end-to-end development tailored to your goals. We specialize in various blockchain frameworks, including Ethereum, Hyperledger, and Binance Smart Chain, ensuring the right solution for your needs. Our process begins with understanding your requirements and designing a system architecture that aligns with your business objectives. We then implement scalable, secure, and efficient solutions with a strong emphasis on performance and reliability.",
  },
  {
    id: 7,
    img: <GiVendingMachine className="w-6 h-6" />,
    link: "/services/machine-learning",
    title: "Adaptive Learning Systems",
    desc: "Develop models that evolve alongside your business data. Our expertise focuses on self-optimizing algorithms that solve complex operational challenges.",
    detailContent:
      "Advanced machine learning is a transformative technology that enables businesses to derive actionable insights and make smarter decisions. Our ML solutions are tailored to your unique needs, helping you unlock the potential of your data. We specialize in building custom algorithms for predictive analytics, recommendation engines, anomaly detection, and more. Our team uses advanced frameworks and tools like TensorFlow, PyTorch, and Scikit-learn to create models that learn and adapt as they process more data. Whether it’s analyzing customer behavior, optimizing supply chains, or automating complex processes, our solutions drive efficiency and innovation.",
  },
  {
    id: 8,
    img: <IoMdCloudDone className="w-6 h-6" />,
    link: "/services/cloud-computing",
    title: "Scalable Cloud Architecture",
    desc: "Modernize your infrastructure with resilient cloud environments. We ensure high availability and cost-efficiency for your distributed business systems.",
    detailContent:
      "Cloud computing provides businesses with flexible, scalable infrastructure. We help you migrate to the cloud or optimize your existing cloud systems with modern tools that increase efficiency, reduce costs, and improve scalability. Whether you’re looking for cloud storage, compute resources, or automated scaling, our cloud solutions are designed to meet your unique needs. Our team specializes in platforms like AWS, Google Cloud, and Microsoft Azure, leveraging the power of modern architecture to enhance security, monitoring, and performance optimization.",
  },
  {
    id: 9,
    img: <GiRobotLeg className="w-6 h-6" />,
    link: "/services/rpa",
    title: "Workflow Automation Engineering",
    desc: "Eliminate manual overhead with goal-oriented robotic integration. Achieve peak organizational velocity through error-free execution of repetitive tasks.",
    detailContent:
      "Workflow automation is revolutionizing how businesses handle repetitive tasks by automating processes to enhance efficiency and accuracy. Our integrated solutions free up your team to focus on higher-value tasks, allowing your organization to achieve greater productivity and operational excellence. We specialize in designing, developing, and deploying automation solutions tailored to your unique business processes. Using advanced tools like UiPath, Automation Anywhere, and Blue Prism, we create intelligent systems capable of handling tasks such as data entry, invoice processing, and customer support with high precision. Our process begins by identifying areas where automation can deliver the most value.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Visionary Engineering",
    desc: "We align your product roadmap with the latest technological shifts, ensuring your solution remains relevant and innovative.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Enterprise-Grade Reliability",
    desc: "Our delivery processes are rooted in industry best practices, ensuring high-quality, secure, and scalable code for your organization.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Future-Ready Architecture",
    desc: "We design systems for massive scale, ensuring your infrastructure can handle future data loads without structural compromises.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Actionable Data Insights",
    desc: "Leverage integrated analytical frameworks to measure performance and iterate based on real-world user feedback.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Partnership for Growth",
    desc: "Our commitment extends beyond the launch phase, providing continuous technical maturity and support for your expanding business.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Marcus Sterling",
    role: "Founder of UrbanLogic",
    desc: "“Partnering with Besoftware was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us refine user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Elena Vance",
    role: "Director at Meditech Systems",
    desc: "“The architectural solutions from Besoftware have completely transformed our operations. Their team helped us automate complex data processes, which has freed up our resources for strategic growth. The insights and predictive analytics they’ve provided have given us a clear competitive edge.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "Robert Chen",
    role: "Support Lead at CoreConnect",
    desc: "“The conversational agent that Besoftware developed for us has been a game-changer. It’s efficient, intuitive, and our users are more engaged than ever with the immediate response times. We’re seeing a significant drop in support tickets and a rise in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Sarah Jenkins",
    role: "CEO at RetailFlow Innovations",
    desc: "“Working with Besoftware on our analytical strategy was a high-value investment. Their experts transformed our raw datasets into actionable intelligence that has guided our recent expansion. We’ve already seen measurable results within the first quarter.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alexander Reed",
    role: "Product Lead at TitanSphere",
    desc: "“The gaming environment Besoftware built exceeded our technical expectations. From character mechanics to backend lobby management, every detail was handled with precision. Our player retention metrics have spiked significantly!”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monique Dubois",
    role: "CTO at SecureChain",
    desc: "“We were navigating the complexity of decentralized systems, and Besoftware provided the clarity we needed. They developed a secure, immutable ledger solution tailored to our unique compliance needs, giving our clients total confidence.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "David Lowell",
    role: "Head of Strategy at InsightIQ",
    desc: "“Thanks to Besoftware, we’ve integrated adaptive learning into our core platforms, providing a new dimension of insight into market behavior. Their hands-on approach and technical depth made the integration seamless.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Clara Jordan",
    role: "Ops Director at GlobalSystems",
    desc: "“The infrastructure modernization we received from Besoftware has been foundational. They took us from legacy hardware to a resilient cloud environment, allowing us to scale dynamically. It’s been a massive win for our technical team.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Ewan Wright",
    role: "Operations Lead at LogiStream",
    desc: "“Implementing advanced automation with Besoftware has redefined our day-to-day workflow. Critical tasks are now handled with zero error rates, allowing our staff to focus on higher-level logistics. The efficiency gains have been immediate and sustained.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: fiveGHome,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: coldCreek,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: thinkReality,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: akashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: midwam,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: fiveGHome,
    title: "5g Homes",
  },
  {
    id: 2,
    img: coldCreek,
    title: "Cold Creekcap",
  },
  {
    id: 3,
    img: thinkReality,
    title: "Think Reality",
  },
  {
    id: 4,
    img: akashMegaMart,
    title: "Akash Mega Mart",
  },
  {
    id: 5,
    img: midwam,
    title: "Midwam – Immersive Experience Design Company",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 6,
    img: akashApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 7,
    img: feelitApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 8,
    img: klikomicsApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 9,
    img: autosnapApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 10,
    img: rentopApp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const appPortfolioHomepage = [
  {
    id: 6,
    img: akashApp,
    title: "Akash Mega Mart Mobile App",
  },
  {
    id: 7,
    img: feelitApp,
    title: "FeelIt Mobile App",
  },
  {
    id: 8,
    img: klikomicsApp,
    title: "Klikomics Mobile App",
  },
  {
    id: 9,
    img: autosnapApp,
    title: "AutoSnap Mobile App",
  },
  {
    id: 10,
    img: rentopApp,
    title: "Rentop Bike and Car",
  },
];

export const aiPortfolio = [
  { id: 11, img: aiArtGenerator, title: "AI Art Generator - Vyro AI" },
  { id: 12, img: findMyAiTool, title: "Find My AI Tool" },
  { id: 13, img: musiclyAi, title: "Musicly - AI Music Generator" },
];

export const blockchainPortfolio = [
  { id: 14, img: nanoflow, title: "Nanoflow" },
  { id: 15, img: padipal, title: "Padipal" },
  { id: 16, img: cryptopadie, title: "Cryptopadie" },
];

export const gameDevelopmentPortfolio = [
  { id: 17, img: bowling3d, title: "3D Bowling Game" },
  { id: 18, img: carStuntExtremeRacing, title: "Car Stunt Extreme Racing" },
];

export const portfolioCategories = {
  webDevelopment: webPortfolioHomepage,
  appDevelopment: appPortfolioHomepage,
  ai: aiPortfolio,
  blockchain: blockchainPortfolio,
  gameDevelopment: gameDevelopmentPortfolio,
};

export const industriesWeServe = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Secure patient platforms, telemedicine systems, and analytics dashboards focused on compliance and better care outcomes.",
  },
  {
    id: 2,
    title: "Fintech",
    description:
      "Payment flows, fraud detection, and scalable transaction systems for digital banking and financial operations.",
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "High-conversion storefronts, product discovery engines, and automation for catalog and order lifecycle management.",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Learning portals, assessment workflows, and engagement tooling for schools, coaching businesses, and edtech products.",
  },
  {
    id: 5,
    title: "Logistics",
    description:
      "Real-time tracking, dispatch optimization, and integrated operational views for supply chain visibility.",
  },
  {
    id: 6,
    title: "Real Estate",
    description:
      "Lead management systems, property listing platforms, and digital experiences for brokers and developers.",
  },
  {
    id: 7,
    title: "Travel and Hospitality",
    description:
      "Booking flows, customer engagement tools, and data-driven service optimization for modern travel brands.",
  },
  {
    id: 8,
    title: "Media and Entertainment",
    description:
      "Content-rich platforms, streaming-ready interfaces, and interactive products that improve audience retention.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovative Culture",
    description:
      "We are committed to breaking technical boundaries and exploring new horizons in digital architecture. Our culture thrives on curiosity and the relentless pursuit of better, faster, and smarter ways to solve problems.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Strategic Alignment",
    description:
      "We partner deeply with our clients to ensure our technical solutions directly support specific business objectives. Every architectural choice we make is designed to move your bottom line and support long-term growth.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Unwavering Integrity",
    description:
      "Quality and reliability are built into our foundation. We take pride in delivering clean, enterprise-grade code that is resilient under pressure and fully transparent in its execution.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Purpose-Led Engineering",
    description:
      "We believe technology should be a force for clarity and efficiency. Our mission is to harness technical power to simplify complex workflows, elevate user experiences, and drive sustainable success.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Full-Lifecycle Mastery",
    description:
      "From the initial architectural design to global deployment and ongoing infrastructure management, we provide the steady hand and technical depth needed to navigate your entire digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
