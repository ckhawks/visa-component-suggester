import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";

const cannedResponses = {
  responsiveLoginFormWithRememberMe: `responsive login form with remember me`,
  mobileNavigationLinks: `mobile navigation links`,
  contactUsForm: `contact us form`,
  errorToastWithActionButton: `<Flag messageType="error">
      <FlagIcon />
      <FlagContent className="v-pl-2 v-pb-2" role="alert" aria-live="polite">
        <ScreenReader>error</ScreenReader>
        <Typography className="v-mb-8">This is required text that describes the flag in more detail.</Typography>
        <Button colorScheme="secondary">Primary action</Button>
      </FlagContent>
      <FlagCloseButton />
    </Flag>`,
}

// used from https://stackoverflow.com/a/47480429
// const delay = ms => new Promise(res => setTimeout(res, ms));

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query')?.toLocaleLowerCase(); // e.g. `/api/submission?query=hello`

  console.log("query:", query);
  await setTimeout(1000);

  let response = "";

  switch (query) {
    case "a":
      response = cannedResponses.responsiveLoginFormWithRememberMe;
      break;
    case "b":
      response = cannedResponses.contactUsForm;
      break;
    default:
      var values = Object.values(cannedResponses);
      response = values[Math.floor(values.length * Math.random())];
      break;
  }

  return new Response(
    JSON.stringify({ query: `${query}`, jsx: response }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}