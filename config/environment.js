const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/Write-It';
const secret = process.env.SECRET || 'swordfish';
module.exports = {
  dbUri,
  secret
};
