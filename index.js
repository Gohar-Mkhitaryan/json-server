// Get

// fetch("http://localhost:3000/car")
//   .then((res) => {
//     if (res.ok) {
//       console.log("GET request successful");
//     } else {
//       console.log("GET request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => handleData(data))
//   .catch((error) => console.log(error));
// function handleData(data) {
//   console.log(data);
// }

//Post

// fetch("http://localhost:3000/car", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     make: "	Honda",
//     model: "Accord",
//     year: 2019,
//     color: "red",
//     fuel: "gas",
//     mpg: 30,
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("POST request successful");
//     } else {
//       console.log("POST request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//Put

fetch("http://localhost:3000/car/2", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "red",
    fuel: "gas",
    mpg: 30,
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log("PUT request successful");
    } else {
      console.log("PUT request unsuccessful");
    }
    return res;
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Delete
// fetch("http://localhost:3000/car/2", {
//   method: "DELETE",
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("DELETE request successful");
//     } else {
//       console.log("DELETE request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => console.log(res));
