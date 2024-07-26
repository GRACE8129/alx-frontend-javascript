export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
 /* eslint-disable */
    task = true;
    task2 = false;
  /* eslint-enable */
  }

  return [task, task2];
}
