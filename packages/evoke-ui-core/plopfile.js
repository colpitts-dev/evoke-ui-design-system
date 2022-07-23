module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'atomic',
        message: 'What type of component are you building',
        choices: () => [
          {
            name: 'Atom',
            value: 'atoms',
          },
          {
            name: 'Molecule',
            value: 'molecules',
          },
          {
            name: 'Organism',
            value: 'organisms',
          },
        ],
      },
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is the name of your component?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        // Handlebars template used to generate content of new file
        templateFile: '.templates/EvokeUI.component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: '.templates/EvokeUI.stories.mdx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: '.templates/EvokeUI.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: '.templates/EvokeUI.index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/index.tsx',
        templateFile: '.templates/index.tsx.hbs',
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/index.tsx',
        pattern: `/* EVOKE_EXPORT */`,
        template: `export { {{pascalCase name}}, type {{pascalCase name}}Props } from './components/{{pascalCase name}}';`,
      }
    ],
  });
};