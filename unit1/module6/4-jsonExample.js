import fs from "fs";

// create a JSON file with some data
const jsonFilePath = "user.json";
const intalUserData = {
  name: "Mayur Pal",
  age: 21,
  isAdmin: true,
  hobbies: ["coding", "reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "Punjab",
    country: "India",
  },
  method: function greet() {
    console.log("Hello from JSON!");
  },
  createdAt: new Date(),
};
const createJsonFile = () => {
  fs.writeFile(jsonFilePath, JSON.stringify(intalUserData, null, 2), (err) => {
    if (err) {
      console.log("Error creating JSON file:", err);
    } else {
      console.log("JSON file created successfully.");
    }
  });
};

// Reading JSON file
const readJsonFile = () => {
  fs.readFile(jsonFilePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading JSON file:", err);
    } else {
      const userData = JSON.parse(data);
      console.log("Created At(in Date object):", new Date(userData.createdAt));
      console.log("User Data from JSON file:", userData);
    }
  });
};

// createJsonFile();
readJsonFile();
