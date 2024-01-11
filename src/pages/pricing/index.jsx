import Navbar from "../../components/Navbar";
import PricingBanner from "../../components/PricingBanner";
import Footer from "../../components/footer";


const Pricing = () => {

    return(
        <div className="pricing">
            <Navbar />
            <div className="page-header">
                <h2>Pricing</h2>
            </div>
            <PricingBanner />
            <Footer />
        </div>
    )
}

export default Pricing;
