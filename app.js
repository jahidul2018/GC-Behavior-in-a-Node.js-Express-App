const express = require('express');
const app = express();

// Enable GC (run Node.js with --expose-gc flag)
if (global.gc) {
  console.log('GC is enabled.');
} else {
  console.log('Run the program with --expose-gc to enable manual GC.');
}

// Route to simulate memory load
app.get('/allocate', (req, res) => {
  let largeArray = Array(1e6).fill('x');
  console.log('Allocated memory.');
  res.send('Memory allocated. Check memory usage.');
});

// Route to trigger garbage collection
app.get('/gc', (req, res) => {
  if (global.gc) {
    console.log('Manual garbage collection triggered.');
    global.gc();
    res.send('GC triggered.');
  } else {
    res.status(500).send('GC not exposed. Run Node.js with --expose-gc.');
  }
});

// Route to check memory usage
app.get('/memory', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
    heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
    heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
    external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
