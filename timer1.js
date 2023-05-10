const durations = [3, 5, 9, 10, 15];

for (let i = 0; i < durations.length; i++) {
  const duration = durations[i];
  if (duration >= 0 && Number.isInteger(duration)) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Timer ${i + 1} done`);
    }, duration * 1000);
  }
}