document.addEventListener('submit', function(e){
  
    e.preventDefault();

    let finame = document.getElementById('first_name').value;
    let laname = document.getElementById('last_name').value;
    let uemail = document.getElementById('email').value;
    let itemname = document.getElementById('Item').value;
    let icomment = document.getElementById('textarea2').value;

  let url = 'https://api.sheety.co/a26f6eb6467c0e619e8a438749f612a5/reviews/sheet1';
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

function message(){
  M.toast({html: 'Thank you for your review', classes: 'rounded', outDuration:2000});
  M.toast({html: 'It has been posted to reviews', classes: 'rounded', inDuration:4000});
}
