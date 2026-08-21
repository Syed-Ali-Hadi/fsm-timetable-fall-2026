const to24=(display,fallback='')=>{let m=String(display).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);if(!m)return fallback;let h=Number(m[1])%12+(m[3].toUpperCase()==='PM'?12:0);return`${String(h).padStart(2,'0')}:${m[2]}`};
const mins=t=>{let m=String(t).match(/^(\d{1,2}):(\d{2})$/);return m?Number(m[1])*60+Number(m[2]):NaN};
const overlap=(a,b)=>mins(a.s)<mins(b.e)&&mins(b.s)<mins(a.e);
console.assert(to24('2:25 PM','02:25')==='14:25');
console.assert(to24('11:30 AM')==='11:30');
console.assert(!overlap({s:'11:30',e:'12:50'},{s:'14:25',e:'16:15'}));
console.assert(!overlap({s:'11:30',e:'12:50'},{s:'12:50',e:'14:20'}));
console.assert(overlap({s:'13:00',e:'14:20'},{s:'14:00',e:'15:00'}));
console.log('time normalization, ordering, and clash rules passed');
