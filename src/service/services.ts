function getAll(path:string) {
  return fetch(`http://localhost:9000${path}`, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
  })
  .then((responses: any) => {
    return responses.json();
  })
  .catch(err => {
    return err;
  })
}

function modifyMessageById(path:string, data: any) {
  return fetch(`http://localhost:9000${path}`, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then((responses: any) => {
    return responses.json();
  })
  .catch(err => {
    return err;
  })
}

function deleteMessageById(path:string) {
  return fetch(`http://localhost:9000${path}`, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE',
  })
  .then((responses: any) => {
    return responses.json();
  })
  .catch(err => {
    return err;
  })
}

export default {
  getAll,
  modifyMessageById,
  deleteMessageById,
}