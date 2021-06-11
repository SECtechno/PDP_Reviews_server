const token = ((req, res) => {

  res.sendFile(__dirname + '/loaderio-.txt');
});

module.exports = { token };
