 const createTitle = (title, type) => {
    const head = document.createElement(`${type}`);
    head.innerText = title;
    return head;
}

