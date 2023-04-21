describe("min", function() {
  it("Does comparing two and five return two?", function() {
    assert.equal(min(2, 5), 2);
  });

  it("Does comparing three and minus one return minus one?", function() {
    assert.equal(min(3, -1), -1);
  });

  it("When both have the same value?", function() {
    assert.equal(min(1, 1), 1);
  });
});