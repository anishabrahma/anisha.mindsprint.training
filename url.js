const url= require('url');
 
const hrrpurl='http://www.exapmple.com/exams/papers/1/index.html?=anisha&age=24';
 
const myUrl= url.parse(hrrpurl,true);
console.log('HostName: '+myUrl.hostname);
console.log('Host: '+myUrl.host);
console.log('Protocol: '+myUrl.protocol);
console.log('Port: '+myUrl.port);
console.log('path: '+myUrl.path);
console.log('path Name: '+myUrl.pathname);
console.log('Search: '+myUrl.search);
const query= myUrl.query;
console.log('Name: '+query.name);
console.log('age: '+query.age)