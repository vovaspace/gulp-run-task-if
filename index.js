const log = require('fancy-log');
const color = require('ansi-colors');

module.exports = function taskIf(condition, name, fn) {
  if (typeof fn === 'undefined' && typeof name === 'function') {
    fn = name;
    name = undefined;
  }

  if (typeof condition !== 'boolean') {
    throw new Error('gulp-run-task-if: condition must be a boolean.');
  }

  if (typeof fn !== 'function') {
    throw new Error('gulp-run-task-if: wrong \'function\' argument.');
  }

  if (typeof name !== 'string' && typeof name !== 'undefined') {
    throw new Error('gulp-run-task-if: name must be a string.');
  }

  if (condition) {
    return fn;
  }

  function skipped(done) {
    if (name) {
      log(`${color.yellow('Skipped')}  '${color.cyan(name)}'`);
    } else {
      log(color.yellow('Skipped task'));
    }
    done();
  }

  return skipped;
};
