const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context={window:{},performance:{now:()=>10000}};vm.createContext(context);
for(const f of ['core.js','layers.js'])vm.runInContext(fs.readFileSync(__dirname+'/../js/'+f,'utf8'),context,{filename:f});
const C=context.window.WMKCore,L=context.window.WMKLayers;
let m=L.ensure(C.blank(12,12));
const data='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLtgAAAAABJRU5ErkJggg==';
m.resources=[
 {id:'usr_wall',name:'Parede',category:'walls',data,solid:true,destructible:true,hp:50},
 {id:'usr_floor',name:'Piso',category:'floor',data,solid:false},
 {id:'usr_decor',name:'Decoração',category:'decor',data,solid:false},
 {id:'usr_object',name:'Objeto',category:'objects',data,solid:false}
];
assert(L.paint(m,'walls',6,5,'usr_wall'));assert.strictEqual(m.cells[5*12+6],'usr_wall');
assert(L.paint(m,'floor',3,3,'usr_floor'));assert.strictEqual(m.customFloor[3*12+3],'usr_floor');
assert(L.paint(m,'decor',3,3,'usr_decor'));assert.strictEqual(m.customDecor[3*12+3],'usr_decor');
assert(L.paint(m,'objects',4,3,'usr_object'));assert.strictEqual(m.objects[0].resourceId,'usr_object');
let restored=L.ensure(C.normalize(JSON.parse(L.serialize(m))));
assert.strictEqual(restored.resources.length,4);assert.strictEqual(restored.customFloor[3*12+3],'usr_floor');
assert.strictEqual(restored.customDecor[3*12+3],'usr_decor');assert.strictEqual(restored.objects[0].resourceId,'usr_object');
const game=new C.Game(restored);assert(game.solid(6.5,5.5));game.x=4.5;game.y=5.5;game.a=0;game.ammo=5;
game.shoot();assert.strictEqual(game.wallHp.get('6,5'),20);assert(game.solid(6.5,5.5));
context.performance.now=()=>11000;game.shoot();assert(game.broken.has('6,5'));assert(!game.solid(6.5,5.5));
restored.resources[0].solid=false;assert(!new C.Game(restored).solid(6.5,5.5));
console.log('OK: 12 verificações de recursos, persistência, objetos e paredes destrutíveis');
