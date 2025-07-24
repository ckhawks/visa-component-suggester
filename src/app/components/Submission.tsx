"use client";

import { Button, InputContainer, Label, ScreenReader, Textarea, Typography, Utility } from "@visa/nova-react";

import styles from '../page.module.scss';

export function Submission () {
    return (<div className={styles["content-section"]}>
        {/* <Typography variant="display-2">Component Suggester</Typography> */}
        <Typography variant="headline-1">What will you make today?</Typography>
        <br/>

        <Utility vFlex vFlexCol vGap={4}>
          <ScreenReader><Label htmlFor={"user-input"}>Suggestion input (required)</Label></ScreenReader>
          
          <InputContainer className="v-flex-row">
            <Textarea aria-required="true" fixed id={"user-input"} name={"user-input"} style={{ blockSize: '130px', padding: '1rem'}} placeholder={"Responsive login form with remember me"} />
          </InputContainer>
          <Button>Go!</Button>
        </Utility>
      </div>)
}