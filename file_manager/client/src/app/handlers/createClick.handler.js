function createClickHandler({ target }) {
  const { parentElement } = target;
  const input = parentElement.querySelector('input');
  const textarea = parentElement.querySelector('textarea');

  postRequest('http://localhost:3300/create', { 
    fileName: input.value,
    fileData: textarea.value
  }).then(() => {
    input.value = "";
    textarea.value = "";
    updateList(LIST);
  });
}