var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  let prev = this.getMin();
  let min = prev !== null ? Math.min(x, prev) : x;
  this.stack.push({ val: x, min });
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack.length ? this.stack[this.stack.length - 1].val : null;
};

MinStack.prototype.getMin = function () {
  return this.stack.length ? this.stack[this.stack.length - 1].min : null;
};

module.exports = MinStack;
