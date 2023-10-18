import React from 'react';
import { useState, useCallback } from "react";
import MORE from "../components/MORE";
import PortalPopup from "../components/PortalPopup";
import Login from "../components/Login";
import CITY from "../components/CITY";
import FrameComponent from "../components/FrameComponent";
import MilesForm from "../components/MilesForm";
import CuratedCustomServicesContainer from "../components/CuratedCustomServicesContainer";
import FOOTER from "../components/FOOTER";
import PeriodicServiceForm from "../components/PeriodicServiceForm";
import CardContainer from "../components/CardContainer";
import Container from "../components/Container";
import Container1 from "../components/Container1";
import FormContainer from "../components/FormContainer";
import RatingCard from "../components/RatingCard";
import Property1Frame301 from "../components/Property1Frame301";
import StyleLight from "../components/StyleLight";
import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  const [isMOREOpen, setMOREOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCITYOpen, setCITYOpen] = useState(false);

  const onCuratedCustomServiceClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHowCarServiceClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRatingReviewsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkFAQsClick = useCallback(() => {
    // Please sync "FAQ" to the project
  }, []);

  const onLinkContactClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onLinkTermsClick = useCallback(() => {
    // Please sync "Terms" to the project
  }, []);

  const onLinkPrivacyClick = useCallback(() => {
    // Please sync "Privacy" to the project
  }, []);

  const onLinkOffersClick = useCallback(() => {
    // Please sync "Offers" to the project
  }, []);

  const onLinkReviewsClick = useCallback(() => {
    // Please sync "Reviews" to the project
  }, []);

  const onLinkScheduledClick = useCallback(() => {
    // Please sync "Perodic Service" to the project
  }, []);

  const onLinkACClick = useCallback(() => {
    // Please sync "Ac Service & Repair" to the project
  }, []);

  const onLinkCleaningClick = useCallback(() => {
    // Please sync "Detailing Service" to the project
  }, []);

  const onLinkLightsClick = useCallback(() => {
    // Please sync "wind Shield & Lights" to the project
  }, []);

  const onLinkDentingClick = useCallback(() => {
    // Please sync "Denting & Repair" to the project
  }, []);

  const onLinkCustomClick = useCallback(() => {
    // Please sync "Car Inspection" to the project
  }, []);

  const onLinkBatteriesClick = useCallback(() => {
    // Please sync "Batteries" to the project
  }, []);

  const onLinkTyresClick = useCallback(() => {
    // Please sync "Tyres & wheel" to the project
  }, []);

  const onLinkDetailingClick = useCallback(() => {
    // Please sync "Detailing Service" to the project
  }, []);

  const onLinkWindshieldsClick = useCallback(() => {
    // Please sync "wind Shield & Lights" to the project
  }, []);

  const onLinkBlogClick = useCallback(() => {
    // Please sync "Blogs" to the project
  }, []);

  const openMORE = useCallback(() => {
    setMOREOpen(true);
  }, []);

  const closeMORE = useCallback(() => {
    setMOREOpen(false);
  }, []);

  const openLogin = useCallback(() => {
    setLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setLoginOpen(false);
  }, []);

  const openCITY = useCallback(() => {
    setCITYOpen(true);
  }, []);

  const closeCITY = useCallback(() => {
    setCITYOpen(false);
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Batteries" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Ac Service & Repair" to the project
  }, []);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "Car Inspection" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    // Please sync "Denting & Repair" to the project
  }, []);

  const onGroupContainer11Click = useCallback(() => {
    // Please sync "Car Services & Spa" to the project
  }, []);

  const onGroupContainer13Click = useCallback(() => {
    // Please sync "Car Inspection" to the project
  }, []);

  const onGroupContainer16Click = useCallback(() => {
    // Please sync "wind Shield & Lights" to the project
  }, []);

  const onGroupContainer17Click = useCallback(() => {
    // Please sync "Detailing Service" to the project
  }, []);

  return (
    <>
      <div className="homepage">
        <img className="homepage-child" alt="" src="https://images.unsplash.com/photo-1550242499-b5171f56de56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGpkbSUyMGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        <div className="link-spares-parent">
          <b className="link-spares">Spares</b>
          <b className="link-blog" onClick={onLinkBlogClick}>
            Blog
          </b>
          <b className="link-blog" onClick={openMORE}>
            More
          </b>
          <Link to="/login">
          <button style={{ backgroundColor: '#0e2139', height: '30px',width:"60px" ,color:"white", border:"none",borderRadius:'5px'}} >Login</button>

					</Link>
        </div>
        <div className="whatsapp-image-2023-05-26-at-1-wrapper">
          <img
            className="whatsapp-image-2023-05-26-at-1"
            alt=""
            src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?w=996&t=st=1697605387~exp=1697605987~hmac=995d01d22bd2d1d98b1b1a4998a85e0d3d787fedd18343831165c7032d1e272f"
          />
        </div>
        <FrameComponent
          line122="/undefined52.png"
          frameDivPosition="absolute"
          frameDivTop="677px"
          frameDivLeft="24px"
          rectangleDivBorderRadius="12px"
          ourServicesColor="#001b39"
          curatedCustomServiceCursor="pointer"
          howCarServiceCursor="pointer"
          ratingReviewsCursor="pointer"
          onCuratedCustomServiceClick={onCuratedCustomServiceClick}
          onHowCarServiceClick={onHowCarServiceClick}
          onRatingReviewsClick={onRatingReviewsClick}
        />
        <div className="heading-2-car-services-avail-parent">
          <b className="heading-2">Car Services Available In Hyderabad</b>
          <div className="get-hassle-free-and">
            Get hassle-free and professional car service, car repair, wheel care
            services, cashless insurance claim and much more in Hyderabad.
          </div>
        </div>
        <MilesForm />
        <CuratedCustomServicesContainer />
        <div className="heading-2-car-services-avail-group">
          <b className="heading-21">Choose the workshop Near You</b>
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="rectangle-container">
              <img className="rectangle-icon" alt="" src="https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais" />
              <img className="rectangle-icon" alt="" src="https://img.etimg.com/thumb/msid-86515099,width-1200,height-900,imgsize-108562,resizemode-8,quality-100/industry/auto/auto-news/pandemic-hits-car-workshops-revenue-stream.jpg" />
            
            </div>
          </div>
        </div>
        <div
          className="heading-2-car-services-avail-container"
          data-scroll-to="groupContainer"
        >
          <b className="heading-22">How Car Service Works ?</b>
          <div className="group-parent">
            <div className="group-div">
              <b className="heading-23">Free Pickup Drop</b>
             
              <div style={{height:"180px",width:"200px" ,backgroundColor:"grey",position:"relative",top:"60px",borderRadius:"10px"}}></div>
              <b className="heading-24">Genuine Parts</b>
              <div style={{height:"180px",width:"200px" ,backgroundColor:"grey",position:"relative",left:"300px", top:"-120px",borderRadius:"10px"}}></div>
            </div>
            <div className="heading-2-car-services-avail-parent1">
              <b className="heading-25">30 Days Warranty</b>
              <div style={{height:"180px",width:"200px" ,backgroundColor:"grey",position:"relative",top:"60px",left:"-325px",borderRadius:"10px"}}></div>

              <b className="heading-26" style={{position:"relative",left:"-345px"}}>Affordable Price</b>
              <div style={{height:"180px",width:"200px" ,backgroundColor:"grey",position:"relative",top:"60px",left:"-683px",borderRadius:"10px"}}></div>

            </div>
          </div>
        </div>
        <FOOTER
          linkAppstorepng="/undefined73.png"
          fOOTERPosition="absolute"
          fOOTERBottom="0px"
          fOOTERLeft="0px"
          divpgEwoIconTop="calc(50% - 8px)"
          onLinkFAQsClick={onLinkFAQsClick}
          onLinkContactClick={onLinkContactClick}
          onLinkTermsClick={onLinkTermsClick}
          onLinkPrivacyClick={onLinkPrivacyClick}
          onLinkOffersClick={onLinkOffersClick}
          onLinkReviewsClick={onLinkReviewsClick}
          onLinkScheduledClick={onLinkScheduledClick}
          onLinkACClick={onLinkACClick}
          onLinkCleaningClick={onLinkCleaningClick}
          onLinkLightsClick={onLinkLightsClick}
          onLinkDentingClick={onLinkDentingClick}
          onLinkCustomClick={onLinkCustomClick}
          onLinkBatteriesClick={onLinkBatteriesClick}
          onLinkTyresClick={onLinkTyresClick}
          onLinkDetailingClick={onLinkDetailingClick}
          onLinkWindshieldsClick={onLinkWindshieldsClick}
        />
        <div className="experience-the-best">
          Experience The Best Car Services In Hyedrabad
        </div>
        <div className="homepage-item" />
        <PeriodicServiceForm />
        <div className="hyderabad-parent" onClick={openCITY}>
          <b className="link-spares">Hyderabad</b>
          <img
            className="b1a6d933-cb2c-4a34-b9f8-efeb99-icon"
            alt=""
            src="/arrow.png"
          />
        </div>
        <div className="we-provide-our">
          We provide Our Services in over 100+ Major Cities also.
        </div>
        <i className="car-service">CAR SERVICE</i>
        <div className="group-container">
          <div className="group-parent1" onClick={onGroupContainer3Click}>
           
            <div className="batteries">Batteries</div>
          </div>
         
        </div>
        <div className="group-parent2">
          <div className="group-parent3" onClick={onGroupContainer5Click}>
          
            <div className="ac-service">{`AC Service & Repair`}</div>
          </div>
      
        </div>
        <div className="group-parent4" onClick={onGroupContainer8Click}>
          <div className="group-parent5">
           
            <div className="insurance">Insurance</div>
          </div>
         
        </div>
        <div className="group-parent6">
          <div className="group-parent7" onClick={onGroupContainer9Click}>
           
            <div className="ac-service">{`Denting & Painting`}</div>
          </div>
        
        </div>
        <div className="group-parent8">
          <div className="group-parent9" onClick={onGroupContainer11Click}>
           
            <div className="car-spa-container">
              <p className="car-spa">{`Car Spa &`}</p>
              <p className="car-spa">Cleansing</p>
            </div>
          </div>
          
        </div>
     
        <div className="group-parent10">
          <div className="group-parent11" onClick={onGroupContainer13Click}>
       
            <div className="car-inspection">
              <span className="car-inspection-txt-container">
                <p className="car-spa">Car</p>
                <p className="car-spa">Inspection</p>
              </span>
            </div>
          </div>
          
        </div>
        <div className="group-parent12" onClick={onGroupContainer16Click}>
          <div>
           
            <div className="car-inspection">
              <p >{`Wind Shield &`}</p>
              <p className="car-spa">Lights</p>
            </div>
          </div>
        
        </div>
        
        <div className="group-parent14">
          <div className="group-parent15" onClick={onGroupContainer17Click}>
          
            <div className="ac-service">{`Detailing Service `}</div>
          </div>
        
        </div>
        <div className="frame-parent2">
          <div
            className="heading-2-car-services-avail-wrapper"
            data-scroll-to="frameContainer"
          >
            <b className="heading-27">What Car Owners in Hyderabad Say</b>
          </div>
          <div className="group-parent16">
            <CardContainer
              ellipse224="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              heading2CarServicesAvaila="Mohith Reddy"
              image92="/undefined104.png"
              wEEKAGO="1 WEEK AGO"
              absolutelyRecommendedGara="Absolutely recommended garage for everyone..!! Recently I had a issue of oil filters and engine m ounts replacement for my car BMW and i don't want my car to showroom because it will usually takes 1-2 weeks , so then my friend suggested this garage. And even gave the manager number. The manager there Sai is very professional and friendly person. With in two days they resolved my issue and even they gave an astonishing general service"
            />
            <Container />
            <Container1 />
            <FormContainer />
            <CardContainer
              ellipse224="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              heading2CarServicesAvaila="Shiva Kumar"
              image92="/undefined111.png"
              wEEKAGO="4 WEEKS AGO"
              absolutelyRecommendedGara="This is a very trusted most popular and very amazing service provider mechanic luxury car service centre they have very best experience in this field for providing very best service (I car service) very good experience with maneger Sai"
              propLeft="397px"
              propBottom="656px"
              propWidth="285px"
              propWidth1="212px"
            />
            <CardContainer
              ellipse224="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              heading2CarServicesAvaila="Atharva Kulkarni"
              image92="/undefined111.png"
              wEEKAGO="1 MONTH AGO"
              absolutelyRecommendedGara="Excellent service. Sai helped me when I was stranded on highway (100km from city) at night due to battery malfunction. The towing of my car was arranged by Sai, then he repaired the car in quick time. He made sure that I understand what part was to be repaired and why. With the seamless service, I have become his all time customer :)"
              propLeft="399px"
              propBottom="329px"
              propWidth="287px"
              propWidth1="214px"
            />
          </div>
        </div>
        <img className="mask-group-icon" alt="" src="/undefined114.png" />
        <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas ligula. Nulla facilisi. Phasellus faucibus ligula id mauris varius, eget faucibus lorem fringilla. Vivamus ut felis porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex sodales, `}</div>
        <RatingCard />
       
        <Property1Frame301
          property1Frame301Position="absolute"
          property1Frame301Top="181px"
          property1Frame301Left="945px"
        />
        <StyleLight
          refresh="/undefined121.png"
          frame13="/undefined122.png"
          google="/undefined123.png"
          extension="/undefined124.png"
          logos="/undefined125.png"
          instacartGroceryDeliveryO="Car Service.in"
          logos1="/undefined126.png"
          logos2="/undefined127.png"
          logos3="/undefined125.png"
          tabs="/undefined128.png"
          showLogosIcon={false}
          showTabs={false}
          tabsVisible={false}
          showTabsIcon={false}
          styleLightWidth="1280px"
          styleLightPosition="absolute"
          styleLightTop="0px"
          styleLightLeft="0px"
          tabWidth="75.39%"
          tabRight="12.3%"
          tabLeft="12.3%"
          vectorIconTop="100%"
          vectorIconBottom="-100%"
          vectorIconTop1="100%"
          vectorIconBottom1="-100%"
        />
      </div>
      {isMOREOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMORE}
        >
          <MORE onClose={closeMORE} />
        </PortalPopup>
      )}
      {isLoginOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogin}
        >
          <Login onClose={closeLogin} />
        </PortalPopup>
      )}
      {isCITYOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCITY}
        >
          <CITY onClose={closeCITY} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
