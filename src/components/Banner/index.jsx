// import BannerImage11 from '@/assets/images/banner16.jpg'
// import BannerImage22 from '@/assets/images/banner17.jpg'
// import BannerImage3 from '@/assets/images/banner18.jpg'
import BannerImage1 from '@/assets/images/bannerrevu1.jpg'
import BannerImage2 from '@/assets/images/bannerrevu2.jpg'

export default function Banner() {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade light_arrow"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item background_bg active"
            style={{ backgroundImage: `url(${BannerImage1})` }}
          >
            <div className="banner_slide_content banner_content_inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-10">
                    <div className="banner_content overflow-hidden">
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        E-Bikes, E-Mountainbike
                      </h2>
                      <h5
                        className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Profitieren Sie heute von über{' '}
                        <span className="text_default">50%</span> Rabatt!
                      </h5>
                      <a
                        className="btn btn-fill-out text-uppercase d-none d-md-inline-block"
                        href="/shop"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Jetzt kaufen
                      </a>

                      <a
                        className="btn btn-fill-out text-uppercase d-md-none"
                        href="shop"
                      >
                        Jetzt kaufen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item background_bg"
            style={{ backgroundImage: `url(${BannerImage2})` }}
          >
            <div className="banner_slide_content banner_content_inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-10">
                    <div className="banner_content overflow-hidden">
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        Freestyle X-Limit Scooter
                      </h2>
                      <h5
                        className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Profitieren Sie heute von über{' '}
                        <span className="text_default">50%</span> Rabatt!
                      </h5>
                      <a
                        className="btn btn-fill-out staggered-animation text-uppercase"
                        href="shop"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Jetzt kaufen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <i className="ion-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <i className="ion-chevron-right"></i>
        </a>
      </div>
    </div>
  )
}
