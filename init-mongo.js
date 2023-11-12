// init-mongo.js
db = db.getSiblingDB("mydatabase");
db.createUser({
  user: "myuser",
  pwd: "mypassword",
  roles: ["readWrite"],
});

db.createUser({
  user: "clients",
  pwd: "ourclients",
  roles: ["readWrite"],
});

db.createCollection("registeredUsers");

db.registeredUsers.insertMany([
  { name: "John Doe", age: 25, email: "john@example.com" },
  { name: "Jane Doe", age: 30, email: "jane@example.com" },
  // Add more dummy data as needed
]);
