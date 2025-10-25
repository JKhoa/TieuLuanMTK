@echo off
echo ========================================
echo   EduSync Manager - GitHub Setup
echo ========================================
echo.

echo Step 1: Git repository initialized ✓
echo Step 2: Files committed ✓
echo.

echo Next steps:
echo 1. Go to https://github.com
echo 2. Create a new repository
echo 3. Copy the repository URL
echo 4. Run the commands below:
echo.

echo git remote add origin YOUR_REPOSITORY_URL
echo git branch -M main
echo git push -u origin main
echo.

echo Press any key to open GitHub...
pause > nul

start https://github.com/new

echo.
echo After creating the repository, come back and run:
echo setup-github-push.bat
echo.
pause
