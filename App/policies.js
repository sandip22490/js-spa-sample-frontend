/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SignInUserName",
        forgotPassword: "B2C_1A_PasswordResetUserName",
        editProfile: "B2C_1A_ProfileEditUserName"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://{B2C_TENANT_NAME}.b2clogin.com/{B2C_TENANT_NAME}.onmicrosoft.com/B2C_1A_SignInUserName",
        },
        forgotPassword: {
            authority: "https://{B2C_TENANT_NAME}.b2clogin.com/{B2C_TENANT_NAME}.onmicrosoft.com/B2C_1A_PasswordResetUserName",
        },
        editProfile: {
            authority: "https://{B2C_TENANT_NAME}.b2clogin.com/{B2C_TENANT_NAME}.onmicrosoft.com/B2C_1A_ProfileEditUserName"
        }
    },
    authorityDomain: "{B2C_TENANT_NAME}.b2clogin.com"
}