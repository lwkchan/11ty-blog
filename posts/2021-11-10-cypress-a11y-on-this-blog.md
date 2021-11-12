---
date: 2021-11-10T08:47:28.437Z
title: How I set up a11y testing on this blog
---

In order to learn more about accessiblity testing, I decided to set up Cypress testing with axe-core on this website. Setting this up was straight-forward and doesn't require too much overhead. I admit that `cypress-axe` cannot test every accessibility detail, for example focus management. However, with my static site, which at time of writing only has some blogposts, using `cypress-axe`'s `cy.checkA11y()` has already helped me find hard to notice issues such as [heading order](https://dequeuniversity.com/rules/axe/4.0/heading-order).

## The tools at play

* [Cypress](https://www.cypress.io/) is an end-to-end testing framework which allows you to run tests in the browser, as if they were clicking through your app or website. 
* [Axe-core](https://github.com/dequelabs/axe-core) brands itself as "an accessibility testing engine for websites and other HTML-based user interfaces". The engine can be accessed in several different ways including the [VSCode Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter), which will make suggestions as you write code, and the [axe DevTools](https://www.deque.com/axe/devtools/), which allows you to run audits of websites directly from your browser dev tools.
* [cypress-axe](https://github.com/component-driven/cypress-axe) is the module which allows you to inject the axe-core runtime into the page you are testing in Cypress.

## Setting it up

To avoid copy-pasting documentation which might change, I suggest you follow the documented installation steps for [`Cypress`](https://docs.cypress.io/guides/getting-started/installing-cypress) and then for [`cypress-axe`](https://github.com/component-driven/cypress-axe).

As part of the steps, you will need to add the below line to `cypress/support/index.js`

```js
import 'cypress-axe'
```

This hooks `injectAxe()` and `checkA11y()` to the `cy` object, so that you can call those functions in your tests.