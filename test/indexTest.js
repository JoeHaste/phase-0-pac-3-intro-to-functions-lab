require ( './root.js' );

function shout(string) {
  return string.toUpperCase();
}
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

function whisper(string) {
  return string.toLowerCase();
}
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
}) 

function  logShout(string){
  console.log(string.toUpperCase())
}
describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

function logWhisper(string){
  console.log(string.toLowerCase())
}
describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

function sayHiToHeadphonedRoommate(string) {
  var canthearyou ="I can\'t hear you!"
  var canhearyou ='YES INDEED!'
  var loveshearing = 'I would love to'
  if (string.toLowerCase(string) === string){
    return canthearyou
  }
  else if (string.toUpperCase(string) === string){
    return canhearyou
  }
  else if( "Let\'s have dinner together!"=== string){
    return "I would love to!"
  }
}
describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
