import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/Homepage";
import CustomisedWeddings from "./Pages/Customisedweddings";
import WeddingPlanner from "./Pages/Weddingplanner";
import ImageList1 from "./assets/gallery";
import SignIn from "./Pages/Loginpage";
import ContactUs from "./Pages/Contactus";
import BabyBday from "./Pages/Babybday";
import Photography from "./Pages/Photography";
import Booking from "./Pages/Booking";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/weddingplanner" element={<WeddingPlanner />} />
            <Route path="/customisedweddings" element={<CustomisedWeddings />} />
            <Route path="/gallery" element={<ImageList1 />} />
            <Route path="/babybday" element={<BabyBday />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/booking" element={<Booking/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }