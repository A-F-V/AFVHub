
class FileGrabber {
  from(file) {
    this.file = file;
    return this;
  }

  gobackto(directory) {
    const loc = this.file.search(directory);
    this.file = this.file.slice(0, loc + directory.length);
    return this;
  }
}

module.exports = FileGrabber;
