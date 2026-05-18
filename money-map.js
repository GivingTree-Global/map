mapboxgl.accessToken='pk.eyJ1IjoiZ2l2aW5ndHJlZSIsImEiOiJjbXA3MGdjczcwMXF1MnFwdjBzZ2lsdnc1In0.rphe-zIBwe1nLX-wKXXPgw';
const SC={energy:'#F59E0B',climate:'#10B981',agritech:'#84CC16','economic-inclusion':'#6366F1',infrastructure:'#8B5CF6',conservation:'#059669',fintech:'#3B82F6',housing:'#EC4899',health:'#EF4444','circular-economy':'#F97316',other:'#9CA3AF'};
const SL={energy:'Energy',climate:'Climate',agritech:'Agritech','economic-inclusion':'Economic Inclusion',infrastructure:'Infrastructure',conservation:'Conservation',fintech:'Fintech',housing:'Housing',health:'Health','circular-economy':'Circular Economy'};
const SIZE_RANGES=[{id:'under1m',label:'<$1M',min:0,max:1e6},{id:'1to10m',label:'$1-10M',min:1e6,max:1e7},{id:'10to50m',label:'$10-50M',min:1e7,max:5e7},{id:'50to250m',label:'$50-250M',min:5e7,max:2.5e8},{id:'over250m',label:'$250M+',min:2.5e8,max:Infinity},{id:'undisclosed',label:'Undisclosed',min:null,max:null}];
const TYPE_OPTIONS=['Investment','Fund Launch','Loan','Partnership','Grant'];
const SOURCE_OPTIONS=['VC/PE','DFI','Family Office','Foundation','Government','Corporate'];
const CITIES={"São Paulo":{coords:[-46.6333, -23.5505],state:"SP",blurb:"São Paulo is the financial capital of Latin America and the epicenter of Brazil's impact investing ecosystem.",sidebar:"Key hubs: Vox Capital, eB Capital, Fama Re.Capital, MOV Investimentos, Lightrock LatAm. Hosts Impacta Mais (1,200+ delegates)."},
"Rio de Janeiro":{coords:[-43.1729, -22.9068],state:"RJ",blurb:"Rio de Janeiro anchors Brazil's social finance and crowdlending innovation.",sidebar:"Sitawi Finance for Good (16 years), pioneering crowdlending with a 4.27% default rate."},
"Santos":{coords:[-46.3336, -23.9608],state:"SP",blurb:"Santos is Latin America's largest port. Global DFIs are investing in port modernization.",sidebar:"J.P. Morgan DFI financing new container terminal capacity for agricultural supply chains."},
"Brasília":{coords:[-47.8919, -15.7975],state:"DF",blurb:"Brazil's federal capital shapes national impact economy policy.",sidebar:"Eco Invest Brasil (IDB/FCDO) creates FX hedging mechanisms to mobilize private capital for climate."},
"New York City":{coords:[-74.006, 40.7128],state:"NY",blurb:"New York is the largest impact investing market in the US, with $40M+ in city-backed catalytic capital and dozens of diversity-focused VC firms.",sidebar:"Key players: NYCEDC Catalyst Fund, Harlem Capital, Open Opportunity Fund, Maycomb Capital. Hosts SOCAP satellite events and Climate Week NYC."},
"London":{coords:[-0.1276, 51.5074],state:"England",blurb:"London is positioning itself as the global capital of impact investing, with the UK market surpassing £11B in 2024 and new government-backed vehicles like the £500M Better Futures Fund.",sidebar:"Key players: Bridges Fund Management (£1.8B+ raised), Better Society Capital, Big Society Capital. Home to the Impact Investor Global Summit."},
"Singapore":{coords:[103.8198, 1.3521],state:"",blurb:"Singapore is the hub for impact investing across Asia, anchored by Temasek's ABC World framework and a growing ecosystem of pan-Asian impact PE funds.",sidebar:"Key players: ABC Impact (Temasek-backed, $600M+ Fund II), DBS, UOB. Centre for Impact Investing and Practices. MAS green finance initiatives."},
"Accra":{coords:[-0.187, 5.6037],state:"Greater Accra",blurb:"Accra is West Africa's emerging impact investing hub, home to the Ci-Gaba Fund-of-Funds and the annual Africa Impact Summit drawing 500+ delegates from 20+ countries.",sidebar:"Key players: Impact Investing Ghana (IIGh), Savanna Impact Advisory, FSD Africa. Government launched Climate Financing Division and Green/Social Bond Framework."},
"Sydney":{coords:[151.2093, -33.8688],state:"NSW",blurb:"Sydney anchors Australia's rapidly growing impact investing market, with AUD 9B in clean energy commitments in 2024 and the government-backed Clean Energy Finance Corporation deploying record capital.",sidebar:"Key players: CEFC ($32.5B allocation), Australian Impact Investments, NorthStar Impact Funds. Hosts the annual Impact Investment Summit at ICC Sydney."},
"Tokyo":{coords:[139.6917, 35.6895],state:"",blurb:"Tokyo is the center of Japan's growing impact investing ecosystem, backed by government-private sector partnerships and JICA's expanding global impact portfolio. Japan's National Advisory Board (GSG member) is driving policy alignment.",sidebar:"Key players: SIIF (Social Innovation & Investment Foundation), JICA, Shinsei Impact, GSG Impact Japan. Themes: aging society solutions, financial inclusion across Asia, clean energy transition."}};
const COUNTRY_DATA={"Brazil":{coords:[-51.9, -14.2],labelCoords:[-51.9, -8.5],blurb:"Brazil is Latin America's largest impact investing market and the sixth-largest economy globally. The ecosystem spans over a dozen dedicated fund managers, government-backed programs, and a national advisory board.",sidebar:"Key cities: São Paulo (financial hub), Rio (social finance), Brasília (policy), Santos (trade). Themes: climate, energy transition, economic inclusion, regenerative agriculture, conservation.",zoomTo:{"center": [-49.5, -16], "zoom": 4.2}},
"United States":{coords:[-95.7, 37.1],labelCoords:[-98, 39.5],blurb:"The US is the world's largest impact investing market, with over $1 trillion in assets under management. New York City alone has deployed $65M+ through city-backed impact funds targeting diverse entrepreneurship.",sidebar:"Key hubs: NYC (Catalyst Fund, Harlem Capital), San Francisco (SOCAP), Boston (impact PE). Themes: economic inclusion, diverse founders, climate tech, community development.",zoomTo:{"center": [-95.7, 38], "zoom": 4}},
"United Kingdom":{coords:[-1.5, 52.5],labelCoords:[-2.5, 54],blurb:"The UK impact investing market topped £11B in 2024, growing 10% annually. London is home to pioneering firms like Bridges Fund Management and government-backed institutions channeling capital into social outcomes.",sidebar:"Key players: Bridges FM (£1.8B+), Better Society Capital, Big Society Capital. Policy: £500M Better Futures Fund, Office for the Impact Economy. Themes: social housing, inclusive growth, climate.",zoomTo:{"center": [-2, 54], "zoom": 5.5}},
"Singapore":{coords:[103.8, 1.35],labelCoords:[103.8, 1.35],blurb:"Singapore punches above its weight in impact investing, anchored by Temasek's multi-billion-dollar commitment through ABC Impact and supported by MAS green finance initiatives and a growing ecosystem of pan-Asian impact funds.",sidebar:"Key players: ABC Impact ($600M+ Fund II), Temasek Trust, DBS, UOB. Themes: climate/water solutions, sustainable food, healthcare, financial/digital inclusion across Asia.",zoomTo:{"center": [103.8, 1.35], "zoom": 11}},
"Ghana":{coords:[-1.0, 7.9],labelCoords:[-1.2, 7.5],blurb:"Ghana is pioneering domestic capital mobilization for impact in West Africa. The Ci-Gaba Fund-of-Funds is the region's first domestically domiciled private fund of funds, unlocking pension capital for SMEs across Ghana, Nigeria, Senegal, and Côte d'Ivoire.",sidebar:"Key players: Impact Investing Ghana (GSG National Partner), Savanna Impact Advisory, FSD Africa. Themes: SME finance, pension capital mobilization, blended finance, gender lens investing.",zoomTo:{"center": [-1.5, 7.5], "zoom": 7}},
"Australia":{coords:[134, -25.3],labelCoords:[134, -25],blurb:"Australia's impact investing market is accelerating, with AUD 9B in clean energy commitments in 2024 and the government-backed CEFC deploying record AUD 4.7B in a single year. The market spans renewable energy, social housing, and First Nations investment.",sidebar:"Key players: CEFC ($32.5B allocation), Australian Impact Investments, Infradebt, Impact Investing Australia. Themes: renewables, social/affordable housing, First Nations, energy transition.",zoomTo:{"center": [134, -25], "zoom": 4.5}},
"Japan":{coords:[138.2, 36.2],labelCoords:[138.2, 37.5],blurb:"Japan's impact investing market has grown rapidly since the government's 2014 social impact commitment, with JICA emerging as a major global DFI deploying capital across Asia and Africa. The Social Innovation and Investment Foundation anchors the domestic ecosystem.",sidebar:"Key players: SIIF, JICA ($40M+ impact allocations), Shinsei Impact, GSG Impact Japan (NAB). Policy: Tokyo Metropolitan Government public-private impact growth fund. Themes: aging society, financial inclusion, clean energy.",zoomTo:{"center": [138, 37], "zoom": 5.5}}};
const deals=[
{investor:"I Squared Capital",recipient:"Órigo Energia",dealType:"Investment",amount:400000000.0,sector:"energy",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"Jan 2024",year:2024,source:"Reuters",notes:"49% stake in Brazil's largest distributed solar generation platform."},
{investor:"Augment Infrastructure",recipient:"Órigo Energia",dealType:"Investment",amount:140000000.0,sector:"energy",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2022",year:2022,source:"Órigo Energia IR",notes:"BRL 700M in renewable energy infrastructure investment."},
{investor:"eB Capital",recipient:"Bioo",dealType:"Investment",amount:50000000.0,sector:"climate",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"ImpactAlpha",notes:"Animal protein waste → biomethane. Energy transition fund."},
{investor:"Vox Capital / TNC / Moore Fdn",recipient:"Amazon NBS Fund",dealType:"Fund Launch",amount:250000000.0,sector:"conservation",sourceType:"Foundation",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Catalytic capital for blended finance around the Amazon."},
{investor:"Wright Capital",recipient:"NBS/Regen Ag/Climate FoF",dealType:"Fund Launch",amount:35000000.0,sector:"climate",sourceType:"Family Office",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Manages wealth of 40+ Brazilian families."},
{investor:"Fama Re.Capital",recipient:"LatAm Climate Turnaround Fund",dealType:"Fund Launch",amount:null,sector:"climate",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"ImpactAlpha",notes:"Invests in high-emitting companies to push decarbonization."},
{investor:"Fama Re.Capital",recipient:"Gaia Socio-Bioeconomy Fund",dealType:"Fund Launch",amount:null,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"Affordable loans to small regenerative agriculture businesses."},
{investor:"InMotion Ventures (JLR)",recipient:"Energy Source",dealType:"Investment",amount:1200000.0,sector:"circular-economy",sourceType:"Corporate",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"Feb 2024",year:2024,source:"TechFundingNews",notes:"Lithium battery recycling. InMotion's first Brazil investment."},
{investor:"Estímulo",recipient:"3,400+ SMEs",dealType:"Loan",amount:40000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha / HBS",notes:"Blended finance credit fund for low-income regions."},
{investor:"Traive / Instituto Folio",recipient:"GAN Fund",dealType:"Fund Launch",amount:50000000.0,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Climate Policy Initiative",notes:"Hybrid FIDC/CRA for bioinputs in regenerative agriculture."},
{investor:"BNDES",recipient:"Eve Air Mobility (Embraer)",dealType:"Loan",amount:40000000.0,sector:"infrastructure",sourceType:"DFI",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$200M for eVTOL aircraft R&D and certification."},
{investor:"Crescera Capital",recipient:"Colmeia",dealType:"Investment",amount:3600000.0,sector:"housing",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$18M for sustainable construction solutions."},
{investor:"Co-Capital / Din4mo / Oogway",recipient:"Mútua",dealType:"Investment",amount:null,sector:"fintech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"AI-powered impact data mapping platform. SDG/IRIS+ metrics."},
{investor:"Lightrock",recipient:"Portfolio (12+ ventures)",dealType:"Investment",amount:700000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"$700M deployed across LatAm. Backed by Liechtenstein royal family."},
{investor:"Sitawi Finance for Good",recipient:"Na'kau (+ portfolio)",dealType:"Loan",amount:null,sector:"economic-inclusion",sourceType:"DFI",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Devex",notes:"Crowdlending platform. 'Empathetic capital' model. 4.27% default rate."},
{investor:"J.P. Morgan DFI",recipient:"DP World (container terminal)",dealType:"Investment",amount:null,sector:"infrastructure",sourceType:"DFI",city:"Santos",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Devex",notes:"12.5M metric tons grain/fertilizer capacity. $2.5T sustainable dev push."},
{investor:"Eco Invest Brasil (Gov/IDB/FCDO)",recipient:"Climate projects (program)",dealType:"Partnership",amount:null,sector:"climate",sourceType:"DFI",city:"Brasília",state:"DF",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"OECD / ImpactAlpha",notes:"FX hedging program. Private banks bid for public climate funding."},
{investor:"Eqwow Ventures",recipient:"Healthcare/Fintech/Energy",dealType:"Fund Launch",amount:null,sector:"health",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"LatAm talent, asset light, regional expansion thesis."},
{investor:"Potencia Ventures (Kelly Michel)",recipient:"50+ impact funds incl. Vox, Artemisia",dealType:"Investment",amount:null,sector:"economic-inclusion",sourceType:"Foundation",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2002-present",year:2024,source:"ImpactAlpha",notes:"Portland-based endowment. Ecosystem catalyst. 30+ direct investments."},
{investor:"XP Asset Management (Infra V)",recipient:"Eveo",dealType:"Investment",amount:20000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$100M for private cloud and data center. 31.85% stake."},
{investor:"Meraki Impact",recipient:"Smallholder finance (Brazil)",dealType:"Investment",amount:null,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha / Toniic",notes:"Catalytic capital. Closing capital gap for smallholder finance."},
{investor:"Maya Capital",recipient:"Portfolio (Brazil VC)",dealType:"Fund Launch",amount:null,sector:"fintech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"LatAm-focused fund actively raising capital."},
{investor:"Vox Capital",recipient:"Tech for Good Growth II",dealType:"Fund Launch",amount:null,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Vox Capital",notes:"Currently raising. 7th VC fund. Seed-stage focus."},
{investor:"NYCEDC",recipient:"NYC Catalyst Fund II (11+ fund managers)",dealType:"Fund Launch",amount:25000000.0,sector:"economic-inclusion",sourceType:"Government",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2025",year:2025,source:"NYCEDC",notes:"Impact investing vehicle for diverse entrepreneurship and economic mobility. Expected to catalyze $125M+."},
{investor:"Harlem Capital",recipient:"Diverse founders (75+ portfolio cos)",dealType:"Fund Launch",amount:150000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2024",year:2024,source:"NYCEDC / Harlem Capital",notes:"Diversity-focused VC. Mission: invest in 1,000 diverse founders over 20 years."},
{investor:"Bridges Fund Management",recipient:"Inclusive Growth Fund (UK social enterprises)",dealType:"Fund Launch",amount:82000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"Impact Investor",notes:"£65M seeded from Bridges Evergreen. Purpose-driven businesses for vulnerable groups."},
{investor:"Bridges Fund Management",recipient:"Alina Homecare",dealType:"Investment",amount:null,sector:"health",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2025",year:2025,source:"Bridges FM",notes:"UK home care for vulnerable elderly. Part of Bridges' Inclusive Growth strategy."},
{investor:"ABC Impact (Temasek-backed)",recipient:"Fund II (pan-Asia impact PE)",dealType:"Fund Launch",amount:600000000.0,sector:"climate",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2025",year:2025,source:"PR Newswire",notes:"Doubled Fund I. LPs: Temasek, ADB, Mapletree. Climate, food, healthcare, financial inclusion."},
{investor:"ABC Impact / DBS / UOB",recipient:"Sustainability-linked subscription facility",dealType:"Loan",amount:110000000.0,sector:"climate",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2025",year:2025,source:"ANTARA / PRNewswire",notes:"Converted conventional loan to sustainability-linked instrument. GHG reduction targets."},
{investor:"Ci-Gaba Fund-of-Funds (IIGh/Savanna)",recipient:"West African venture funds + SMEs",dealType:"Fund Launch",amount:75000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2023",year:2023,source:"FSD Africa / GNA",notes:"$75M target. Blended finance unlocking pension capital for West African SMEs."},
{investor:"FSDAi (FSD Africa Investments)",recipient:"Ci-Gaba Fund",dealType:"Investment",amount:7500000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2026",year:2026,source:"FSD Africa",notes:"UK-backed specialist investor anchoring Ci-Gaba first close. 25,000 jobs target."},
{investor:"Clean Energy Finance Corp (CEFC)",recipient:"Renewable energy + grid infrastructure",dealType:"Investment",amount:3100000000.0,sector:"energy",sourceType:"Government",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2025",year:2025,source:"Chambers & Partners",notes:"Australian government green bank. Record AUD 4.7B annual commitment. Rewiring the Nation."},
{investor:"Australian Impact Investments (Aii)",recipient:"Infradebt Ethical Fund + Ngutu College",dealType:"Investment",amount:16000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"ImpactAlpha",notes:"Renewable energy/social infrastructure debt. First Nations college (50% Indigenous enrollment)."},
{investor:"Tokyo Metropolitan Government",recipient:"Public-Private Partnership Impact Growth Fund",dealType:"Fund Launch",amount:null,sector:"economic-inclusion",sourceType:"Government",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"May 2024",year:2024,source:"SIIF / GSG Impact Japan",notes:"Government-backed fund promoting impact investment through public-private partnerships."},
{investor:"JICA",recipient:"Aavishkaar",dealType:"Investment",amount:40000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"2025",year:2025,source:"ImpactAlpha",notes:"$40M investment in India/South Asia-focused impact fund manager. Financial inclusion and livelihoods."}
];

function fmt(a){if(!a)return'Undisclosed';if(a>=1e9)return'$'+(a/1e9).toFixed(1)+'B';if(a>=1e6)return'$'+(a/1e6).toFixed(0)+'M';if(a>=1e3)return'$'+(a/1e3).toFixed(0)+'K';return'$'+a}
function fmtUSD(a){if(!a)return'Undisclosed';if(a>=1e9)return'$'+(a/1e9).toFixed(1)+'B USD';if(a>=1e6)return'$'+(a/1e6).toFixed(0)+'M USD';return fmt(a)}
function isMobile(){return window.innerWidth<=640}
function jitter(b,i,s){const a=(i*137.508)*(Math.PI/180);const r=s*Math.sqrt(i+1);return[b[0]+r*Math.cos(a),b[1]+r*Math.sin(a)]}
const cityGroups={};deals.forEach(d=>{if(!cityGroups[d.city])cityGroups[d.city]=[];cityGroups[d.city].push(d)});
const filters={sector:new Set(),year:new Set(),type:new Set(),size:new Set(),source:new Set(),geo:new Set()};
let openCategory='sector',geoOpenContinent=null,geoHoverContinent=null,isolatedCountry=null,isoRadioTimer=null,lastFilters=null,undoTimer=null,lastCountry='Brazil',continentUndo={},fadingIsoCountry=null,fadingIsoTimer=null,isolatedCity=null;
function totalActive(){let c=0;Object.values(filters).forEach(s=>c+=s.size);return c}
function matchFilter(d){if(filters.sector.size>0&&!filters.sector.has(d.sector))return false;if(filters.year.size>0&&!filters.year.has(String(d.year)))return false;if(filters.type.size>0&&!filters.type.has(d.dealType))return false;if(filters.source.size>0&&!filters.source.has(d.sourceType))return false;if(filters.geo.size>0&&!filters.geo.has(d.country))return false;if(isolatedCountry&&d.country!==isolatedCountry)return false;if(isolatedCity&&d.city!==isolatedCity)return false;if(filters.size.size>0){let m=false;filters.size.forEach(sid=>{const r=SIZE_RANGES.find(x=>x.id===sid);if(!r)return;if(r.min===null){if(d.amount===null)m=true}else if(d.amount!==null&&d.amount>=r.min&&d.amount<r.max)m=true});if(!m)return false}return true}
function getFiltered(){return deals.filter(matchFilter)}
function saveFiltersSnapshot(){const snap={};Object.entries(filters).forEach(([k,s])=>snap[k]=new Set(s));snap._isolated=isolatedCountry;return snap}
function restoreFiltersSnapshot(snap){if(!snap)return;Object.entries(snap).forEach(([k,s])=>{if(k==='_isolated'){isolatedCountry=s}else{filters[k]=new Set(s)}})}
function clearAll(){lastFilters=saveFiltersSnapshot();Object.values(filters).forEach(s=>s.clear());isolatedCountry=null;isolatedCity=null;fadingIsoCountry=null;if(fadingIsoTimer)clearTimeout(fadingIsoTimer)}
function getCountriesByContinent(){const m={};deals.forEach(d=>{if(!m[d.continent])m[d.continent]=new Set();m[d.continent].add(d.country)});const r={};Object.keys(m).sort().forEach(c=>{r[c]=[...m[c]].sort()});return r}
function getSuggestedCountries(){if(typeof map==='undefined'||!map.loaded())return[];const bounds=map.getBounds();const center=map.getCenter();const inView=new Set();const countryCoords={};deals.forEach(d=>{const c=CITIES[d.city];if(c&&bounds.contains(c.coords)){inView.add(d.country);if(!countryCoords[d.country])countryCoords[d.country]=COUNTRY_DATA[d.country]?COUNTRY_DATA[d.country].coords:c.coords}});return[...inView].sort((a,b)=>{const ca=countryCoords[a]||[0,0],cb=countryCoords[b]||[0,0];const da=Math.pow(ca[0]-center.lng,2)+Math.pow(ca[1]-center.lat,2);const db=Math.pow(cb[0]-center.lng,2)+Math.pow(cb[1]-center.lat,2);return da-db})}
function buildCluster(dl){const g={};dl.forEach(d=>{if(!g[d.city])g[d.city]=[];g[d.city].push(d)});return{type:'FeatureCollection',features:Object.entries(g).map(([c,cd])=>{const m=CITIES[c]||{coords:[-46.6333,-23.5505],state:''};const tc=cd.reduce((s,d)=>s+(d.amount||0),0);const sc=new Set(cd.map(d=>d.sector));const p={city:c,state:m.state,dealCount:cd.length,totalCapital:tc,totalCapitalFormatted:fmt(tc),sectorCount:sc.size,isCluster:cd.length>1};if(cd.length===1){const d=cd[0];Object.assign(p,{investor:d.investor,recipient:d.recipient,dealType:d.dealType,amount:d.amount,amountFormatted:fmt(d.amount),sector:d.sector,sectorLabel:SL[d.sector],color:SC[d.sector],date:d.date,source:d.source,notes:d.notes,country:d.country})}return{type:'Feature',geometry:{type:'Point',coordinates:m.coords},properties:p}})}}
function buildPins(dl){const g={};dl.forEach(d=>{if(!g[d.city])g[d.city]=[];g[d.city].push(d)});const f=[];Object.entries(g).forEach(([c,cd])=>{const m=CITIES[c]||{coords:[-46.6333,-23.5505]};cd.forEach((d,i)=>{const co=cd.length>1?jitter(m.coords,i,0.012):m.coords;f.push({type:'Feature',geometry:{type:'Point',coordinates:co},properties:{city:d.city,state:d.state,country:d.country,investor:d.investor,recipient:d.recipient,dealType:d.dealType,amount:d.amount,amountFormatted:fmt(d.amount),sector:d.sector,sectorLabel:SL[d.sector]||d.sector,color:SC[d.sector]||SC.other,date:d.date,source:d.source,notes:d.notes,radius:d.amount?Math.max(7,Math.min(18,5+Math.log10(d.amount)*1.8)):7}})})});return{type:'FeatureCollection',features:f}}
const catDefs=[{id:'sector',label:'Sector'},{id:'year',label:'Year'},{id:'type',label:'Type'},{id:'size',label:'Size'},{id:'source',label:'Source'},{id:'geo',label:'Geo'}];
function getOpts(cat){switch(cat){case'sector':return[...new Set(deals.map(d=>d.sector))].sort().map(s=>({id:s,label:SL[s]||s}));case'year':return[...new Set(deals.map(d=>String(d.year)))].sort().map(y=>({id:y,label:y}));case'type':return TYPE_OPTIONS.filter(t=>deals.some(d=>d.dealType===t)).map(t=>({id:t,label:t}));case'size':return SIZE_RANGES.filter(r=>{if(r.min===null)return deals.some(d=>d.amount===null);return deals.some(d=>d.amount!==null&&d.amount>=r.min&&d.amount<r.max)}).map(r=>({id:r.id,label:r.label}));case'source':return SOURCE_OPTIONS.filter(s=>deals.some(d=>d.sourceType===s)).map(s=>({id:s,label:s}));default:return[]}}
const topRowEl=document.getElementById('filterTopRow'),filterOptionsEl=document.getElementById('filterOptions');
function buildDesktop(){
topRowEl.innerHTML='';
catDefs.forEach(cat=>{const t=document.createElement('button');t.className='cat-tab'+(openCategory===cat.id?' open':'')+(filters[cat.id].size>0?' has-selection':'');t.innerHTML=cat.label+(filters[cat.id].size>0?`<span class="cat-count">${filters[cat.id].size}</span>`:'');t.addEventListener('click',()=>{openCategory=openCategory===cat.id?null:cat.id;buildDesktop()});topRowEl.appendChild(t)});
const clr=document.createElement('button');clr.className='desktop-clear-all'+(totalActive()>0?' visible':'');clr.textContent=lastFilters&&totalActive()===0?'Reapply last filters':'Clear all';clr.addEventListener('click',()=>{if(lastFilters&&totalActive()===0){restoreFiltersSnapshot(lastFilters);lastFilters=null;applyRebuild()}else{clearAll();applyRebuild()}});topRowEl.appendChild(clr);
filterOptionsEl.innerHTML='';if(!openCategory){filterOptionsEl.classList.remove('visible');return}filterOptionsEl.classList.add('visible');
if(openCategory==='geo'){buildGeoDesktop();return}
const row=document.createElement('div');row.className='filter-opts-row';
getOpts(openCategory).forEach(opt=>{const b=document.createElement('button');b.className='opt-btn'+(filters[openCategory].has(opt.id)?' active':'');if(openCategory==='sector'&&SC[opt.id])b.innerHTML=`<span class="opt-dot" style="background:${SC[opt.id]}"></span>${opt.label}`;else b.textContent=opt.label;b.addEventListener('click',()=>{if(filters[openCategory].has(opt.id))filters[openCategory].delete(opt.id);else filters[openCategory].add(opt.id);applyRebuild()});row.appendChild(b)});
if(filters[openCategory].size>0){const cc=document.createElement('button');cc.className='cat-clear visible';cc.textContent='Clear';cc.addEventListener('click',()=>{filters[openCategory].clear();applyRebuild()});row.appendChild(cc)}
filterOptionsEl.appendChild(row)}
function buildGeoDesktop(){
const line1=document.createElement('div');line1.className='filter-opts-row';line1.style.alignItems='baseline';
if(filters.geo.size>0||isolatedCountry){const gc=document.createElement('button');gc.className='cat-clear visible';gc.textContent='Clear';gc.addEventListener('click',()=>{filters.geo.clear();isolatedCountry=null;fadingIsoCountry=null;if(fadingIsoTimer)clearTimeout(fadingIsoTimer);applyRebuild()});line1.appendChild(gc)}
if(isolatedCountry){const ip=document.createElement('span');ip.className='geo-inview-pill isolated';ip.style.marginLeft='6px';ip.style.display='inline-flex';ip.style.alignItems='center';
const txt=document.createElement('span');txt.textContent=isolatedCountry;ip.appendChild(txt);
const rd=document.createElement('span');rd.className='pill-radio active';ip.appendChild(rd);
ip.addEventListener('click',()=>{fadingIsoCountry=isolatedCountry;isolatedCountry=null;if(isoRadioTimer)clearTimeout(isoRadioTimer);if(fadingIsoTimer)clearTimeout(fadingIsoTimer);fadingIsoTimer=setTimeout(()=>{fadingIsoCountry=null;buildDesktop()},10000);applyRebuild()});line1.appendChild(ip)}
if(!isolatedCountry&&fadingIsoCountry){const fp=document.createElement('span');fp.className='geo-inview-pill'+(filters.geo.has(fadingIsoCountry)?' selected':'');fp.style.marginLeft='6px';fp.style.display='inline-flex';fp.style.alignItems='center';
const txt=document.createElement('span');txt.textContent=fadingIsoCountry;fp.appendChild(txt);
const rd=document.createElement('span');rd.className='pill-radio fading';fp.appendChild(rd);
setTimeout(()=>{rd.classList.add('fade-out')},8000);
fp.addEventListener('click',()=>{if(filters.geo.has(fadingIsoCountry))filters.geo.delete(fadingIsoCountry);else filters.geo.add(fadingIsoCountry);applyRebuild()});line1.appendChild(fp)}
const excludeFromInview=new Set();if(isolatedCountry)excludeFromInview.add(isolatedCountry);if(fadingIsoCountry)excludeFromInview.add(fadingIsoCountry);
const suggested=getSuggestedCountries().filter(c=>!excludeFromInview.has(c));const maxShow=8-excludeFromInview.size;const visible=suggested.slice(0,Math.max(0,maxShow));const extra=suggested.length-visible.length;
if(visible.length>0){const ivl=document.createElement('span');ivl.style.cssText='font-size:11px;color:var(--gt-muted);font-weight:500;margin-left:6px;white-space:nowrap';ivl.textContent='In view:';line1.appendChild(ivl)}
visible.forEach(c=>{const pill=document.createElement('span');pill.className='geo-inview-pill'+(filters.geo.has(c)?' selected':'')+(isolatedCountry?' grayed':'');pill.textContent=c;pill.style.marginLeft='6px';pill.addEventListener('click',()=>{if(filters.geo.has(c))filters.geo.delete(c);else filters.geo.add(c);applyRebuild()});line1.appendChild(pill)});
if(extra>0){const more=document.createElement('span');more.className='geo-more-btn';more.textContent=`+${extra} more`;more.style.marginLeft='6px';more.style.position='relative';more.addEventListener('click',(ev)=>{ev.stopPropagation();let tip=more.querySelector('.geo-more-tip');if(tip){tip.style.display=tip.style.display==='none'?'block':'none'}else{tip=document.createElement('div');tip.className='geo-more-tip';tip.textContent='Click country names on the map or use the continent tabs to filter by country.';tip.style.display='block';tip.style.top='24px';tip.style.left='0';more.appendChild(tip);document.addEventListener('click',()=>{tip.style.display='none'},{once:true})}});line1.appendChild(more)}
filterOptionsEl.appendChild(line1);
{const cbc=getCountriesByContinent();const contNames=Object.keys(cbc);
const wrap=document.createElement('div');wrap.className='geo-tabbar-wrap';
const bar=document.createElement('div');bar.className='geo-tabbar';
let hoverTimer=null;
contNames.forEach(cont=>{const countries=cbc[cont];const tab=document.createElement('div');tab.className='geo-tab'+(geoOpenContinent===cont?' active':'');
const nm=document.createElement('span');nm.textContent=cont;tab.appendChild(nm);
const selCount=countries.filter(c=>filters.geo.has(c)).length;
const badge=document.createElement('span');badge.className='geo-tab-badge'+(selCount>0?'':' empty');
if(countries.every(c=>filters.geo.has(c))){badge.textContent='All'}else if(selCount>0){badge.textContent=selCount}else{badge.textContent='0'}
tab.appendChild(badge);
tab.addEventListener('click',(ev)=>{ev.stopPropagation();geoOpenContinent=geoOpenContinent===cont?null:cont;geoHoverContinent=null;buildDesktop()});
tab.addEventListener('mouseenter',()=>{if(hoverTimer)clearTimeout(hoverTimer);if(!geoOpenContinent){geoHoverContinent=cont;buildTabDropdown(wrap,cbc,cont,false,tab)}else if(geoOpenContinent!==cont){const ep=wrap.querySelector('.geo-hover-peek');if(ep)ep.remove();const ct=cbc[cont];const as=ct.every(c=>filters.geo.has(c));const pk=document.createElement('div');pk.className='geo-hover-peek';pk.style.left=tab.offsetLeft+'px';const pb=document.createElement('button');pb.className='geo-sel-all'+(as?' all-selected':'');pb.textContent=as?'Clear':'Select all';pb.addEventListener('click',(ev)=>{ev.stopPropagation();if(as)ct.forEach(c=>filters.geo.delete(c));else ct.forEach(c=>filters.geo.add(c));applyRebuild()});pk.appendChild(pb);pk.addEventListener('mouseenter',()=>{if(hoverTimer)clearTimeout(hoverTimer)});pk.addEventListener('mouseleave',()=>{hoverTimer=setTimeout(()=>{const p=wrap.querySelector('.geo-hover-peek');if(p)p.remove()},150)});wrap.appendChild(pk)}});
tab.addEventListener('mouseleave',()=>{if(hoverTimer)clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>{geoHoverContinent=null;if(!geoOpenContinent){const dd=wrap.querySelector('.geo-tab-dropdown');if(dd)dd.classList.remove('visible')}const pk=wrap.querySelector('.geo-hover-peek');if(pk)pk.remove()},150)});
bar.appendChild(tab)});
wrap.appendChild(bar);
const dd=document.createElement('div');dd.className='geo-tab-dropdown';
dd.addEventListener('mouseenter',()=>{if(hoverTimer)clearTimeout(hoverTimer)});
dd.addEventListener('mouseleave',()=>{if(!geoOpenContinent){hoverTimer=setTimeout(()=>{geoHoverContinent=null;dd.classList.remove('visible')},150)}});
wrap.appendChild(dd);
filterOptionsEl.appendChild(wrap);
if(geoOpenContinent){const at=bar.querySelector('.geo-tab.active');buildTabDropdown(wrap,cbc,geoOpenContinent,true,at)}}}
function buildTabDropdown(wrap,cbc,cont,showList,anchorEl){
if(!cont)return;const dd=wrap.querySelector('.geo-tab-dropdown');if(!dd)return;
dd.innerHTML='';dd.classList.add('visible');
if(anchorEl){const bw=(wrap.querySelector('.geo-tabbar')||wrap).offsetWidth;const dw=Math.max(180,Math.round(bw*0.5));let lft=anchorEl.offsetLeft;if(lft+dw>bw)lft=Math.max(0,bw-dw);dd.style.width=dw+'px';dd.style.left=lft+'px';dd.style.right='auto'}
const countries=cbc[cont];const selCount=countries.filter(c=>filters.geo.has(c)).length;const allSel=countries.every(c=>filters.geo.has(c));
const acts=document.createElement('div');acts.className=showList?'geo-tab-actions':'geo-tab-hover-actions';
const hasUndo=continentUndo[cont]&&selCount===0;
if(selCount>0||hasUndo){const clrC=document.createElement('button');clrC.className='cat-clear visible';
if(hasUndo){clrC.textContent='↺';clrC.title='Undo clear';clrC.addEventListener('click',(ev)=>{ev.stopPropagation();continentUndo[cont].forEach(c=>filters.geo.add(c));delete continentUndo[cont];applyRebuild()})}
else{clrC.textContent='Clear';clrC.addEventListener('click',(ev)=>{ev.stopPropagation();continentUndo[cont]=countries.filter(c=>filters.geo.has(c));countries.forEach(c=>filters.geo.delete(c));applyRebuild();setTimeout(()=>{if(countries.some(c=>filters.geo.has(c))){delete continentUndo[cont];buildDesktop()}},5000)})}
acts.appendChild(clrC)}
if(!showList){const sa=document.createElement('button');sa.className='geo-sel-all'+(allSel?' all-selected':'');sa.textContent=allSel?'Clear':'Select all';sa.addEventListener('click',(ev)=>{ev.stopPropagation();if(allSel)countries.forEach(c=>filters.geo.delete(c));else countries.forEach(c=>filters.geo.add(c));applyRebuild()});acts.appendChild(sa)}
if(acts.children.length>0)dd.appendChild(acts);
if(showList){const list=document.createElement('div');list.className='geo-country-list';
const allItem=document.createElement('div');allItem.className='geo-country-item';const allCb=document.createElement('div');allCb.className='geo-checkbox'+(allSel?' checked':'');const allLbl=document.createElement('span');allLbl.textContent='All';allLbl.style.fontWeight='600';allItem.appendChild(allCb);allItem.appendChild(allLbl);allItem.addEventListener('click',()=>{if(allSel)countries.forEach(c=>filters.geo.delete(c));else countries.forEach(c=>filters.geo.add(c));applyRebuild()});list.appendChild(allItem);
countries.forEach(c=>{const item=document.createElement('div');item.className='geo-country-item'+(isolatedCountry&&c!==isolatedCountry?' grayed':'');
const cb=document.createElement('div');cb.className='geo-checkbox'+(filters.geo.has(c)?' checked':'');item.appendChild(cb);
const lbl=document.createElement('span');lbl.textContent=c;item.appendChild(lbl);
const radio=document.createElement('div');radio.className='geo-radio'+(isolatedCountry===c?' active':'');radio.title='';
let ht=null;
radio.addEventListener('mouseenter',()=>{ht=setTimeout(()=>{radio.title='Filter '+c+' only'},3000)});
radio.addEventListener('mouseleave',()=>{if(ht)clearTimeout(ht);radio.title=''});
radio.addEventListener('click',(ev)=>{ev.stopPropagation();if(isolatedCountry===c){fadingIsoCountry=c;isolatedCountry=null;radio.classList.add('fading');if(isoRadioTimer)clearTimeout(isoRadioTimer);if(fadingIsoTimer)clearTimeout(fadingIsoTimer);fadingIsoTimer=setTimeout(()=>{fadingIsoCountry=null;buildDesktop()},10000);isoRadioTimer=setTimeout(()=>{applyRebuild()},0)}else{isolatedCountry=c;fadingIsoCountry=null;if(fadingIsoTimer)clearTimeout(fadingIsoTimer)}applyRebuild()});
item.appendChild(radio);
item.addEventListener('click',()=>{if(filters.geo.has(c))filters.geo.delete(c);else filters.geo.add(c);applyRebuild()});
list.appendChild(item)});
dd.appendChild(list)}}
function applyRebuild(){const fl=getFiltered();map.getSource('clusters').setData(buildCluster(fl));map.getSource('pins').setData(buildPins(fl));hideOv();updateStats(fl);buildDesktop();updateMobileUI();
if(totalActive()>0&&lastFilters){if(undoTimer)clearTimeout(undoTimer);undoTimer=setTimeout(()=>{lastFilters=null;buildDesktop();updateMobileUI()},5000)}}
const mobileIcon=document.getElementById('mobileFilterIcon'),mobileBadge=document.getElementById('mobileIconBadge'),mobileClear=document.getElementById('mobileClearBtn'),overlay=document.getElementById('filterOverlay'),panelBody=document.getElementById('filterPanelBody'),footerStats=document.getElementById('filterFooterStats');
function buildMobile(){panelBody.innerHTML='';catDefs.forEach(cat=>{const sec=document.createElement('div');sec.className='mobile-cat-section';const hdr=document.createElement('div');hdr.className='mobile-cat-header';const lbl=document.createElement('div');lbl.className='mobile-cat-label';lbl.textContent=cat.label;hdr.appendChild(lbl);
const clrb=document.createElement('button');clrb.className='mobile-cat-clear'+(filters[cat.id].size>0?' visible':'');clrb.textContent='Clear';clrb.addEventListener('click',()=>{filters[cat.id].clear();applyRebuild();buildMobile()});hdr.appendChild(clrb);
sec.appendChild(hdr);
if(cat.id==='geo'){buildGeoMobile(sec);panelBody.appendChild(sec);return}
const od=document.createElement('div');od.className='mobile-cat-options';getOpts(cat.id).forEach(opt=>{const b=document.createElement('button');b.className='mobile-opt-btn'+(filters[cat.id].has(opt.id)?' active':'');if(cat.id==='sector'&&SC[opt.id])b.innerHTML=`<span class="opt-dot" style="background:${SC[opt.id]}"></span>${opt.label}`;else b.textContent=opt.label;b.addEventListener('click',()=>{if(filters[cat.id].has(opt.id))filters[cat.id].delete(opt.id);else filters[cat.id].add(opt.id);applyRebuild();buildMobile()});od.appendChild(b)});sec.appendChild(od);panelBody.appendChild(sec)});updateMobileFooterStats()}
function buildGeoMobile(sec){
const row=document.createElement('div');row.className='mobile-cat-options';row.style.cssText='margin-bottom:8px;align-items:baseline';
const suggested=getSuggestedCountries();const vis=suggested.slice(0,8);
if(vis.length>0){const ivl=document.createElement('span');ivl.style.cssText='font-size:11px;color:var(--gt-muted);font-weight:500;margin-left:4px;white-space:nowrap';ivl.textContent='In view:';row.appendChild(ivl)}
vis.forEach(c=>{const pill=document.createElement('span');pill.className='geo-inview-pill'+(filters.geo.has(c)?' selected':'');pill.textContent=c;pill.addEventListener('click',()=>{if(filters.geo.has(c))filters.geo.delete(c);else filters.geo.add(c);applyRebuild();buildMobile()});row.appendChild(pill)});
if(suggested.length>8){const more=document.createElement('span');more.className='geo-more-btn';more.textContent=`+${suggested.length-8} more`;row.appendChild(more)}
sec.appendChild(row);
const cbc=getCountriesByContinent();const contNames=Object.keys(cbc);
const wrap=document.createElement('div');wrap.className='geo-tabbar-wrap geo-tabbar-wrap--mobile';
const bar=document.createElement('div');bar.className='geo-tabbar';
contNames.forEach(cont=>{const countries=cbc[cont];const tab=document.createElement('div');tab.className='geo-tab'+(geoOpenContinent===cont?' active':'');
const nm=document.createElement('span');nm.className='geo-tab-name';nm.textContent=cont;tab.appendChild(nm);
const selCount=countries.filter(c=>filters.geo.has(c)).length;
const badge=document.createElement('span');badge.className='geo-tab-badge'+(selCount>0?'':' empty');
if(countries.every(c=>filters.geo.has(c))){badge.textContent='All'}else if(selCount>0){badge.textContent=selCount}else{badge.textContent='0'}
tab.appendChild(badge);
tab.addEventListener('click',(ev)=>{ev.stopPropagation();geoOpenContinent=geoOpenContinent===cont?null:cont;buildMobile()});
bar.appendChild(tab)});
wrap.appendChild(bar);sec.appendChild(wrap);
if(geoOpenContinent&&cbc[geoOpenContinent]){const cont=geoOpenContinent;const countries=cbc[cont];
const selCount=countries.filter(c=>filters.geo.has(c)).length;const allSel=countries.every(c=>filters.geo.has(c));const hasUndo=continentUndo[cont]&&selCount===0;
const dd=document.createElement('div');dd.className='geo-mobile-dropdown';
const acts=document.createElement('div');acts.className='geo-tab-actions';
if(selCount>0||hasUndo){const clrC=document.createElement('button');clrC.className='cat-clear visible';
if(hasUndo){clrC.textContent='↺';clrC.title='Undo clear';clrC.addEventListener('click',(ev)=>{ev.stopPropagation();continentUndo[cont].forEach(c=>filters.geo.add(c));delete continentUndo[cont];applyRebuild();buildMobile()})}
else{clrC.textContent='Clear';clrC.addEventListener('click',(ev)=>{ev.stopPropagation();continentUndo[cont]=countries.filter(c=>filters.geo.has(c));countries.forEach(c=>filters.geo.delete(c));applyRebuild();buildMobile();setTimeout(()=>{if(countries.some(c=>filters.geo.has(c))){delete continentUndo[cont];buildMobile()}},5000)})}
acts.appendChild(clrC)}
const sa=document.createElement('button');sa.className='geo-sel-all'+(allSel?' all-selected':'');sa.textContent='Select all';sa.addEventListener('click',(ev)=>{ev.stopPropagation();if(allSel)countries.forEach(c=>filters.geo.delete(c));else countries.forEach(c=>filters.geo.add(c));applyRebuild();buildMobile()});acts.appendChild(sa);
dd.appendChild(acts);
const list=document.createElement('div');list.className='geo-country-list';
countries.forEach(c=>{const item=document.createElement('div');item.className='geo-country-item';
const cb=document.createElement('div');cb.className='geo-checkbox'+(filters.geo.has(c)?' checked':'');item.appendChild(cb);
const lbl=document.createElement('span');lbl.textContent=c;item.appendChild(lbl);
item.addEventListener('click',()=>{if(filters.geo.has(c))filters.geo.delete(c);else filters.geo.add(c);applyRebuild();buildMobile()});
list.appendChild(item)});
dd.appendChild(list);sec.appendChild(dd)}}
function updateMobileFooterStats(){const fl=getFiltered();const tc=fl.reduce((s,d)=>s+(d.amount||0),0);footerStats.innerHTML=`<span class="filter-footer-stat"><strong>${fl.length}</strong> deals</span><span class="filter-footer-stat"><strong>${fmt(tc)}</strong> capital</span>`;
const clrBtn=document.getElementById('filterFooterClear');
if(totalActive()>0){clrBtn.className='filter-footer-clear visible';clrBtn.textContent='Clear all filters'}else if(lastFilters){clrBtn.className='filter-footer-clear visible';clrBtn.textContent='Reapply last filters'}else{clrBtn.className='filter-footer-clear'}}
function updateMobileUI(){const ta=totalActive();mobileBadge.style.display=ta>0?'block':'none';mobileBadge.textContent=ta;mobileClear.style.display=ta>0?'block':'none'}
function openMobilePanel(){overlay.style.display='block';buildMobile()}
function closeMobilePanel(){overlay.style.display='none';applyRebuild()}
mobileIcon.addEventListener('click',openMobilePanel);
document.getElementById('filterPanelClose').addEventListener('click',closeMobilePanel);
overlay.addEventListener('click',e=>{if(e.target===overlay)closeMobilePanel()});
document.getElementById('filterFooterClear').addEventListener('click',()=>{if(lastFilters&&totalActive()===0){restoreFiltersSnapshot(lastFilters);lastFilters=null}else{clearAll()}applyRebuild();buildMobile()});
mobileClear.addEventListener('click',()=>{clearAll();applyRebuild()});
const ZT=9,CZT=6;
const initCenter=window.innerWidth<=640?[-65,15]:[-40,15];
const map=new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/light-v11',center:initCenter,zoom:2.5,minZoom:2,maxZoom:16,attributionControl:false});
map.addControl(new mapboxgl.AttributionControl({compact:true}),'bottom-right');
let spinning=true;let lastSpin=0;
function spinGlobe(ts){if(!spinning)return;if(ts-lastSpin>50){const center=map.getCenter();map.setCenter([center.lng-0.06,center.lat],{duration:0});lastSpin=ts}requestAnimationFrame(spinGlobe)}
requestAnimationFrame(spinGlobe);
['mousedown','touchstart','wheel','dblclick'].forEach(ev=>map.getCanvas().addEventListener(ev,()=>{spinning=false},{once:true}));
map.on('dragstart',()=>{spinning=false});
map.on('zoomstart',()=>{spinning=false});
map.on('load',()=>{
try{const gtNames=Object.keys(COUNTRY_DATA);if(map.getLayer('country-label'))map.setFilter('country-label',['!',['match',['get','name_en'],gtNames,true,false]])}catch(e){}
try{['state-label','settlement-subdivision-label'].forEach(l=>{if(map.getLayer(l))map.setLayerZoomRange(l,5,24)})}catch(e){}
map.addSource('clusters',{type:'geojson',data:buildCluster(deals)});
map.addSource('pins',{type:'geojson',data:buildPins(deals)});
map.addSource('gt-country-labels',{type:'geojson',data:{type:'FeatureCollection',features:Object.entries(COUNTRY_DATA).map(([name,d])=>({type:'Feature',geometry:{type:'Point',coordinates:d.labelCoords},properties:{name:name}}))}});
map.addLayer({id:'city-clusters',type:'circle',source:'clusters',filter:['==',['get','isCluster'],true],paint:{'circle-radius':['interpolate',['linear'],['get','dealCount'],1,16,5,24,10,32,20,40],'circle-color':'#1B4332','circle-opacity':.88,'circle-stroke-width':3,'circle-stroke-color':'#fff','circle-stroke-opacity':.9}});
map.addLayer({id:'city-cluster-count',type:'symbol',source:'clusters',filter:['==',['get','isCluster'],true],layout:{'text-field':['get','dealCount'],'text-font':['DIN Pro Bold','Arial Unicode MS Bold'],'text-size':15,'text-allow-overlap':true},paint:{'text-color':'#fff'}});
map.addLayer({id:'city-cluster-name',type:'symbol',source:'clusters',filter:['==',['get','isCluster'],true],layout:{'text-field':['get','city'],'text-font':['DIN Pro Medium','Arial Unicode MS Regular'],'text-size':12,'text-offset':[0,3],'text-anchor':'top'},paint:{'text-color':'#1B4332','text-halo-color':'#fff','text-halo-width':2}});
map.addLayer({id:'single-pins',type:'circle',source:'clusters',filter:['==',['get','isCluster'],false],paint:{'circle-radius':10,'circle-color':['coalesce',['get','color'],'#9CA3AF'],'circle-opacity':.88,'circle-stroke-width':2,'circle-stroke-color':'#fff'}});
map.addLayer({id:'single-pin-name',type:'symbol',source:'clusters',filter:['==',['get','isCluster'],false],layout:{'text-field':['get','city'],'text-font':['DIN Pro Medium','Arial Unicode MS Regular'],'text-size':11,'text-offset':[0,2],'text-anchor':'top'},paint:{'text-color':'#555','text-halo-color':'#fff','text-halo-width':1.5}});
map.addLayer({id:'gt-country-label',type:'symbol',source:'gt-country-labels',maxzoom:CZT,layout:{'text-field':['get','name'],'text-font':['DIN Pro Bold','Arial Unicode MS Bold'],'text-size':14,'text-allow-overlap':true},paint:{'text-color':'#4B7FA8','text-halo-color':'rgba(75,127,168,0.125)','text-halo-width':0.75}});
map.addLayer({id:'deal-pins',type:'circle',source:'pins',minzoom:ZT,paint:{'circle-radius':['get','radius'],'circle-color':['get','color'],'circle-opacity':.88,'circle-stroke-width':2,'circle-stroke-color':'#fff'}});
map.addLayer({id:'deal-labels',type:'symbol',source:'pins',minzoom:ZT,filter:['has','amount'],layout:{'text-field':['get','amountFormatted'],'text-font':['DIN Pro Medium','Arial Unicode MS Regular'],'text-size':10,'text-offset':[0,-2],'text-anchor':'bottom','text-allow-overlap':false},paint:{'text-color':'#1a1a1a','text-halo-color':'#fff','text-halo-width':1.5}});
map.on('zoom',()=>{const z=map.getZoom();const v=z<ZT;['city-clusters','single-pins'].forEach(l=>{map.setPaintProperty(l,'circle-opacity',v?.88:0);map.setPaintProperty(l,'circle-stroke-opacity',v?.9:0)});['city-cluster-count','city-cluster-name','single-pin-name'].forEach(l=>map.setPaintProperty(l,'text-opacity',v?1:0));document.getElementById('backBtn').style.display=z>=CZT+0.5?'block':'none';if(z>=ZT)hideOv()});
map.on('moveend',()=>{if(openCategory==='geo'&&!spinning)buildDesktop()});
map.on('click','city-clusters',e=>{if(map.getZoom()<ZT){const city=e.features[0].properties.city;if(COUNTRY_DATA[getCountryForCity(city)]&&!CITIES[city])showOv('country',getCountryForCity(city));else showOv('city',city)}});
map.on('click','single-pins',e=>{if(map.getZoom()<ZT){const p=e.features[0].properties;const country=p.country||getCountryForCity(p.city);if(country==='Singapore')showOv('country','Singapore');else showDeal(e.features[0])}});
map.on('click','deal-pins',e=>{hideOv();showDeal(e.features[0])});
map.on('click','gt-country-label',e=>{const name=e.features[0].properties.name;if(COUNTRY_DATA[name])showOv('country',name)});
['city-clusters','single-pins','deal-pins','gt-country-label'].forEach(l=>{map.on('mouseenter',l,()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave',l,()=>map.getCanvas().style.cursor='')});
buildDesktop();updateMobileUI();updateStats(deals)});
function getCountryForCity(city){const d=deals.find(x=>x.city===city);return d?d.country:''}
document.getElementById('backBtn').addEventListener('click',()=>{const cd=COUNTRY_DATA[lastCountry];if(cd&&cd.zoomTo)map.flyTo({...cd.zoomTo,duration:1000});else map.flyTo({center:[-40,15],zoom:2.5,duration:1000});hideOv()});
function showOv(level,name){const card=document.getElementById('overviewCard');let data,dl;
if(level==='country'){data=COUNTRY_DATA[name];dl=getFiltered().filter(d=>d.country===name);lastCountry=name;document.getElementById('backBtn').textContent='← View '+name}else{data=CITIES[name];dl=(cityGroups[name]||[]).filter(matchFilter);const cc=getCountryForCity(name);if(cc&&COUNTRY_DATA[cc]){lastCountry=cc;document.getElementById('backBtn').textContent='← View '+cc}}
if(!data)return;const tc=dl.reduce((s,d)=>s+(d.amount||0),0);
document.getElementById('ovTitle').textContent=level==='country'?name:`${name}, ${getCountryForCity(name)}`;
document.getElementById('ovDeals').textContent=dl.length;
document.getElementById('ovCapital').textContent=fmt(tc);
document.getElementById('ovBlurb').textContent=data.blurb;
document.getElementById('ovSidebar').textContent=data.sidebar;
const fr=document.getElementById('ovFilterRow');
fr.innerHTML='';fr.onclick=null;fr.style.flexDirection='column';fr.style.gap='4px';fr.style.cursor='default';fr.style.alignItems='stretch';
const mkOpt=(label,checked,cb)=>{const d=document.createElement('div');d.style.cssText='display:flex;align-items:center;gap:8px;cursor:pointer;padding:3px 0';const ch=document.createElement('div');ch.className='ov-filter-check'+(checked?' checked':'');const lb=document.createElement('div');lb.className='ov-filter-label';lb.textContent=label;d.appendChild(ch);d.appendChild(lb);d.addEventListener('click',cb);return d};
if(level==='country'){fr.style.display='flex';
fr.appendChild(mkOpt('Add '+name+' filter',filters.geo.has(name),()=>{if(filters.geo.has(name))filters.geo.delete(name);else filters.geo.add(name);applyRebuild();showOv(level,name)}));
fr.appendChild(mkOpt('Filter '+name+' only',isolatedCountry===name,()=>{if(isolatedCountry===name){fadingIsoCountry=name;isolatedCountry=null;if(isoRadioTimer)clearTimeout(isoRadioTimer);if(fadingIsoTimer)clearTimeout(fadingIsoTimer);fadingIsoTimer=setTimeout(()=>{fadingIsoCountry=null;buildDesktop()},10000)}else{isolatedCountry=name;fadingIsoCountry=null;if(fadingIsoTimer)clearTimeout(fadingIsoTimer)}applyRebuild();showOv(level,name)}))}
else if(level==='city'){const cc=getCountryForCity(name);fr.style.display='flex';
fr.appendChild(mkOpt('Add '+name+' filter',filters.geo.has(cc),()=>{if(filters.geo.has(cc))filters.geo.delete(cc);else filters.geo.add(cc);applyRebuild();showOv(level,name)}));
fr.appendChild(mkOpt('Filter '+name+' only',isolatedCity===name,()=>{if(isolatedCity===name){isolatedCity=null}else{isolatedCity=name}applyRebuild();showOv(level,name)}))}
else{fr.style.display='none'}
const zb=document.getElementById('ovZoomBtn');zb.textContent=level==='country'?'View':'Zoom in';zb.onclick=()=>{if(level==='country')map.flyTo({...data.zoomTo,duration:1200});else map.flyTo({center:data.coords,zoom:11,duration:1200});hideOv()};
card.style.visibility='hidden';card.style.display='block';const cw=map.getContainer().clientWidth;const ch=map.getContainer().clientHeight;const cardW=Math.min(400,cw-40);const cardH=card.offsetHeight;card.style.left=((cw-cardW)/2)+'px';card.style.right='auto';card.style.transform='none';card.style.bottom='auto';
if(level==='country'){card.style.top=Math.max(20,(ch-cardH)/2)+'px'}else{const pt=map.project(data.coords);if(pt.y<ch/3){card.style.top=Math.max(pt.y+30,130)+'px'}else if(pt.y>ch*2/3){card.style.top=Math.max(20,pt.y-cardH-30)+'px'}else{card.style.top=Math.max(20,pt.y-cardH/2)+'px'}}card.style.visibility='visible'}
function hideOv(){document.getElementById('overviewCard').style.display='none'}
document.getElementById('ovClose').addEventListener('click',hideOv);
function getSmartAnchor(ll){const pt=map.project(ll);const w=map.getContainer().clientWidth;const h=map.getContainer().clientHeight;const mb=isMobile();const pw=mb?135:160;const ph=mb?200:260;const topZone=mb?130:170;let vert='bottom';if(pt.y<ph+topZone)vert='top';let horiz='';if(w-pt.x<pw+15)horiz='right';else if(pt.x<pw+15)horiz='left';if(mb&&pt.x<70&&pt.y<140){vert='top';horiz='left'}return horiz?vert+'-'+horiz:vert}
function showDeal(f){const p=f.properties;const c=p.color||SC[p.sector]||'#9CA3AF';const sl=p.sectorLabel||SL[p.sector]||p.sector;const anchor=getSmartAnchor(f.geometry.coordinates);const mb=isMobile();
const loc=p.state?`${p.city}, ${p.state}, ${p.country}`:`${p.city}, ${p.country}`;
const popup=new mapboxgl.Popup({offset:15,maxWidth:mb?'270px':'320px',anchor:anchor}).setLngLat(f.geometry.coordinates).setHTML(`<div class="popup-header"><div class="popup-deal-type">${p.dealType}</div><div class="popup-title">${p.investor} → ${p.recipient}</div></div><div class="popup-body"><div class="popup-row"><span class="popup-label">Amount (USD)</span><span class="popup-value">${p.amountFormatted||fmt(p.amount)}</span></div><div class="popup-row"><span class="popup-label">Sector</span><span class="popup-value"><span class="popup-sector-tag" style="background:${c}22;color:${c}">${sl}</span></span></div><div class="popup-row"><span class="popup-label">Location</span><span class="popup-value">${loc}</span></div><div class="popup-row"><span class="popup-label">Date</span><span class="popup-value">${p.date}</span></div><div class="popup-row"><span class="popup-label">Source</span><span class="popup-value">${p.source}</span></div><div class="popup-notes">${p.notes}</div></div>`).addTo(map);
if(mb){setTimeout(()=>{const el=popup.getElement();if(!el)return;const r=el.getBoundingClientRect();const cr=map.getContainer().getBoundingClientRect();let px=0,py=0;if(r.left<cr.left+8)px=r.left-cr.left-8;if(r.right>cr.right-8)px=r.right-cr.right+8;if(r.top<cr.top+8)py=r.top-cr.top-8;if(r.bottom>cr.bottom-8)py=r.bottom-cr.bottom+8;if(px!==0||py!==0)map.panBy([px,py],{duration:300})},50)}}
function updateStats(dl){const tc=dl.reduce((s,d)=>s+(d.amount||0),0);document.getElementById('stats').innerHTML=`<div class="stat-card"><div class="stat-value">${dl.length}</div><div class="stat-label">Deals tracked</div></div><div class="stat-card"><div class="stat-value" style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">${fmt(tc)}<span style="font-family:'DM Sans',sans-serif;font-size:10px;color:var(--gt-muted);font-weight:600;letter-spacing:.04em">USD</span></div><div class="stat-label">Capital identified</div></div>`}

// ── REPORT GENERATION ─────────────────────────────────────────────────────────

const SECTOR_PT_LABEL={
  'climate':'Clima','economic-inclusion':'Inclusão Econômica','conservation':'Conservação',
  'health':'Saúde','energy':'Energia','agritech':'Agritech','infrastructure':'Infraestrutura',
  'fintech':'Fintech','housing':'Habitação','circular-economy':'Economia Circular','other':'Outro'
};
const SECTOR_TAG={
  'climate':{text:'#2D6A4F',bg:'#D8F3DC'},'economic-inclusion':{text:'#1B4965',bg:'#D6EAF8'},
  'conservation':{text:'#6B4226',bg:'#FDEBD0'},'health':{text:'#7B2D4E',bg:'#FADBD8'},
  _default:{text:'#5A6B62',bg:'#E8E6E3'}
};
const DEAL_TYPE_PT={
  'Investment':'Investimento','Fund Launch':'Lanç. de Fundo','Loan':'Empréstimo',
  'Partnership':'Parceria','Grant':'Doação'
};
const MONTHS_PT=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

function fmtPT(a){
  if(!a)return'—';
  if(a>=1e9)return'$'+(a/1e9).toFixed(1).replace('.0','')+' bi';
  if(a>=1e6)return'$'+Math.round(a/1e6)+' mi';
  if(a>=1e3)return'$'+Math.round(a/1e3)+' mil';
  return'$'+a;
}
function deriveInstrument(d){
  if(d.dealType==='Loan')return'dívida';
  if(d.dealType==='Grant')return'doação';
  if(d.dealType==='Partnership')return'parceria';
  if(d.dealType==='Fund Launch')return'fundo';
  if(d.sourceType==='DFI'||d.sourceType==='Foundation')return'blended finance';
  if(d.sourceType==='Government')return'subvenção';
  return'equity';
}
function slugify(str){
  return str.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,'-').replace(/[^a-zA-Z0-9-]/g,'');
}
function generateFilename(){
  const today=new Date();
  const dateStr=today.toISOString().slice(0,10);
  const parts=[];
  if(isolatedCountry){parts.push(slugify(isolatedCountry))}
  else if(filters.geo.size===1){parts.push(slugify([...filters.geo][0]))}
  else{parts.push('Global')}
  const sectorSlugs=[...filters.sector].slice(0,2).map(s=>slugify(SECTOR_PT_LABEL[s]||s));
  parts.push(...sectorSlugs);
  return'GivingTree-Panorama-'+dateStr+'-'+parts.slice(0,3).join('-')+'.pdf';
}

function buildReportHTML(fl){
  const today=new Date();
  const dateStr=today.getDate()+' de '+MONTHS_PT[today.getMonth()];
  const yearStr=today.getFullYear();
  const totalCapital=fl.reduce((s,d)=>s+(d.amount||0),0);
  const uniqueCities=new Set(fl.map(d=>d.city));
  const uniqueSectors=new Set(fl.map(d=>d.sector));
  const uniqueTypes=new Set(fl.map(d=>d.dealType));
  const uniqueInstruments=new Set(fl.map(d=>deriveInstrument(d)));
  const uniqueCountries=new Set(fl.map(d=>d.country));
  const modalidadesCount=uniqueTypes.size+uniqueInstruments.size;

  const cityCount={};fl.forEach(d=>{cityCount[d.city]=(cityCount[d.city]||0)+1});
  const topCity=Object.entries(cityCount).sort((a,b)=>b[1]-a[1])[0]?.[0]||'';

  const sectorNames=[...uniqueSectors].map(s=>'<strong>'+( SECTOR_PT_LABEL[s]||s)+'</strong>').join(' e ');
  const typeNamesStr=[...uniqueTypes].map(t=>(DEAL_TYPE_PT[t]||t).toLowerCase()).join(', ');
  const instrNamesStr=[...uniqueInstruments].join(', ');

  const sorted=[...fl].sort((a,b)=>(b.amount||0)-(a.amount||0));
  const showAll=sorted.length<=7;
  const display=showAll?sorted:sorted.slice(0,5);
  const tableNote=showAll
    ?fl.length+' operaç'+(fl.length===1?'ão':'ões')
    :display.length+' de '+fl.length+' operações · por volume';

  const logoSvg=`<svg viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg" style="height:38px;width:auto"><g transform="translate(110,0)"><g><g transform="translate(11,0)"><g fill="#1B4332"><g transform="translate(0.939,1253.113)"><path d="M 165.516 -800.563 C 165.516 -678.227 192.797 -616.758 247.359 -616.156 C 256.953 -616.156 271.946 -625.148 292.344 -643.141 C 326.52 -668.328 355.301 -681.82 378.688 -683.625 C 417.07 -683.625 438.063 -665.332 441.656 -628.75 C 443.457 -604.164 432.063 -584.977 407.469 -571.188 C 394.883 -564.594 381.691 -561.297 367.891 -561.297 C 299.535 -561.297 250.066 -566.391 219.484 -576.578 C 144.523 -601.172 92.953 -651.547 64.766 -727.703 C 52.172 -763.078 45.875 -800.555 45.875 -840.141 C 45.875 -954.078 99.242 -1026.035 205.984 -1056.016 C 238.961 -1065.609 274.941 -1070.406 313.922 -1070.406 L 995.75 -1070.406 C 1061.719 -1070.406 1104.297 -1084.195 1123.484 -1111.781 C 1136.078 -1130.977 1142.375 -1159.766 1142.375 -1198.141 L 1180.156 -1198.141 C 1203.539 -1119.586 1203.238 -1067.863 1179.25 -1042.969 C 1155.258 -1018.082 1115.383 -1003.844 1059.625 -1000.25 L 719.609 -1000.25 L 719.609 -188 C 719.609 -132.821 723.504 -96.988 731.297 -80.5 C 739.086 -64.008 757.379 -52.77 786.172 -46.781 L 838.344 -36.875 L 838.344 0 L 489.328 0 L 489.328 -37.781 L 551.391 -51.266 C 573.578 -56.066 587.375 -62.961 592.781 -71.953 C 597.571 -82.148 599.969 -104.039 599.969 -137.625 L 599.969 -1000.25 L 303.141 -1000.25 C 233.578 -1000.25 190.098 -958.875 172.703 -876.125 C 167.91 -852.727 165.516 -827.539 165.516 -800.563 Z"/></g></g></g></g><g transform="translate(0,447)"><g fill="#1B4332"><g transform="translate(1114.484,1046.847)"><path d="M -408.188 -573.547 L -408.188 -1015.984 L -399.25 -1015.984 C -399.25 -991.16 -390.555 -970.055 -373.172 -952.672 C -355.797 -935.297 -334.691 -926.609 -309.859 -926.609 L 0 -926.609 C -10.926 -908.734 -19.863 -889.363 -26.813 -868.5 C -33.77 -847.645 -37.25 -823.316 -37.25 -795.516 C -37.25 -759.754 -34.266 -728.219 -28.297 -700.906 C -22.336 -673.602 -16.129 -646.539 -9.672 -619.719 C -3.223 -592.906 0 -562.613 0 -528.844 C 0 -464.289 -13.406 -403.707 -40.219 -347.094 C -67.031 -290.488 -104.52 -240.582 -152.688 -197.375 C -200.863 -154.176 -256.484 -120.41 -319.547 -96.078 C -382.609 -71.754 -449.895 -59.594 -521.406 -59.594 C -592.906 -59.594 -660.188 -71.754 -723.25 -96.078 C -786.321 -120.41 -841.941 -154.176 -890.109 -197.375 C -938.273 -240.582 -975.766 -290.488 -1002.578 -347.094 C -1029.391 -403.707 -1042.797 -464.289 -1042.797 -528.844 C -1042.797 -582.477 -1033.609 -633.129 -1015.234 -680.797 C -996.867 -728.473 -973.285 -770.93 -944.484 -808.172 C -915.68 -845.41 -884.395 -874.461 -850.625 -895.328 C -834.738 -905.254 -818.352 -912.945 -801.469 -918.406 C -784.582 -923.875 -768.195 -926.609 -752.313 -926.609 C -708.613 -926.609 -671.117 -910.961 -639.828 -879.672 C -608.547 -848.391 -592.906 -810.898 -592.906 -767.203 C -592.906 -723.504 -608.547 -686.016 -639.828 -654.734 C -671.117 -623.453 -708.613 -607.813 -752.313 -607.813 C -777.133 -607.813 -798.234 -612.281 -815.609 -621.219 C -832.992 -630.156 -848.391 -640.332 -861.797 -651.75 C -875.203 -663.176 -888.609 -673.359 -902.016 -682.297 C -915.43 -691.234 -931.078 -695.703 -948.953 -695.703 C -972.785 -695.703 -990.91 -685.27 -1003.328 -664.406 C -1015.742 -643.551 -1023.938 -619.961 -1027.906 -593.641 C -1031.875 -567.328 -1033.859 -545.727 -1033.859 -528.844 C -1033.859 -494.082 -1010.77 -462.051 -964.594 -432.75 C -918.414 -403.457 -856.594 -380.117 -779.125 -362.734 C -701.656 -345.359 -615.75 -336.672 -521.406 -336.672 C -427.051 -336.672 -341.141 -345.359 -263.672 -362.734 C -186.211 -380.117 -124.391 -403.457 -78.203 -432.75 C -32.023 -462.051 -8.938 -494.082 -8.938 -528.844 C -8.938 -545.727 -10.922 -567.828 -14.891 -595.141 C -18.867 -622.453 -27.313 -645.547 -40.219 -664.422 L -309.859 -664.422 C -334.691 -664.422 -355.797 -655.727 -373.172 -638.344 C -390.555 -620.969 -399.25 -599.367 -399.25 -573.547 Z"/></g></g></g></g></svg>`;

  const linkedinSvg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="width:30px;height:30px;display:inline-block"><rect width="40" height="40" rx="7" fill="#0A66C2"/><path d="M13 17h4v13h-4zm2-6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm6 6.5h3.8v1.8h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.8 5 6.3V30h-4v-6.8c0-1.6-.4-2.9-1.8-2.9-1.5 0-2.1 1-2.1 2.6V30h-4V17z" fill="#fff"/></svg>`;
  const substackSvg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="width:30px;height:30px;display:inline-block"><rect width="40" height="40" rx="7" fill="#FF6719"/><path d="M9 12h22v3H9zm0 6h22v3H9zm0 6l11 7 11-7v9H9z" fill="#fff"/></svg>`;

  const tableRows=display.map((d,i)=>{
    const tag=SECTOR_TAG[d.sector]||SECTOR_TAG._default;
    const sLabel=SECTOR_PT_LABEL[d.sector]||d.sector;
    const tLabel=DEAL_TYPE_PT[d.dealType]||d.dealType;
    const rawName=d.dealType==='Fund Launch'?d.recipient:(d.investor+' → '+d.recipient);
    const name=rawName.length>38?rawName.slice(0,36)+'…':rawName;
    const rowBg=i%2===0?'#fff':'#FAFAF8';
    return`<tr style="background:${rowBg}"><td style="padding:8px 10px 8px 0;font-weight:600;font-size:11.5px;border-bottom:1px solid #EDE9E4;max-width:200px">${name}</td><td style="padding:8px;color:#1B4332;font-weight:700;font-size:11.5px;border-bottom:1px solid #EDE9E4;white-space:nowrap">${fmtPT(d.amount)}</td><td style="padding:8px;font-size:11.5px;border-bottom:1px solid #EDE9E4;white-space:nowrap">${d.city}</td><td style="padding:8px;border-bottom:1px solid #EDE9E4"><span style="display:inline-block;padding:2px 9px;border-radius:10px;font-size:10px;font-weight:500;background:${tag.bg};color:${tag.text};white-space:nowrap">${sLabel}</span></td><td style="padding:8px 0 8px 8px;border-bottom:1px solid #EDE9E4"><span style="display:inline-block;padding:2px 9px;border-radius:10px;font-size:10px;font-weight:500;background:#E8E6E3;color:#5A6B62;white-space:nowrap">${tLabel}</span></td></tr>`;
  }).join('');

  return`<div id="gt-report-page" style="width:794px;height:1122px;font-family:'DM Sans',sans-serif;background:#fff;color:#1a1a1a;display:flex;flex-direction:column;box-sizing:border-box;overflow:hidden">
<div style="height:5px;background:linear-gradient(to right,#1B4332,#4B7FA8);flex-shrink:0"></div>
<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:16px 30px 12px;flex-shrink:0">
  <div style="display:flex;align-items:center;gap:10px">${logoSvg}<div style="font-family:'DM Sans',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1B4332;line-height:1.25">GIVING<br>TREE</div></div>
  <div style="text-align:center"><div style="font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#6b7280;margin-bottom:3px">PANORAMA</div><div style="font-family:'DM Serif Display',Georgia,serif;font-size:30px;line-height:1.1"><span style="color:#1B4332">Impact </span><span style="color:#4B7FA8">Capital</span></div></div>
  <div style="text-align:right"><div style="font-size:13px;font-weight:700;color:#D4622A;letter-spacing:.06em;margin-bottom:5px">DEMO</div><div style="font-size:11px;color:#6b7280;line-height:1.5">Gerado<br>${dateStr}<br>${yearStr}</div></div>
</div>
<div style="height:1.5px;background:linear-gradient(to right,#1B4332,#4B7FA8);margin:0 30px;flex-shrink:0"></div>
<div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:18px 30px 16px;min-height:0">
  <div>
    <div style="font-size:11px;color:#6b7280;font-weight:500;letter-spacing:.05em;text-align:center;margin-bottom:10px">Mapeamento</div>
    <div style="display:flex;gap:18px">
      <div style="flex:1;border:2px solid #1B4332;border-radius:10px;background:#FAFAF8;padding:18px 16px;text-align:center"><div style="font-family:'DM Serif Display',Georgia,serif;font-size:40px;color:#1B4332;line-height:1">${fl.length}</div><div style="font-size:11px;color:#6b7280;margin-top:5px">operações</div></div>
      <div style="flex:1;border:2px solid #1B4332;border-radius:10px;background:#FAFAF8;padding:18px 16px;text-align:center"><div style="font-family:'DM Serif Display',Georgia,serif;font-size:40px;color:#1B4332;line-height:1">${fmtPT(totalCapital)}</div><div style="font-size:11px;color:#6b7280;margin-top:5px">em capital (USD)</div></div>
    </div>
  </div>
  <div>
    <div style="display:flex;gap:12px;margin-bottom:10px">
      <div style="flex:1;background:#E8F0F8;border-radius:9px;padding:14px;text-align:center"><div style="font-family:'DM Serif Display',Georgia,serif;font-size:30px;color:#1B4332">${uniqueCities.size}</div><div style="font-size:10px;color:#6b7280;margin-top:3px">cidades</div></div>
      <div style="flex:1;background:#FDEEDE;border-radius:9px;padding:14px;text-align:center"><div style="font-family:'DM Serif Display',Georgia,serif;font-size:30px;color:#1B4332">${uniqueSectors.size}</div><div style="font-size:10px;color:#6b7280;margin-top:3px">áreas de impacto</div></div>
      <div style="flex:1;background:#EEEDE9;border-radius:9px;padding:14px;text-align:center"><div style="font-family:'DM Serif Display',Georgia,serif;font-size:30px;color:#1B4332">${modalidadesCount}</div><div style="font-size:10px;color:#6b7280;margin-top:3px">modalidades</div></div>
    </div>
    <div style="display:flex;gap:12px">
      <div style="flex:1;border-left:3px solid #4B7FA8;padding:6px 9px;font-size:11px;color:#444;line-height:1.55">—em ${uniqueCountries.size} país${uniqueCountries.size!==1?'es':''}, com atividade concentrada em ${topCity}.</div>
      <div style="flex:1;border-left:3px solid #4B7FA8;padding:6px 9px;font-size:11px;color:#444;line-height:1.55">—abrangendo ${sectorNames}.</div>
      <div style="flex:1;border-left:3px solid #4B7FA8;padding:6px 9px;font-size:11px;color:#444;line-height:1.55">—entre <strong>${uniqueTypes.size}</strong> tipo${uniqueTypes.size!==1?'s':''} (${typeNamesStr}) e <strong>${uniqueInstruments.size}</strong> instrumento${uniqueInstruments.size!==1?'s':''} (${instrNamesStr})</div>
    </div>
  </div>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px"><div style="font-size:13px;font-weight:700;color:#1a1a1a;letter-spacing:.01em">DEALS EM DESTAQUE</div><div style="font-size:10px;color:#6b7280">${tableNote}</div></div>
    <div style="height:2px;background:#1B4332;margin-bottom:0"></div>
    <table style="width:100%;border-collapse:collapse">
      <thead><tr><th style="text-align:left;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;padding:6px 10px 6px 0;border-bottom:1px solid #DDD9D3">INVESTIDOR / FUNDO</th><th style="text-align:left;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;padding:6px 8px;border-bottom:1px solid #DDD9D3">VALOR</th><th style="text-align:left;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;padding:6px 8px;border-bottom:1px solid #DDD9D3">CIDADE</th><th style="text-align:left;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;padding:6px 8px;border-bottom:1px solid #DDD9D3">ÁREA DE IMPACTO</th><th style="text-align:left;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;padding:6px 0 6px 8px;border-bottom:1px solid #DDD9D3">TIPO DE INVEST.</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
  </div>
  <div style="text-align:center;padding:10px 0;border-top:1px solid #DDD9D3;border-bottom:1px solid #DDD9D3">
    <div style="font-family:'DM Serif Display',Georgia,serif;font-size:14px;font-style:italic;color:#2D6A4F;margin-bottom:4px">O fluxo de capital de impacto está aí.</div>
    <div style="font-family:'DM Serif Display',Georgia,serif;font-size:14px;font-style:italic;color:#2D6A4F">Fragmentado, disperso, difícil de acompanhar — até agora</div>
  </div>
</div>
<div style="background:#F5F3F0;border-top:2px solid #1B4332;padding:14px 30px 10px;flex-shrink:0">
  <div style="font-size:13.5px;font-weight:700;color:#1B4332;margin-bottom:5px">O Money Map está em construção — e queremos ouvir você.</div>
  <div style="font-size:11px;color:#444;line-height:1.5;margin-bottom:6px">Estamos construindo a inteligência que o setor de impacto ainda não tem. Suas impressões, conexões e ideias nos ajudam a entregar isso mais rápido a você.</div>
  <div style="font-size:11px;margin-bottom:10px"><span style="font-weight:700;color:#1B4332">GivingTree</span> <span style="color:#4B7FA8">Money Map · givingtree.com.br/map</span></div>
  <div style="text-align:center;margin-bottom:10px"><div style="display:inline-block;background:#D4622A;color:#fff;font-size:12px;font-weight:600;padding:10px 28px;border-radius:8px">Faça contato ou feedback →</div></div>
  <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:10px">
    <div style="font-size:11px;font-weight:600;color:#1a1a1a">Acompanhe antes de todo mundo:</div>
    ${linkedinSvg}${substackSvg}
  </div>
  <div style="font-size:8px;color:#6b7280;line-height:1.45"><strong>Aviso legal:</strong> Este documento é uma demonstração de um relatório gerado automaticamente pela plataforma GivingTree, que, na data de produção, está em fase de desenvolvimento. Conteúdo e formato estão sujeitos a revisão. Nesta demonstração, valores representam o volume de capital identificado nas operações mapeadas e podem incluir erros ou sobreposições entre compromissos e aportes. Operações atribuídas a uma cidade podem abranger sua região metropolitana. Dados coletados de fontes públicas. Este documento não constitui aconselhamento financeiro.</div>
</div>
</div>`;
}

function generateReport(){
  const fl=getFiltered();
  if(fl.length===0){alert('Nenhuma operação encontrada com os filtros atuais.');return}
  if(typeof html2pdf==='undefined'){alert('Biblioteca de PDF ainda carregando. Tente novamente em instantes.');return}
  const btn=document.getElementById('gerarRelatorioBtn');
  if(btn){btn.textContent='Gerando…';btn.disabled=true}
  const wrap=document.createElement('div');
  wrap.style.cssText='position:fixed;left:-9999px;top:0;z-index:-1;pointer-events:none';
  wrap.innerHTML=buildReportHTML(fl);
  document.body.appendChild(wrap);
  const el=wrap.querySelector('#gt-report-page');
  html2pdf().from(el).set({
    margin:0,filename:generateFilename(),
    image:{type:'jpeg',quality:0.98},
    html2canvas:{scale:2,useCORS:true,logging:false,allowTaint:true},
    jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
  }).save().then(()=>{
    document.body.removeChild(wrap);
    if(btn){btn.textContent='Gerar Relatório';btn.disabled=false}
  }).catch(err=>{
    console.error('Report generation error:',err);
    document.body.removeChild(wrap);
    if(btn){btn.textContent='Gerar Relatório';btn.disabled=false}
  });
}

document.getElementById('gerarRelatorioBtn').addEventListener('click',generateReport);
