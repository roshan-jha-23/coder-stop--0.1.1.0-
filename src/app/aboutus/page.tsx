import { FC } from 'react'
import Image from "next/image";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
interface pageProps {
  
}
const content = [
  {
    title:
      "Welcome to our corner of the internet, where passion meets purpose!",
    description:
      "We are a dynamic team dedicated to creating innovative solutions and delivering exceptional experiences. Our journey began with a simple idea: to make a positive impact through creativity, technology, and collaboration.",
  },
  {
    title: "Our Mission",
    description:
      "At the heart of everything we do is our mission to inspire and empower individuals and businesses to achieve their fullest potential. We believe in the power of innovation and strive to be at the forefront of industry trends, constantly evolving to meet the needs of our community.",
  },
  {
    title: "Our Values",
    description:
      "Innovation: We embrace change and continually seek new ways to solve problems and enhance experiences.\nIntegrity: We conduct our business with the highest ethical standards, ensuring trust and transparency in all our interactions.\nExcellence: We are committed to delivering the highest quality in everything we do, from our products to our customer service.\nCollaboration: We believe in the strength of teamwork and value the diverse perspectives that each member of our team brings to the table.",
  },
  {
    title: "Our Team",
    description:
      "Our team is a vibrant mix of creative minds, technical experts, and passionate professionals who are dedicated to making a difference. We come from diverse backgrounds, but we share a common goal: to drive innovation and deliver value to our clients and community.",
  },
  {
    title: "What We Do",
    description:
      "We specialize in a range of services designed to help you succeed. Whether it's through cutting-edge technology solutions, creative design, or strategic consulting, we are here to support you every step of the way. Our projects span across various industries, and our clients range from startups to established enterprises.",
  },
  {
    title: "Join Us",
    description:
      "We are always on the lookout for talented individuals who share our vision and values. If you are passionate about making a difference and eager to be part of a dynamic team, we would love to hear from you. Explore our career opportunities and join us on this exciting journey!",
  },
  {
    title: "Contact Us",
    description:
      "Have any questions or want to learn more about our services? Feel free to reach out to us. We are here to help and look forward to connecting with you.\nThank you for visiting our website. We are excited to have you with us and look forward to building something amazing together!",
  },
];
const page: FC<pageProps> = ({}) => {
  return (
    <div className="pt-10 mt-12">
      <h1 className='text-4xl text-semibold text-center'> About us</h1>
      <StickyScroll content={content} />
      
    </div>
  );
}

export default page