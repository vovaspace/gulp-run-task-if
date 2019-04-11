# gulp-run-task-if
```bash
npm i gulp-run-task-if  --save-dev
```

## Usage
```javascript
const taskIf = require('gulp-run-task-if');
 
const condition = false; // Add business logic...
 
gulp.task('task', taskIf(condition, () => (
  gulp.src('src/*')
    .pipe(...)
    .pipe(gulp.dest('dist/'));
));
```

## For example
```javascript
const taskIf = require('gulp-run-task-if');
 
const condition = false; // Add your business logic...
 
gulp.task('conditionTask', taskIf(condition, () => (
  gulp.src('src/*')
    .pipe(...)
    .pipe(gulp.dest('dist/'));
)));

gulp.task('regularTask', () => (
  gulp.src('src/*')
    .pipe(...)
    .pipe(gulp.dest('dist/'));
));

gulp.task('default', gulp.series(
  'conditionTask', // --> will be skiped.
  'regularTask'
));
```

Will output in a console:
```bash
[08:00:00] Starting 'default'...
[08:00:00] Starting 'conditionTask'...
[08:00:00] Skipped task
[08:00:00] Finished 'conditionTask' after 9.80 ms
[08:00:00] Starting 'regularTask'...
[08:00:00] Finished 'regularTask' after 488 ms
[08:00:00] Finished 'default' after 497.80 ms
```

## API
```javascript
taskIf(condition, [name], fn)
```

## With the name
```javascript
const taskIf = require('gulp-run-task-if');
 
const condition = false; // Add your business logic...
 
gulp.task('conditionTask', taskIf(condition, 'conditionTask',() => (
  gulp.src('src/*')
    .pipe(...)
    .pipe(gulp.dest('dist/'));
)));

gulp.task('regularTask', () => (
  gulp.src('src/*')
    .pipe(...)
    .pipe(gulp.dest('dist/'));
));

gulp.task('default', gulp.series(
  'conditionTask', // --> will be skiped.
  'regularTask'
));
```

Will output in a console:
```bash
[08:00:00] Starting 'default'...
[08:00:00] Starting 'conditionTask'...
[08:00:00] Skipped  'conditionTask'
[08:00:00] Finished 'conditionTask' after 9.80 ms
[08:00:00] Starting 'regularTask'...
[08:00:00] Finished 'regularTask' after 488 ms
[08:00:00] Finished 'default' after 497.80 ms
```
