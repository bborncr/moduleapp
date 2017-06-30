var say2 = function exportedSay(name){
  return console.log(`Bond...${name} Bond.`);
};

module.exports = {
  username: 'jamesbond',
  password: 'bullwinkle',
  say2: say2,
  say: function(name){
    console.log(`Bond...${name} Bond.`);
  }
};