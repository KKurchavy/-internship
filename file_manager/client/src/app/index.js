(() => {
  UPDATE_LIST_BUTTON.addEventListener('click', updateList.bind(null, LIST));
  CREATE_BUTTON.addEventListener('click', createClickHandler);
  UPDATE_BUTTON.addEventListener('click', updateClickHandler);
  DELETE_BUTTON.addEventListener('click', deleteClickHandler);
  CONTROL_BAR_NODE.addEventListener('click', controlBarClickHandler);

  updateList(LIST);
})();