import styled from 'styled-components';

const CardTask = styled.div`
  display: block;
  margin: 0 auto;
  padding:10px 15px;
  a {
    display:flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
    width:100%;
    text-decoration: none;
    color: #333;
    font-family: 'Verdana', sans-serif;
    font-size: 16px;
    .titleTask{
      width: 26%;
      font-size: 16px;
    }
  }
  .pending {
    background-color: #e7153f;
    color: #fff;
    font-size: 12px;
    padding: 7px 15px;
    border-radius: 50px;
    text-align: center;
    line-height: 16px;
  }
`;

export default CardTask;
