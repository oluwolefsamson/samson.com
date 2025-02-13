/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import PropTypes from "prop-types";

import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "../assets/menu-icon.png";
import Logo from "../assets/logo.png";

function Link({ page, selectedPage, setSelectedPage, setIsMenuToggled }) {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`} // href needed to navigate to each page.
      onClick={
        (() => setSelectedPage(lowerCasePage), () => setIsMenuToggled(false))
      }
    >
      {page}
    </AnchorLink>
  );
}

// EsLint prop types.
Link.propTypes = {
  page: PropTypes.string.isRequired,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  setIsMenuToggled: PropTypes.func.isRequired,
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-dark-blue";

  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-4 duration-500`}
    >
      <div className="flex items-center justify-between mx-auto m pl-8 mr-3 pr-12">
        <img
          src={Logo}
          alt="img"
          height={40}
          width={180}
          className="rounded-lg lg:rounded-none "
          style={{ borderRadius: "50%" }}
        />

        {isDesktop ? (
          // Desktop Navbar
          <div className="flex justify-between gap-16 font-opensans text-xl font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // Mobile Hamburger Icon
          <button
            type="button"
            className="rounded-full bg-dark-blue w-11 p-2 "
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}

        {/* Mobile Menu Popup */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-dark-blue w-[250px] animate-slide-left mt-11">
            {/* Close Icon */}
            <div className="flex justify-end p-12 mr-6">
              <button
                type="button"
                className="text-2xl"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                X
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isTopOfPage: PropTypes.bool.isRequired,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};

export default Navbar;
