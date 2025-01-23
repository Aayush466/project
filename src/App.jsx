import { useState } from 'react'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Search from './components/Search'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <ImageSlider />
      <Search />
      <AboutUs />
      <ContactUs />
      <Footer/>
      {/* <h1>hello </h1> */}
      {/* https://www.figma.com/community/file/1159041176208677762/medicine-manufacturing-company-website */}
    </>
  )
}

export default App
