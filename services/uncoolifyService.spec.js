const expect = require('chai').expect
const uncoolifyService = require('./uncoolifyService');
const alphaNumericeName = uncoolifyService.alphaNumericName;

describe('uncoolifyService.alphaNumericeName', () => {
  it('should return false if a non-string value is provided', () => {
    expect(alphaNumericeName(1)).to.be.false;
    expect(alphaNumericeName({})).to.be.false;
    expect(alphaNumericeName([])).to.be.false;
  });

  it('should return error message if the name is already uncool', () => {
    expect(alphaNumericeName('___')[0]).to.equal('Are you sure this is a cool name?');
    expect(alphaNumericeName('a_t')[0]).to.equal('Are you sure this is a cool name?');
  });

  it('should uncoolify leet', () => {
    expect(alphaNumericeName('h3110_b¡g_bo¡')[0]).to.equal('hello big boi');
  });

  it('should uncoolify round letters', () => {
    expect(alphaNumericeName('ⓗⓔⓛⓛⓞ')[0]).to.equal('hello');
  });

  it('should uncoolify box letters', () => {
    expect(alphaNumericeName('🄷🄴🄻🄻🄾')[0]).to.equal('hello');
  });

  /*
   * TODO: Handle this case
   * it('should round the first and last and replace all else the specified number eqv.', () => {
   *  expect(alphaNumericeName('hello')[3]).to.equal('ⓗ311ⓞ');
   * })
   */

  it('should uncoolify the symbolic equivalent', () => {
    expect(alphaNumericeName('he||o(@!')[0]).to.equal('hellocai');
  })

  /*
   * TODO: Handle this case
   * it('should mirror each letter', () => {
   *  expect(alphaNumericeName('hello')[5]).to.equal('‮hello');
   * });
   */

  it('should uncoolify emojis', () => {
    expect(alphaNumericeName('♓🎗👢👢⚽')[0]).to.equal('hello');
  });

  it('should uncoolify letters with x above and below', () => {
    expect(alphaNumericeName('h͓̽e͓̽l͓̽l͓̽o͓̽')[0]).to.equal('hello');
  });

  it('should uncoolify flipped letters', () => {
    expect(alphaNumericeName('ɥǝʃʃo')[0]).to.equal('hello');
  });

  it('should uncoolify wavy letters', () => {
    expect(alphaNumericeName('ᖺᗴᒪᒪᗢ')[0]).to.equal('hello');
  });

  it('should uncoolify curr letters', () => {
    expect(alphaNumericeName('ⱧɆⱠⱠØ')[0]).to.equal('hello');
  });

  it('should uncoolify fairy letters', () => {
    expect(alphaNumericeName('ᏂᏋᏝᏝᎧ')[0]).to.equal('hello');
  });

  it('should uncoolify dot letters', () => {
    expect(alphaNumericeName('ȟ£ȽȽ¤')[0]).to.equal('hello');
  });
})
