function getRequest(url) {
  return fetch(url, {
    method: 'get'
  }).then(res => res.json())
}

function postRequest(url, data) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(data)
  });
}

function putRequest(url, data) {
  return fetch(url, {
    method: 'put',
    body: JSON.stringify(data)
  });
}

function deleteRequest(url, data) {
  return fetch(url, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}