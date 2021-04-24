const CREATEclient = 'create-client';
const READclient ='read-client';
const UPDATEclient = 'update-client';
const DELeTEclient  = 'delete-client';
// import { store }  from ('./store.js')
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
      store.clientUpdate.information.fname = 'hosni'
      store.clientUpdate.information.lname = 'marco'
      store.client = data.clientUpdate.information
      //TODO: store.client aura de ser la promesa.
    }
  }
};

function clientDispatcherReduce(state, action) {//TODO: clientDispatcherReduce
  debugger
  action = action === undefined ? action = store : action; 
  switch (state) {
    case CREATEclient://TODO: invocar logica crear client
    case READclient://TODO: Invocar logica recuperar  client
    case UPDATEclient://TODO Invocar logica d'actualitzar client
      action.clientUpdate.dataInputPlayer(action);//TODO: ha d'incorporar la promesa.
      // printDataClient(store.client);
      break;
    case DELeTEclient://TODO: Invocar logica borrar client.
    default:
      store.client;
      break;
  }
}

describe(`Given the function, `, () => {
    [
        {state: UPDATEclient, action: undefined, result: store.client.fname},
        {state: UPDATEclient, action: store, result: store.client.lname},
        {state: "", action: null, result: store.clients},
    ].forEach(element => {
        describe(`When invoke with ${element.state} and ${element.action}, `, () => {
            test(`Then return ${element.result}`, () => {
                let answer = clientDispatcherReduce(element.state, element.action)
                expect(answer).toStrictEqual(element.resultnpm)
            })
        })
    })
})