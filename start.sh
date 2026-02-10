#!/bin/bash

echo '🚀 Starting Abdul Azis Hartadi Portfolio...'
echo ''
echo '🌐 Server will run at: http://localhost:8080'
echo '🛑 Press Ctrl+C to stop'
echo ''
echo '🛡️  [SYSTEM INITIALIZED]'
echo ''

cd /mnt/OthersData/Portofolio
python3 -m http.server 8080
