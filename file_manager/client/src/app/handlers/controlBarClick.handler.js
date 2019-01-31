function controlBarClickHandler({ target }) {
  changeColor(target);

  switch(target.textContent) {
    case 'create':
      changeView(CREATE_CONTROL);
      break;
    case 'update':
      changeView(UPDATE_CONTROL);
      break;
    case 'delete':
      changeView(DELETE_CONTROL);
      break;
  }
}

function changeColor(node) {
  if(!node.classList.contains('red')) {
    node.classList.add('red');
    return;
  }

  node.classList.remove('red');
}

function changeView(node) {
  if(!node.classList.contains('hidden')) {
    node.classList.add('hidden');
    return;
  }

  node.classList.remove('hidden');
} 