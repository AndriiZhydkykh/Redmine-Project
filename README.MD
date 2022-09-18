#Typescript auto test (playwright and allure) for site www.redmine.org 

Installation: 
1. Install node js 
2. install java 8
3. install visual studio code
4. Create new folder for your project
5. Open this folder in terminal
6. Run this code in terminal to install playwright :npm init playwright@latest
7. Run this code in terminal to install allure :
8. npm i -D allure-playwright
9. npm i -D allure-commandline
10. npm install -g allure-commandline --save-dev

Tests:Run this command in a terminal in visual studio code to tun the auto tests and get a report in allure:
1. npx playwright test --reporter=line,allure-playwright
2. When the auto test completes, run this command in the terminal:
3. npx allure generate ./allure-results --clean
4. For open the report in allure run this command in the terminal:
5. npx allure open ./allure-report
6. To run auto test again press ctrl+c in windows or command+c on mac machine, type 'y' in terminal and press enter 


