const mins=t=>{let m=String(t).match(/^(\d{1,2}):(\d{2})$/);return m?Number(m[1])*60+Number(m[2]):NaN};
const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday'];
const ordered=rows=>[...rows].sort((a,b)=>DAYS.indexOf(a.day)-DAYS.indexOf(b.day)||mins(a.start24)-mins(b.start24)||mins(a.end24)-mins(b.end24));
const rows=[{day:'Monday',start24:'11:30',end24:'12:50'},{day:'Monday',start24:'13:00',end24:'14:20'},{day:'Monday',start24:'08:30',end24:'09:50'},{day:'Monday',start24:'10:00',end24:'11:20'}];
const result=ordered(rows).map(x=>x.start24).join(',');
if(result!=='08:30,10:00,11:30,13:00')throw Error(result);
console.log('export order passed:',result);
