const CREATEclient = 'create-client';
const READclient ='read-client';
const UPDATEclient = 'update-client';
const DELeTEclient  = 'delete-client';
//TODO: INTENTAR IMPLEMENTAR PROMESES A LOGICA DEL STORE
//------------------------------------------
const myFetch = new Promise((resolve, reject) => {
  debugger;
  if (true) {
    resolve({ name: 'asdasd', edad: 'asdasd' });
  } else {
    reject(null);
  }
});

//  ----------------------------------------
//TODO: FER TESTING   <------------------------------------!!!!!
function clientDispatcherReduce(state, action) {//TODO: clientDispatcherReduce
  debugger
  action = action ===undefined ? action = store : action; 
  switch (state) {
    case CREATEclient://TODO: invocar logica crear client
    case READclient://TODO: Invocar logica recuperar  client
    case UPDATEclient://TODO Invocar logica d'actualitzar client
      action.clientUpdate.dataInputPlayer(action);//TODO: ha d'incorporar la promesa.
      printDataClient(store.client);
      break;
    case DELeTEclient://TODO: Invocar logica borrar client.
    default:
      store.client;
      break;
  }
}
