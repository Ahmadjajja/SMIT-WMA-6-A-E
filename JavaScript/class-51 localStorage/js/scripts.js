// button1.onclick = function () {
//   var newName = prompt("What is your name?");

//   var names = localStorage.getItem("data");
//   // localStorage.getItem
//   //                  is used for accessing or getting data from local storage

//   if (names == null) {
//     names = [];
//   } else {
//     names = JSON.parse(names);
//     // JSON.parse
//     //          Bydefault, JSON form of data is in-accessible. To make data accessible
//     //          we use JSON.parse method.
//   }

//   names.push(newName);

//   // ["sheeraz"];

//   localStorage.setItem("data", JSON.stringify(names));
//   // localStorage.setItem(key, value)
//   //            localStorage.setItem() is used to store data in local storage
//   //            Two parameters used here
//   //            1) Key    2) value

//   // JSON.stringify(names)
//   //            JSON.strigify method is used to convert simple Array of objects to JSON.

//   // '[{
//   //     "name": "ahmad",
//   //     "age": "22"
//   //   }]'
//   result.innerHTML = newName + " have been stored in storage";
// };

button2.onclick = function () {
  var names = localStorage.getItem("data");
  if (names == null) {
    alert("There is nothing to print");
    return;
  }

  names = JSON.parse(names);

  result.innerHTML = names;
};

button3.onclick = function () {
  localStorage.removeItem("data");
  // This method removes the data

  result.innerHTML = "All Names Have been deleted from Storage";
};
