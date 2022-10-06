// 1. 콘솔
console.log('hello, world');
console.info('info');
console.warn('warn');
console.error('error')

const data = {
    one: 'pineapple',
    two: 'banana',
    three: 'mango',
}

console.dir(data); // 객체의 데이터 
console.table(data);

console.group('one');
console.log('aa/팀원');
console.log('bb/팀원');
console.log('cc/팀원');
console.groupEnd();

console.group('two');
console.log('dd/팀장');
console.log('ee/팀장');
console.group('three');
console.log('ff/대표팀장');
console.groupEnd();
console.groupEnd();
