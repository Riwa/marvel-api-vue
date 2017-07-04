var api = require('./Api.js')
var expect = require('chai').expect;


it('Should return a list of 20 characters', function (done) {

  var result = api.getList();

  //assertions
  result.then(function (data) {
    expect(data.results).to.have.lengthOf(20);

    done();
  }, function (error) {
    assert.fail(error);
    done();
  });
});



it('Should return a single character', function (done) {

  var result = api.getCharacter(1009489);

  //assertions
  result.then(function (data) {
    expect(data.results[0]).to.be.an('object');
    expect(data.results[0]).to.not.be.empty;
    expect(data.results[0]).to.have.property('name');
    expect(data.results[0]).to.have.property('name').that.is.a('String');

    done();
  }, function (error) {
    assert.fail(error.results);
    done();
  });
});


it('Should return a list of comics', function (done) {

  var result = api.getComics(1009489);

  //assertions
  result.then(function (data) {
    expect(data.results).to.be.an('array');
    expect(data.results).to.not.be.empty;

    done();
  }, function (error) {
    assert.fail(error);
    done();
  });
});