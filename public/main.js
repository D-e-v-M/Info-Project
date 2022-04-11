 document.addEventListener('DOMContentLoaded', function() {
        loadMenu();
        document.getElementById("fform").addEventListener("submit", function(e){
               e.preventDefault();
               let sname=document.getElementById('food').value;
               getmenu(sname);
         })
 });

async function loadMenu (){
    let response= await fetch("https://api.sheety.co/a26f6eb6467c0e619e8a438749f612a5/foodHut/sheet1");
    let data= await response.json();
    let menu=data.sheet1;
    displaymenu(menu);
    
}

function displaymenu(menu){ 
    let mlisting = document.querySelector('#meal');
    let dlisting = document.querySelector('#drink');
    let delisting = document.querySelector('#dessert');
    let mhtml = '';
    let dhtml = '';
    let dehtml = '';
    for(let item of menu){
        if(item.category=="food"){
          mhtml+=  `
          <div class="col s12 m7">
          <div id= "cc${item.id}" class="card horizontal medium hoverable">
            <div class="card-image">
              <img src=${item.image}>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p><em><b>Item Name</b></em>: ${item.name}</p> <br>
                <p><em><b>Price</b></em>: $${item.price}.00</p> <br>
                <p><em><b>Description</b></em>: ${item.description}</p> <br>  
              </div>
              <div class="card-action">
                  <a class="waves-effect waves-light #ef5350 red lighten-1 btn modal-trigger " onclick="review('${item.name}','r${item.id}')" href="#modal${item.id}" >Click to see reviews</a>
                  <div id="modal${item.id}" class="modal">
                    <div id ="mm${item.id}" class="modal-content center">
                      <h4>Reviews</h4>
                      <ul id="r${item.id}" class="collapsible popout">
      
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>`
    }
        if(item.category==="drink"){
          dhtml+=  `
          <div class="col s12 m7">
          <div id= "cc${item.id}" class="card horizontal medium hoverable">
            <div class="card-image">
              <img src=${item.image}>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p><em><b>Item Name</b></em>: ${item.name}</p> <br>
                <p><em><b>Price</b></em>: $${item.price}.00</p> <br>
                <p><em><b>Description</b></em>: ${item.description}</p> <br>  
              </div>
              <div class="card-action">
                  <a class="waves-effect waves-light #ef5350 red lighten-1 btn modal-trigger " onclick="review('${item.name}','r${item.id}')" href="#modal${item.id}" >Click to see reviews</a>
                  <div id="modal${item.id}" class="modal">
                    <div id ="mm${item.id}" class="modal-content center">
                      <h4>Reviews</h4>
                      <ul id="r${item.id}" class="collapsible popout">
      
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
       `
      }
      if(item.category=="dessert"){
        dehtml+=  `
        <div class="col s12 m7">
          <div id= "cc${item.id}" class="card horizontal medium hoverable">
            <div class="card-image">
              <img src=${item.image}>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p><em><b>Item Name</b></em>: ${item.name}</p> <br>
                <p><em><b>Price</b></em>: $${item.price}.00</p> <br>
                <p><em><b>Description</b></em>: ${item.description}</p> <br>  
              </div>
              <div class="card-action">
                  <a class="waves-effect waves-light #ef5350 red lighten-1 btn modal-trigger " onclick="review('${item.name}','r${item.id}')" href="#modal${item.id}" >Click to see reviews</a>
                  <div id="modal${item.id}" class="modal">
                    <div id ="mm${item.id}" class="modal-content center">
                      <h4>Reviews</h4>
                      <ul id="r${item.id}" class="collapsible popout">
      
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
   }
  mlisting.innerHTML = mhtml;
  dlisting.innerHTML = dhtml;
  delisting.innerHTML = dehtml;
   var popout = document.querySelectorAll('.modal');
   var pop = M.Modal.init(popout);
   var rpop = document.querySelectorAll('.collapsible');
   var revpop = M.Collapsible.init(rpop);
  
}

async function review(name,id){
    let response= await fetch("https://api.sheety.co/a26f6eb6467c0e619e8a438749f612a5/reviews/sheet1");
    let data= await response.json();
    let review=data.sheet1;
    let rlisting = document.querySelector(`#${id}`);
    let rhtml='';
    for(let rev of review){
      if(rev.name==name){
         rhtml+=`<li>
         <div class="collapsible-header"><i class="material-icons">person</i>${rev.fname} ${rev.lname}</div>
         <div class="collapsible-body"><span>${rev.comment}</span></div>
       </li>`
    }
  }
  rlisting.innerHTML = rhtml;
}

async function getmenu(sname){
    let response= await fetch("https://api.sheety.co/a26f6eb6467c0e619e8a438749f612a5/foodHut/sheet1");
    let data= await response.json();
    let menu=data.sheet1;
    getidcard(menu,sname);
}

function getidcard(menu,sname){
    var cid;
    for(let item of menu){
        if(item.name==sname){
            cid=item.id;
        }
    }
    if(cid)
       location.href = `#cc${cid}`;
    else{
      location.href = "#logo";
      M.toast({html: 'Item does not exist', classes: 'rounded', inDuration:4000});
    }      
}

