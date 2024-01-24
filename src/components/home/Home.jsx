import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Hsection from "./HSection"

const Home = () => {
  return (
    <>
      <Hero />
      <Hprice />
      <Hsection judul="In current traditional situation, there's some challenges that company are usually facing such as:"/>
      <Hblog />
      <Hsection judul="It's very important for you to understand the full picture before start the migration like business agility, the pace of innovation and digital infrastructure."/>
      <AboutCard />
      <HAbout />
      {/* <Testimonal /> */}
  
    </>
  )
}

export default Home
