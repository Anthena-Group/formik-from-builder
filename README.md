# Formik Form Builder

Leverage Formik-Form-Builder Creator to effortlessly construct MUI-based forms using concise JSON definitions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

## Installation

To install the package, run:

```bash
npm install formik-form-builder
```

# Usage
## Here is a basic example of how to use the Formik Form Builder:

Play with it [SANBOX](https://codesandbox.io/p/sandbox/formik-form-builder-exmaple-2552ys?file=%2Fsrc%2FApp.js)

```bash
import React from 'react';
import FormikFormBuilder from 'formik-form-builder';

const formDefinition = {
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validation: {required: true}
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      validation: {required: true}
    },
    // Add more fields as needed
  ],
};

const MyForm = () => (
  <FormikFormBuilder formDefinition={formDefinition} onSubmit={(values) => console.log(values)} />
);

export default MyForm;
```



# Scripts
```bash
build:types: Compiles TypeScript declaration files.
build:js: Bundles JavaScript files using tsup.
build: Runs both build:types and build:js.
```

## To run the build script, use:
```bash
npm run build
```

# License
## This project is licensed under the MIT License. See the LICENSE file for details.

Author
Created by [codewithshinde]("https://github.com/codewithshinde").