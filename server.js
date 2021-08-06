connection.connection(err => {
 if (err) throw err;
 console.log('ID ' + connection.threadID + 'currently connected');
 startPage()
})
