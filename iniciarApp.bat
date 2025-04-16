@echo off
REM Abrir consola para servidor Python en la ruta del script
start cmd /k "cd /d %~dp0 && py -m http.server"

REM Esperar 2 segundos para asegurarse que el servidor Python arranque
timeout /t 2 /nobreak > nul

REM Abrir consola para Node-RED
start cmd /k "node-red"
