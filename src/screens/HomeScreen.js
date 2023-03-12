import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CallToActionSection from "../components/homeComponents/CallToActionSection";
import Footer from "./../components/Footer";
import Toast from "../components/LoadingError/Toast";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import {singleContent} from "../Redux/Actions/ContentAction.js"

const HomeScreen=({match}) => {
  const dispatch=useDispatch()
  const contentSingle=useSelector((state) => state.contentSingle)
  const {contentUp}=contentSingle
  //console.log(contentUp)
  const {logo,phone,banners,companyName,companyAddress,links,contacts,qrCode}=contentUp

  const keyword=match.params.keyword
  const pageNumber=match.params.pageNumber
  const handleClick=(e) => {
    e.preventDefault()
    window.scrollTo(0,0)

  }
  const [showGoToShop,setShowGoToShop]=useState(false)
  useEffect(() => {

    dispatch(singleContent())
    const handleScroll=() => {
      (window.innerHeight+window.scrollY)>=document.body.scrollHeight? setShowGoToShop(true):setShowGoToShop(false)
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div >
      <Toast />
      <Header 
        logo={logo} 
        phone={phone}
      />
      <Navbar />
      <Banner banners={banners}/>
      <ShopSection 
        keyword={keyword} 
        pageNumber={pageNumber} 
      />

      <CallToActionSection />
      <ContactInfo />
      <Footer 
        companyName={companyName}
        companyAddress={companyAddress}
        links={links}
        contacts={contacts}
        qrCode={qrCode}
      />
      {showGoToShop&&(<button style={{position: 'fixed',right: 20,bottom: 20}} onClick={handleClick}>GotoTop</button>)}
    </div>
  );
};

export default HomeScreen;
