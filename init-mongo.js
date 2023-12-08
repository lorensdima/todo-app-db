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
    _id: ObjectId("6550da34a2e08ab6e5f80147"),
    username: "johnny",
    name: "John Doe",
    password: "$2b$10$6Ql0MMQT38wyPL6H/ZH2COrtnhrwaFwvRR2/WZVqUPzDueIxUmViy",
    email: "john@example.com",
  },
  {
    _id: ObjectId("657329ba4a831d21bb1e527c"),
    username: "jana",
    name: "Jane Doe",
    password: "$2b$10$6Ql0MMQT38wyPL6H/ZH2COrtnhrwaFwvRR2/WZVqUPzDueIxUmViy",
    email: "jane@example.com",
  },
  {
    _id: ObjectId("657329ba4a831d21bb1e527b"),
    username: "meg",
    name: "Megan Doe",
    password: "$2b$10$6Ql0MMQT38wyPL6H/ZH2COrtnhrwaFwvRR2/WZVqUPzDueIxUmViy",
    email: "meg@example.com",
  },
]);

db.createCollection("tasks");

db.tasks.insertMany([
  {
    title: "Finish Filter Groups Page",
    description: "Create a page for filtering using groups",
    status: "unfinished",
    group: "",
    assignedTo: ObjectId("6550da34a2e08ab6e5f80147"),
    collaborators: [ObjectId("657329ba4a831d21bb1e527b")],
    dueDate: new Date("2023-12-10T13:56:13.588+00:00"),
    created: new Date("2023-12-08T13:56:13.588+00:00"),
    modified: new Date(),
  },
  {
    title: "Create Home Page in Figma",
    description: "Start home page prototype in Figma",
    status: "unfinished",
    group: "",
    assignedTo: ObjectId("6550da34a2e08ab6e5f80147"),
    collaborators: [
      ObjectId("657329ba4a831d21bb1e527b"),
      ObjectId("657329ba4a831d21bb1e527c"),
    ],
    dueDate: new Date("2023-12-11T13:56:13.588+00:00"),
    created: new Date("2023-12-08T13:56:13.588+00:00"),
    modified: new Date(),
  },
  {
    title: "Meeting w/ Lorens",
    description: "Discuss about app Google Meet Link: gugle.kom",
    status: "finished",
    group: "",
    assignedTo: ObjectId("6550da34a2e08ab6e5f80147"),
    dueDate: new Date("2023-12-10T13:56:13.588+00:00"),
    created: new Date("2023-12-08T13:56:13.588+00:00"),
    modified: new Date(),
  },
  {
    title: "Finish Prototype",
    description: "Use Figma to finish home prototype",
    status: "unfinished",
    group: "",
    assignedTo: ObjectId("6550da34a2e08ab6e5f80147"),
    dueDate: new Date("2023-12-10T13:56:13.588+00:00"),
    created: new Date("2023-12-08T13:56:13.588+00:00"),
    modified: new Date(),
  },
]);
