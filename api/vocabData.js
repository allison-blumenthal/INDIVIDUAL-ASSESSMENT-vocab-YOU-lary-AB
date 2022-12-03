import client from '../utils/client';

const endpoint = client.databaseURL;

// read vocab cards
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// delete vocab card
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get single vocab card
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${firebaseKey}.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// create new vocab card
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// patch vocab card with firebaseKey
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getVocab, deleteVocab, getSingleVocab, createVocab, updateVocab
};
