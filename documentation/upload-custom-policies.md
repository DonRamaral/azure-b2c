# Upload Custom Policies

## Summary
You can only upload custom policy files if you find the fallowing order:
- TrustFrameworkBase.xml
- TrustFrameworkExtensions.xml
- Relying party files

## Execution Step

1. Select the Identity Experience Framework menu item in your B2C tenant in the Azure portal
2. Select Upload custom policy and repeat this process for each one of those files in the fallowing order:
	- TrustFrameworkBase.xml
	- TrustFrameworkExtensions.xml
	- SignUpOrSignin.xml
	- SignUpInvitation.xml
	- PasswordReset.xml
	
	**Note:** TrustFrameworkBase and TrustFrameworkExtensions needs to be uploaded first because all the other files make references to it.