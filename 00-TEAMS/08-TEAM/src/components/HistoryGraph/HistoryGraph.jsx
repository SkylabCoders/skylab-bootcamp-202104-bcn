import React from 'react';

const HistoryGraph = () => (
  <div />
);

export default HistoryGraph;


const mapStateToProps = ({ globalData, vaccinesByContinent }) => (
    {
      globalData: Object.entries(globalData),
      vaccinesByContinent
    }
  );
  
  export default connect(mapStateToProps)(HistoryGraph);