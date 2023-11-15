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

// For Debug

db.createCollection("registeredUsers");

db.registeredUsers.insertMany([
  {
    name: "John Doe",
    password: "$2b$10$6Ql0MMQT38wyPL6H/ZH2COrtnhrwaFwvRR2/WZVqUPzDueIxUmViy",
    email: "john@example.com",
  },
  {
    name: "Jane Doe",
    password: "$2b$10$6Ql0MMQT38wyPL6H/ZH2COrtnhrwaFwvRR2/WZVqUPzDueIxUmViy",
    email: "jane@example.com",
  },
]);

db.createCollection("tasks");

db.tasks.insertMany([
  {
    title: "Finish Filter Groups Page",
    description: "Create a page for filtering using groups",
    status: "unfinished",
    group: "",
    assignedTo: {
      $oid: "6550da34a2e08ab6e5f80147",
    },
  },
  {
    title: "Create Home Page in Figma",
    description: "Start home page prototype in Figma",
    status: "unfinished",
    group: "",
    assignedTo: {
      $oid: "6550da34a2e08ab6e5f80147",
    },
  },
  {
    title: "Meeting w/ Lorens",
    description: "Discuss about app Google Meet Link: gugle.kom",
    status: "finished",
    group: "",
    assignedTo: {
      $oid: "6550da34a2e08ab6e5f80147",
    },
  },
]);
