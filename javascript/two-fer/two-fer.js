var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  who = who || 'you';
  return `One for ${who}, one for me.`;
};

module.exports = TwoFer;
