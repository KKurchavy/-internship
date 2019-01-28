describe('duplicate array', function() {
  var array;

  beforeEach(function() {
    array = [1, 2, 3];
  });

  it('Should return array [1, 2, 3, 1, 2, 3]', function() {
    chai.expect(array.duplicator()).to.deep.equal([1, 2, 3, 1, 2, 3]);
  });

  it('Should return array [a, b, c, a, b, c]', function() {
    chai.expect(['a','b','c'].duplicator()).to.deep.equal(['a', 'b', 'c', 'a', 'b', 'c']);
  });
});
