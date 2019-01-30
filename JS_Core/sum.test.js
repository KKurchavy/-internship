describe('sum of fibonacci numbers', function() {
  it('should return: 20', function() {
    chai.expect(fibonacciSum(10)).to.equal(20);
  });

  it('should return: 20', function() {
    chai.expect(fibonacciSum(12)).to.equal(20);
  });

  it('should return: 88', function() {
    chai.expect(fibonacciSum(50)).to.equal(88);
  });

  it('should return: 376', function() {
    chai.expect(fibonacciSum(200)).to.equal(376);
  });

  it('should return: 232', function() {
    chai.expect(fibonacciSum(100)).to.equal(232);
  });

  it('should return 0 for invalid data', function() {
    chai.expect(fibonacciSum(null)).to.equal(0)
  })
});
