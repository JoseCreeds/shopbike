import About from '@/assets/images/about.webp'
import About1 from '@/assets/images/about1.jpg'
import About2 from '@/assets/images/about2.jpg'
import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'

export default function AboutUs() {
  return (
    <>
      <Loader />
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div
        className="breadcrumb_section bg_gray page-title-mini"
        // style={{ backgroundImage: `url(${About1})` }}
      >
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>A propos</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active">A propos</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        {/* <!-- STAT SECTION ABOUT -->  */}
        <div className="section">
          <div className="container">
            <img
              src={About}
              alt="about"
              style={{ height: '60vh', width: 'inherit' }}
            />

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h5 style={{ textTransform: 'uppercase' }}>A propos de nous</h5>

              <p>
                <strong>{import.meta.env.VITE_SHOP_NAME}</strong> est un
                revendeur spécialisé dans le vélo qui vous propose{' '}
                <strong>
                  des conseils adaptés à vos besoins, un service convivial et
                  entretient
                </strong>{' '}
                et soigne{' '}
                <strong>
                  vos vélos dans son propre atelier de réparation de vélos
                </strong>{' '}
                .
              </p>
              <p>
                Ce sont les fondements de notre entreprise. Un{' '}
                <strong>large choix de vélos de marque</strong> est disponible
                dans notre magasin de vélos.
              </p>
              <p>
                Les deux-roues apportent plaisir et divertissement tout en
                contribuant à une activité physique saine. Nous nous sommes
                donné pour objectif de vous transmettre notre joie de faire du
                vélo et de faire de l&apos;exercice. Nous fournissons donc des
                conseils complets et professionnels, pouvons intégrer notre
                <strong>connaissance des dernières tendances</strong> en matière
                de vélos et de leurs accessoires dans la consultation et
                expliquer les avantages et les inconvénients de certains vélos.
                Cela nous permet de vous accompagner dans le choix du véhicule
                qui vous convient exactement.
              </p>

              <p>
                Notre magasin et atelier emploient uniquement des spécialistes
                qui peuvent vous offrir <strong>un service compétent</strong> .
                Des mécaniciens spécialisés remettront votre vélo sur les rails,
                effectueront les réparations et vous assisteront en cas de
                problème éventuel. Nos conseils ne s&apos;arrêtent pas après
                l&apos;achat, nous sommes toujours heureux de vous aider par la
                suite.
              </p>
            </div>

            <div style={{ marginTop: '100px', textTransform: 'uppercase' }}>
              <h4>NOTRE SERVICE POUR VOUS</h4>
              <h4>CONSEILS COMPÉTENTS</h4>
            </div>

            <div
              style={{ borderTop: '1px solid black', margin: '40px 26%' }}
            ></div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={About1} alt="about_img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h3>
                    Grâce aux conseils professionnels vous trouverez le vélo qui
                    vous convient
                  </h3>
                </div>
                <p style={{ fontSize: '14px' }}>
                  Nous offrons à nos clients une sélection de marques et de
                  modèles de premier ordre, associée aux conseils avisés de
                  notre personnel spécialement formé. Cela vous donnera toutes
                  les informations importantes sur les subtilités du marché
                  dynamique des vélos électriques dont vous avez besoin pour
                  prendre une décision d’achat véritablement éclairée.
                </p>
              </div>
            </div>

            <div
              style={{ borderTop: '1px solid black', margin: '40px auto' }}
            ></div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h3>Service certifié dans l&apos;atelier de qualité</h3>
                </div>
                <p style={{ fontSize: '14px' }}>
                  Tout comme la technologie du vélo s&apos;est développée
                  rapidement ces dernières années, les exigences imposées à
                  l&apos;atelier ont également augmenté. En tant que fiers
                  détenteurs du certificat « Atelier Qualité », nous travaillons
                  selon les normes les plus élevées et offrons à nos clients une
                  sécurité maximale et un service exceptionnel dans tous les
                  services de l&apos;atelier.
                </p>
                <p style={{ fontSize: '14px' }}>
                  Afin de répondre aux exigences et aux demandes élevées, nous
                  nous sommes soumis à des directives strictes qui sont
                  constamment contrôlées par le TüV Nord. Outre les tests
                  inopinés, cela comprend la formation continue de nos
                  collaborateurs et l&apos;échange au sein du plus grand réseau
                  européen de 960 revendeurs de vélos indépendants. De cette
                  manière, nous garantissons toujours une connaissance
                  actualisée des derniers développements en matière de
                  technologie du vélo ainsi qu&apos;une optimisation constante
                  des processus de l&apos;atelier.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={About2} alt="about_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION ABOUT -->  */}

        {/* <!-- START SECTION WHY CHOOSE -->  */}
        {/* <div className="section bg_light_blue2 pb_70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="heading_s1 text-center">
                  <h2>Why Choose Us?</h2>
                </div>
                <p className="text-center leads">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="icon_box icon_box_style4 box_shadow1">
                  <div className="icon">
                    <i className="ti-pencil-alt"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>Creative Design</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="icon_box icon_box_style4 box_shadow1">
                  <div className="icon">
                    <i className="ti-layers"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>Flexible Layouts</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="icon_box icon_box_style4 box_shadow1">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>Email Marketing</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- END SECTION WHY CHOOSE -->  */}

        {/* <!-- START SECTION TEAM --> */}
        {/* <div className="section pb_70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="heading_s1 text-center">
                  <h2>Our Team Members</h2>
                </div>
                <p className="text-center leads">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="team_box team_style1">
                  <div className="team_img">
                    <img src={Team1} alt="team_img1" />
                    <ul className="social_icons social_style1">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team_content">
                    <div className="team_title">
                      <h5>John Muniz</h5>
                      <span>Project Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team_box team_style1">
                  <div className="team_img">
                    <img src={Team2} alt="team_img2" />
                    <ul className="social_icons social_style4">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team_content">
                    <div className="team_title">
                      <h5>Alea Brooks</h5>
                      <span>Graphics Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team_box team_style1">
                  <div className="team_img">
                    <img src={Team3} alt="team_img3" />
                    <ul className="social_icons social_style4">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team_content">
                    <div className="team_title">
                      <h5>Anders Glick</h5>
                      <span>Software Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team_box team_style1">
                  <div className="team_img">
                    <img src={Team4} alt="team_img4" />
                    <ul className="social_icons social_style4">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team_content">
                    <div className="team_title">
                      <h5>Richard Tice</h5>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- END SECTION TEAM --> */}

        {/* <!-- START SECTION TESTIMONIAL --> */}
        {/* <div className="section bg_redon">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="heading_s1 text-center">
                  <h2>Our Client Say!</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div
                  className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2"
                  data-nav="true"
                  data-dots="false"
                  data-center="true"
                  data-loop="true"
                  data-autoplay="true"
                  data-items="1"
                >
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem.
                      </p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img
                          src="assets/images/user_img1.jpg"
                          alt="user_img1"
                        />
                      </div>
                      <div className="author_name">
                        <h6>Lissa Castro</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem.
                      </p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img
                          src="assets/images/user_img2.jpg"
                          alt="user_img2"
                        />
                      </div>
                      <div className="author_name">
                        <h6>Alden Smith</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem.
                      </p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img
                          src="assets/images/user_img3.jpg"
                          alt="user_img3"
                        />
                      </div>
                      <div className="author_name">
                        <h6>Daisy Lana</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem.
                      </p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img
                          src="assets/images/user_img4.jpg"
                          alt="user_img4"
                        />
                      </div>
                      <div className="author_name">
                        <h6>John Becker</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- END SECTION TESTIMONIAL --> */}

        {/* <!-- START SECTION SHOP INFO --> */}
        {/* <div className="section pb_70">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-shipped"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>Free Delivery</h5>
                    <p>
                      If you are going to use of Lorem, you need to be sure
                      there anything
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-money-back"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>30 Day Return</h5>
                    <p>
                      If you are going to use of Lorem, you need to be sure
                      there anything
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-support"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>27/4 Support</h5>
                    <p>
                      If you are going to use of Lorem, you need to be sure
                      there anything
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- END SECTION SHOP INFO --> */}
      </div>
      {/* <!-- END MAIN CONTENT --> */}

      <NewLetters />
    </>
  )
}
