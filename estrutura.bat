```bat
@echo off
setlocal

REM Define a pasta onde este .bat está localizado
cd /d "%~dp0"

echo ==========================================
echo     VERIFICANDO ESTRUTURA DO PROJETO
echo ==========================================
echo.

REM Verifica e cria as pastas
for %%D in (assets docs css html js img) do (
    if exist "%%D\" (
        echo [OK] Pasta %%D ja existe.
    ) else (
        mkdir "%%D"
        echo [CRIADO] Pasta %%D foi criada.
    )
)

REM Verifica e cria o arquivo index.html
if exist "index.html" (
    echo [OK] Arquivo index.html ja existe.
) else (
    type nul > "index.html"
    echo [CRIADO] Arquivo index.html foi criado.
)

echo.
echo ==========================================
echo     VERIFICACAO CONCLUIDA
echo ==========================================
echo.

pause
```
