import { CardType, HeroGrid, Install, Spark } from "../type/type";

 
 
  export const heroItems:HeroGrid[] = [
    { title: '🔥 Seamless Connections', description: 'Stay in touch with friends, family, and like-minded people with just a tap.' },
    { title: '📸 Share Your Story', description: 'Upload photos, videos, and updates to let the world know what’s happening in your life.' },
    { title: '💬 Real-Time Chat', description: 'Whether its a DM or a group conversation, connect instantly with smooth, lightning-fast messaging'},
    { title: '🔒 Privacy First', description: 'Your data, your control. We prioritize your privacy with world-class security.' },
    { title: '🌎 Discover & Explore', description: 'Find trending content, join communities, and follow pages that match your interests.' },
    { title: '💼 Grow Your Business', description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.' },
  ];

  export const sparkicon: Spark[] =[
        { title: "🎥 Short Videos & Reels", discription: "Share engaging, bite-sized content that keeps everyone entertained."},
        {title: "🔔 Smart Notifications", discription: "Stay updated on what matters without the noise."},
        {title: "👥 Interest-Based Communities", discription: "Join groups and discussions that match your passion."},     
  ];

  export const installicon: Install[] =[
    {tittle: "Download", discription: "Open Play Store or App Store"},
    {tittle: "Install App", discription: "The app will install automatically."},
    {tittle: "Ready to Use", discription: "Sign up or log in to start exploring!"},
  ]

 

export const card:CardType[]=[
    {
        descrition:'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
        Img:'/images/avatar31.png',
        name:'Emily R',
        country:'USA',
    },{
        descrition:'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online',
        Img:'/images/oliver-ragfelt-khV4fTy6-D8-unsplash 1.png',
        name:'Amit K',
        country:'India',
    },{
        descrition:`I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!`,
        Img:'/images/customer-1 1.png',
        name:'Sophie M',
        country:'UK',
    },{
        descrition:'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand',
        Img:'/images/avatar2 1.png',
        name:'Javier L',
        country:'Spain',
    },{
        descrition:'The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!',
        Img:'/images/olena-sergienko-XttWKETqCCQ-unsplash 1.png',
        name:'Lucas T',
        country:'Brazil',
    },{
        descrition:'I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense',
        Img:'/images/nrd-ZmmAnliy1d4-unsplash 1.png',
        name:'Nora S',
        country:'Canada',
    },
]