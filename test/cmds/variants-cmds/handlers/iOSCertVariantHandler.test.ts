import {IOSVariant} from '@aerogear/unifiedpush-admin-client/dist/src/variants';
import {UnifiedPushAdminClientMock} from '../../../mocks/MockUnifiedPushAdminClient';
import {IOSCertVariantHandler} from '../../../../src/cmds/variants-cmds/handlers/iOSCertVariantHandler';

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  UnifiedPushAdminClientMock.mockClear();
});

describe('IOSCertVaraintHandler', () => {
  it('Should have everything to create a iOSVariant', async () => {
    const handler = new IOSCertVariantHandler();
    const variant = (await handler.handle(
      {'auth-type': 'basic', url: 'http://localhost:9999', _: [''], $0: ''},
      {
        name: 'test-ios',
        certificate: '/path/to/cert.p12',
        password: 'password',
        production: false,
        type: 'ios',
      } as IOSVariant
    )) as IOSVariant;
    expect(variant).toBeDefined();
    expect(variant.name).toEqual('test-ios');
    expect(variant.type).toEqual('ios');
    expect(variant.certificate).toEqual('/path/to/cert.p12');
    expect(variant.password).toEqual('password');
    expect(variant.developer).toEqual('TEST-DEVELOPER');
    expect(variant.production).toBe(false);
  });
});