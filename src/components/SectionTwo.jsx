import './SectionTwo.css';
import imgPhones from '../images/illustration-phones.svg'

export default function sectionTwo() {
    return (
        <div className='sectionTwo-wrapper'>
            <div className='phones-section container'>
                <div className='sectionTwo-img'>
                    <img className='phones' src={imgPhones}/>
                </div>
                <div className='sectionTwo-info'>
                    <h2>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </div>
        
    )
}