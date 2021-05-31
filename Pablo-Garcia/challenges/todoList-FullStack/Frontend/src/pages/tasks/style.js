import styled from 'styled-components';

export const AllTasks = styled.div`
  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  max-width:60%;
  margin:25px auto;
  background-color:#ffffff;
  box-shadow: 4px 4px 13px #acacac;
`;

export const AddTask = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  label{
    width: 39%;
    margin: 10px 15px 10px 10px;
    input{
      width: 100%;
      min-height:35px;
      border-top:0;
      border-left:0;
      border-right:0;
      border-bottom:1px solid #32dba9;
      &:focus-visible{
        border:0; 
      }
    }
  }
  button{
    border:0;
    padding: 8px 18px;
    background-color:#2196f3;
    color:#fff;
    font-size: 12px;
  }
`;

export const ListTasks = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px 0;
  border-bottom: 1px solid #32dba9;

  .task {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .task__content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      width: 90%;

      > div {
        width: 100%;
      }
    }

    .task__actions {
      width: 10%;
      text-align: center;

      button {
        border: 0;
        padding: 8px 18px;
        background-color: #32dba9;
        color: #fff;
        font-size: 20px;
      }
    }
  }
`;
