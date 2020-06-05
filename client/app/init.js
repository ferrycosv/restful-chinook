fetch('/api')
  .then(res => res.text())
  .then(data => {
    console.log(data)
    document.getElementById('root')
      .innerHTML = data.message;
  })
  .catch(err => console.error(err));

