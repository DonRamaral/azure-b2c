# Create and configure Azure SQL Server

## Summary

The [Azure.B2C.Api](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Api) project uses Azure SQL Server database where we need to deploy the scripts [Azure.B2C.Database](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Database), the database project will create a USER table that we will use to manage the users of the application.

## Execution step

**Before we beginning:** When you are creating the Azure SQL Server database within the *Network* tab you need to set up the *Allow Azure services and resources to access this server* option to *yes*, so that, the Azure Function that we are going to create in further steps can have access to the database with no need to configure database firewall.

1. Microsoft documentation provides the necessary steps to create an Azure SQL Server database in [Quickstart: Create an Azure SQL Database single database](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal).

2. Once the database is create we need to *publish* the [Azure.B2C.Database](https://github.com/DonRamaral/azure-b2c/tree/master/b2c-api/Azure.B2C.Database) in the database. You can achieve this opening the project on Visual Studio >> Right Click on Project Name >> Publish and provide the connection string to your data base or just open a new query to you database in your preferred SQL Management Tools and execute the script: 

```sql
CREATE TABLE [dbo].[USER] (
    [USER_ID] INT IDENTITY (1, 1) NOT NULL,
    [FIRST_NAME] VARCHAR (100) NOT NULL,
    [LAST_NAME] VARCHAR (100) NOT NULL,
    [EMAIL] VARCHAR (100) NOT NULL,
    [INTERNAL] BIT NOT NULL,
    [ACTIVE] BIT NOT NULL,
    [INVITATION_URL] NTEXT
);
```