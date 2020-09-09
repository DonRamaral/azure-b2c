# Update custom policy files

## Summary
This project contains its own custom policy files within the directory [b2c-custom-policies](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-custom-policies), here we will find 5 files that are:

- TrustFrameworkBase.xml - contains lots of claims, formatters and other configurations that we are constantly using in the other files and that is why it is inherited by the other files, rarely we need to change something inside this policy after the setup.
- TrustFrameworkExtensions.xml - This file is where most configuration changes are made, so avoid change the base file and try to keep changes in this one.
- SignUpOrSignin.xml - Relying party file, contains instructions to create the JWT token and its expected claims by executing a *TechnicalProfile*.
- SignUpInvitation.xml - Relying party file, it was created using [SignUp with email invitation](https://github.com/azure-ad-b2c/samples/tree/master/policies/invite) from Azure AD B2C samples repository, it contains instructions to valid a URL point to ADD B2C that contains a *id_token_hint* and provide the Signup form with user information as read-only fields, where the user just needs to create their own password to access the application.   
- PasswordReset.xml- Relying party file, contains instructions to create the JWT token and its expected claims by executing a *TechnicalProfile*.

Every file contains some parameters and attributes that changes according to your environment, here is the lists of what needs to be changed and where we are are going to find the correct data to be updated: 

**TenantId:** It is the Azure B2C Domain Name, usually fallow the format ***{b2c-tenant-name}**.onmicrosoft.com*, we can find it on Azure AD B2C resource in Domain Name attribute

**TenantObjectId:** It is the Azure Active Directory Tenant Id where the Azure Active Directory B2C is enabled, within the Azure Portal move the B2C tenant and open the Azure Active Directory then click in properties under the Manage section and copy the *Directory ID*

**PolicyId:** ***[Informational only]*** It is the name of the custom policy, once the file is uploaded to Identity Experience Framework this is that name that is going to appear in the list, not the file name. In additional, you should try to use the format *B2C_1A_Policy-Name*

**BasePolicy >> PolicyId:** ***[Informational only]*** It is the Trust Framework Extensions Custom policy name for example *B2C_1A_TrustFrameworkExtensions*

**PublicPolicyUri:** It is the full Uri to the custom policy, it must fallow the format *https://**{tentant-name}**.onmicrosoft.com/**{policy-name}***

## Execution step

Update Custom Policy files according previous instructions.

1. TrustFrameworkBase.xml
  - TenantId --> {b2c-tenant-name}
  - PublicPolicyUri --> {b2c-tenant-name}
    ```xml
    <TrustFrameworkPolicy
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
    PolicySchemaVersion="0.3.0.0"
    TenantId="{b2c-tenant-name}.onmicrosoft.com"
    PolicyId="B2C_1A_TrustFrameworkBase"
    PublicPolicyUri="http://{b2c-tenant-name}.onmicrosoft.com/B2C_1A_TrustFrameworkBase">
    ```
2. TrustFrameworkExtensions.xml
  - TenantId --> {b2c-tenant-name}
  - PublicPolicyUri --> {b2c-tenant-name}
  - TenantObjectId --> {azure-tenant-that-hosts-b2c}
  - BasePolicy >> TenantId --> {b2c-tenant-name}
    ```xml
    <TrustFrameworkPolicy
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
    PolicySchemaVersion="0.3.0.0"
    TenantId="{b2c-tenant-name}.onmicrosoft.com"
    PolicyId="B2C_1A_TrustFrameworkExtensions"
    PublicPolicyUri="http://{b2c-tenant-name}.onmicrosoft.com/B2C_1A_TrustFrameworkExtensions"
    TenantObjectId="{azure-tenant-that-hosts-b2c}">
	<BasePolicy>
		<TenantId>{b2c-tenant-name}.onmicrosoft.com</TenantId>
		<PolicyId>B2C_1A_TrustFrameworkBase</PolicyId>
	</BasePolicy>
    ```
3. SignUpOrSignin.xml
  - TenantId --> {b2c-tenant-name}
  - PublicPolicyUri --> {b2c-tenant-name}
  - BasePolicy >> TenantId --> {b2c-tenant-name}
    ```xml
    <TrustFrameworkPolicy
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
    PolicySchemaVersion="0.3.0.0"
    TenantId="{b2c-tenant-name}.onmicrosoft.com"
    PolicyId="B2C_1A_Signup_Signin"
    PublicPolicyUri="http://{b2c-tenant-name}.onmicrosoft.com/B2C_1A_Signup_Signin"
    DeploymentMode="Development"
    UserJourneyRecorderEndpoint="urn:journeyrecorder:applicationinsights">
    <BasePolicy>
    	<TenantId>{b2c-tenant-name}.onmicrosoft.com</TenantId>
    	<PolicyId>B2C_1A_TrustFrameworkExtensions</PolicyId>
    </BasePolicy>  
    ```
4. SignUpInvitation.xml
  - TenantId --> {b2c-tenant-name}
  - PublicPolicyUri --> {b2c-tenant-name}
  - BasePolicy >> TenantId --> {b2c-tenant-name}
    ```xml
    <TrustFrameworkPolicy
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
    PolicySchemaVersion="0.3.0.0"
    TenantId="{b2c-tenant-name}.onmicrosoft.com"
    PolicyId="B2C_1A_Signup_Invitation"
    PublicPolicyUri="http://{b2c-tenant-name}.onmicrosoft.com/B2C_1A_signup_invitation"
    DeploymentMode="Development"
    UserJourneyRecorderEndpoint="urn:journeyrecorder:applicationinsights">
    <BasePolicy>
    	<TenantId>{b2c-tenant-name}.onmicrosoft.com</TenantId>
    	<PolicyId>B2C_1A_TrustFrameworkExtensions</PolicyId>
    </BasePolicy>
    ```
5. PasswordReset.xml
  - TenantId --> {b2c-tenant-name}
  - PublicPolicyUri --> {b2c-tenant-name}
  - BasePolicy >> TenantId --> {b2c-tenant-name}
    ```xml
    <TrustFrameworkPolicy
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
    PolicySchemaVersion="0.3.0.0"
    TenantId="{b2c-tenant-name}.onmicrosoft.com"
    PolicyId="B2C_1A_PasswordReset"
    PublicPolicyUri="http://{b2c-tenant-name}.onmicrosoft.com/B2C_1A_PasswordReset"
    DeploymentMode="Development"
    UserJourneyRecorderEndpoint="urn:journeyrecorder:applicationinsights">
    <BasePolicy>
    	<TenantId>{b2c-tenant-name}.onmicrosoft.com</TenantId>
    	<PolicyId>B2C_1A_TrustFrameworkExtensions</PolicyId>
    </BasePolicy>
    ```