import { CepModule } from './cep.module';

describe('CepModule', () => {
  let CepModule: CepModule;

  beforeEach(() => {
    CepModule = new CepModule();
  });

  it('should create an instance', () => {
    expect(CepModule).toBeTruthy();
  });
});
