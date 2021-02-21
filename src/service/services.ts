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

export default {
  getAll,
}