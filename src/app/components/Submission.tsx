"use client";

import { Button, InputContainer, Label, Link, ScreenReader, Textarea, Typography, Utility } from "@visa/nova-react";
import { useState } from "react";
import { VisaMaximizeTiny } from "@visa/nova-icons-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

// local imports
import CopyToClipboard from "./CopyToClipboard";
import globalStyles from '../global.module.scss';
import styles from './Submission.module.scss';

interface SuggestionResponse {
    query: string;
    jsx: string;
    jsxCompiled?: string;
}

export function Submission() {
    const [sending, setSending] = useState<boolean>(false); // loading state
    const [suggestionInput, setSuggestionInput] = useState<string>(""); // used to control the textarea state
    const [error, setError] = useState<null | string>(null); // display errors sending request
    const [suggestedComponentsResponse, setSuggestedComponentsResponse] = useState<null | SuggestionResponse>(null);

    // handle when user clicks Go! button, or from when they click a canned response
    const handleOnSubmit = async (query: string) => {
        setSending(true); // set loading state
        setError(null); // Clear previous errors
        setSuggestedComponentsResponse(null); // Clear previous suggestions

        if (!query) {
            setError("Please enter a suggestion.");
            setSending(false);
            return;
        }

        try {
            const response = await fetch('/api/suggestion?' + new URLSearchParams({
                query,
            }).toString(), {
                method: "GET"
            });

            if (!response.ok) {
                throw new Error("Response was not ok"); // will trigger the catch
            }

            const data: SuggestionResponse = await response.json();
            setSuggestedComponentsResponse(data);
            setSuggestionInput(""); // Clear the suggestion input after submission
        } catch (err) {
            console.error("Error getting suggestion:", err); // TODO integrate better error handling in the future
            setError("An unexpected error occurred.");
        } finally {
            setSending(false);
        }
    };

    // We could get rid of this if we didn't care about updating the textarea value
    const handleOnClickCannedInput = (suggestion: string) => {
        setSuggestionInput(suggestion); // Set the input for display in the field
        // Have to pass in this argument, because setting the value of the state is async and doesn't fire in order
        handleOnSubmit(suggestion);
    };

    const { isCopied: copiedJsx, handleCopy: handleCopyJsx } =
        CopyToClipboard();

    // TODO I could separate the header, input, and response sections into separate components, but
    //   that feels like a little bit too overboard on the abstraction.
    //   If this grew more, I would probably separate it, but it feels OK for now.
    return (
        <>
            <div className={globalStyles.contentSection}>
                <Typography variant="headline-1">What will you make today?</Typography>
                <Typography variant="body-2-medium" style={{marginTop: '8px'}}>
                    Describe what sort of interface you need, and we'll put it together for you using{" "}
                    <Link
                        aria-label="VISA's design system (opens in a new tab)"
                        href="https://design.visa.com/"
                        noUnderline
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VISA's design system
                        <VisaMaximizeTiny />
                    </Link>.
                </Typography>               

                
                {error && <Typography variant="body-2-bold" className={styles.errorText}>{error}</Typography>}
                
                <Utility vFlex vFlexCol vGap={4} vMarginTop={8}>
                    <ScreenReader><Label htmlFor={"user-input"}>Suggestion input (required)</Label></ScreenReader>

                    <InputContainer className="v-flex-row">
                        <Textarea value={suggestionInput} onChange={(e) => setSuggestionInput(e.currentTarget.value)} aria-required="true" fixed id={"user-input"} name={"user-input"} style={{ blockSize: '130px', padding: '1rem' }} placeholder={suggestedComponentsResponse ? "What are you imagining next?" : "Responsive login form with remember me"} />
                    </InputContainer>
                    <Button disabled={sending || suggestionInput.length === 0} onClick={() => handleOnSubmit(suggestionInput)}>Go!</Button>
                </Utility>

                <br />
                <div>
                    <Typography variant="body-2-medium" style={{ paddingBottom: '0.5rem' }}>
                        Just want to see how it works? Try a sample below.
                    </Typography>
                    <div className={styles.cannedSuggestionButtons}>
                        { /* Ideally, these are dynamically generated based on an array of the different canned input names/objects, */ }
                        { /*   but that feels like overengineering for this project. */ }
                        <Button onClick={() => handleOnClickCannedInput("Responsive login form with remember me")} alternate className={styles.cannedSuggestionButton}>Responsive login form with remember me</Button>
                        <Button onClick={() => handleOnClickCannedInput("Contact us form")} alternate className={styles.cannedSuggestionButton}>Contact us form</Button>
                        <Button onClick={() => handleOnClickCannedInput("Color picker")} alternate className={styles.cannedSuggestionButton}>Color picker</Button>
                        <Button onClick={() => handleOnClickCannedInput("Error toast with action button")} alternate className={styles.cannedSuggestionButton}>Error toast with action button</Button>
                    </div>
                </div>
            </div> 

            {sending && <div className={globalStyles.contentSection}>
                <Typography variant="headline-2">Loading suggested components...</Typography>
            </div>}

            {suggestedComponentsResponse && suggestedComponentsResponse.jsx && suggestedComponentsResponse.jsxCompiled && <div className={globalStyles.contentSection}>
                <Typography variant="headline-1">{suggestedComponentsResponse.query}</Typography>
                <br />
                <Typography variant="headline-3">Preview</Typography>
                <br />
                <div dangerouslySetInnerHTML={{ __html: suggestedComponentsResponse.jsxCompiled }} />
                <br />
                <Typography variant="headline-3">Code</Typography>
                <Button onClick={() => handleCopyJsx(suggestedComponentsResponse.jsx)} className={styles.cannedSuggestionButton} style={{ marginTop: '0.5rem' }}>{copiedJsx ? "Copied JSX to clipboard!" : "Copy React JSX to clipboard"}</Button>
                <div className={styles.codeRender}>
                    <SyntaxHighlighter
                        language="jsx" // Important: tells the highlighter to parse it as JSX
                        style={vs2015} // Apply the imported theme
                        showLineNumbers // Renders line numbers on the left
                        wrapLines={true} // Wraps lines that exceed the container width
                        customStyle={{
                            borderRadius: '4px',
                            padding: '1em',
                            overflowX: 'auto',
                        }}
                    >
                        {suggestedComponentsResponse.jsx}
                    </SyntaxHighlighter>
                </div>
            </div>}
        </>
    );
}