const fs = require('fs');

class FsPromises {

  readdir(path) {
    return new Promise((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        }
  
        resolve(files);
      });
    });    
  }

  writeFile(path, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
        if (err) {
          reject(err)
        }
  
        resolve();
      });
    });
  }

  exists(path) {
    return new Promise((resolve, reject) => {
      fs.exists(path, (exists) => {
        if (!exists) {
          reject(new Error(`[${path}] file does not exist`));
        }
  
        resolve();
      });
    });
  }

  unlink(path) {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => {
        if (err) {
          reject(err)
        }
  
        resolve();
      });
    })
  }
}

exports.fsPromises = new FsPromises();