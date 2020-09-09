# Web UI configuration files

## Summary

We have a couple of entries in the [environment.config.json](https://github.com/DonRamaral/azure-b2c/blob/master/b2c-app/src/assets/config/environment.config.json) and [msal.config.json](https://github.com/DonRamaral/azure-b2c/blob/master/b2c-app/src/assets/config/msal.config.json) file that needs to be update according to your environment.

Here is environment.config.json itself:

```json
{
  "production": false,
  "baseUrl": "{api-url}",
  "b2cAuthenticationFlow": "{b2c-signup-signin-policy}",
  "b2cForgotPasswordFlow": "{b2c-reset-password-policy}"
}
```
And here is what is expected to be replace:
- **baseUrl** : This is the Web API url, if you are running locally you can use your localhost or you can configure to use your published Web API url
- **b2cAuthenticationFlow**: You can use B2C_1A_Signup_Signin that is our previously configured custom policy
- **b2cForgotPasswordFlow**: You can use B2C_1A_PasswordReset that is our previously configured custom policy

Here is msal.config.json itself:

```json
{
  "clientID": "{b2c-app-client-id}",
  "authority": "https://{b2c-tenant-name}.b2clogin.com/tfp/{b2c-tenant-name}.onmicrosoft.com/{b2c-signup-signin-policy}",
  "redirectUri": "http://localhost:4200/login",
  "validateAuthority": false,
  "cacheLocation": "localStorage",
  "postLogoutRedirectUri": "http://localhost:4200/login",
  "navigateToLoginRequestUrl": false,
  "popUp": false,
  "consentScopes": [
    "user_impersonation",
      "https://{b2c-tenant-name}.onmicrosoft.com/api/user_impersonation"
  ],
  "protectedResourceMap": [
    [
      "{api-url}",
      [
        "{b2c-app-client-id}"
      ]
   ]
  ],
  "unprotectedResources": [
    "/assets/"
  ],
  "loadFrameTimeout": 900000,
  "renewTokenBeforeExpires": 420000
}
```
And here is what is expected to be replace:
- **clientID**: Use the Application Client Id registered on Azure AD B2C that contains the Reply URLs
- **authority**: Replace the token {b2c-tenant-name} by your Azure AD B2C tenant name and use B2C_1A_Signup_Signin as a replaceable value for {b2c-signup-signin-policy}
- **redirectUri**:  This is the redirect URL to login success cases, if you are running locally you can use http://localhost:4200/login or you can change to https://*{published-web-ui-app}*/login 
- **validateAuthority**: Flag to control whether or not validate the authority, msal package recommends not validate
- **cacheLocation**: Where the JWT token and other information is going to be stored
- **postLogoutRedirectUri**:  Where you want to redirect the user in a log out ocurrence
- **navigateToLoginRequestUrl**: Flag to control whether or not redirected user to redirectUri after login completion
- **popUp**: Flag to control whether or not display the login in a popup
- **consentScopes**: In case the application work with scopes, that is not the case, list the scopes the app needs here
- **protectedResourceMap**: List of resources that requires authentication bearer, you can replace the {api-url} by you localhost Web API or use the Cloud Address, for {b2c-app-client-id} you can use the Application Client Id registered on Azure AD B2C that contains the Reply URLs. This is necessary in case you want use Angular MSAL interceptor, in this project we have created our own interceptor due to the necessity to provide a login hint parameter to the MSAL acquire token silently process.
- **unprotectedResources**: List of resources that do not require authentication bearer
- **loadFrameTimeout**: How long in milliseconds should the iframe wait until consider the refresh as a timeout
- **renewTokenBeforeExpires**: How long in milliseconds the application should try to renew a token before it expires