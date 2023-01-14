let employeeArray = [];
let id = 1;

function addEmployee() {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;

  if (!name || !profession || !age) {
    document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success").innerHTML = "";
    return;
  }

  employeeArray.push({ id:id, name: name, profession: profession, age: age });
  id++;
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  document.getElementById("error").innerHTML = "";
  document.getElementById("success").innerHTML = "Success : Employee Added!";

  displayEmployees();
}

function displayEmployees() {
  let employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  employeeArray.forEach(employee => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.profession}</td>
      <td>${employee.age}</td>
      <td><button onclick="deleteEmployee(${employee.id})">Delete User</button></td>
    `;
    employeeList.appendChild(row);
  });
}

function deleteEmployee(id) {
  employeeArray = employeeArray.filter(employee => employee.id !== id);
  displayEmployees();
}