import React from "react"
import "./Hero.css"
import { useLocation } from "react-router-dom"
import Heading from "../../../common/heading/Heading"

const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-sdp'>
        <div className='container '>
        <div className='row yt'>
          <iframe width="550" height="315" src="https://www.youtube.com/embed/yWS_EKyojV0?si=DUcmHdlnxoYZDGvt"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='OPTIMIZE CURRENT WINDOWS LICENSES TO CUT COSTS BEFORE MIGRATING TO AWS' />
            <div className='button'>
              <button className='primary-btn'>
                Claim Exclusive Offer <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
       
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
