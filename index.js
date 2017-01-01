'use strict';

function Factory( service, method, result ) {
  function AWS(service, method, result) {
    this[ service ] = function() {};
    this[ service ].prototype[ method ] = function() {
      const promise = function() {
        return new Promise( function( resolve, reject ) {
          resolve( result );
        });
      };
      return { promise };
    };
  }
  
  return new AWS( service, method, result );
}

module.exports = Factory;
