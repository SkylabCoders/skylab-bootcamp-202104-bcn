//funcion que coge desde la url el heroID, con el new urlsearchparams!
function getHeroIDFromUrl(url) {
    return new URLSearchParams(url).get('heroID');
}