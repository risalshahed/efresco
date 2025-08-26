import Hero from './components/Hero'
import Founder from './components/Founder'
import Marquee from './components/Marquee'
import TopProducts from './components/TopProducts'
import DayDeal from './components/DayDeal'
import ClassicProducts from './components/ClassicProducts'
import MarqueeTestimony from './components/Marquee-Testimony'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import FoodSlider from './components/FoodSlider'
import Products from './components/Products/Products'

export default function Home() {
  return (
    <div>
      <Hero />
      <Founder />
      <Marquee />
      <TopProducts />
      <Products />
      <Marquee />
      <DayDeal />
      <ClassicProducts />
      <MarqueeTestimony />
      <Testimonials />
      <Services />
      <Subscribe />
      <FoodSlider />
    </div>
  )
}