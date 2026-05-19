const arterias = [
['a. Ilíaca externa','Continuação da artéria ilíaca comum; passa sob o ligamento inguinal e torna-se femoral.','Encontrar no limite pelve-coxa, profundo ao ligamento inguinal, lateral à veia ilíaca externa.'],
['a. Femoral','Principal artéria da coxa; continuação da ilíaca externa.','No trígono femoral e canal dos adutores; medial ao nervo femoral e lateral à veia femoral no trígono.'],
['a. Circunflexa ilíaca superficial','Ramo superficial da femoral, próximo ao ligamento inguinal.','Segue lateralmente, paralela ao ligamento inguinal, em direção à espinha ilíaca ântero-superior.'],
['a. Epigástrica superficial','Ramo superficial da femoral.','Sobe na tela subcutânea da parede abdominal anterior, acima do ligamento inguinal.'],
['a. Pudenda externa superficial','Ramo superficial femoral para região pudenda.','Cruza medialmente em direção aos genitais externos, superficial à fáscia lata.'],
['a. Pudenda externa profunda','Ramo femoral mais profundo que a pudenda superficial.','Segue medialmente pela região proximal da coxa em direção ao períneo/genitais externos.'],
['a. Femoral profunda','Grande ramo da femoral para músculos da coxa.','Origina-se posterolateralmente da femoral; desce profundamente entre músculos adutores.'],
['a. Circunflexa femoral medial','Ramo geralmente da femoral profunda.','Contorna medial e posteriormente o colo do fêmur; importante para cabeça femoral.'],
['a. Circunflexa femoral lateral','Ramo da femoral profunda.','Segue lateralmente profundo ao sartório e reto femoral; divide-se em ramos ascendente, transverso e descendente.'],
['Ramo descendente da a. circunflexa femoral lateral','Ramo que acompanha a região anterolateral da coxa.','Desce entre reto femoral/vasto lateral, participando da vascularização do quadríceps e rede genicular.'],
['a. Descendente do joelho','Ramo da femoral próximo ao hiato dos adutores.','Desce medialmente para anastomoses geniculares na face medial do joelho.'],
['a. Obturatória','Ramo da ilíaca interna, passa pelo canal obturatório.','Na pelve e região medial da coxa; relacionada ao forame obturado e músculos adutores.'],
['a. Glútea superior','Ramo da ilíaca interna.','Sai da pelve pelo forame isquiático maior acima do piriforme, na região glútea.'],
['a. Glútea inferior','Ramo da ilíaca interna.','Sai pelo forame isquiático maior abaixo do piriforme, profunda ao glúteo máximo.'],
['a. Poplítea','Continuação da femoral após o hiato dos adutores.','Na fossa poplítea, profunda; termina em tibial anterior e tronco tibiofibular.'],
['a. Tibial anterior','Ramo terminal da poplítea.','Passa pela membrana interóssea para o compartimento anterior da perna; continua como dorsal do pé.'],
['Tronco tibiofibular','Segmento curto após divisão da poplítea.','Na região posterior proximal da perna; divide-se em tibial posterior e fibular.'],
['a. Tibial posterior','Ramo terminal do tronco tibiofibular.','Desce no compartimento posterior profundo; passa atrás do maléolo medial no túnel do tarso.'],
['a. Fibular','Ramo da tibial posterior/tronco tibiofibular.','Desce próxima à fíbula no compartimento posterior profundo; irriga região lateral/posterior da perna.'],
['a. Superior lateral do joelho','Ramo genicular da poplítea.','Contorna lateralmente o fêmur distal acima do côndilo lateral.'],
['a. Superior medial do joelho','Ramo genicular da poplítea.','Contorna medialmente o fêmur distal acima do côndilo medial.'],
['a. Inferior lateral do joelho','Ramo genicular da poplítea.','Segue lateralmente abaixo do côndilo lateral da tíbia.'],
['a. Inferior medial do joelho','Ramo genicular da poplítea.','Segue medialmente abaixo do côndilo medial da tíbia.'],
['a. Média do joelho','Ramo da poplítea.','Perfura a cápsula posterior do joelho; irriga ligamentos cruzados e estruturas intra-articulares.'],
['Recorrente tibial anterior','Ramo da tibial anterior.','Sobe para anastomose genicular anterior, perto da tuberosidade da tíbia.'],
['a. Tarsal lateral','Ramo da dorsal do pé.','Segue lateralmente no dorso do pé, sob tendões extensores.'],
['a. Dorsal do pé','Continuação da tibial anterior.','No dorso do pé, lateral ao tendão do extensor longo do hálux; palpável como pulso pedioso.'],
['a. Arqueada','Ramo da dorsal do pé.','Cruza lateralmente sobre as bases dos metatarsais, formando arco dorsal.'],
['a. Plantar profunda','Ramo profundo da dorsal do pé.','Penetra o primeiro espaço intermetatarsal e contribui para o arco plantar profundo.'],
['1ª a. Metatarsal dorsal','Ramo da dorsal do pé.','No primeiro espaço intermetatarsal dorsal, entre hálux e segundo dedo.'],
['aa. Metatarsais dorsais','Ramos do arco dorsal.','Nos espaços intermetatarsais dorsais, em direção aos dedos.'],
['aa. Digitais dorsais comum','Ramos das metatarsais dorsais.','Próximas às bases dos dedos, antes de se dividirem em digitais próprias.'],
['aa. Digitais dorsais próprias','Ramos terminais digitais dorsais.','Nas margens dorsais adjacentes dos dedos do pé.'],
['a. Plantar medial','Ramo terminal da tibial posterior.','Na planta medial do pé, acompanha o nervo plantar medial.'],
['a. Plantar lateral','Ramo terminal maior da tibial posterior.','Segue obliquamente na planta até formar o arco plantar profundo.'],
['Arco plantar profundo','Formado principalmente pela plantar lateral e plantar profunda.','Na planta profunda, junto às bases dos metatarsais.'],
['aa. Metatarsais plantares','Ramos do arco plantar profundo.','Nos espaços intermetatarsais plantares, em direção aos dedos.'],
['aa. Digitais plantares comum','Ramos das metatarsais plantares.','Na região distal da planta antes da bifurcação para os dedos.'],
['aa. Digitais plantares próprias','Ramos terminais plantares.','Nas margens plantares dos dedos, acompanhando nervos digitais.']
];
const regioes = ['Região glútea','Fenda interglútea','Sulco infraglúteo','Região do quadril','Região da coxa','Região femoral anterior','Trígono femoral','Região femoral posterior','Região do joelho','Região genicular anterior','Região genicular posterior','Fossa poplítea','Região crural anterior','Região crural posterior','Região talocrural anterior','Região talocrural posterior','Região retromaleolar lateral','Região retromaleolar medial','Regiões do pé','Região calcânea','Dorso do pé','Planta','Margem lateral do pé','Margem medial do pé','Arco longitudinal do pé – parte lateral','Arco longitudinal do pé – parte medial','Arco transverso do pé','Região tarsal','Região metatarsal','Dedos do pé','Fáscia lata','Trato iliotibial','Trato iliopatelar','Septo intermuscular lateral da coxa','Septo intermuscular medial da coxa','Septo intermuscular posterior da coxa','Compartimento anterior da coxa','Compartimento posterior da coxa','Compartimento medial da coxa','Fáscia da perna/crural','Retináculo dos músculos flexores','Retináculo superior dos músculos extensores'];
const extras = Array.from({length:17},(_,i)=>`Foto extra ${83+i}`);
function imgTag(n,title){return `<div class="imgWrap"><img src="imagens/${n}.png" alt="${title}" onerror="this.parentElement.innerHTML='<div class=missing>Coloque a imagem ${n}.png na pasta imagens</div>'" onclick="zoomImg('imagens/${n}.png','${title.replaceAll("'",'')}')"></div>`}
function makeCard(n,title,tipo,loc,encontrar){return `<article class="card">${imgTag(n,title)}<div class="cardBody"><span class="pill">${tipo} • imagem ${n}.png</span><h2>${n}. ${title}</h2><button class="toggle" onclick="this.nextElementSibling.classList.toggle('show')">Mostrar localização e onde encontrar</button><div class="hiddenInfo"><b>Localização:</b> ${loc}<br><b>Onde encontrar:</b> ${encontrar}</div></div></article>`}
document.getElementById('arteriasGrid').innerHTML=arterias.map((a,i)=>makeCard(i+1,a[0],'Artéria',a[1],a[2])).join('');
document.getElementById('regioesGrid').innerHTML=regioes.map((r,i)=>makeCard(i+40,r,'Região/Fáscia','Estrutura topográfica do membro inferior usada para orientação anatômica prática.','Localize no esqueleto/peça anatômica seguindo limites ósseos, articulares, musculares e fasciais correspondentes.')).join('');
document.getElementById('extrasGrid').innerHTML=extras.map((r,i)=>makeCard(i+83,r,'Campo extra','Espaço para fotografias complementares do estudo prático.','Use para imagens adicionais, registros da peça, desenhos, modelos ou fotos do laboratório.')).join('');
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.tab).classList.add('active')});
function zoomImg(src,title){modal.classList.add('show');modalImg.src=src;modalTitle.textContent=title} closeModal.onclick=()=>modal.classList.remove('show');
themeBtn.onclick=()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀️ Modo dia':'🌙 Modo noite'};
pdfBtn.onclick=()=>window.print();
let deferredPrompt; window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
installBtn.onclick=async()=>{ if(deferredPrompt){deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;} else alert('No celular: abra no Chrome/Edge e use “Adicionar à tela inicial”.'); };
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
