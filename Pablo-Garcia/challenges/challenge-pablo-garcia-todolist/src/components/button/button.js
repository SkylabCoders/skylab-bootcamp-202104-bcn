export const button = (title, action) => {
    const btn = document.createElement('button');
    btn.innerHTML = title;
    btn.addEventListener('click', action);
    return btn;
}
