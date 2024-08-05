# Star Wars Project

<div style="text-align: center;">
  <img src="src/assets/logo.webp" alt="Project Logo" width="300" />
</div>

This project is created to provide an overview of information about Star Wars characters. By clicking on a character's card, you can see information about the movies they appeared in and the starships they piloted. The data displayed in this application is sourced from [Star Wars API](http://sw-api.starnavi.io).

## Technologies Used

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <a href="https://react.dev/"> 
    <img src="https://th.bing.com/th/id/OIP.IoCLrnfGa9GzPimOovQyDgHaGc?rs=1&pid=ImgDetMain" alt="React" width="80" height="80"/>
  </a> 
  <a href="https://reactflow.dev/">
    <img src="https://media.licdn.com/dms/image/D4E05AQGTNQs2XiVFCg/videocover-high/0/1699350316713?e=2147483647&v=beta&t=Ee26AJOJaFleznUGsItIQEfyPJ47YgevzO3XaKWhfQ4" alt="React Flow" width="80" height="80"/>
  </a>  
  <a href="https://www.typescriptlang.org/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width="80" height="80"/>
  </a>  
  <a href="https://styled-components.com/">
    <img src="https://storage.googleapis.com/zenn-user-upload/topics/77ccd3a252.png" alt="Styled Components" width="80" height="80"/>
  </a>
  <a href="https://axios-http.com/docs/intro">  
    <img src="https://th.bing.com/th/id/OIP.DVHcjMJMDJ1WeFBAWGKLLgHaF7?rs=1&pid=ImgDetMain" alt="Axios" wwidth="80" height="80"/>
  </a>
  <a href="https://www.npmjs.com/">  
    <img src="https://th.bing.com/th/id/OIP.F6yFxHdBGTXHVGrHOk3kggHaHa?rs=1&pid=ImgDetMain" alt="npm" width="80" height="80"/>
  </a>  
  <a href="https://vitejs.dev/">
    <img src="https://img-blog.csdnimg.cn/dd7e16c42c934a9382f395bf2fb9582e.png?x-oss-process=image/resize,m_fixed,h_224,w_224" alt="vite" width="80" height="80"/>
  </a>  
</div>

  ## For Testing
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <a href="https://vitest.dev/">
    <img src="https://habrastorage.org/getpro/habr/upload_files/f70/d80/5ba/f70d805ba22c5c0a8d89a3514e3b56dd.png" alt="vitest" width="120" height="80"/>
  </a>
  <a href="https://testing-library.com/">  
    <img src="https://th.bing.com/th/id/OIP.ijyb00weKCmmXg76VqtJ8wAAAA?rs=1&pid=ImgDetMain" alt="testing libr" width="80" height="80"/>
  </a>
  <a href="https://github.com/testing-library/jest-dom?tab=readme-ov-file#readme">  
    <img src="https://raw.githubusercontent.com/testing-library/jest-dom/master/other/owl.png" alt="jest dom" width="80" height="80"/>
  </a>
   <a href="https://sinonjs.org/">  
    <img src="https://mherman.org/assets/img/blog/sinonjs.png" alt="Sinon JS" width="120" height="80"/>
  </a>  
</div>
</div>


## Getting Started

You can clone the repository to your local machine using one of the following methods:

#### Using the Terminal

Open your terminal and run the following command:

```bash
git clone https://github.com/liubapohudina/starWars.git
```

This will clone the repository to your local machine.


#### Using GitHub Interface
Go to the GitHub repository.


1. Click the green Code button.


2. Choose Open with GitHub Desktop to clone the repository using GitHub Desktop.

<img src="src/assets/read.png" alt="Project Logo" width="300" />





If you chose Open with GitHub Desktop, follow the prompts to open the repository in GitHub Desktop.

Open the cloned repository in Visual Studio Code:

If you used GitHub Desktop, you can directly open the repository in Visual Studio Code from there.
Alternatively, navigate to the cloned repository folder using your file explorer and open it with Visual Studio Code.


## Navigate to the Project Directory

Change into the project directory:

```bash
cd starWars
```

## Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```
## Start the Development Server

Start the development server with the following command:

```bash
npm start
```
This will run the application in development mode and open it in your default web browser. The app will be available at http://localhost:5173/.

## Build for Production

To create a production build of the application, run:

```bash
npm run build
```
This will generate optimized static files in the build directory, which can be deployed to a production server.

# Testing

## Running unit tests

To run the tests, enter the command:

```bash
npm test
```
You can also run tests with coverage. A report on the coverage of the code by tests will be displayed in the terminal. To do this, run

```bash
npm run test:coverage
```
After executing this command, the coverage folder will be created. There is a report on the tests. There is a report that can be opened for review in a browser, as well as printed.

 <img src="src/assets/coverage.png" alt="coverage"/>

### Opening a report in a browser

1. Open the coverage folder.

2. Locate the index.html file.

3. Open with Live Server.

 <img src="src/assets/get-coverage.png" alt="get-coverage"/>

## After reviewing the report, the coverage folder can be deleted if the report is no longer needed. If necessary, you can always regenerate the report using the:

```bash
npm run test:coverage
```

