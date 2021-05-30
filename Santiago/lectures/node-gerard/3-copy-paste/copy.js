const fs = require('fs');

fs.copyFile('original/file.txt', 'modified/modified.txt', (err) => {
  if (err) throw err;
  console.log('file.txt was copied to modified folder');
});