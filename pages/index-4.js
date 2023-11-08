import Navbar from '../components/_App/Navbar';
import Banner from '../components/HomeFour/Banner';
import Destinations from '../components/Common/Destinations';
import ListingAreaTwo from '../components/Common/ListingAreaTwo';
import CategoryTwo from '../components/Common/CategoryTwo';
import HowItWorks from '../components/Common/HowItWorks';
import Footer from '../components/_App/Footer';

const Index4 = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Destinations titleTwo={true}/>
      
      <div className="pb-100">
        <ListingAreaTwo />
      </div>

      <div className="bg-f9f9f9">
        <CategoryTwo titleTwo={true} />
      </div>

      <div className="pb-100">
        <ListingAreaTwo titleTwo={true} />
      </div>

      <HowItWorks bgColor="bg-f9f9f9" />

      <Footer />
    </>
  );
};

export default Index4;
