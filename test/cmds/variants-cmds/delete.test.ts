import {Arguments} from 'yargs';
import {ConsoleMock} from '../../mocks';
import {handler} from '../../../src/cmds/variants-cmds/delete';
import {
  createApplications,
  getAllApplications,
  initMockEngine,
} from '../../mocks/UPSMock';

beforeEach(() => {
  initMockEngine();
  ConsoleMock.init();
  // Clear all instances and calls to constructor and all methods:
  ConsoleMock.mockClear();
});

afterEach(() => {
  ConsoleMock.uninstall();
});

describe('variants delete', () => {
  it('Should delete all variants', async () => {
    createApplications({});

    const testApp = getAllApplications()[3];
    const variantCount = testApp.variants?.length || 0;

    await handler({
      url: 'http://localhost:9999',
      appId: testApp.pushApplicationID,
      _: [''],
      $0: '',
    } as Arguments);
    expect(ConsoleMock.log).toHaveBeenCalled();
    expect(ConsoleMock.log).toHaveBeenCalledWith(
      `${variantCount} variant(s) deleted`
    );
  });
});
