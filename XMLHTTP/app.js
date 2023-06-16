// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!

const req = new XMLHttpRequest();

req.onload = function() {
  console.log("It loaded");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
}
req.onerror = function() {
  console.log("error");
  console.log(this);
}

req.open("GET","https://swapi.dev/api/people/1/");
req.send();
// 