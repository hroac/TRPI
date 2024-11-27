Date.prototype.addMonths = function (months) {
    this.setMonth(this.getMonth() + months);
    return this;
}

Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
    return this;
}

Date.prototype.addHours = function (hours) {
    this.setHours(this.getHours() + hours);
    return this;
}