const expect = require('chai').expect
const coolifyService = require('./coolifyService');
const alphaNumericeName = coolifyService.alphaNumericName;

describe('coolifyService.alphaNumericeName', () => {
  it('should return false if a non-string value is provided', () => {
    expect(alphaNumericeName(1)).to.be.false;
    expect(alphaNumericeName({})).to.be.false;
    expect(alphaNumericeName([])).to.be.false;
  });

  it('should replace letters with the specified number equivalent', () => {
    expect(alphaNumericeName('hello isaiah')[0]).to.equal('h3110_¡54¡4h');
  });

  it('should round each letter', () => {
    expect(alphaNumericeName('hello')[1]).to.equal('ⓗⓔⓛⓛⓞ');
  });

  it('should square each letter', () => {
    expect(alphaNumericeName('hello')[2]).to.equal('🄷🄴🄻🄻🄾');
  });

  it('should round the first and last and replace all else the specified number eqv.', () => {
    expect(alphaNumericeName('hello')[3]).to.equal('ⓗ311ⓞ');
  })

  it('should replace letters with the symbolic equivalent', () => {
    expect(alphaNumericeName('hello')[4]).to.equal('he||o');
  })

  it('should mirror each letter', () => {
    expect(alphaNumericeName('hello')[5]).to.equal('olleh');
  });

  it('should replace letters with the emoji equivalent', () => {
    expect(alphaNumericeName('hello')[6]).to.equal('♓🎗👢👢⚽');
  });

  it('should add x above and below each letter', () => {
    expect(alphaNumericeName('hello')[7]).to.equal('h͓̽e͓̽l͓̽l͓̽o͓̽');
  });

  it('should flip each letter upsidedown', () => {
    expect(alphaNumericeName('hello')[8]).to.equal('ɥǝʃʃo');
  });

  it('should replace with wavy letter', () => {
    expect(alphaNumericeName('hello')[9]).to.equal('ᖺᗴᒪᒪᗢ');
  });

  it('should replace with Curr letter', () => {
    expect(alphaNumericeName('hello')[10]).to.equal('ⱧɆⱠⱠØ');
  });

  it('should replace with fairy letter', () => {
    expect(alphaNumericeName('hello')[11]).to.equal('ᏂᏋᏝᏝᎧ');
  });

  it('should replace with dot letter', () => {
    expect(alphaNumericeName('hello')[12]).to.equal('ȟ£ȽȽ¤');
  });

  it('should replace with doublestruck letter', () => {
    expect(alphaNumericeName('hello')[13]).to.equal('𝕙𝕖𝕝𝕝𝕠');
  });

  it('should replace with unicodemix letter', () => {
    expect(alphaNumericeName('hello')[14]).to.equal('ℌΣ↳↳Φ');
   });

  it('should replace with emoji letter', () => {
    expect(alphaNumericeName('hello')[15]).to.equal('🍽📚🛴🛴🌍');
  });
  
  it('should replace with mathematicalfraktur letters', () => {
    expect(alphaNumericeName('hello')[16]).to.equal('ℌ𝔈𝔏𝔏𝔒');
  });
})
