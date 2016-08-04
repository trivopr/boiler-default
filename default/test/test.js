module('isPhoneNumber');

function isPhoneNumber(input){
  return /^\d+$/.test(input);
}

test('Wrong number', function(){
  equal(isPhoneNumber('abc123'), false, 'All alphabet');
  equal(isPhoneNumber('0123456789'), true, 'Input = 0123456789');
  equal(isPhoneNumber('090554321'), true, 'Input = 090554321');
});
