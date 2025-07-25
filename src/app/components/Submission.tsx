"use client";

import { Button, Flag, FlagCloseButton, FlagContent, FlagIcon, InputContainer, Label, ScreenReader, Textarea, Typography, Utility } from "@visa/nova-react";

import styles from '../page.module.scss';
import { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";

interface SuggestionResponse {
    query: string;
    jsx: string;
}

export function Submission() {
    const [sending, setSending] = useState<boolean>(false);
    const [suggestionInput, setSuggestionInput] = useState<string>("");
    const [error, setError] = useState<null | string>(null);
    const [suggestionData, setSuggestionData] = useState<null | SuggestionResponse>(null);

    const handleOnSubmit = async () => {
        setSending(true);
        try {
            setSuggestionData(null);
            const response = await fetch ('/api/suggestion?' + new URLSearchParams({
                query: suggestionInput
            }).toString(), {
                method: "GET"
            });

            if (!response.ok) {
                setError("There was an error performing the request.");
            }

            const data: SuggestionResponse = await response.json();
            setSuggestionData(data);
            setSuggestionInput("");
        } catch (err) {
            console.error("Error getting suggestion:", err);
            setError("An unexpected error occurred.");
        } finally {
            setSending(false);
        }
    };

    const handleOnClickCannedSuggestion = (suggestion: string) => {
        setSuggestionInput(suggestion);
        handleOnSubmit();
    };

    const { isCopied: copiedJsx, handleCopy: handleCopyJsx } =
        CopyToClipboard();

    return (
        <>
            <div className={styles.contentSection}>
                {/* <Typography variant="display-2">Component Suggester</Typography> */}
                <Typography variant="headline-1">What will you make today?</Typography>
                <span className="v-typography-body-2-medium">
                    Describe what sort of interface you need, and we'll put it together for you using <a aria-label="VISA's design system (opens a new tab)" className="v-link v-link-no-underline" href="https://design.visa.com" rel="noreferrer noopener" target="_blank">
                        VISA's design system
                        <svg aria-hidden="true" className={"v-icon v-icon-generic v-icon-tiny v-icon-information"} focusable="false" viewBox="0 0 16 16">
                            <svg v-icon-visa-maximize-tiny={"true"} aria-label="visa maximize tiny" />
                        </svg>
                    </a>.
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
                        <Button onClick={() => handleOnClickCannedSuggestion("Mobile navigation links")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Mobile navigation links</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Contact us form")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Contact us form</Button>
                        <Button onClick={() => handleOnClickCannedSuggestion("Error toast with action button")} colorScheme="secondary" alternate style={{ position: 'unset', padding: '0rem 1rem' }}>Error toast with action button</Button>
                    </div>
                </div>

            </div>
            {sending && <div className={styles.contentSection}>
                <Typography variant="headline-2">Loading suggested components...</Typography>
            </div>}
            {suggestionData && suggestionData.jsx && <div className={styles.contentSection}>
                <Typography variant="headline-1">Suggested Components</Typography>
                <span className="v-typography-body-2-medium">
                    {suggestionData.query}
                </span>
                <br/>
                <Typography variant="headline-3">Preview</Typography>
                <div dangerouslySetInnerHTML={{__html: suggestionData.jsx}} />
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