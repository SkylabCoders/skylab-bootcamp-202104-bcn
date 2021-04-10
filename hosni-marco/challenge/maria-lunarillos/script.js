var person = {
  connect(usuari, pwd, token) {
    let l_usuari = usuari;
    let l_pwd = pwd;
    let l_token = token;



    

    //validsr token
    if (token == null ) {
          l_token = getToken(usuari, pwd); 
        return  conectar(l_usuari, l_pwd, l_token);
    }

     if ( token == undefined){
        conectar(l_usuari, l_pwd, l_token);
    }


        

    

  },

  connect() {
    let usuari = "a";
    let pwd = "b";

    return connect("usr", "pwd");
  },
  connect(usuari, pwd) {
    //fi¡uncionalitat de conectar
  },
};
function main() {
  person.connect();
}
