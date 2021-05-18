import styled from 'styled-components';

const Profile = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-around;
  align-items: center;
  .UserName{
    color:#fff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    margin:4px 20px;
  }
    img{
      display:block;
      max-width:35px;
      border-radius: 50%;
    }
`;
export default Profile;
