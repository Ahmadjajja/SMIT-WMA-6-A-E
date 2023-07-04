button4.onclick = function () {
  let person = `{
    name: "Sabir",
    age: "18",
    class: "11th",
  }`;

  localStorage.setItem("detail", person);
  //   localStorage.removeItem("detail");
};
