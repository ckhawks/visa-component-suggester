import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";
import { cannedResponses, cannedResponsesCompiled } from "./cannedResponses";


// API handler for serving the stub functionality
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // e.g. `/api/submission?query=login%20form`

  await setTimeout(1000); // fake delay to sell the pretend generation better, and to be able to see the loading state
  console.log("query", query);


  // This logic isn't great, I know, but it's just to match and serve the stubs for now
  let jsx = "";
  let jsxCompiled = "";

  switch (query?.toLocaleLowerCase()) {
    case "responsive login form with remember me":
      jsx = cannedResponses.responsiveLoginFormWithRememberMe;
      jsxCompiled = cannedResponsesCompiled.responsiveLoginFormWithRememberMe;
      break;
    case "color picker":
      jsx = cannedResponses.colorPicker;
      jsxCompiled = cannedResponsesCompiled.colorPicker;
      break;
    case "contact us form":
      jsx = cannedResponses.contactUsForm;
      jsxCompiled = cannedResponsesCompiled.contactUsForm;
      break;
    case "error toast with action button":
      jsx = cannedResponses.errorToastWithActionButton;
      jsxCompiled = cannedResponsesCompiled.errorToastWithActionButton;
      break;
    default:
      // choose a random thing
      let randomKey = Math.floor(Object.keys(cannedResponses).length * Math.random())
      jsx = Object.values(cannedResponses)[randomKey];
      jsxCompiled = Object.values(cannedResponsesCompiled)[randomKey];
      break;
  }

  return new Response(
    JSON.stringify({ query: `${query}`, jsx: jsx, jsxCompiled: jsxCompiled }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}