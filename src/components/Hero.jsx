import HeroImg from '../assets/icon.webp';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Hero = () => {
    const config  = {
        subtitle: 'Im a Full-stack developer ',
        social: {
            twitter: 'https://twitter.com/',
            instagram:'https://www.instagram.com/bea_itz.nabii?igsh=MWRjN2V0dHB4eWx2ZQ==',
            linkedin: 'https://www.linkedin.com/in/nabila-begam-/',
            WhatsApp:'https://Wa.me/+916383119827'

        }
    }


    return (<section className='flex flex-col md:flex-row px-5 py-32 background-white  '>
       <div className='md:w-1/2 relative left-20  flex flex-col'>
       <h1 className="text-black text-6xl  font-hero-font">
      Hii, <br />
      I'm <span className="text-purple-800 ">N</span>abi<span className="text-purple-800">l</span>a

                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
  <a href={config.social.twitter} className='pr-5' style={{ color: 'black', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#9e65cf'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
    <AiOutlineTwitter size={40} />
  </a>
  <a href={config.social.instagram} className='pr-5' style={{ color: 'black', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#9e65cf'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
    <AiOutlineInstagram size={40} />
  </a>
  <a href={config.social.linkedin} className='pr-5' style={{ color: 'black', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#9e65cf'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
    <AiOutlineLinkedin size={40} />
  </a>
  <a href={config.social.WhatsApp} style={{ color: 'black', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#9e65cf'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
    <AiOutlineWhatsApp size={40} />
  </a>
</div>

       </div>
       <img className='md:w-1/3  custom-img' src={HeroImg} alt="Hero" />
    </section>)
}
export default Hero