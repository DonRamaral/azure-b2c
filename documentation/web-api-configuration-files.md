# Web API configuration files
## Summary
We have a couple of entries in the [appsettings.json](https://github.com/DonRamaral/azure-b2c/blob/master/b2c-api/Azure.B2C.Api/appsettings.json) file that needs to be update according to your environment.

Here is appsettings.json itself:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedOrigin": "http://localhost:4200",
  "B2CSettings": {
    "B2CTenant": "{b2c-tenant-name}",
    "B2CPolicy": "{b2c-invitation-custom-policy-name}",
    "B2CClientId": "{b2c-app-client-id}",
    "B2CRedirectUri": "http://localhost:4200/login",
    "B2CSignUpUrl": "https://{0}.b2clogin.com/{0}.onmicrosoft.com/{1}/oauth2/v2.0/authorize?client_id={2}&nonce={4}&redirect_uri={3}&scope=openid&response_type=id_token",
    "Authority": "https://{0}.b2clogin.com/{0}.onmicrosoft.com/{1}/v2.0/",
    "Issuer": "{app-address-that-holds-oidc-controller}",
    "JwksUri": "{app-address-that-holds-oidc-controller}/.well-known/keys",
    "SigningCertThumbprint": "{certificate-thumbprint}",
    "LinkExpiresAfterMinutes": 20160
  },
  "AllowedHosts": "*"
}
```

And here is what is expected to be replace:
- **AllowedOrigin**: This is the Web UI address that is allowed to use the API without triggering CORS (Cross Origin Resource Share) error, you can keep localhost if you are running locally or change to your published web UI address if intended to run in the cloud 
- **B2CTenant**: Its the name of your Azure AD B2C Tenant
- **B2CPolicy**: It is the name of the invitation policy we have previously configured, in this case *B2C_1A_Signup_Invitation*
- **B2CClientId**: Previously we have configured and App in Azure AD B2C with Reply URLs, here we are going to use its Client ID
- **B2CRedirectUri**: Must be one of the Reply URLs we have registered, if you are running locally you can use localhost
- **B2CSignUpUrl**: Keep as it is
- **Authority**: Keep as it is
- **Issuer**: The app that issued the token we want to validate, in this case we are not validating the issuer here, we validate the token based on the Authority and Audience, so you can either remove or use your published app url
- **JwksUri**: It is the .well-known/keys address so that the Azure AD B2C can use this key to validate the id_token_hind in Invitation flow, will be something similar to https://*{published-api-project-address-that-contains-oidc-controller}*/.well-known/keys
- **SigningCertThumbprint**: it is the thumbprint of the self-signed certificate we have created at the very beginning
- **LinkExpiresAfterMinutes**: this is how long in **minutes** the id_token_hint will take to expires invalidating the invitation URL