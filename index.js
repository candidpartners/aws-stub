'use strict';

function AWS() {}

AWS.Service = function(service, method, result) {
  if( ! this[ service ] ) {
    this[ service ] = function() {};
  }
  this[ service ].prototype[ method ] = function() {
    const promise = function() {
      return new Promise( function( resolve, reject ) {
        resolve( result );
      });
    };
    return { promise };
  };
  return this;
};



module.exports = AWS;
