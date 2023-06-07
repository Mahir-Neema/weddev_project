import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="navbar-no-shadow wf-section">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          role=""
          banner
          className="navbar-no-shadow-container w-nav"
        >
          <div className="container-20">
            <div className="navbar-wrapper-three-2">
              <a href="#" className="navbar-brand-three-2 w-nav-brand">
                <img src="images/logo.png" loading="lazy" alt="" className="image-2" />
              </a>
              <nav role="navigation" className="nav-menu-wrapper-three-2 w-nav-menu">
                <div className="nav-menu-three-2">
                  <ul role="list" className="nav-menu-block-2 w-list-unstyled">
                    <li>
                      <a href="/" aria-current="page" className="nav-Link-2 w--current">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/trainers" className="nav-link-2">
                        Our Trainers
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="menu-button-2 w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="main-page wf-section">
        <div className="container-14 w-container">
          <div
            data-delay="2000"
            data-animation="cross"
            className="slider-2 w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="true"
            data-autoplay-limit="0"
            data-disable-swipe="true"
            data_nav_spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="mask-4 w-slider-mask">
              <div className="slide w-slide"></div>
              <div className="slide-2 w-slide"></div>
              <div className="slide-3 w-slide"></div>
              <div className="slide-5 w-slide"></div>
              <div className="slide-6 w-slide"></div>
              <div className="slide-7 w-slide"></div>
              <div className="slide-8 w-slide"></div>
            </div>
            <div className="w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-slider-nav w-slider-nav-invert w-shadow w-round"></div>
          </div>
        </div>
        <div className="container-15 w-container">
          <div className="div-block-20"></div>
          <div className="text-block-10"></div>Judo Pal<br />
        </div>
        <div className="div-block-20"></div>
        <div className="text-block-20">
          <strong className="bold-text"></strong>Prepare for the Unexpected
          <br />
          Transform your mindset
          <br />
          Embrace a new era of self-defense
        </div>
      </section>
      <section className="what-we-offer wf-section">
        <h3 className="heading-2">what we Offer</h3>
        <div className="container-17 w-container">
          <div
            data-delay="4000"
            data-animation="slide"
            className="slider-3 w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="true"
            data-autoplay-limit="0"
            data_nav_spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="mask-2 w-slider-mask">
              <div className="slide-1 w-slide">
                <div className="div-block-31">
                  <p className="paragraph-7">
                    Book a 1:1 Session with trainer <em className="Italic-tex-13">(online/offline)</em>
                  </p>
                </div>
              </div>
              <div className="slide-11 w-slide">
                <div className="div-block-31">
                  <p className="paragraph-7">
                    Consultancy Call <em className="italic-text-13">(with Experts)</em>
                  </p>
                </div>
              </div>
              <div className="slide-10 w-slide">
                <div className="div-block-31">
                  <p className="paragraph-7">
                    Book a Group Session <em className="Italic-text-13">(For Organization)</em>
                  </p>
                </div>
              </div>
              <div className="s11de-12 w-slide">
                <div className="div-block-31">
                  <p className="paragraph-7">Online Course</p>
                </div>
              </div>
            </div>
            <div className="w-slider-arrow-left">
              <div className="icon w-icon-slider-left"></div>
            </div>
            <div className="w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="w-slider-nav w-slider-nav-invert w-shadow w-round"></div>
          </div>
        </div>
      </section>
      <section className="what-makes-us-the-best w-section">
        <h1 className="centered-heading-3 margin-bottom-32px">what makes us the best</h1>
        <div className="container-18 w-container">
          <div
            data-delay="4000"
            data-animation="slide"
            className="slider-4 w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data_nav_spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="mask-3 w-slider-mask">
              <div className="slide-16 w-slide">
                <div className="div-block-33">
                  <p className="paragraph-8">Top Trainers in India</p>
                </div>
              </div>
              <div className="slide-13 w-slide">
                <div className="div-block-33">
                  <p className="paragraph-8">Customized, AI-based Curriculum</p>
                </div>
              </div>
              <div className="slide-14 w-slide">
                <div className="div-block-33">
                  <p className="paragraph-8">Mindset + Psychology training</p>
                </div>
              </div>
              <div className="slide-15 w-slide">
                <div className="div-block-33">
                  <p className="paragraph-8">Modern, Scientific Techniques</p>
                </div>
              </div>
            </div>
            <div className="w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="w-slider-nav w-slider-nav-invert w-shadow w-round"></div>
          </div>
        </div>
      </section>
      <section className="about-us-home w-section">
        <div className="container-2">
          <h3 className="heading-2">About Us</h3>
          <div className="div-block-34"></div>
          <p className="paragraph-9">
            We are IIT Graduates passionate about making self defense more accessible to one and all. <br />
            <br />
            We wish to increase awareness and empowering individuals across India to master the art of self-defense
            and equipping them to conquer high-pressure situations through comprehensive mental and physical training.‍
            <br />
            <br />
            At Judo Pal, we have handpicked top trainers in India and worked with them to create a structure which can
            be customized based on users attributes.
          </p>
        </div>
      </section>
      <section className="hero-heading-right-2 wf-section">
        <h1 className="heading-5">Contact Us</h1>
        <div className="container-4">
          <div className="div-block-36">
            <div className="mobile-number">+91 8872038318</div>
          </div>
          <div className="div-block-35">
            <a href="tel:+918872038318" className="button w-button">
              Book a Call
            </a>
            <a href='#' className="button w-button">
              Raise a Qary
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home