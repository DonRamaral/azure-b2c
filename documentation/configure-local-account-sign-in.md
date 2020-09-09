# Configure Local Account Sign In

## Summary

Previously we registered two application on Azure AD B2C that are *IdentityExperienceFramework* and *ProxyIdentityExperienceFramework* now we need its *Application (client) ID* to configure the local sign in.

## Execution step

1. To find it go to your Azure Portal type *Azure AD B2C* in the search box and open you *Azure AD B2C*, now click in *App registration* and those apps will be displayed so you can copy the *Application (client) ID*.

2. Open the *TrustFrameworkExtensions.xml* custom policy and find the *TechnicalProfile* named *login-NonInteractive* and replace the *{Proxy-Identity-Experience-Framework}* by its respective value and the *{Identity-Experience-Framework}* by its respective value as well. Here is an example of what we will find:

    ```xml
    <ClaimsProvider>
    	<DisplayName>Local Account SignIn</DisplayName>
    	<TechnicalProfiles>
    		<TechnicalProfile  Id="login-NonInteractive">
    			<Metadata>
    				<Item  Key="client_id">{Proxy-Identity-Experience-Framework}</Item>
    				<Item  Key="IdTokenAudience">{Identity-Experience-Framework}</Item>
    			</Metadata>
    			<InputClaims>
    				<InputClaim  ClaimTypeReferenceId="client_id"  DefaultValue="{Proxy-Identity-Experience-Framework}"  />
    				<InputClaim  ClaimTypeReferenceId="resource_id"  PartnerClaimType="resource"  DefaultValue="{Identity-Experience-Framework}"  />
    			</InputClaims>
    		</TechnicalProfile>
    	</TechnicalProfiles>
    </ClaimsProvider>
    ```