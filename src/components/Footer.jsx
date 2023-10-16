import logo from '../images/logo.svg';

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
]

const connections = [
    {text:'Contact', url: "#"},
    {text:'Newsletter', url: "#"},
    {text:'LinkedIn', url: "#"}
]

export default function Footer() {
    return (
        <div>
           <img src={logo} alt='logo'/>
           <div>
                <h3>Product</h3>
                <ul>
                    {products.map((product, productIdx) => {
                        return (
                            <li key={productIdx}><a href={product.url}>{product.text}</a></li>
                        )
                    })}
                </ul>
           </div>
           <div>
                <h3>Company</h3>
                <ul>
                    {companyInfo.map((company, companyIdx) => {
                        return (
                            <li key={companyIdx}><a href={company.url}>{company.text}</a></li>
                        )
                    })}
                </ul>
           </div>
           <div>
                <h3>Connect</h3>
                <ul>
                    {connections.map((connect, connectIdx) => {
                        return (
                            <li key={connectIdx}><a href={connect.url}>{connect.text}</a></li>
                        )
                    })}
                </ul>
           </div>
        </div>
    )
}