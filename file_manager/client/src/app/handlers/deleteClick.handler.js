function deleteClickHandler({ target }) {
  const { parentElement } = target;
  const input = parentElement.querySelector('input');

  deleteRequest('http://localhost:3300/delete', { 
    fileName: input.value
  }).then(() => {
    input.value = "";
  })
}