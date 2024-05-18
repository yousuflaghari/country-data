import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ROUTES } from "../variables/routes";

const Header = () => {
  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const NameTag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const CountryName = styled.div`
    display: flex;
    align-items: center;
  `;

  const Name = styled.p`
    font-size: xxx-large;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-left: 40px;
    font-family: cursive;
    color: ${(props) => props.theme.colors.nameColor};
    @media screen and (max-width: 780px) {
      padding: 0px;
    }
  `;

  const LinkTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;

    @media screen and (max-width: 780px) {
      flex-direction: row;
      margin-top: 5px;
      padding: 0px;
    }
  `;

  const StyledLink = styled(Link)`
    margin-right: 25px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.linksColor};

    @media screen and (max-width: 780px) {
      margin-right: 10px;
      display: flex;
      align-items: center;
    }
  `;

  return (
    <HeaderContainer>
      <NameTag>
        <CountryName>
          <Name>pinch of yum</Name>
        </CountryName>
        <LinkTag>
          <StyledLink to={ROUTES.BAR}>DINNER</StyledLink>
          <StyledLink to={ROUTES.LINE}>LUNCH</StyledLink>
          <StyledLink to={ROUTES.PIE}>DESSERT</StyledLink>
          <StyledLink to={ROUTES.CHARTJS}>SNACK</StyledLink>
        </LinkTag>
      </NameTag>
    </HeaderContainer>
  );
};

export default Header;
