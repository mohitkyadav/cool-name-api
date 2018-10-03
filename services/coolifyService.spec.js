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
    expect(alphaNumericeName('hello')[0]).to.equal('h3110');
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
    expect(alphaNumericeName('hello')[5]).to.equal('‮hello');
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
})
