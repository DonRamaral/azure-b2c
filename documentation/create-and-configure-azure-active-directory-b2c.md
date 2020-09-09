# Create and configure Azure App Service

## Summary
The application strongly depends on Azure Active Directory B2C (AAD B2C), so we need to configure this resource on Azure to provide Identity Management and Authentication mechanisms to the application.
 
## Execution steps
 
 1. Microsoft documentation provides a [Tutorial: Create an Azure Active Directory B2C tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant) that can be used to accomplish this task.

2. When you are creating the AAD B2C Tenant you may have noticed in the same screen you have selected *Create a new Azure AD B2C Tenant*, you can also *Link an existing Azure AD B2C Tenant to my Azure Subscription*. So that is the second steps and it is straight forward, you need to provide the AAD B2C you just created an Azure Subscription and a Resource Group.

3. Now it is time to [Tutorial: Register a web application in Azure Active Directory B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga) , register the fallowing Redirect URIs:

    - https://jwt.ms
    - Your azure Web App url + /login
    - http://localhost:4200/login

    This is how AAD B2C knows what are the URIs that are allowed to process the JWT token on redirects, other URI that not those one are going to result in an error message when trying to redirect from Angular App to B2C Login Page.

4. Now we are going to execute some the below steps to configure the AAD B2C Identity Experience Framework to work with our application:

    - [Add signing and encryption keys](https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-get-started?tabs=applications#add-signing-and-encryption-keys)
    - [Create the signing key](https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-get-started?tabs=applications#create-the-signing-key)
    - [Create the encryption key](https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-get-started?tabs=applications#create-the-encryption-key)	
    - [Register the IdentityExperienceFramework application](https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-get-started?tabs=applications#register-the-identityexperienceframework-application)
    - [Register the ProxyIdentityExperienceFramework application](https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-get-started?tabs=applications#register-the-proxyidentityexperienceframework-application)

    **Note:** Do not execute steps that are not listed above.

5. Now we need to create a policy key for TLS Mutual on AAD B2C, Microsoft documentation provides this section [Add a client certificate policy key](https://docs.microsoft.com/en-us/azure/active-directory-b2c/secure-rest-api#add-a-client-certificate-policy-key) where we learn how to do that. I have created the policy key with the same name that is used in this section, so there is no need to update custom policy files.