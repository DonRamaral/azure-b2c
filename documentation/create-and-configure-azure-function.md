# Create and configure Azure Function

## Summary

The [Azure.B2C.Function](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Function) provides the GetUserByEmail method that will be used by AAD B2C to retireve additional claims when creating the JWT token.

## Execution step

1. Microsoft documentation describes how to publish an Azure Function here in  [Publish the project to Azure](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio#publish-the-project-to-azure), keep in mind the project was developed using .Net Core 3.1 and instead of using the documentation sample you are going to use the [Azure.B2C.Api](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Api) project.

2. Now we need to configure Environment Variables in our Azure Function using the fallowing commands:

    ```powershell
    az webapp config connection-string set -g '<function-resource-group-name>' -n '<function-name>' -t SQLServer --settings MyDb='<azure-sql-server-connection-string>' # There is no function app config connection-string command
    
    az functionapp config appsettings set --name '<function-name>' --resource-group '<function-resource-group-name>' --settings CERT_SUBJECT='CN=<self-signed-certificate-subject>'
    
    az functionapp config appsettings set --name  '<function-name>' --resource-group '<function-resource-group-name>' --settings CERT_ISSUER='CN=<self-signed-certificate-issuer>'
    
    az functionapp config appsettings set --name  '<function-name>' --resource-group '<function-resource-group-name>' --settings CERT_THUMBPRINT='<self-signed-certificate-thumbprint>'
    ```
3.  Now we need to enable client certificates to this Azure Function, that means the function will exchange certificates using the *X-ARR-ClientCert* header.

    ```powershell
    az functionapp update --set clientCertEnabled=true --name '<function-name>' --resource-group '<function-resource-group-name>'
    ```
4. Now we need to set up the TLS version to 1.2 with the fallowing commands:

    ```powershell
    az webapp config set -g '<function-resource-group-name>' -n '<function-name>' --min-tls-version 1.2
    ```
5. I couldn't find how to set up *HTTPS Only* to *On* using azure cli, so this step needs to be done manually be opening your Azure Function in Azure Portal, under *Settings* in the left menu of the Azure Function click in *TLS/SSL settings* and set the *HTTPS Only* option to *On*.