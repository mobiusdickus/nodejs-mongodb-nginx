#!/bin/sh

echo "Running startup script..."

# Initialize the mongodb with default data
echo "Initializing the database..."
sleep 5     # TODO: come up with a better solution for ensuring db connection before running script
npm run initdb

# Start the web server
if [ "$ENVIRONMENT" = "dev" ]; then
    echo "Starting dev server..."
    npm run dev
elif [ "$ENVIRONMENT" = "prod" ]; then
    echo "Starting prod server..."
    node app.js
else
    echo "ERROR: incorrect or missing ENVIRONMENT env variable." 
fi