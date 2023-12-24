const { webpack } = require('webpack');
const path = require('path');
const fs = require('fs');



class FilesNamesWriterToJsonPlugin {
  constructor(options) {
    this.targetFolder = options.targetFolder;
    this.outputFolder = options.outputFolder;
  }

  apply(compiler) {
    compiler.hooks.compile.tap('FilesNamesWriterToJsonPlugin', (compilation, callback) => {
      writeFileNames(this.targetFolder, this.outputFolder);
    });
  }
}

function writeFileNames(folderPath, outputPath) {
  const pathToResultFile = path.resolve(outputPath, 'files.json');
  if (fs.existsSync(pathToResultFile)) {
    fs.unlinkSync(pathToResultFile);
  }

  const pathToFiles = path.resolve(process.cwd(), folderPath);
  const files = fs.readdirSync(pathToFiles);
  const data = files.map((filename) => ({ filename }));

  fs.writeFileSync(pathToResultFile, JSON.stringify(data));
}

module.exports = { FilesNamesWriterToJsonPlugin };