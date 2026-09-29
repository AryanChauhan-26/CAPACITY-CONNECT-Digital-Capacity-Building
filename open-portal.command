#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

# Check if port 3000 is running, if not start dev server
if ! nc -z localhost 3000 >/dev/null 2>&1; then
  echo "Starting CAPACITY CONNECT server..."
  npm run dev &
  sleep 2
fi

open http://localhost:3000/
