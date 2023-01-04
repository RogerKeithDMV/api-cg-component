const {api,objectApiOpt,objectApiReq} = require('api-cg-lib');
const fs = require('fs');
const path = require('path');
const { convertToUtf8 } = require('utils-nxg-cg/utils/helpers');

describe('Suite to test an api component', () => {
    const expect_api = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokeapiResponse.json'), {encoding: 'utf8'}));
    const expect_api_secure = (fs.readFileSync(path.join(__dirname, 'secureApi.txt'), {encoding: 'utf8'}));

    //arreglar
    //estimulo
    //observar el resultado
    test('test public api response.', async () => {
        let properties = {...objectApiReq};
        properties.method = 'get';
        properties.api = 'https://pokeapi.co/api/v2/pokemon/ditto';
        const data = await api({}, properties, true);
        expect(data).toMatchObject(expect_api);
    });

    test('test public api with wrong url.', async () => {
        let properties = {...objectApiOpt,objectApiReq};
        properties.method = 'get';
        properties.api = 'https://pokeapi.co/api/v2/pokemon/ssdfsdf';
        await expect(api({}, properties, true)).rejects.toThrow();
    });

    test('test private api response without the auth parameter.', async () => {
        let properties = {...objectApiOpt,objectApiReq};
        properties.method = 'get';
        properties.api = 'https://elastic.n3xgen.cgdemos.com/proyect/trxlogs/';
        properties.auth = null;
        properties.authType = "password";
        await expect(api({}, properties, true)).rejects.toThrow();
    });

    test('test private api response without the auth parameter.', async () => {
        let properties = {...objectApiOpt,objectApiReq};
        properties.method = 'get';
        properties.api = 'https://elastic.n3xgen.cgdemos.com/proyect/trxlogs/';
        properties.auth = "basic";
        properties.authType = null;
        await expect(api({}, properties, true)).rejects.toThrow();
    });

    test('test private api response without error.', async () => {
        let properties = {...objectApiOpt,objectApiReq};
        properties.method = 'POST';
        properties.api = 'https://elastic.n3xgen.cgdemos.com/proyect/trxlogs/';
        properties.authType = "Basic";
        properties.auth = "ZWxhc3RpYzplbGFzdGlj";
        properties.addData = {"valorprueba": "prueba"};
        const data = await api({}, properties, true);
        expect(data).not.toBe('error');
    });
})