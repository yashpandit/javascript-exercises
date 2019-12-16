const MinStack = require('./minStack');

describe('minStack', () => {

  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);

  test('should push the element on top of the stack', () => {
    expect(minStack.top()).toBe(-3);
    minStack.pop();
    minStack.top();
    expect(minStack.getMin()).toBe(-2);
  });

});
