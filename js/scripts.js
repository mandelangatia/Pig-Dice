// business logic
function Roll() {
  this.total = 0;
}

Roll.prototype.roll = function() {
    var dieRoll = Math.floor(Math.random() * 6) +1;
    $('#thisroll').text(dieRoll);
    return dieRoll;
}

Roll.prototype.turn = function() {
    var roll = this.roll();
    if (roll === 1)   {
         this.total = 0;
    } else {
         this.total += roll;
    }
    return this.total;
};
// User Interface Logic
