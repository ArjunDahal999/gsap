
import Navbar from "./components/Navbar"
import HorizontalNav from "./components/HorizontalNav"
import AnimationBox from "./components/AnimationBox"
import BottomInfo from "./components/BottomInfo"
import CurrentTab from "./components/CurrentTab"


function App()
{
  return (
    <>
      <BottomInfo />
      <CurrentTab />
      <Navbar />
      <HorizontalNav />
      <AnimationBox />
    </>
  )
}

export default App
