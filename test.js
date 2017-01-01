const AWS = require('./index');

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

