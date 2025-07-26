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
- I decided to build my project using React/Next.js, as I am most comfortable here. This allows me to use Next.js' API routes bundled alongside my project, and deploy easily to Vercel.
- I use SCSS modules to bundle styles alongside my components.
- I wrote the API handler into the Next.js project using the App Router.

## Assumptions & Shortcuts
- I stubbed out the suggestion generation to the 4 canned pre-made queries, and then randomly selecting one when the user enters something else.
- Having a `global.module.scss` probably isn't great but for a project of this size I'll accept it.
- I did not set up ESLint/any sort of auto-format-on-save, so there probably are some small stylistic issues.
- I am not leveraging a lot of React/Next.js' server-sided rendering.
- I avoided using inline styles as much as possible, but there are just a couple included.

## Future Areas of Improvement
Given the limited time constraints of the project, I was not able to implement every feature or layer of polish that I would have liked to.
- I am not well versed enough in leveraging AI to make it return correct usage of the components.
- I am not the best at accessibility but it is something I want to strengthen myself in a lot. I work best when I have things to reference and twist.
- There were definitely pieces of the design system I missed that I can replace some of the custom styling with. This is unfortunately due to lack of familiarity with the design system, but that will come with time!

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