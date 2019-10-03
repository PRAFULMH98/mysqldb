module.exports = (sequelize, Sequelize) => {
  const File = sequelize.define('prafl', {
    type: {
      type: Sequelize.TEXT
      },
    name: {
    type: Sequelize.TEXT
    },
    data: {
    type: Sequelize.TEXT
    }
  });
  
  return File;
}