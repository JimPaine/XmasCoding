const op = require('./old.json').parameters
const np = require('./new.json').parameters
console.log('| Parameter Name | old.json Default Value | new.json Default Value |\n| --- | --- | --- |\n'+([...new Set([...Object.keys(op),...Object.keys(np)])]).sort().filter(k => JSON.stringify(op.hasOwnProperty(k)? op[k].defaultValue : 'MISSING') != JSON.stringify(np.hasOwnProperty(k)? np[k].defaultValue : 'MISSING') ).map(k =>`| ${k} | ${op.hasOwnProperty(k)? op[k].defaultValue : 'MISSING'} | ${np.hasOwnProperty(k)? np[k].defaultValue : 'MISSING'} |`).join('\n'))