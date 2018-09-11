const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/Write-It';
const secret = process.env.SECRET || 'swordfish';
const port = process.env.PORT || 4000;
module.exports = {
  dbUri,
  secret,
  port
};
