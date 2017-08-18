var request = require('superagent');
var expect = require('expect.js');

//get localhost:8080
describe('homepage', () => {
	it('Respond to GET is 200', (done) => {
		request.get('http://localhost:8080')
		.end((err,res) => {
			//console.log("response="+JSON.stringify(res));
			expect(res.status).to.equal(200);
			done(); //js is asynchronous
		});
	});
});
