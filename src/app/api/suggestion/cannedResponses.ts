// The stubbed responses that the user would use to put into their React project
export const cannedResponses = {
  responsiveLoginFormWithRememberMe: `<Utility vFlex vFlexCol vGap={8}>
                    <Utility vFlex vFlexCol vGap={4}>
                        <Label htmlFor={"login-username"}>Username (required)</Label>
                        <InputContainer>
                            <Input aria-required="true" id={"login-username"} type="text" /> 
                        </InputContainer>
                    </Utility>
                    <Utility vFlex vFlexCol vGap={4}>
                        <Label htmlFor={"login-password"}>Password (required)</Label>
                        <InputContainer>
                            <Input aria-required="true" defaultValue="" id={"login-password"} type={'password'} />
                            <Button aria-label={'show text'} buttonSize="small" colorScheme="tertiary" iconButton >
                                <VisaPasswordShowTiny /> 
                            </Button>
                        </InputContainer>
                    </Utility>
                    <Utility vAlignItems="center" vFlex vGap={2} vMarginTop={4}>
                        <Checkbox checked={false} id={"login-checkbox-remember-me"} />
                        <Label htmlFor={"login-checkbox-remember-me"}>Remember me</Label>
                    </Utility>
                </Utility>`,
  colorPicker: `<Utility vFlex vAlignItems="center" vGap={6}>
      <UtilityFragment vFlexGrow0 style={{ flexBasis: '5%' }}>
        <Input id={"color-picker"} type="color" />
      </UtilityFragment>
      <Label htmlFor={"color-picker"}>Your favorite color</Label>
      <Utility vAlignItems="center" vFlex vFlexCol vGap={2}>
      <Button 
        aria-labelledby={"color-picker-label"}
        aria-label="Color selector accessibility information"
        colorScheme="tertiary"
        iconButton
        >
          <VisaAccessibilityTiny rtl />
        </Button>
      </Utility>
    </Utility>`,
  contactUsForm: `<Utility vFlex vFlexCol vGap={8}>
                <Utility vFlex vFlexCol vGap={4}>
                <Label htmlFor={"contact-us-name"}>Name (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={"contact-us-name"} type="text" />
      </InputContainer>
      </Utility>
      <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={"contact-us-email"}>Email (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={"contact-us-email"} type="text" />
      </InputContainer>
    </Utility>
    <Utility vFlex vFlexCol vGap={4}>
                    <Label htmlFor={"contact-us-message-input"}>Message (required)</Label>
                    <InputContainer className="v-flex-row">
                        <Textarea aria-required="true" fixed id={"contact-us-message-input"} name={"user-input"} style={{ blockSize: '130px' }} placeholder={"Enter your message"} />
                    </InputContainer>
                    
                </Utility>
                <Utility vFlex vFlexCol vGap={4}>
                <Button>Submit</Button>
                    
                </Utility>
                </Utility>`,
  errorToastWithActionButton: `<Flag messageType="error">x
      <FlagIcon />
      <FlagContent className="v-pl-2 v-pb-2" role="alert" aria-live="polite">
        <ScreenReader>error</ScreenReader>
        <Typography className="v-mb-8">There was an error processing your request.</Typography>
        <Button colorScheme="secondary">Get help</Button>
      </FlagContent>
      <FlagCloseButton />
    </Flag>`,
}

// This is a hack that is necessary with this stubbed project because the JSX above is not getting rendered/compiled to the real HTML when we dangerouslySetInnerHTML (in Submission.tsx)
export const cannedResponsesCompiled = {
  responsiveLoginFormWithRememberMe: `<div class="v-flex v-flex-col v-gap-8"><div class="v-flex v-flex-col v-gap-4"> <label class="v-label" for="login-username">Username (required)</label> <div class="v-surface v-input-container"> <input class="v-input" aria-required="true" id="login-username" type="text"> </div> </div> <div class="v-flex v-flex-col v-gap-4"> <label class="v-label" for="login-password">Password (required)</label> <div class="v-surface v-input-container"> <input class="v-input" aria-required="true" id="login-password" type="password" value=""> <button class="v-button v-button-small v-button-tertiary v-button-icon" aria-label="show text"> <svg class="v-icon v-icon-visa v-icon-tiny v-icon-password-show" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M4.2368 5.8188C6.22885 3.54217 9.77051 3.54217 11.7626 5.81881L13.6709 7.99977L11.7626 10.1807C9.7705 12.4574 6.22885 12.4574 4.23679 10.1807L2.32845 7.99977L4.2368 5.8188ZM13.2677 4.5018C10.4788 1.31451 5.52052 1.3145 2.73164 4.50179L0.535198 7.01202C0.0403522 7.57756 0.0403494 8.42199 0.535197 8.98753L2.73164 11.4978C5.52052 14.685 10.4788 14.685 13.2677 11.4978L15.4642 8.98753C15.959 8.42199 15.959 7.57756 15.4642 7.01202L13.2677 4.5018ZM7.99968 10C9.10425 10 9.99968 9.10457 9.99968 8C9.99968 6.89543 9.10425 6 7.99968 6C6.89511 6 5.99968 6.89543 5.99968 8C5.99968 9.10457 6.89511 10 7.99968 10Z"></path></svg> </button> </div> </div> <div class="v-align-items-center v-flex v-gap-2 v-mt-4"> <input class="v-checkbox" id="login-checkbox-remember-me" type="checkbox"> <label class="v-label" for="login-checkbox-remember-me">Remember me</label> </div> </div>`,
  colorPicker: `<div class="v-align-items-center v-flex v-gap-6"><input class="v-input v-flex-grow-0" id="color-picker" type="color" style="flex-basis: 5%;"><label class="v-label" for="color-picker">Your favorite color</label><div class="v-align-items-center v-flex v-flex-col v-gap-2"><button class="v-button v-button-tertiary v-button-icon" aria-labelledby="color-picker-label" aria-label="Color selector accessibility information"><svg class="v-icon v-icon-visa v-icon-tiny v-icon-accessibility v-icon-rtl" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M3.75736 3.75736C1.41421 6.1005 1.41421 9.89949 3.75736 12.2426L2.34315 13.6569C-0.781049 10.5327 -0.781049 5.46734 2.34315 2.34315C5.46734 -0.781049 10.5327 -0.781049 13.6569 2.34315C16.781 5.46734 16.781 10.5327 13.6569 13.6569L12.2426 12.2426C14.5858 9.8995 14.5858 6.1005 12.2426 3.75736C9.89949 1.41421 6.1005 1.41421 3.75736 3.75736Z"></path><path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8ZM8 8H12V10H9V10.9628L10.8844 14.5332L9.11562 15.4668L8 13.353L6.88438 15.4668L5.11562 14.5332L7 10.9628V10H4V8H8Z"></path></svg></button></div></div>`,
  contactUsForm: `<div class="v-flex v-flex-col v-gap-8"><div class="v-flex v-flex-col v-gap-4"><label class="v-label" for="contact-us-name">Name (required)</label><div class="v-surface v-input-container"><input class="v-input" aria-required="true" id="contact-us-name" type="text"></div></div><div class="v-flex v-flex-col v-gap-4"><label class="v-label" for="contact-us-email">Email (required)</label><div class="v-surface v-input-container"><input class="v-input" aria-required="true" id="contact-us-email" type="text"></div></div><div class="v-flex v-flex-col v-gap-4"><label class="v-label" for="contact-us-message-input">Message (required)</label><div class="v-surface v-input-container v-flex-row"><textarea class="v-input v-input-resize-none" aria-required="true" id="contact-us-message-input" name="user-input" placeholder="Enter your message" style="block-size: 130px;"></textarea></div></div><div class="v-flex v-flex-col v-gap-4"><button class="v-button">Submit</button></div></div>`,
  errorToastWithActionButton: `<div class="v-message v-message-error v-flag"><svg class="v-icon v-icon-visa v-icon-low v-icon-error v-message-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="false" aria-label="Error"><path class="v-icon-secondary" d="M12 24C5.38 24 0 18.62 0 12C0 5.38 5.38 0 12 0C18.62 0 24 5.38 24 12C24 18.62 18.62 24 12 24ZM12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"></path><path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M11 6V14H13V6H11ZM12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"></path><defs><clipPath><rect width="24" height="24"></rect></clipPath></defs></svg><div class="v-message-content v-pl-2 v-pb-2" role="alert" aria-live="polite"><span class="v-screen-reader">error</span><p class="v-mb-8">There was an error processing your request.</p><button class="v-button v-button-secondary">Get help</button></div><button class="v-button v-button-small v-button-tertiary v-button-icon v-button-subtle -v-mt-8 -v-mr-8" aria-label="Close"><svg class="v-icon v-icon-visa v-icon-tiny v-icon-close" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path class="v-icon-primary" d="M7.99995 9.4149L13.9497 15.3646L15.3639 13.9504L9.41417 8.00069L15.3639 2.05094L13.9497 0.636723L7.99995 6.58647L2.0502 0.636719L0.635986 2.05093L6.58574 8.00069L0.635993 13.9504L2.05021 15.3646L7.99995 9.4149Z"></path><defs><clipPath><rect width="16" height="16" transform="translate(0 0.000488281)"></rect></clipPath></defs></svg></button></div>`
}