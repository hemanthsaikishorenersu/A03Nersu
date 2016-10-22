QUnit.test('Testing Multiplication function with four sets of inputs', function (assert) {
    assert.throws(function () { sai(); }, new Error("only numbers are allowed"), 'Passing in array correctly raises an Error');
    assert.strictEqual(sai(10,20), 200, 'All positive numbers');
    assert.strictEqual(sai(40,-1), -40, 'Positive and negative numbers');
    assert.strictEqual(sai(-2,-8), 16, 'All are negative numbers');
});
