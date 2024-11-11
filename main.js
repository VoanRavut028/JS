const Product = [
  {
    code: 1,
    item: "I Phone 16",
    category: "Phone",
    price: 1200.0,
    stock: 120,
  },
  {
    code: 2,
    item: "Lenovo",
    category: "Laptop",
    price: 1099.0,
    stock: 50,
  },
];

let input = require("prompt-sync")();

let op;

// AddProduct
const AddProduct = () => {
  let code = parseInt(input("Enter Code: "));
  let item = input("Enter Name: ");
  let category = input("Enter Category: ");
  let price = parseFloat(input("Enter Price: "));
  let stock = parseInt(input("Enter Stock: "));

  Product.push({ code, item, category, price, stock });
  console.log("Add Success...");
};
// ShowProduct
const ShowProduct = () => {
  Product.forEach((data) => {
    console.log(
      `${data.code} : [${data.item}] - ${data.price} - ${data.category} - ${data.stock}`
    );
  });
};
// Update
const Update = (scode) => {
  const index = Product.findIndex((data) => data.code == scode);
  // console.log(index)
  if (index == -1) {
    console.log("Product not found...");
  } else {
    let code = scode;
    let item = input("Enter Name: ");
    let category = input("Enter Category: ");
    let price = parseFloat(input("Enter Price: "));
    let stock = parseInt(input("Enter Stock: "));

    Product[index] = { code, item, category, price, stock };
    console.log("Update Success...");
  }
};

const Delete = (scode) => {
  const index = Product.findIndex((data) => data.code == scode);
  if (index == -1) {
    console.log("Product not found...");
  } else {
    Product.splice(index, 1);
    console.log("Delete Scuccess...");
  }
};

do {
  console.log("1. Add Product");
  console.log("2. Show Product");
  console.log("3. Update Product");
  console.log("4. Delete Product");
  console.log("5. Search Product");
  console.log("6. Order Product");
  console.log("7. Exit");
  op = parseInt(input("Chose one option: ")); // 7
  switch (op) {
    case 1: {
      console.log("\nAdd Product Form\n");
      AddProduct();
      console.log();
      break;
    }
    case 2: {
      console.log("\n-----Product-----");
      ShowProduct();
      console.log();
      break;
    }
    case 3: {
      let updateCode = parseInt(input("Enter Code for update: "));
      Update(updateCode);
      break;
    }
    case 4: {
      let deleteCode = parseInt(input("Enter Code for delete: "));
      Delete(deleteCode);
      break;
    }
  }
} while (op < 7);
