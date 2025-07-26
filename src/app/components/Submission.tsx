"use client";

import { Button, InputContainer, Label, Link, ScreenReader, Textarea, Typography, Utility } from "@visa/nova-react";

import globalStyles from '../global.module.scss';
import styles from './Submission.module.scss';
import { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";
import { VisaMaximizeTiny } from "@visa/nova-icons-react";

interface SuggestionResponse {
    query: string;
    jsx: string;
    jsxCompiled?: string;
}

export function Submission() {
    const [sending, setSending] = useState<boolean>(false); // loading state
    const [suggestionInput, setSuggestionInput] = useState<string>(""); // used to control the textarea state
    const [error, setError] = useState<null | string>(null); // display errors sending request
    const [suggestionData, setSuggestionData] = useState<null | SuggestionResponse>(null);

    // handle when user clicks Go! button, or when they click a canned response
    const handleOnSubmit = async (queryParam?: string) => {
        setSending(true); // set loading state
        setError(null); // Clear previous errors
        setSuggestionData(null); // Clear previous suggestions

        const queryToUse = queryParam || suggestionInput; // Use queryParam if provided, otherwise use suggestionInput state

        if (!queryToUse) {
            setError("Please enter a suggestion.");
            setSending(false);
            return;
        }

        try {
            setSuggestionData(null);
            const response = await fetch('/api/suggestion?' + new URLSearchParams({
                query: queryToUse,
            }).toString(), {
                method: "GET"
            });

            if (!response.ok) {
                setError("There was an error performing the request.");
            }

            const data: SuggestionResponse = await response.json();
            setSuggestionData(data);
            setSuggestionInput(""); // Clear the suggestion input after submission
        } catch (err) {
            console.error("Error getting suggestion:", err);
            setError("An unexpected error occurred.");
        } finally {
            setSending(false);
        }
    };

    const handleOnClickCannedSuggestion = (suggestion: string) => {
        setSuggestionInput(suggestion); // Set the input for display in the field
        handleOnSubmit(suggestion);
    };

    const { isCopied: copiedJsx, handleCopy: handleCopyJsx } =
        CopyToClipboard();

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
                        <Textarea value={suggestionInput} onChange={(e) => setSuggestionInput(e.currentTarget.value)} aria-required="true" fixed id={"user-input"} name={"user-input"} style={{ blockSize: '130px', padding: '1rem' }} placeholder={suggestionData ? "What are you imagining next?" : "Responsive login form with remember me"} />
                    </InputContainer>
                    <Button disabled={sending || suggestionInput.length == 0} onClick={() => handleOnSubmit()}>Go!</Button>
                </Utility>

                <br />
                <div style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <Typography variant="body-2-medium" style={{ paddingBottom: '0.5rem' }}>
                        Just want to see how it works? Try a sample below.
                    </Typography>
                    <div className={styles.cannedSuggestionButtons}>
                        <Button onClick={() => handleOnClickCannedSuggestion("Responsive login form with remember me")} alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Responsive login form with remember me</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Contact us form")} alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Contact us form</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Color picker")} alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Color picker</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Error toast with action button")} alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Error toast with action button</Button>
                    </div>
                </div>                
            </div>

            {sending && <div className={globalStyles.contentSection}>
                <Typography variant="headline-2">Loading suggested components...</Typography>
            </div>}

            {suggestionData && suggestionData.jsx && suggestionData.jsxCompiled && <div className={globalStyles.contentSection}>
                <Typography variant="headline-1">{suggestionData.query}</Typography>
                <br />
                <Typography variant="headline-3">Preview</Typography>
                <br />
                <div dangerouslySetInnerHTML={{ __html: suggestionData.jsxCompiled }} />
                <br />
                <Typography variant="headline-3">Code</Typography>
                <Button onClick={() => handleCopyJsx(suggestionData.jsx)} style={{ position: 'unset', padding: '0rem 1rem', marginTop: '0.5rem' }}>{copiedJsx ? "Copied JSX to clipboard!" : "Copy React JSX to clipboard"}</Button>
                <div className={styles.codeRender}>
                    {suggestionData.jsx}
                </div>
            </div>}
        </>
    );
}