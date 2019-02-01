async function updateList(list) {
  const files = await  getRequest('http://localhost:3300/list');

  while(list.lastChild) {
    list.removeChild(list.lastChild);
  }

  if(!files){
    return;
  }

  files.forEach(element => {
    const li = document.createElement('li');

    li.innerText = element;
    list.appendChild(li);
  });
}