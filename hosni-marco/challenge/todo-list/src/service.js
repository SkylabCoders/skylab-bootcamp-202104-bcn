const FIRSTNAMEreduce = 'FIRST-NAME';
const LASTTNAMEreduce = 'LAST-NAME';
function updateClientReduce(state, action) {
  switch (state) {
    case FIRSTNAMEreduce:
      store.clients.fname = 'omar';
      break;
    case LASTTNAMEreduce:
      store.clients.lname = action.lname;
      break;
    default:
      store.clients.fname = action.fname;
      store.clients.lname = action.lname;
      break;
  }
}
updateClientReduce('FIRST-NAME', 'omar');
