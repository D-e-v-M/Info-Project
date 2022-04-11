document.addEventListener('submit', function(e){
  
    e.preventDefault();

    let finame = document.getElementById('first_name').value;
    let laname = document.getElementById('last_name').value;
    let uemail = document.getElementById('email').value;
    let itemname = document.getElementById('Item').value;
    let icomment = document.getElementById('textarea2').value;

  let url = 'https://api.sheety.co/64eabdcf4c7f902b38c556d10791c81e/reviews/sheet1';
  let body = {
    sheet1: {
      fname:finame,
      lname:laname,
      email:uemail,
      name:itemname,
      comment:icomment
    }
  }
  fetch(url, {
    method: 'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    console.log(json.sheet1);
  });
});

