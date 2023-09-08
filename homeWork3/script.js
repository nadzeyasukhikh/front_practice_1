const div_root = document.querySelector("#root");
const div_container = document.createElement("div");
div_container.className = "container";
div_root.append(div_container)


const formPost = document.querySelector(".post_form")
const formDelete = document.querySelector(".delete_form")
const formUpdate = document.querySelector(".update_form")

formUpdate.onsubmit= (e) =>{
  e.preventDefault()
  let form_data = new FormData(formUpdate)
  let data = Object.fromEntries(form_data)
  let {id, ...user} = data
  upddateUserById(id, user)
}


function upddateUserById(id, obj) {
  let url = `http://158.160.60.49:3050/users/${id}`
  fetch(url, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(obj)
})
.then(res => res.json())
  .then(data => {
    console.log(data)
    getUsers()
  })

}


formPost.onsubmit = (el) => {
    el.preventDefault()
    let form_data = new FormData(formPost)
    let data = Object.fromEntries(form_data)
    addNewUser(data);
}

formDelete.onsubmit = (e) => {
  e.preventDefault()
  deleteUserByid(e.target[0].value)
}

function deleteUserByid(id){
  let url = `http://158.160.60.49:3050/users/${id}`
  fetch(url, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    getUsers()
  })
}


function getUsers() {
  let url = "http://158.160.60.49:3050/users/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => render(data));
}


function render(array) {
  div_container.innerHTML = " "
  for (let elem of array) {
    const div_card = document.createElement("div");
    const h2_name = document.createElement("h2");
    const p_info = document.createElement("P");
const delete_button = document.createElement("button")
delete_button.className = "del_button"
    div_card.className = "card";
    h2_name.innerText = `${elem.name} ${elem.id}`;
    p_info.innerText = `Age: ${elem.age}, Salary: ${elem.salary}, Job: ${elem.job_id}`;
    delete_button.innerText = "X"
    div_container.append(div_card)
    div_card.append(h2_name,p_info, delete_button)
    delete_button.onclick = () => deleteUserByid(elem.id)
    
  }
}

getUsers()




function addNewUser(user){
   
    let url = 'http://158.160.60.49:3050/user/create'
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      getUsers()
         
})

}
