# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/assets/Public/Screenshot%202025-05-04%20152736.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)
- Live Site URL: [Add live site URL here](https://e-commerece-functionality.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

so i faced issues seprating event on two buttons placed insde a div and are performing two different functions and there are placed on the same sport, i used e.stopPropagation() fuction, this is the first time i'm suing it and learning about it.

```js
e.stopPropagation();
```

### Continued development

i would want to delve deep into vanilla javascript in my subsequest project, for now i can use react.

## Author

- Website - [Benjamin Jacob](https://e-commerece-functionality.vercel.app/)
- Frontend Mentor - [@Benjaminufuo](https://www.frontendmentor.io/profile/Benjaminufuo)
- Twitter - [@ufuomajacob5](https://www.twitter.com/@ufuomajacob5

)
