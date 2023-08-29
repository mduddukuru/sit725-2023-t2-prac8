const { expect } = require("chai");
const request = require("request");

let cat = {
    title: 'cat',
    subtitle: 'cat',
    path: 'kitten1.jpeg',
    description: 'cat'
};

describe('test GET api', function(){
    it ('returns statusCode of 200', function(done){
        request ('http://localhost:3000/api/cat', function(error, response, body){
        console.log(body);
        let responseObj = JSON.parse(body); 
        expect(responseObj.statusCode).to.equal(200);
        done();
        });
    });
});

describe ('test POST api', function(){
    it ('post cat to DB', function(done){
        request.post({url: 'http://localhost:3000/api/cat', form:cat}, function(error, response, body){
            console.log(body);
            let responseObj = JSON.parse(body); 
            expect(responseObj.statusCode).to.equal(201);
            done();
          
        });
    });
});

describe ('test DELETE api', function(){
    it ('delete a cat', function (done){
        request.delete({url: 'http://localhost:3000/api/cat', form: cat}, function(error, response, body){
          console.log(body);
          let responseObj = JSON.parse(body); 
          expect(responseObj.statusCode).to.equal(202);
          done();
        });
    });
});