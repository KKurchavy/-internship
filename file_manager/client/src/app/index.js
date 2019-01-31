function connectScript(scriptURL) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = scriptURL;
    document.body.appendChild(script);
    script.onload = resolve;
  })
};

connectScript('./app/constants/constants.js')
.then(() => connectScript('./app/tools/server.tools.js'))
.then(() => connectScript('./app/handlers/controlBarClick.handler.js'))
.then(() => connectScript('./app/handlers/updateListClick.handler.js'))
.then(() => connectScript('./app/handlers/createClick.handler.js'))
.then(() => connectScript('./app/handlers/updateClick.handler.js'))
.then(() => connectScript('./app/handlers/deleteClick.handler.js'))
.then(async () => {
  UPDATE_LIST_BUTTON.addEventListener('click', updateListClickHandler);
  CREATE_BUTTON.addEventListener('click', createClickHandler);
  UPDATE_BUTTON.addEventListener('click', updateClickHandler);
  DELETE_BUTTON.addEventListener('click', deleteClickHandler);
  CONTROL_BAR_NODE.addEventListener('click', controlBarClickHandler);

  const files = await  getRequest('http://localhost:3300/list');

  if(!files){
    return;
  }

  files.forEach(element => {
    const li = document.createElement('li');

    li.innerText = element;
    LIST.appendChild(li);
  });
})