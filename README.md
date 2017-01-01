# aws-stub
Blindlingly simple AWS mocking library
## Installation
npm install aws-stub
## Usage
```
const AWS = require('aws-stub');

function test1() {
  const provider = AWS( 'S3', 'putItem', true );
  
  const s3 = new provider.S3();
  
  s3.putItem('something').promise()
  .then( value => {
    console.log( value );
  });
}


function test2() {
  const provider = AWS( 'EC2', 'describeImages', 'Coolness' );
  
  const ec2 = new provider.EC2();
  
  ec2.describeImages('else').promise()
  .then( value => {
    console.log( value );
  });
}

test1(); // prints true
test2(); // prints Coolness

```
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## License
MIT