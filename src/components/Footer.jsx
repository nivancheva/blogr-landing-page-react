import logo from '../images/logo.svg';
import './Footer.css'

const products = [
    {text:'Overview', url: "#"},
    {text:'Pricing', url: "#"},
    {text:'Marketplace', url: "#"},
    {text:'Features', url: "#"},
    {text:'Integrations', url: "#"}
];

const companyInfo = [
    {text:'About', url: "#"},
    {text:'Team', url: "#"},
    {text:'Blog', url: "#"},
    {text:'Careers', url: "#"}
];

const connections = [
    {text:'Contact', url: "#"},
    {text:'Newsletter', url: "#"},
    {text:'LinkedIn', url: "#"}
];

export default function Footer() {
    return (
        <footer className='footer-wrapper'>
            <div className='container footer'>
                <img className='footer-logo' src={logo} alt='logo'/>
                <div>
                    <h4>Product</h4>
                    <ul>
                        {products.map((product, productIdx) => {
                            return (
                                <li key={productIdx}><a className='footer_links' href={product.url}>{product.text}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        {companyInfo.map((company, companyIdx) => {
                            return (
                                <li key={companyIdx}><a className='footer_links' href={company.url}>{company.text}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <ul>
                        {connections.map((connect, connectIdx) => {
                            return (
                                <li key={connectIdx}><a className='footer_links' href={connect.url}>{connect.text}</a></li>
                            )
                        })}
                    </ul>
                </div>
           </div>
        </footer>
    )
}