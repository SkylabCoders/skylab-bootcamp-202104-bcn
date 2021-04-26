export const button = (title, action) => {
    const btn = document.createElement('button');
    btn.innerHTML = title;
    button.onclick = action;
    return btn;
}
