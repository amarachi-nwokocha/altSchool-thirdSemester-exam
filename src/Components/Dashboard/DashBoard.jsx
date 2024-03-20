import About from "./About"
import Cards from "./Cards"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import People from "./People"
import Reviews from "./Reviews"
import Sec3 from "./Sec3"

const DashBoard = () => {
  return (
    <div className=" font-dmsans">
        <Navbar />
        <Hero />
        <About />
        <Sec3 />
        <Cards />
        <Reviews />
        <People />
        <Footer />
    </div>
  )
}

export default DashBoard
