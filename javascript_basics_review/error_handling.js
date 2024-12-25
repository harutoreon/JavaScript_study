try {
  console.log( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (error) {
  console.log( 'catch' );
} finally {
  console.log( 'finally' );
}
//=> true・・・try / catch / finally
//=> false・・・try / finally
