@echo off
echo Launching Elden Ring Project...

start cmd /k "cd EldenRingApi && dotnet run"
start cmd /k "cd elden-app && npx expo start --lan"

echo Both services are starting in separate windows.
