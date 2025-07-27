# VISA Component Suggester
This is a take-home assignment for an interview process for VISA's design engineering team. It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This project was made in about 4 hours, and was a fun challenge to solve and put together!

## Features
- Simple, clear, and intuitive UI by reducing visual noise or input requirements to get to the main value.
- Performs API request to get suggestion result
- Copy to clipboard function on generated result
- Canned input suggestions for preview of functionality
- Rendered preview of result

## Approach & Technical
- I wanted to design my user experience to be as concise and to-the-point as possible. I am trying to give the user cognitive space to be imaginative with what they would like to build by reducing the amount of decisions they have to make and the visual load.
- I decided to build my project using React/Next.js, as I am most comfortable here. This allows me to use Next.js' API routes bundled alongside my frontend project, and deploy easily to Vercel.
- I use SCSS modules to bundle styles alongside my components, limiting global styles where possible.
- My philosophy to development is that I want my code to be understandable to someone (or myself) coming back to it in 6 months.

## Assumptions & Shortcuts
- I stubbed out the suggestion generation to 4 canned pre-made queries, and then when a user submits their input, it randomly selects one to return to the user.
- Having a `global.module.scss` at all probably isn't great but for a project of this size I'll accept it. The use case for this project would likely be solved by a SCSS mixin.
- I did not set up ESLint/Prettier/any sort of auto-format-on-save, so there probably are some small stylistic issues.
- I am not leveraging a lot of React/Next.js' server-sided rendering.
- I avoided using inline styles as much as possible, but there are just a couple included.

## Future Areas of Improvement
Given the limited time constraints of the project, I was not able to implement every feature or layer of polish that I would have liked to.
- Leveraging AI to make it return correct usage of the components.
- Improving accessibility
- Utilizing the VISA design system further
- Persisting queries either through LocalStorage or an external database

## Leveraging AI
- I used AI for some simple how-to questions (how to do syntax highlighting, how to do copy to clipboard), and for code review / best practices questions.

## Running the project locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Thanks
Thank you to the VISA design engineering team for a fun project to work on for this interview process! I hope you enjoyed viewing it.