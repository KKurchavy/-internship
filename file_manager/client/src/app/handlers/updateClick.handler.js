function updateClickHandler({ target }) {
  const { parentElement } = target;
  const input = parentElement.querySelector('input');
  const textarea = parentElement.querySelector('textarea');

  putRequest('http://localhost:3300/update', { 
    fileName: input.value,
    fileData: textarea.value
  }).then(() => {
    input.value = "";
    textarea.value = "";
  });
}