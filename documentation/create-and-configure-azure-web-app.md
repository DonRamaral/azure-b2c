# Create and configure Azure App Service

## Summary

The [Azure.B2C.Api](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Api) can be published as an Azure Web App, it provides the *users* controller and a *oidc* controller that will be used by Azure B2C to verify whether or not the token hint is signed by the right certificate. 

## Execution step

1. Microsoft documentation describes how to publish an app as an Azure Web App here in [Publish your web app](https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore?pivots=platform-windows#publish-your-web-app), keep in mind the project was developed using .Net Core 3.1 and instead of using the documentation sample you are going to use the [Azure.B2C.Api](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Api) project.

2. Once create the Azure Web App we need to upload our self-signed certificate that Azure Web App so we can use it to sign JWT token hints and also use the certificate in *oidc* controller. To perform this tasks you will use either Azure Cloud Shell or Azure Powershell  and execute the fallowing command:

    ```powershell
    az webapp config ssl upload --name '<web-app-name>' --resource-group '<web-app-resource-group-name>' --certificate-file '<path-to-PFX-file>' --certificate-password '<self-signed-certificate-password>' --query thumbprint
    ```
    **Note:** if you are using Azure Cloud Shell don't forget to upload the self-signed-certificate before execute the command above.

3. As you can see at the end of the previous command we are querying the thumbprint of the self-signed certificate, we are going to use it to create Environment Variables to our Azure Web App, the first one will be WEBSITE_LOAD_CERTIFICATES using the command:

    ```powershell
    az webapp config appsettings set --name '<web-app-name>' --resource-group '<web-app-resource-group-name>' --settings WEBSITE_LOAD_CERTIFICATES='<self-signed-certificate-thumbprint>'
    ```
4. We also need to configure the *MyDb* connection string, we can do it using the command:

    ```powershell
    az webapp config connection-string set -g '<web-app-resource-group-name>' -n '<web-app-name>' -t SQLServer --settings MyDb='<azure-sql-server-connection-string>'
    ```
    **Note:** Azure Web App and Azure Function provides a manner to access connections strings as Environment Variables fallowing the format SQLCONNSTR_ + your-connection-string-name, so every time we need to access the connection string in the application we are using the fallowing code:
    ```csharp
    var connectionString = Environment.GetEnvironmentVariable("SQLCONNSTR_MyDb");