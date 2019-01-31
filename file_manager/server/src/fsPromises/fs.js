const fs = require('fs');

class FsPromises {

  readdir(path) {
    return new Promise((resolve) => {
      fs.readdir(path, (err, files) => {
        resolve([err, files]);
      });
    });    
  }

  writeFile(path, data) {
    return new Promise((resolve) => {
      fs.writeFile(path, data, (err) => {
        resolve([err]);
      });
    });
  }

  exists(path) {
    return new Promise((resolve) => {
      fs.exists(path, (exists) => {
        let error;

        if (!exists) {
          error = new Error(`[${path}] file does not exist`);
        }
  
        resolve([error, exists]);
      });
    });
  }

  unlink(path) {
    return new Promise((resolve) => {
      fs.unlink(path, (err) => {
        resolve([err]);
      });
    })
  }
}

exports.fsPromises = new FsPromises();