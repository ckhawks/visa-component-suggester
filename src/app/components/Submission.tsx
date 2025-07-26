"use client";

import { Button, Checkbox, Flag, FlagCloseButton, FlagContent, FlagIcon, Input, InputContainer, Label, Link, ScreenReader, Textarea, Tooltip, Typography, Utility, UtilityFragment } from "@visa/nova-react";

import styles from '../page.module.scss';
import { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";
import { VisaAccessibilityTiny, VisaMaximizeTiny, VisaPasswordHideTiny, VisaPasswordShowTiny } from "@visa/nova-icons-react";

interface SuggestionResponse {
    query: string;
    jsx: string;
    jsxCompiled?: string;
}

export function Submission() {
    const [sending, setSending] = useState<boolean>(false);
    const [suggestionInput, setSuggestionInput] = useState<string>("");
    const [error, setError] = useState<null | string>(null);
    const [suggestionData, setSuggestionData] = useState<null | SuggestionResponse>(null);

    const handleOnSubmit = async (queryParam?: string) => {
        setSending(true);
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
            console.log("suggestionInput", suggestionInput);
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
            <div className={styles.contentSection}>
                {/* <Typography variant="display-2">Component Suggester</Typography> */}
                <Typography variant="headline-1">What will you make today?</Typography>
                <span className="v-typography-body-2-medium">
                    Describe what sort of interface you need, and we'll put it together for you using{" "}
                    <Link
                        aria-label="VISA's design system (opens in a new tab)"
                        href="./link"
                        noUnderline
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VISA's design system
                        <VisaMaximizeTiny />
                    </Link>.
                </span>
                <br />
                <br />

                <Utility vFlex vFlexCol vGap={4}>
                    <ScreenReader><Label htmlFor={"user-input"}>Suggestion input (required)</Label></ScreenReader>

                    <InputContainer className="v-flex-row">
                        <Textarea value={suggestionInput} onChange={(e) => setSuggestionInput(e.currentTarget.value)} aria-required="true" fixed id={"user-input"} name={"user-input"} style={{ blockSize: '130px', padding: '1rem' }} placeholder={suggestionData ? "What are you imagining next?" : "Responsive login form with remember me"} />
                    </InputContainer>
                    <Button disabled={sending || suggestionInput.length == 0} onClick={() => handleOnSubmit()}>Go!</Button>
                </Utility>

                <br />
                <div style={{ display: '', boxSizing: 'border-box', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="v-typography-body-2-medium" style={{ paddingBottom: '0.5rem' }}>
                        Just want to see how it works? Try a sample below.
                    </div>
                    <div className={styles.cannedSuggestionButtons}>
                        <Button onClick={() => handleOnClickCannedSuggestion("Responsive login form with remember me")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Responsive login form with remember me</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Contact us form")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Contact us form</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Color picker")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Color picker</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Error toast with action button")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Error toast with action button</Button>
                    </div>
                </div>

            </div>
            {sending && <div className={styles.contentSection}>
                <Typography variant="headline-2">Loading suggested components...</Typography>
            </div>}
            {suggestionData && suggestionData.jsx && suggestionData.jsxCompiled && <div className={styles.contentSection}>
                {/* <Typography variant="headline-1">Suggested Components</Typography> */}
                <Typography variant="headline-1">{suggestionData.query}</Typography>
                {/* <span className="v-typography-body-2-medium">
                    {suggestionData.query}
                </span> */}
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