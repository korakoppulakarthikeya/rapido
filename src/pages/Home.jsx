import "../style/home.css";

const Home = () => {
  return (
    <>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-left">

          <h1>
            India’s #1 <br />
            Ride-hailing App
          </h1>

          <p>
            Quick, Affordable rides at your doorstep
          </p>

          <input
            type="text"
            placeholder="Enter Pickup Location"
          />

          <input
            type="text"
            placeholder="Enter Drop Location"
          />

          <button>Book Ride</button>

        </div>

        <div className="hero-right">

          <img
            src="https://content-cus.rapido.bike/image/banner_image_new.png"
            alt=""
          />

        </div>

      </section>


      {/* SERVICES */}

      <section className="services-section">

        <div className="heading">
          <h1>Our Services</h1>
          <div className="line"></div>
        </div>

        <div className="services-container">

          <div className="service-card">

            <div className="service-left">

              <h2>Bike-Taxi</h2>

              <p>
                Quick bike rides for daily travel.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/serviceimage.svg"
              alt=""
            />

          </div>


          <div className="service-card">

            <div className="service-left">

              <h2>Auto</h2>

              <p>
                Affordable auto rides nearby.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/auto_service.png"
              alt=""
            />

          </div>


          <div className="service-card">

            <div className="service-left">

              <h2>Cab</h2>

              <p>
                Comfortable cab rides anytime.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/cab_service.png"
              alt=""
            />

          </div>


          <div className="service-card">

            <div className="service-left">

              <h2>Parcel</h2>

              <p>
                Send packages safely & quickly.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/parcel_service.png"
              alt=""
            />

          </div>


          <div className="service-card">

            <div className="service-left">

              <h2>Travel and Stay</h2>

              <p>
                Free cancellation on travel booking.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/travel_service.png"
              alt=""
            />

          </div>


          <div className="service-card">

            <div className="service-left">

              <h2>Metro Ticket</h2>

              <p>
                Book tickets online instantly.
              </p>

            </div>

            <img
              src="https://content-cus.rapido.bike/image/metro_service.png"
              alt=""
            />

          </div>

        </div>

      </section>



      {/* OFFER SECTION */}

      <section className="offer-section">

        <div className="heading">
          <h1>What we offer</h1>
          <div className="line"></div>
        </div>

        <div className="offer-container">

          <div className="offer-card">

            <img
              src="https://content-cus.rapido.bike/image/image.png"
              alt=""
            />

            <h2>Quick Pickup</h2>

            <p>
              Pickup within minutes that help you save time everyday.
            </p>

          </div>


          <div className="offer-card">

            <img
              src="https://content-cus.rapido.bike/image/bestfare_offer.png"
              alt=""
            />

            <h2>Best Fares</h2>

            <p>
              Affordable prices designed for everyday rides.
            </p>

          </div>


          <div className="offer-card">

            <img
              src="https://content-cus.rapido.bike/image/nevertofar_offer.png"
              alt=""
            />

            <h2>Never Too Far</h2>

            <p>
              Present across cities and towns.
            </p>

          </div>

        </div>

      </section>



      {/* EARN SECTION */}

      <section className="earn-section">

        <div className="earn-image">

          <img
            src="https://content-cus.rapido.bike/image/showcase_image.png"
            alt=""
          />

        </div>

        <div className="earn-content">

          <div className="heading">
            <h1>Earn with Rapido</h1>
            <div className="line"></div>
          </div>

          <p>
            Become a Rapido Captain. Ride when you want,
            work how you want, and earn on your own terms.
          </p>

          <button>
            Start Earning →
          </button>

        </div>

      </section>



      {/* DOWNLOAD SECTION */}

      <section className="download-section">

        <div className="heading center">
          <h1>Download Now</h1>
          <div className="line"></div>
        </div>

        <div className="download-container">

          <div className="download-card">

            <img
              src="https://content-cus.rapido.bike/image/dowloadnow_image.svg"
              alt=""
            />

            <div>

              <h2>
                Bike-Taxi, <br />
                Auto & Cabs
              </h2>

            </div>

          </div>


          <div className="download-card">

            <img
              src="https://content-cus.rapido.bike/image/rapido_captain.png"
              alt=""
            />

            <div>

              <h2>
                Drive & <br />
                Earn
              </h2>

            </div>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">
          rapido
        </div>

        <div className="footer-content">

          <div className="footer-links">

            <p>Home</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Safety</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Privacy Policy</p>

          </div>


          <div className="footer-links">

            <p>Customer Terms - Bike Taxi</p>
            <p>Customer Terms - Cabs and Auto</p>
            <p>Corporate Affairs</p>
            <p>Captain Terms - Bike Taxi</p>
            <p>Captain Terms - Cabs and Auto</p>

          </div>

        </div>

        <hr />

        <p className="copy">
          ©️ 2026 Rapido Transportation. All rights reserved.
        </p>

      </footer>

    </>
  );
};

export default Home;