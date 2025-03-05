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
                        Bénéficiez d&apos;une réduction de plus de{' '}
                        <span className="text_default">50%</span> off
                        Aujourd&apos;hui !
                      </h5>
                      {/* <a
                        className="btn btn-fill-out staggered-animation text-uppercase"
                        href="shop"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Acheter maintenant
                      </a> */}
                      <a
                        className="btn btn-fill-out text-uppercase d-none d-md-inline-block"
                        href="shop"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Acheter maintenant
                      </a>

                      <a
                        className="btn btn-fill-out text-uppercase d-md-none"
                        href="shop"
                      >
                        Acheter maintenant
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
                        Trottinette Freestyle X-Limit
                      </h2>
                      <h5
                        className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Bénéficiez d&apos;une réduction de plus de{' '}
                        <span className="text_default">50%</span> off
                        Aujourd&apos;hui !
                      </h5>
                      <a
                        className="btn btn-fill-out staggered-animation text-uppercase"
                        href="shop"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Acheter maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="carousel-item background_bg"
            style={{ backgroundImage: `url(${BannerImage3})` }}
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
                        Beat Headphone
                      </h2>
                      <h5
                        className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Taking your Viewing Experience to Next Level
                      </h5>
                      <a
                        className="btn btn-fill-out staggered-animation text-uppercase"
                        href="shop-left-sidebar.html"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
