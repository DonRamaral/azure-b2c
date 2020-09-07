# Summary
The purpose of this project is document how I have secured and angular application and .Net Core Web Api using [Azure Active Directory B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) (AAD B2C) as an Identity and Access Management Solution and Angular Microsoft Authentication Library [Angular MSAL](https://www.npmjs.com/package/@azure/msal-angular).

I am accomplishing the fallowing goals in this project:
- Implement Azure Active Directory B2C as an Identity and Access Management resource
  - Implement an invitation user journey to external users (customers);
  - Implement a self-reset password user journey;
- Implement Authentication and Claims consumption through a .Net Core API
  - Create a service to generate external user invitation urls;
- Implement an Azure Function to execute my own business logic by AAD B2C and injects its output in jwt tokens;
	- Implement TLS mutual to secure AAD B2C and Azure Function communication
- Implement and Angular application that secures routes using Angular MSAL
  - Configure Angular MSAL to refresh token silently;
    - Configure Angular MSAL login hint;

## Configuration
Inside the [documentation folder](https://github.com/DonRamaral/azure-b2c/tree/master/documentation) there are instructions to configure all the resources that are necessary to run this project and instructions to update configuration files and custom policies.