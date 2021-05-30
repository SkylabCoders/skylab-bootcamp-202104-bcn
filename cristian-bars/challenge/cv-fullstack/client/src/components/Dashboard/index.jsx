import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadInfo from '../../redux/actions/actionCreator';
import {
  Container,
  PersonalImg
} from './styled';

function Dashboard({ myInfo, dispatch }) {
  useEffect(() => {
    dispatch(loadInfo);
  }, []);
  return (
    <Container>

      {
      myInfo.length ? (
        myInfo.map((detail) => (
          <>
            <div>{detail.datos_personales.name}</div>
            <PersonalImg src={detail.datos_personales.img} alt={detail.datos_personales.name} />
            <div>{detail.datos_personales.sureName}</div>
            <div>{detail.historial_laboral[0].titulo}</div>
            <div>{detail.historial_laboral[0].descripcion}</div>
          </>
        ))) : <div>No data</div>
    }
    </Container>
  );
}

Dashboard.propTypes = {
  myInfo: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    myInfo: store.info
  };
}

export default connect(mapStateToProps)(Dashboard);
