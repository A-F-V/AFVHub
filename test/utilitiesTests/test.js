const { assert } = require('chai');
const { describe, it } = require('mocha');
const FileGrabber = require('../../bin/utilities/filegrabber');

describe('FileGrabber', () => {
  it('should set file with from', () => {
    const fg = new FileGrabber();
    fg.from(__filename);
    assert.equal(fg.file, __filename);
  });
  it('should go back from file', () => {
    const fg = new FileGrabber();
    fg.from(__filename).gobackto('AFVHub');
    const actual = __dirname.slice(0, __dirname.length - '/test/utilitiesTests'.length);
    assert.equal(actual, fg.file);
  });
});
