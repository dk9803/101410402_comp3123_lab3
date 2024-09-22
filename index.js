const http = require("http");
const employeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    }

    if (req.url === '/employee') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employeeModule.getAllEmployees()));
    }

    if (req.url === '/employee/names') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    }

    if (req.url === '/employee/totalsalary') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ total_salary: employeeModule.getTotalSalary() }));
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
