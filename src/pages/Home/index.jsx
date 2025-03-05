import NewLetters from '@/components/NewLetters'
import Banner from '@/components/Banner'
import Products from '@/components/Products'
import Pieces from '@/components/Pieces'
// import BannerImage3 from '@/assets/images/shop_banner_img11.png'
import BannerImage33 from '@/assets/images/BannerImage3.avif'
import Loader from '@/utils/loader'

function Home() {
  return (
    <>
      <Loader />
      <Banner />

      <div className="main_content">
        {/* Peoducts part */}
        <Products />

        {/* <!-- START SECTION BANNER -->  */}
        <div className="section pb_20 small_pt">
          <div className="#">
            <div className="row">
              <div className="col-12">
                <div className="sale-banner mb-3 mb-md-4">
                  <a className="hover_effect1" href="#">
                    <img src={BannerImage33} alt="shop_banner_img11" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION BANNER --> */}

        <Pieces />

        <NewLetters />
      </div>
    </>
  )
}

export default Home
