import laptopImgDesktop from '../images/illustration-laptop-desktop.svg';
import laptopImgMobile from '../images/illustration-laptop-mobile.svg';
import './SectionThree.css';

export default function SectionThree() {
    return (
        <div className='section-three-wrapper container'>
            <picture>
                <source srcSet={laptopImgDesktop} media="(min-width: 800px)" />
                <img className='laptopImg' src={laptopImgMobile}/>
            </picture>

            <div className='laptop-section'>
                <div className='laptop-section-info'>
                    <h3>Free, open, simple</h3>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div className='laptop-section-info'>
                    <h3>Powerful tooling</h3>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    )
}