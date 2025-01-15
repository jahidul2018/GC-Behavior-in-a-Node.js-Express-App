** How the Code Works - Node.js Memory Management Example with Express and GC Monitoring. **

# GC Overhead in Node.js
    # Impact:
        * Pauses application execution during major GC cycles.
        * Higher memory usage increases GC workload and latency.
        
    # Mitigation:
        * Use appropriate data structures and avoid unnecessary object creation.
        * Optimize memory usage with monitoring tools (e.g., Node.js' --inspect flag).

# Allocate Route (/allocate):

    * Allocates a large amount of memory to simulate workload and observe GC behavior.
# GC Route (/gc):

    * Manually triggers garbage collection using global.gc (requires running Node.js with --expose-gc).
# Memory Route (/memory):

    * Displays current memory usage, helping you observe the impact of GC.

# How to Run the Code
    1. Clone the repository.
    2. Run npm install to install dependencies.
    3. Run npm start to start the server.
    4. Open your browser and navigate to http://localhost:3000/allocate to allocate memory.

#Use the endpoints:

    Allocate memory: http://localhost:3000/allocate
    Trigger GC: http://localhost:3000/gc
    Check memory: http://localhost:3000/memory

GC Monitoring Tools
For real-world applications, use tools to monitor and optimize memory:
    * Node.js Inspector: node --inspect app.js
    * Chrome DevTools: Attach to the Node.js process.
    * Heap Profiler: Analyze heap snapshots for leaks.

This example demonstrates how to manage and observe memory usage in a Node.js Express app while understanding the GC's impact.

# git ignore
    * *.log
    * npm-debug.log*
    * yarn-debug.log*
    * yarn-error.log*
    * pids
    * *.pid
    * *.seed
    * *.pid.lock
    * lib-cov
    * coverage
    * *.tgz
    * .env
    * .env.*.local
    * node_modules/
    * package-lock.json
    * yarn.lock
    * npm-shrinkwrap.json
    * build/
    * dist/
    * .tmp/
    * jspm_packages/
    * .npm
    * .eslintcache
    * .vscode/
    * .idea/
    * *.swp
    * *~
    * .DS_Store
    * Thumbs.db
    * /coverage/
    * /local/

Thank you for reading this code snippet !!! Happy Coding !!! 😊
