@echo off
echo ========================================
echo   EduSync Manager - Push to GitHub
echo ========================================
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "

if "%REPO_URL%"=="" (
    echo Error: Repository URL is required!
    pause
    exit /b 1
)

echo.
echo Adding remote origin...
git remote add origin %REPO_URL%

echo.
echo Renaming branch to main...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   SUCCESS! 🎉
echo ========================================
echo.
echo Your EduSync Manager is now on GitHub!
echo Repository URL: %REPO_URL%
echo.
echo You can now:
echo - Share the repository with others
echo - Deploy to Heroku, Vercel, or Netlify
echo - Clone to other machines
echo.
pause
