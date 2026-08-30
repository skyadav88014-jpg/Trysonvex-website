import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import DentalDemo from '@/demos/dental/DentalDemo';
import GymDemo from '@/demos/gym/GymDemo';
import RestaurantDemo from '@/demos/restaurant/RestaurantDemo';
import HotelDemo from '@/demos/hotel/HotelDemo';
import RealEstateDemo from '@/demos/realestate/RealEstateDemo';
import EcommerceDemo from '@/demos/ecommerce/EcommerceDemo';
import SalonDemo from '@/demos/salon/SalonDemo';
import EducationDemo from '@/demos/education/EducationDemo';
import CreativeAgencyDemo from '@/demos/agency/CreativeAgencyDemo';
import LocalBusinessDemo from '@/demos/local/LocalBusinessDemo';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/demos/dental" element={<DentalDemo />} />
        <Route path="/demos/gym" element={<GymDemo />} />
        <Route path="/demos/restaurant" element={<RestaurantDemo />} />
        <Route path="/demos/hotel" element={<HotelDemo />} />
        <Route path="/demos/real-estate" element={<RealEstateDemo />} />
        <Route path="/demos/ecommerce" element={<EcommerceDemo />} />
        <Route path="/demos/salon" element={<SalonDemo />} />
        <Route path="/demos/education" element={<EducationDemo />} />
        <Route path="/demos/creative-agency" element={<CreativeAgencyDemo />} />
        <Route path="/demos/local-business" element={<LocalBusinessDemo />} />
      </Routes>
    </>
  );
}
