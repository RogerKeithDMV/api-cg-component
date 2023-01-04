[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# api-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to get a response from an API, requesting information to certain URL and sending the required data to be processed and obtain the expected result, it may require that some grants are entered in order to have access to the service it will depend on the API owner.

## Features

- get the response of an API.

## Libraries

- [errorhandler-nxg-cg](https://www.npmjs.com/package/errorhandler-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [api-cg-lib](https://www.npmjs.com/package/api-cg-lib)

> For more detail of the functionality review **[api-cg-lib](https://github.com/CloudGenUser/api-cg-lib/blob/main/README.md)** documentation

## Installation

Docker image: cloudgenuser/api-component:1.0.0

Functions
- trigger:
  - api_source
- action:
  - api

Fields:
- method: This specifies if the method of the request, it can be one of the next: GET, POST, PUT, DELETE, or BATCH.
- api: In this attribute must be specified the path or URL to connect with the API.
- addData: It can be specified an additional parameter or content that could be required by the API as part of the request. The API owner must provide the required information to use the API and obtain the expected result.
- auth: If required by the API this parameter allows to define if it requires a token or credentials to be used to connect to the API. If this parameter is submited, the parameter _"authType"_ is mandatory.
- authType: This parameter specifies the type of authentication like bearer, basic, oath or other according with the authentication method of the API. If this parameter is set the _"auth"_ parameter is required
