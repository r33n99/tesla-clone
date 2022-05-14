import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <Link to="0" spy={true} smooth={true} offset={-70} duration={500}>
        <Logo src="/images/logo.svg" />
      </Link>
      <Menu>
       {cars && cars.map((car,index) => (
         <Link
              activeClass="active"
              to={index}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}>
            <a href="#">{car}</a>
         </Link>
       ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setOpenMenu(true)} />
      </RightMenu>
      <BurgerMenu show={openMenu}>
        <CloseWrapper>
          <CloseButton onClick={() => setOpenMenu(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <Link
              activeClass="active"
              to={index}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}>
                <a href="#">{car}</a>
              </Link>
            </li>
          ))}
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
  a {
    color: black;
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: default;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 15;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
