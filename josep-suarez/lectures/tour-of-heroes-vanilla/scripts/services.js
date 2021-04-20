function getHeroIDFromUrl(url) {
    return new URLSearchParams(url).get('heroID');
}