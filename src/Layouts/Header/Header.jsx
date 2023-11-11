import React, { useState, useEffect } from 'react';
import Styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import theCappalogo from './dadHouse-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const Navigate = useNavigate();
  const [dropDownOpen, setdropDownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500,
      delay: 1360,
    });
    AOS.refresh();
  }, []);

  const [scrolling, setScrolling] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
      setNavbarBackground('white');
    } else {
      setScrolling(false);
      setNavbarBackground('transparent');
    }
  };

  const [t, i18n] = useTranslation('global');

  const HandleNavigate = (To) => {
    Navigate(To);
    setdropDownOpen(false);
  };

  return (
    <>
      <div id={`navbar ${scrolling ? 'scrolling' : ''}`} style={{ background: navbarBackground }} className={Styles.Navbar_main}>
        <div className={Styles.navbar}>
          <div className={Styles.navbar_logo}>
            <Link id={Styles.LinkEdit} className={Styles.navbar_logo_Img}>
              <img src={theCappalogo} alt="Logo" />
            </Link>
          </div>
          <ul className={Styles.navbar_links}>
            <li>
              <Link to="/Home" onClick={() => HandleNavigate('/Home')} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
                {t('header.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => { HandleNavigate('/about'); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
                {t('header.about')}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => { HandleNavigate('/'); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
                {t('header.roomssuites')}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => { HandleNavigate('/'); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
                {t('header.restuarant')}
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={() => { HandleNavigate('/Contact'); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
                {t('header.contact')}
              </Link>
            </li>
          </ul>
          <div onClick={() => setdropDownOpen(!dropDownOpen)} className={Styles.toggle_btn}>
            {dropDownOpen ? (
              <AiOutlineClose style={scrolling ? { color: 'black' } : { color: 'white' }} />
            ) : (
              <RxHamburgerMenu style={scrolling ? { color: 'black' } : { color: 'white' }} />
            )}
          </div>
        </div>

        <div style={dropDownOpen ? { display: 'block' } : { display: 'none' }} className={Styles.dropdown_menu}>
          <li>
            <Link to="/Home" onClick={() => HandleNavigate('/')} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => { HandleNavigate('/about'); setdropDownOpen(false); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => { HandleNavigate('/RoomSutuies'); setdropDownOpen(false); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
              ROOMS & SUITES
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => { HandleNavigate('/Restaurant'); setdropDownOpen(false); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
              RESTAURANT
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => { HandleNavigate('/Contact'); setdropDownOpen(false); }} style={scrolling ? { color: 'black' } : { color: 'white' }} id={Styles.LinkEdit}>
              CONTACT
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
