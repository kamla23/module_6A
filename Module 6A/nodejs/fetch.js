

// GET request
fetch('http://localhost:3000')
    .then(res => res.text())
    .then(body => console.log('GET Response:', body))
    .catch(err => console.error('GET Error:', err));


    // POST request
fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Kittu', age: 21 })
})
.then(res => res.text())
.then(body => console.log('POST Response:', body))
.catch(err => console.error('POST Error:', err));


// PUT request
fetch('http://localhost:3000', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Kittu', age: 22 }) 
})
.then(res => res.text())
.then(body => console.log('PUT Response:', body))
.catch(err => console.error('PUT Error:', err));

// DELETE request
// fetch('http://localhost:3000', {
//     method: 'DELETE'
// })
// .then(res => res.text())
// .then(body => console.log('DELETE Response:', body))
// .catch(err => console.error('DELETE Error:', err));
