# Use the official MongoDB image as the base image
FROM mongo

# Set environment variables for MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin_password

# Expose the default MongoDB port
EXPOSE 27017

# Copy the script to initialize the database and user
COPY init-mongo.js /docker-entrypoint-initdb.d/
# Connect to the MongoDB Docker container using the mongod shell


