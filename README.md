# Course Planer Frontend 

The frontend of a dynamic course planner for college semesters. The goal is to help students plan out when to take their courses. Once a student chooses their majors, minors, and start year a list of semesters and courses is generated. It is sorted by pre-requisites and course difficulty. The student can then rearrange courses (as long as it's valid placement) and get feedback on difficulty, credits, etc. 

**Note**: Still under active development, not at a production state. 

## Getting Started

The following steps should get you started and running with the project. 

### Installing

To start working on the project, first install [node](https://nodejs.org/). Version 4 or higher.

Clone this repository.

```
git clone https://github.com/ufosc/course-planner-frontend.git
cd course-scheduler
```

Install dependencies with Node and Typings. 

```
npm install
node_modules/.bin/typings install
```

### Building

To just compile 

```
npm run build
```

Then open index.html in your browser. 

Or 

If you want to run an updating server 

```
npm run dev-server
```

or on Windows 

```
npm run w-dev-server
```

<!--## Deployment

**Additional steps to deploy and run the project**-->

## Built With

We are using TypeScript with React to write this project. Other tools that are used are Node (with npm), Webpack, and Typings. 

- [TypeScript](https://github.com/ufosc/resources/blob/master/resources/typescript.md)) is a super-set of JavaScript that adds type safety and some nice features (like inheritance). This makes it feel more like other Object Oriented languages like Java. It compiles down to JavaScript, as specified in the tsconfig.json.
- [React](https://github.com/ufosc/resources/blob/master/resources/react.md) is a JavaScript framework that focuses on user interfaces. It improves efficiency by only changing what needs to changes. It also keeps out of the way of other functions. React uses jsx (or tsx in our case) files to render html components.
- [Node](https://nodejs.org/) is a JavaScript runtime, however we use it's package manager, npm to keep track of various libraries we use, such as react. It's config file is package.json.
- [Webpack](https://webpack.github.io/) is a module builder that combines all JavaScript into one succinct file. It also provides multiple tools such as a live reloader. It's config file webpack.config.js.
- [Typings](https://github.com/typings/typings) is a TypeScript definition manager. It allows editors to easily plug into different systems (such as React) and show autocomplete. It's config file is typings.json.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for how to work on the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details