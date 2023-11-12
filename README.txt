To Build to Docker:
1. docker build -t todo-app-db .
2. docker run -d --network mongo-network --name mongodb-container -p 27017:27017 todo-app-db