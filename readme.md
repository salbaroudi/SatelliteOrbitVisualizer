## Satellite Orbit Visualizer:

### Introduction: 

This is a final project to show the culmination of my software and front-end development skills: a Satellite Orbit Visualizer.

The appliction utilizes the following technologies:

- React (responsive and overall framework, fetch() and Data Store)
- Three.js (for all visualizations and real-time animation)
- Playwrite (for Test Driven Development)
- Typescript (for typed-code and native OOP)
- TSC (for overall transpiliation to CommonJS, to run in browser).
- Github Co-pilot.
- nodemon (for real-time code updating (faster development)).

Simply, the project mines real-time data for GPS and other satellites, and creates a visualization of all objects in space, in which a user can query and interact with.

The stages below will discuss the development cycle milestones.

### Stage 0: Environment setup and Integration:

To get all of the node modules listed above working together, is not a trivial task. 

They were tested in pairs, and then fully integrated together with a trivial UI and visualization, as a proof of concept. The project was integrated as follows:

- First, each package was installed on its own. :heavy_check_mark:
- Get React+Redux running on its own. :heavy_check_mark:
- React and TypeScript :heavy_check_mark:
    - This was accomplished by using a template React-Redux project with a typescript option.
- TypeScript and Three.js
    - Three.js can already work with TS or JS. We use [react-three-fibre]() to integrate React and Three properly.
    - A template project will need to be made, as an example.
- React, TypeScript, Three.js :x:
    - React-three-fibre uses TS. No need for this.
- React, React-Three-Fibre :heavy_check_mark:
    - Works fine. Usage of JSX tags to render meshes and elements.
- React and Playwright
- React, TypeScript, Three.js and Playwright
- React and Nodemon :x:
    - React Frameworks come with Webpack, which does the job of Nodemon for us automatically (update on save)
- React, TypeScript, Three.js, Playwright and Nodemon.






Of particular novel note is the use of Github Co-pilot. I predict that the world will move from 10x $\rightarrow$ 100x development in the next few years. So its good to learn this tool now.



### References / Help-Sources Used:

1) [Setting up a TypeScript + Node.js project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

2) [Running multiple node scripts (cwilby's comment)](https://gist.github.com/coryhouse/b26f49bead69066844d9)