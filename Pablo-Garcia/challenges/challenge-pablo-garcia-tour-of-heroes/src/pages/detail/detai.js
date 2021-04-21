

const URL= '../../../src/common/utils/dataHeroes.json'

const getIdFromParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id;
}


    const getHeroe = (data_id) => {

    const param = parseInt(data_id)
        fetch(URL)
            .then(function(response) {
               return response.json();
            })
            .then(function(data){
               const {id, name, images} = data.find(o => o.id === param);
               const {md} = images;

               const detailsHero = document.createElement('div');
               detailsHero.setAttribute('class', 'wrapper_heroe');

               const nameHero = document.createElement('h1');
               nameHero.innerHTML = name;


                const idHeroe = document.createElement('h3');
                idHeroe.innerHTML = id;

                const imageHeroe = document.createElement('img');
               imageHeroe.setAttribute('src', `${md}`);


               detailsHero.append(nameHero);
               detailsHero.append(idHeroe);
               detailsHero.append(imageHeroe);

               const insertHeroe = document.querySelector('#heroe');
               insertHeroe.appendChild(detailsHero);


            })

            .catch(function(error) {
                console.log(error);
            });


    }


const showInfo = () => {
    const idHeroe = getIdFromParam();
    const dataHeore =  getHeroe(idHeroe);
}