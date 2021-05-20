import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
export const BrandImage = styled.img`
 display:block;
  max-width:35px;
`;
export const NavigationWrapper = styled.nav`
  display:block;
  width:20%;
`;
export const NavigationItems = styled.ul`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  max-width:100%;
`;
export const NavigationItem = styled.li`
  color:#3333;
  a{
    font-family: 'PoppinsMedium', sans-serif;
    font-weight: 700;
    letter-spacing: 1.2px;
    line-height: 1.5px;
    text-decoration: none;
    color:#fff;
  }
  .btn-border{
    background-color:#803BEC;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: #fff;
    font-size:13px;
    font-weight: 600;
    cursor: pointer;
  }
`;
