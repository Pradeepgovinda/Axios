// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
// GET REQUEST
function get() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// POST REQUEST
function add() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos',)
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function update() {
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1',)
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// DELETE REQUEST
function remove() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }

 
  

// Event listeners
document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', add);
document.getElementById('update').addEventListener('click', update);
document.getElementById('delete').addEventListener('click', remove);
