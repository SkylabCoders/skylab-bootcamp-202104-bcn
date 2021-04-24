
const store = {// TODO: cambiar nom de la constant store a clientStore. Propagara a la resta de fitxers
  client: {
    fname: 'hosni',
    lname: 'marco'
  },
  clientUpdate: {
    information: {
      fname: '',
      lname: '',
    },
    dataInputPlayer(data){
      store.clientUpdate.information.fname = document.getElementById('fname-input').value;
      store.clientUpdate.information.lname = document.getElementById('lname-input').value;
      store.client = data.clientUpdate.information
      //TODO: store.client tindra que la promesa.
    }
  }
};
// export{store}