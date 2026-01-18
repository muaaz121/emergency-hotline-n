const services = [
  {bn:'জাতীয় জরুরি সেবা', en:'National Emergency', num:'999', cat:'All', icon:'assets/emergency.png'},
  {bn:'পুলিশ', en:'Police', num:'999', cat:'Police', icon:'assets/police.png'},
  {bn:'ফায়ার সার্ভিস', en:'Fire Service', num:'999', cat:'Fire', icon:'assets/fire-service.png'},
  {bn:'অ্যাম্বুলেন্স', en:'Ambulance', num:'1994-999999', cat:'Health', icon:'assets/ambulance.png'},
  {bn:'নারী ও শিশু সহায়তা', en:'Women & Child Helpline', num:'109', cat:'Help', icon:'assets/heart.png'},
  {bn:'দুর্নীতি দমন', en:'Anti-Corruption', num:'106', cat:'Govt', icon:'assets/coin.png'},
  {bn:'বিদ্যুৎ বিপর্যয়', en:'Electricity Outage', num:'16216', cat:'Electricity', icon:'assets/emergency.png'},
  {bn:'ব্র্যাক', en:'Brac', num:'16445', cat:'NGO', icon:'assets/brac.png'},
  {bn:'বাংলাদেশ রেলওয়ে', en:'Bangladesh Railway', num:'163', cat:'Travel', icon:'assets/Bangladesh-Railway.png'}
];

let heart=0, coin=100, copy=0;

const cardContainer = document.getElementById('cardContainer');

services.forEach(s => {
  const card = document.createElement('div');
  card.className = 'bg-white p-4 rounded-xl shadow';
  card.innerHTML = `
    <div class="flex justify-between">
      <img src="${s.icon}" class="w-10" />
      <button onclick="addHeart()">🤍</button>
    </div>
    <h4 class="font-semibold mt-3">${s.bn}</h4>
    <p class="text-sm text-gray-500">${s.en}</p>
    <p class="text-2xl font-bold mt-2">${s.num}</p>
    <span class="inline-block bg-gray-100 text-xs px-2 py-1 rounded mt-2">${s.cat}</span>
    <div class="flex gap-2 mt-4">
      <button onclick="copyNumber('${s.num}')" class="border px-3 py-1 rounded text-sm">📋 Copy</button>
      <button onclick="callService('${s.en}','${s.num}')" class="bg-green-600 text-white px-3 py-1 rounded text-sm">📞 Call</button>
    </div>
  `;
  cardContainer.appendChild(card);
});

function addHeart(){
  heart++;
  document.getElementById('heartCount').innerText = heart;
}

function copyNumber(num){
  navigator.clipboard.writeText(num);
  copy++;
  document.getElementById('copyCount').innerText = copy;
  alert('Copied: ' + num);
}

function callService(name, num){
  if(coin < 20){
    alert('Not enough coins to make a call');
    return;
  }
  coin -= 20;
  document.getElementById('coinCount').innerText = coin;
  alert(`Calling ${name} (${num})`);

  const time = new Date().toLocaleTimeString();
  const li = document.createElement('li');
  li.className = 'border-b pb-1';
  li.innerText = `${name} - ${num} (${time})`;
  document.getElementById('historyList').appendChild(li);
}

function clearHistory(){
  document.getElementById('historyList').innerHTML = '';
}