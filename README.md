# Gender-js

<p>
  <img src="public/logo.png" style="border-radius: 20px" alt="Logo" width="200">
</p>


Gender-js is a simple TypeScript library that acknowledges the biological reality of two genders, male and female. It provides a list of these two genders and a method to fetch a gender based on provided input.

## Installation

Using npm:

```bash
npm install gender-js
```

## Usage
Import the Gender object from the module and use the getGenders and getGender methods:

```javascript
import Gender from 'gender-js';

const genders = Gender.getGenders();
console.log(genders); // Outputs: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]

const male = Gender.getGender('male');
console.log(male); // Outputs: { label: 'Male', value: 'male' }
```

The getGenders method can also return an array of strings:

```javascript
const genders = Gender.getGenders('string');
console.log(genders); // Outputs: ['male', 'female']
```

If an unrecognized gender is passed to the getGender method, it will return a funny error message:

```javascript
const alien = Gender.getGender('alien');
console.log(alien); // Outputs a funny error message.
```

## Development

To work on this project locally:

- Clone the repository: git clone https://github.com/hnr88/gender.js
- Install dependencies: npm install
- Start the development server: npm run dev


## Testing

To run the tests:

```bash
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


This README.md provides basic installation and usage instructions, as well as information on local development and testing. It's a good starting point, but you may want to add more information depending on your project's needs.
