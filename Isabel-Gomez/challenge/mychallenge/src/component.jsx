function createButton({getClick}) {
let counter = 0;
return <button onClick={(e) => {getClick(counter++)}}>counter</button>
}

export default createButton;