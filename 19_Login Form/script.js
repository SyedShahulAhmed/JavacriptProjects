document.querySelector('.btn').addEventListener('click', () => {
    const user = document.querySelector('#user').value;
    const pass = document.querySelector('#pass').value;
  
    fetch('info.json')
      .then(response => response.json())
      .then(data => {
        const matchedUser = data.users.find(u => u.username === user && u.password === pass);
        if (matchedUser) {
          alert(`Hello ${matchedUser.username}`);
        } else {
          alert('Invalid username or password');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  