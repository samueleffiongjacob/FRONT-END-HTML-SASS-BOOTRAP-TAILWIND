const urls1 = [
  "https://dummyjson.com/products/search?q=Laptop",
  "https://dummyjson.com/carts",
  "https://dummyjson.com/users/search?q=Jocelyn",
];

const getData1 = async function () {
  try {
    const [users, carts, products] = await Promise.all(
      urls1.map((url) => fetch(url).then((resp) => resp.json())),
    );
    console.log("users", users);
    console.log("posta", carts);
    console.log("albums", products);
  } catch (error) {
    console.log("oooooops", error);
  }
}

console.log(getData1());