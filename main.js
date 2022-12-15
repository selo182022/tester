console.log("helloeee");
const endpoint="https://reqres.in/api/users";

/*fetch(endpoint)
    .then((response) => response.json())
    .then((result) => render(result.data));
*/
fetch(endpoint,{
    method :"POST",
    headers: { "Content-Type" : "Application/json"},
    body : JSON.stringify({email:"asiik@asd.com",firstname:"babasds"}),
})
.then((response) => response.json())
.then((result) => console.log(result));

function render(data) {
    console.log(data);
}
