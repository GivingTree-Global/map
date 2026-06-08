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
"Tokyo":{coords:[139.6917, 35.6895],state:"",blurb:"Tokyo is the center of Japan's growing impact investing ecosystem, backed by government-private sector partnerships and JICA's expanding global impact portfolio. Japan's National Advisory Board (GSG member) is driving policy alignment.",sidebar:"Key players: SIIF (Social Innovation & Investment Foundation), JICA, Shinsei Impact, GSG Impact Japan. Themes: aging society solutions, financial inclusion across Asia, clean energy transition."},
"Belo Horizonte":{coords:[-43.9378,-19.9167],state:"MG",blurb:"Belo Horizonte is Minas Gerais' capital and a growing hub for impact investing with active foundations and energy funds.",sidebar:"Active: Baobá Fund, Bemtevi, Din4mo. Themes: economic inclusion, clean energy."},
"Recife":{coords:[-34.8830,-8.0539],state:"PE",blurb:"Recife anchors the Northeast Brazil tech and impact ecosystem, home to Porto Digital innovation park.",sidebar:"Active: Porto Digital, SoftBank, Jusbrasil. Themes: legaltech, economic inclusion, fintech."},
"Curitiba":{coords:[-49.2671,-25.4292],state:"PR",blurb:"Curitiba is Paraná's capital and home to a growing startup ecosystem with impact-focused investors.",sidebar:"Active: Vinci Partners ESG, Kaszek. Themes: food and agriculture, SME tools."},
"Salvador":{coords:[-38.4813,-12.9714],state:"BA",blurb:"Salvador is Bahia's capital and a key node for inclusive finance and social enterprise in Northeast Brazil.",sidebar:"Active: IDB Lab, NESsT Lirio Fund. Themes: social enterprise, economic inclusion."},
"Manaus":{coords:[-60.0212,-3.1190],state:"AM",blurb:"Manaus sits at the heart of the Amazon, making it a focal point for biodiversity finance and bioeconomy investment.",sidebar:"Active: BNDES, Amazônia Impact Ventures. Themes: biodiversity, bioeconomy, conservation."},
"Florianópolis":{coords:[-48.5482,-27.5945],state:"SC",blurb:"Florianópolis is Santa Catarina's tech hub and one of Brazil's most innovative cities for startups and impact ventures.",sidebar:"Active: Positive Ventures, Mauá Capital. Themes: civic tech, economic inclusion."},
"San Francisco":{coords:[-122.4194,37.7749],state:"CA",blurb:"San Francisco anchors the US climate tech and impact investing scene, with the largest concentration of climate-focused VC funds globally.",sidebar:"Active: DBL Partners, Generate Capital, Spring Lane Capital, Closed Loop Partners, Kapor Capital. Themes: climate tech, circular economy."},
"Chicago":{coords:[-87.6298,41.8781],state:"IL",blurb:"Chicago has a strong tradition of community development finance and impact investing, anchored by major foundations and mission-driven asset managers.",sidebar:"Active: MacArthur Foundation, Ariel Investments, ImpactAssets. Themes: economic inclusion, housing."},
"Miami":{coords:[-80.1918,25.7617],state:"FL",blurb:"Miami is the US gateway for Latin American impact capital, with a growing ecosystem of family offices and VC funds focused on LatAm.",sidebar:"Active: Blue Haven Initiative, Abundance Circle, SoftBank LatAm Fund. Themes: LatAm investment, clean energy."},
"Washington, D.C.":{coords:[-77.0369,38.9072],state:"DC",blurb:"Washington D.C. hosts the world's highest concentration of DFIs and multilateral development banks, making it a hub for blended finance and global impact capital.",sidebar:"Active: IFC, IDB Invest, Ford Foundation, Calvert Impact Capital. Themes: global development finance, health, economic inclusion."},
"Boston":{coords:[-71.0589,42.3601],state:"MA",blurb:"Boston's deep academic roots have produced a strong impact investing ecosystem with community development finance and mission-driven PE funds.",sidebar:"Active: Bain Capital Double Impact, Root Capital, Community Reinvestment Fund, Nuveen. Themes: economic inclusion, affordable housing."},
"Los Angeles":{coords:[-118.2437,34.0522],state:"CA",blurb:"Los Angeles is a major market for impact investing in affordable housing and gender-lens investing, backed by major financial institutions.",sidebar:"Active: Goldman Sachs UIG, Reinventure Capital, Swell Impact Fund. Themes: housing, gender-lens, clean water."},
"Paris":{coords:[2.3522,48.8566],state:"",blurb:"Paris is a major European hub for impact investing and development finance, home to French DFIs and global asset managers with strong environmental mandates.",sidebar:"Active: Proparco, Mirova, Investisseurs & Partenaires, BNP Paribas, Meridiam. Themes: African investment, biodiversity, infrastructure."},
"Amsterdam":{coords:[4.9041,52.3676],state:"",blurb:"Amsterdam anchors the Dutch impact investing ecosystem, home to pioneering ethical banks and development finance institutions with global mandates.",sidebar:"Active: Triodos Bank, FMO, Goodwell Investments, DOB Equity. Themes: financial inclusion, sustainable agriculture."},
"Copenhagen":{coords:[12.5683,55.6761],state:"",blurb:"Copenhagen is a leading Scandinavian hub for climate finance and development investment, home to major infrastructure funds.",sidebar:"Active: Copenhagen Infrastructure Partners, IFU, Novo Holdings. Themes: climate infrastructure, renewable energy, global health."},
"Berlin":{coords:[13.4050,52.5200],state:"",blurb:"Berlin's vibrant startup ecosystem and development finance tradition make it a key node for European impact investing.",sidebar:"Active: DEG, Ananda Impact Ventures, responsAbility. Themes: sustainable agriculture, social enterprise, emerging markets."},
"Geneva":{coords:[6.1432,46.2044],state:"",blurb:"Geneva is home to major multilateral organizations and leading impact asset managers, a global coordination hub for development finance.",sidebar:"Active: BlueOrchard, Symbiotics, AlphaMundi, Elea Foundation. Themes: economic inclusion, emerging market debt, microfinance."},
"Stockholm":{coords:[18.0686,59.3293],state:"",blurb:"Stockholm hosts Scandinavian development banks and foundations at the forefront of climate and social impact investing.",sidebar:"Active: Swedfund, Norrsken Foundation, EQT Foundation. Themes: African clean energy, education access, economic inclusion."},
"Oslo":{coords:[10.7522,59.9139],state:"",blurb:"Oslo anchors Norwegian development finance, with Norfund deploying capital into renewable energy and infrastructure across emerging markets.",sidebar:"Active: Norfund, KLP Impact. Themes: renewable energy, affordable infrastructure."},
"Nairobi":{coords:[36.8219,-1.2921],state:"",blurb:"Nairobi is East Africa's premier impact investing hub, home to a vibrant VC ecosystem and the continent's most active development finance market.",sidebar:"Active: Novastar Ventures, Acumen, FSD Africa, Acorn Holdings. Themes: climate, housing, agritech, financial inclusion."},
"Johannesburg":{coords:[28.0473,-26.2041],state:"",blurb:"Johannesburg anchors Southern Africa's investment ecosystem, with major development finance institutions and asset managers targeting the region.",sidebar:"Active: AIIM, AlphaMundi, Old Mutual, IFC, Harith General Partners. Themes: housing, climate, infrastructure."},
"Lagos":{coords:[3.3792,6.5244],state:"",blurb:"Lagos is West Africa's financial powerhouse and a major destination for impact capital targeting Nigeria's massive informal economy.",sidebar:"Active: IIF/Kuramo Capital, TLcom Capital, All On, InfraCredit, GroFin. Themes: off-grid energy, economic inclusion, green infrastructure."},
"Kigali":{coords:[30.0587,-1.9441],state:"",blurb:"Kigali is rapidly establishing itself as Africa's smart city model and a hub for climate and agricultural impact investing.",sidebar:"Active: FONERWA, Bamboo Capital. Themes: climate, clean cooking, green finance."},
"Dar es Salaam":{coords:[39.2083,-6.7924],state:"",blurb:"Dar es Salaam is Tanzania's economic hub and a key target for agricultural finance and off-grid solar investment.",sidebar:"Active: AgDevCo, Norfund. Themes: smallholder agriculture, off-grid solar."},
"Cairo":{coords:[31.2357,30.0444],state:"",blurb:"Cairo is North Africa's largest investment market and an emerging hub for fintech and clean energy finance.",sidebar:"Active: Sawari Ventures, Flat6Labs, EBRD. Themes: fintech, renewable energy, economic inclusion."},
"Mexico City":{coords:[-99.1332,19.4326],state:"",blurb:"Mexico City is Latin America's second-largest impact investing market, with strong local fund managers and international DFIs active in economic inclusion and climate.",sidebar:"Active: IGNIA, Adobe Capital, Blue Like an Orange, Promotora Social, New Ventures. Themes: economic inclusion, climate, social infrastructure."},
"Bogotá":{coords:[-74.0721,4.7110],state:"",blurb:"Bogotá is Colombia's impact investing capital, attracting international capital into circular economy, social enterprise, and microfinance.",sidebar:"Active: Corporación Inversor, Circulate Capital, NESsT, Bamboo Capital. Themes: circular economy, economic inclusion."},
"Santiago":{coords:[-70.6693,-33.4489],state:"",blurb:"Santiago anchors Chile's impact investing ecosystem, one of Latin America's most mature and institution-friendly markets.",sidebar:"Active: Alaya Capital, Fondo de Fondos, Acción. Themes: economic inclusion, fintech."},
"Lima":{coords:[-77.0428,-12.0464],state:"",blurb:"Lima is the center of Peru's growing impact investing market, with capital flowing into social enterprises across the Andean region.",sidebar:"Active: Impaqto Capital, CAF. Themes: revenue-based finance, infrastructure."},
"Buenos Aires":{coords:[-58.3816,-34.6037],state:"",blurb:"Buenos Aires hosts Argentina's most active impact and venture ecosystem, with strong agritech and fintech activity despite macroeconomic challenges.",sidebar:"Active: NXTP Ventures, Pomona Impact, 500 LatAm. Themes: agritech, economic inclusion."},
"San Juan":{coords:[-66.1057,18.4655],state:"",blurb:"San Juan is Puerto Rico's economic center and a growing hub for Caribbean-focused impact investing in climate resilience and food systems.",sidebar:"Active: Intentional Asset Management, Sonen Capital. Themes: food systems, climate resilience."},
"Mumbai":{coords:[72.8777,19.0760],state:"",blurb:"Mumbai is India's financial capital and the epicenter of the country's growing impact investing ecosystem, targeting financial inclusion, agriculture, and healthcare.",sidebar:"Active: Aavishkaar, Omnivore Partners, Elevar Equity, LeapFrog, Acumen, Piramal Foundation. Themes: financial inclusion, agriculture, health."},
"Shanghai":{coords:[121.4737,31.2304],state:"",blurb:"Shanghai is China's impact investing hub, with growing activity in cleantech, conservation finance, and social enterprise.",sidebar:"Active: IDG Capital, CSEIF, Green Climate Fund. Themes: cleantech, biodiversity, social enterprise."},
"Beijing":{coords:[116.4074,39.9042],state:"",blurb:"Beijing is home to China's major policy-driven development finance institutions deploying capital at scale into climate and infrastructure.",sidebar:"Active: AIIB, China Development Bank, Sequoia China. Themes: climate infrastructure, renewable energy, carbon capture."},
"Jakarta":{coords:[106.8456,-6.2088],state:"",blurb:"Jakarta is Indonesia's economic center and a growing target for impact capital addressing financial inclusion and biodiversity in Southeast Asia's largest economy.",sidebar:"Active: Patamar Capital, Mercy Corps Ventures, TLFF/UNEP. Themes: financial inclusion, sustainable agriculture, biodiversity."},
"Bangkok":{coords:[100.5018,13.7563],state:"",blurb:"Bangkok is Thailand's impact investing hub, with growing activity in social enterprise acceleration and sustainable agriculture.",sidebar:"Active: Insitor Partners, Thai Social Enterprise Office, responsAbility. Themes: social enterprise, food systems."},
"Seoul":{coords:[126.9780,37.5665],state:"",blurb:"Seoul hosts South Korea's expanding impact investing market, backed by government programs and large conglomerate commitments.",sidebar:"Active: Korea SVS, SK Group, KOICA. Themes: social enterprise, economic inclusion, development impact bonds."},
"Phnom Penh":{coords:[104.9160,11.5564],state:"",blurb:"Phnom Penh is Cambodia's economic center and a key market for affordable housing and microfinance investment.",sidebar:"Active: Insitor Partners, BlueOrchard. Themes: affordable housing, microfinance."},
"Melbourne":{coords:[144.9631,-37.8136],state:"VIC",blurb:"Melbourne is Victoria's capital and a key center for Indigenous economic development and impact investing in Australia.",sidebar:"Active: Australian Impact Investments, SEFA, Macquarie Group. Themes: First Nations investment, economic inclusion, Pacific renewables."},
"Auckland":{coords:[174.7633,-36.8485],state:"",blurb:"Auckland is New Zealand's economic hub and home to the country's nascent impact investing ecosystem.",sidebar:"Active: Impact Enterprise Fund. Themes: economic inclusion."}};
const COUNTRY_DATA={"Brazil":{coords:[-51.9, -14.2],labelCoords:[-51.9, -8.5],blurb:"Brazil is Latin America's largest impact investing market and the sixth-largest economy globally. The ecosystem spans over a dozen dedicated fund managers, government-backed programs, and a national advisory board.",sidebar:"Key cities: São Paulo (financial hub), Rio (social finance), Brasília (policy), Santos (trade). Themes: climate, energy transition, economic inclusion, regenerative agriculture, conservation.",zoomTo:{"center": [-49.5, -16], "zoom": 4.2}},
"United States":{coords:[-95.7, 37.1],labelCoords:[-98, 39.5],blurb:"The US is the world's largest impact investing market, with over $1 trillion in assets under management. New York City alone has deployed $65M+ through city-backed impact funds targeting diverse entrepreneurship.",sidebar:"Key hubs: NYC (Catalyst Fund, Harlem Capital), San Francisco (SOCAP), Boston (impact PE). Themes: economic inclusion, diverse founders, climate tech, community development.",zoomTo:{"center": [-95.7, 38], "zoom": 4}},
"United Kingdom":{coords:[-1.5, 52.5],labelCoords:[-2.5, 54],blurb:"The UK impact investing market topped £11B in 2024, growing 10% annually. London is home to pioneering firms like Bridges Fund Management and government-backed institutions channeling capital into social outcomes.",sidebar:"Key players: Bridges FM (£1.8B+), Better Society Capital, Big Society Capital. Policy: £500M Better Futures Fund, Office for the Impact Economy. Themes: social housing, inclusive growth, climate.",zoomTo:{"center": [-2, 54], "zoom": 5.5}},
"Singapore":{coords:[103.8, 1.35],labelCoords:[103.8, 1.35],blurb:"Singapore punches above its weight in impact investing, anchored by Temasek's multi-billion-dollar commitment through ABC Impact and supported by MAS green finance initiatives and a growing ecosystem of pan-Asian impact funds.",sidebar:"Key players: ABC Impact ($600M+ Fund II), Temasek Trust, DBS, UOB. Themes: climate/water solutions, sustainable food, healthcare, financial/digital inclusion across Asia.",zoomTo:{"center": [103.8, 1.35], "zoom": 11}},
"Ghana":{coords:[-1.0, 7.9],labelCoords:[-1.2, 7.5],blurb:"Ghana is pioneering domestic capital mobilization for impact in West Africa. The Ci-Gaba Fund-of-Funds is the region's first domestically domiciled private fund of funds, unlocking pension capital for SMEs across Ghana, Nigeria, Senegal, and Côte d'Ivoire.",sidebar:"Key players: Impact Investing Ghana (GSG National Partner), Savanna Impact Advisory, FSD Africa. Themes: SME finance, pension capital mobilization, blended finance, gender lens investing.",zoomTo:{"center": [-1.5, 7.5], "zoom": 7}},
"Australia":{coords:[134, -25.3],labelCoords:[134, -25],blurb:"Australia's impact investing market is accelerating, with AUD 9B in clean energy commitments in 2024 and the government-backed CEFC deploying record AUD 4.7B in a single year. The market spans renewable energy, social housing, and First Nations investment.",sidebar:"Key players: CEFC ($32.5B allocation), Australian Impact Investments, Infradebt, Impact Investing Australia. Themes: renewables, social/affordable housing, First Nations, energy transition.",zoomTo:{"center": [134, -25], "zoom": 4.5}},
"Japan":{coords:[138.2, 36.2],labelCoords:[138.2, 37.5],blurb:"Japan's impact investing market has grown rapidly since the government's 2014 social impact commitment, with JICA emerging as a major global DFI deploying capital across Asia and Africa. The Social Innovation and Investment Foundation anchors the domestic ecosystem.",sidebar:"Key players: SIIF, JICA ($40M+ impact allocations), Shinsei Impact, GSG Impact Japan (NAB). Policy: Tokyo Metropolitan Government public-private impact growth fund. Themes: aging society, financial inclusion, clean energy.",zoomTo:{"center": [138, 37], "zoom": 5.5}},
"France":{coords:[2.3522,48.8566],labelCoords:[2.5,47],blurb:"France is a major European hub for impact investing and development finance, anchored by Proparco and leading asset managers with strong environmental and social mandates.",sidebar:"Key players: Proparco, Mirova, Investisseurs & Partenaires, BNP Paribas, Meridiam. Themes: African investment, biodiversity, climate infrastructure.",zoomTo:{"center":[2.5,47],"zoom":5}},
"Netherlands":{coords:[5.3,52.1],labelCoords:[5.3,52.5],blurb:"The Netherlands is a global leader in sustainable finance and development investment, home to pioneering ethical banks and the Dutch DFI FMO with a global emerging market mandate.",sidebar:"Key players: Triodos Bank, FMO, Goodwell Investments, DOB Equity. Themes: financial inclusion, sustainable agriculture, emerging markets.",zoomTo:{"center":[5.3,52.1],"zoom":7}},
"Denmark":{coords:[10.2,56.2],labelCoords:[10.2,56.5],blurb:"Denmark is a Scandinavian leader in climate and development finance, with Copenhagen Infrastructure Partners deploying record capital into global renewable energy.",sidebar:"Key players: Copenhagen Infrastructure Partners, IFU, Novo Holdings. Themes: climate infrastructure, renewable energy, global health.",zoomTo:{"center":[10.5,56],"zoom":7}},
"Germany":{coords:[10.5,51.2],labelCoords:[10.5,52],blurb:"Germany's strong development finance tradition and vibrant impact VC ecosystem make it a key European node for sustainable and impact investing.",sidebar:"Key players: DEG, Ananda Impact Ventures, responsAbility. Themes: sustainable agriculture, social enterprise, emerging markets.",zoomTo:{"center":[10.5,51],"zoom":6}},
"Switzerland":{coords:[8.2,46.8],labelCoords:[8.2,47.2],blurb:"Switzerland is a global hub for impact asset management and development finance, with Geneva hosting leading impact fund managers and multilateral coordination bodies.",sidebar:"Key players: BlueOrchard, Symbiotics, AlphaMundi, Elea Foundation. Themes: economic inclusion, emerging market debt, microfinance.",zoomTo:{"center":[8.3,46.8],"zoom":8}},
"Sweden":{coords:[18,62],labelCoords:[18,63],blurb:"Sweden hosts Scandinavian development banks and foundations at the forefront of climate and social impact investing globally.",sidebar:"Key players: Swedfund, Norrsken Foundation, EQT Foundation. Themes: African clean energy, education access, economic inclusion.",zoomTo:{"center":[18,62],"zoom":5}},
"Norway":{coords:[10.8,60.5],labelCoords:[10.8,61],blurb:"Norway anchors Nordic development finance through Norfund, deploying capital into renewable energy and infrastructure across emerging markets worldwide.",sidebar:"Key players: Norfund, KLP Impact. Themes: renewable energy, affordable infrastructure.",zoomTo:{"center":[14,65],"zoom":5}},
"Kenya":{coords:[37.9,0.0],labelCoords:[38,1],blurb:"Kenya is East Africa's premier impact investing hub, home to a vibrant VC ecosystem and the continent's most active development finance market.",sidebar:"Key players: Novastar Ventures, Acumen, FSD Africa, M-KOPA, Acorn Holdings. Themes: climate, housing, agritech, financial inclusion.",zoomTo:{"center":[37.9,0],"zoom":6}},
"South Africa":{coords:[25,-29],labelCoords:[25,-28],blurb:"South Africa anchors Southern Africa's investment ecosystem, with major development finance institutions and asset managers targeting climate, housing, and infrastructure.",sidebar:"Key players: AIIM, AlphaMundi, Old Mutual, IFC, Harith General Partners. Themes: housing, climate, infrastructure.",zoomTo:{"center":[25,-29],"zoom":5}},
"Nigeria":{coords:[8.7,9.1],labelCoords:[8.7,10],blurb:"Nigeria is West Africa's largest economy and a major destination for impact capital targeting energy access, financial inclusion, and green infrastructure.",sidebar:"Key players: IIF/Kuramo Capital, TLcom Capital, All On, InfraCredit, GroFin. Themes: off-grid energy, economic inclusion, green infrastructure.",zoomTo:{"center":[8,9],"zoom":6}},
"Rwanda":{coords:[29.9,-1.9],labelCoords:[30,-1],blurb:"Rwanda is establishing itself as Africa's smart city model and a hub for climate finance and clean cooking investment.",sidebar:"Key players: FONERWA, Bamboo Capital. Themes: climate, clean cooking, green finance.",zoomTo:{"center":[30,-1.9],"zoom":8}},
"Tanzania":{coords:[34.9,-6.4],labelCoords:[35,-5],blurb:"Tanzania is a key target for agricultural finance and off-grid solar investment in East Africa, with growing international capital inflows.",sidebar:"Key players: AgDevCo, Norfund. Themes: smallholder agriculture, off-grid solar.",zoomTo:{"center":[35,-6],"zoom":6}},
"Egypt":{coords:[30.8,26.8],labelCoords:[30.8,28],blurb:"Egypt is North Africa's largest investment market and an emerging hub for fintech and clean energy finance, with strong support from international DFIs.",sidebar:"Key players: Sawari Ventures, Flat6Labs, EBRD. Themes: fintech, renewable energy, economic inclusion.",zoomTo:{"center":[30,27],"zoom":6}},
"Mexico":{coords:[-102,23.6],labelCoords:[-102,25],blurb:"Mexico is Latin America's second-largest impact investing market, with strong local fund managers and international DFIs active in economic inclusion, clean energy, and social infrastructure.",sidebar:"Key players: IGNIA, Adobe Capital, Blue Like an Orange, Promotora Social, New Ventures. Themes: economic inclusion, climate, social infrastructure.",zoomTo:{"center":[-102,23],"zoom":5}},
"Colombia":{coords:[-74.3,4.1],labelCoords:[-74,5],blurb:"Colombia is attracting growing international capital into circular economy, social enterprise, and microfinance, with Bogotá emerging as a regional impact hub.",sidebar:"Key players: Corporación Inversor, Circulate Capital, NESsT, Bamboo Capital. Themes: circular economy, economic inclusion.",zoomTo:{"center":[-74,4],"zoom":6}},
"Chile":{coords:[-71,-35.7],labelCoords:[-71,-34],blurb:"Chile anchors one of Latin America's most mature and institution-friendly impact investing markets, with strong local fund managers and growing international interest.",sidebar:"Key players: Alaya Capital, Fondo de Fondos, Acción. Themes: economic inclusion, fintech.",zoomTo:{"center":[-71,-35],"zoom":6}},
"Peru":{coords:[-75.0,-9.2],labelCoords:[-75,-8],blurb:"Peru's growing impact investing market targets social enterprises across the Andean region, with capital flowing into revenue-based finance and infrastructure.",sidebar:"Key players: Impaqto Capital, CAF. Themes: revenue-based finance, infrastructure.",zoomTo:{"center":[-75,-9],"zoom":6}},
"Argentina":{coords:[-65,-34],labelCoords:[-65,-32],blurb:"Argentina hosts an active impact and venture ecosystem despite macroeconomic challenges, with strong agritech and fintech activity.",sidebar:"Key players: NXTP Ventures, Pomona Impact, 500 LatAm. Themes: agritech, economic inclusion.",zoomTo:{"center":[-65,-34],"zoom":5}},
"Puerto Rico":{coords:[-66.5,18.2],labelCoords:[-66.5,18.5],blurb:"Puerto Rico is a growing hub for Caribbean-focused impact investing in climate resilience and food systems.",sidebar:"Key players: Intentional Asset Management, Sonen Capital. Themes: food systems, climate resilience.",zoomTo:{"center":[-66.5,18.2],"zoom":9}},
"India":{coords:[78.9,20.6],labelCoords:[79,22],blurb:"India is one of the world's largest impact investing markets, with capital targeting financial inclusion, agriculture, and healthcare at massive scale.",sidebar:"Key players: Aavishkaar, Omnivore Partners, Elevar Equity, LeapFrog, Acumen, Piramal Foundation. Themes: financial inclusion, agriculture, health.",zoomTo:{"center":[79,22],"zoom":4.5}},
"China":{coords:[104,35],labelCoords:[104,37],blurb:"China's impact investing ecosystem is growing rapidly, with policy-driven institutions deploying capital at scale into climate and infrastructure alongside emerging private impact funds.",sidebar:"Key players: AIIB, China Development Bank, IDG Capital, Sequoia China, CSEIF. Themes: climate infrastructure, renewable energy, carbon capture, social enterprise.",zoomTo:{"center":[104,35],"zoom":4}},
"Indonesia":{coords:[117.9,-2.5],labelCoords:[118,-1],blurb:"Indonesia is a major growth market for impact capital, with investment flowing into financial inclusion and biodiversity in Southeast Asia's largest economy.",sidebar:"Key players: Patamar Capital, Mercy Corps Ventures, TLFF/UNEP. Themes: financial inclusion, sustainable agriculture, biodiversity.",zoomTo:{"center":[118,-2],"zoom":5}},
"Thailand":{coords:[101,13],labelCoords:[101,14],blurb:"Thailand's growing impact investing activity focuses on social enterprise acceleration and sustainable agriculture, supported by government programs and international fund managers.",sidebar:"Key players: Insitor Partners, Thai Social Enterprise Office, responsAbility. Themes: social enterprise, food systems.",zoomTo:{"center":[101,13],"zoom":6}},
"South Korea":{coords:[127.8,36.5],labelCoords:[128,37.5],blurb:"South Korea's expanding impact investing market is backed by government programs and large conglomerate commitments, with a growing ecosystem of domestic social ventures.",sidebar:"Key players: Korea SVS, SK Group, KOICA. Themes: social enterprise, economic inclusion, development impact bonds.",zoomTo:{"center":[127,37],"zoom":7}},
"Cambodia":{coords:[104.9,12.6],labelCoords:[105,13],blurb:"Cambodia is a key market for affordable housing and microfinance investment in Southeast Asia, with international impact investors active in financial inclusion.",sidebar:"Key players: Insitor Partners, BlueOrchard. Themes: affordable housing, microfinance.",zoomTo:{"center":[104.9,12],"zoom":7}},
"New Zealand":{coords:[172,-41],labelCoords:[172,-40],blurb:"New Zealand has a nascent but growing impact investing ecosystem, with the Impact Enterprise Fund pioneering economic inclusion investments.",sidebar:"Key players: Impact Enterprise Fund. Themes: economic inclusion.",zoomTo:{"center":[172,-41],"zoom":5}}};
const deals=[
{investor:"I Squared Capital",recipient:"Órigo Energia",dealType:"Investment",amount:400000000.0,sector:"energy",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"Jan 2024",year:2024,source:"Reuters",notes:"49% stake in Brazil's largest distributed solar generation platform.",recipientType:"company"},
{investor:"Augment Infrastructure",recipient:"Órigo Energia",dealType:"Investment",amount:140000000.0,sector:"energy",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2022",year:2022,source:"Órigo Energia IR",notes:"BRL 700M in renewable energy infrastructure investment.",recipientType:"company"},
{investor:"eB Capital",recipient:"Bioo",dealType:"Investment",amount:50000000.0,sector:"climate",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"ImpactAlpha",notes:"Animal protein waste → biomethane. Energy transition fund.",recipientType:"company"},
{investor:"Vox Capital / TNC / Moore Fdn",recipient:"Amazon NBS Fund",dealType:"Fund Launch",amount:250000000.0,sector:"conservation",sourceType:"Foundation",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Catalytic capital for blended finance around the Amazon.",recipientType:"fund"},
{investor:"Wright Capital",recipient:"NBS/Regen Ag/Climate FoF",dealType:"Fund Launch",amount:35000000.0,sector:"climate",sourceType:"Family Office",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Manages wealth of 40+ Brazilian families.",recipientType:"fund"},
{investor:"Fama Re.Capital",recipient:"LatAm Climate Turnaround Fund",dealType:"Fund Launch",amount:null,sector:"climate",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"ImpactAlpha",notes:"Invests in high-emitting companies to push decarbonization.",recipientType:"fund"},
{investor:"Fama Re.Capital",recipient:"Gaia Socio-Bioeconomy Fund",dealType:"Fund Launch",amount:null,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"Affordable loans to small regenerative agriculture businesses.",recipientType:"fund"},
{investor:"InMotion Ventures (JLR)",recipient:"Energy Source",dealType:"Investment",amount:1200000.0,sector:"circular-economy",sourceType:"Corporate",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"Feb 2024",year:2024,source:"TechFundingNews",notes:"Lithium battery recycling. InMotion's first Brazil investment.",recipientType:"company"},
{investor:"Estímulo",recipient:"3,400+ SMEs",dealType:"Loan",amount:40000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha / HBS",notes:"Blended finance credit fund for low-income regions.",recipientType:"company"},
{investor:"Traive / Instituto Folio",recipient:"GAN Fund",dealType:"Fund Launch",amount:50000000.0,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Climate Policy Initiative",notes:"Hybrid FIDC/CRA for bioinputs in regenerative agriculture.",recipientType:"fund"},
{investor:"BNDES",recipient:"Eve Air Mobility (Embraer)",dealType:"Loan",amount:40000000.0,sector:"infrastructure",sourceType:"DFI",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$200M for eVTOL aircraft R&D and certification.",recipientType:"company"},
{investor:"Crescera Capital",recipient:"Colmeia",dealType:"Investment",amount:3600000.0,sector:"housing",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$18M for sustainable construction solutions.",recipientType:"company"},
{investor:"Co-Capital / Din4mo / Oogway",recipient:"Mútua",dealType:"Investment",amount:null,sector:"fintech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"AI-powered impact data mapping platform. SDG/IRIS+ metrics.",recipientType:"company"},
{investor:"Lightrock",recipient:"Portfolio (12+ ventures)",dealType:"Investment",amount:700000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"$700M deployed across LatAm. Backed by Liechtenstein royal family.",recipientType:"company"},
{investor:"Sitawi Finance for Good",recipient:"Na'kau (+ portfolio)",dealType:"Loan",amount:null,sector:"economic-inclusion",sourceType:"DFI",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Devex",notes:"Crowdlending platform. 'Empathetic capital' model. 4.27% default rate.",recipientType:"fund"},
{investor:"J.P. Morgan DFI",recipient:"DP World (container terminal)",dealType:"Investment",amount:null,sector:"infrastructure",sourceType:"DFI",city:"Santos",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Devex",notes:"12.5M metric tons grain/fertilizer capacity. $2.5T sustainable dev push.",recipientType:"company"},
{investor:"Eco Invest Brasil (Gov/IDB/FCDO)",recipient:"Climate projects (program)",dealType:"Partnership",amount:null,sector:"climate",sourceType:"DFI",city:"Brasília",state:"DF",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"OECD / ImpactAlpha",notes:"FX hedging program. Private banks bid for public climate funding.",recipientType:"fund"},
{investor:"Eqwow Ventures",recipient:"Healthcare/Fintech/Energy",dealType:"Fund Launch",amount:null,sector:"health",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"LatAm talent, asset light, regional expansion thesis.",recipientType:"fund"},
{investor:"Potencia Ventures (Kelly Michel)",recipient:"50+ impact funds incl. Vox, Artemisia",dealType:"Investment",amount:null,sector:"economic-inclusion",sourceType:"Foundation",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2002-present",year:2024,source:"ImpactAlpha",notes:"Portland-based endowment. Ecosystem catalyst. 30+ direct investments.",recipientType:"company"},
{investor:"XP Asset Management (Infra V)",recipient:"Eveo",dealType:"Investment",amount:20000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"BayBrazil",notes:"R$100M for private cloud and data center. 31.85% stake.",recipientType:"company"},
{investor:"Meraki Impact",recipient:"Smallholder finance (Brazil)",dealType:"Investment",amount:null,sector:"agritech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha / Toniic",notes:"Catalytic capital. Closing capital gap for smallholder finance.",recipientType:"company"},
{investor:"Maya Capital",recipient:"Portfolio (Brazil VC)",dealType:"Fund Launch",amount:null,sector:"fintech",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"LatAm-focused fund actively raising capital.",recipientType:"fund"},
{investor:"Vox Capital",recipient:"Tech for Good Growth II",dealType:"Fund Launch",amount:null,sector:"economic-inclusion",sourceType:"VC/PE",city:"São Paulo",state:"SP",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"Vox Capital",notes:"Currently raising. 7th VC fund. Seed-stage focus.",recipientType:"fund"},
{investor:"NYCEDC",recipient:"NYC Catalyst Fund II (11+ fund managers)",dealType:"Fund Launch",amount:25000000.0,sector:"economic-inclusion",sourceType:"Government",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2025",year:2025,source:"NYCEDC",notes:"Impact investing vehicle for diverse entrepreneurship and economic mobility. Expected to catalyze $125M+.",recipientType:"fund"},
{investor:"Harlem Capital",recipient:"Diverse founders (75+ portfolio cos)",dealType:"Fund Launch",amount:150000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2024",year:2024,source:"NYCEDC / Harlem Capital",notes:"Diversity-focused VC. Mission: invest in 1,000 diverse founders over 20 years.",recipientType:"fund"},
{investor:"Bridges Fund Management",recipient:"Inclusive Growth Fund (UK social enterprises)",dealType:"Fund Launch",amount:82000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"Impact Investor",notes:"£65M seeded from Bridges Evergreen. Purpose-driven businesses for vulnerable groups.",recipientType:"fund",pe:true},
{investor:"Bridges Fund Management",recipient:"Alina Homecare",dealType:"Investment",amount:null,sector:"health",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2025",year:2025,source:"Bridges FM",notes:"UK home care for vulnerable elderly. Part of Bridges' Inclusive Growth strategy.",recipientType:"fund",pe:true},
{investor:"ABC Impact (Temasek-backed)",recipient:"Fund II (pan-Asia impact PE)",dealType:"Fund Launch",amount:600000000.0,sector:"climate",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2025",year:2025,source:"PR Newswire",notes:"Doubled Fund I. LPs: Temasek, ADB, Mapletree. Climate, food, healthcare, financial inclusion.",recipientType:"fund"},
{investor:"ABC Impact / DBS / UOB",recipient:"Sustainability-linked subscription facility",dealType:"Loan",amount:110000000.0,sector:"climate",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2025",year:2025,source:"ANTARA / PRNewswire",notes:"Converted conventional loan to sustainability-linked instrument. GHG reduction targets.",recipientType:"company"},
{investor:"Ci-Gaba Fund-of-Funds (IIGh/Savanna)",recipient:"West African venture funds + SMEs",dealType:"Fund Launch",amount:75000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2023",year:2023,source:"FSD Africa / GNA",notes:"$75M target. Blended finance unlocking pension capital for West African SMEs.",recipientType:"fund"},
{investor:"FSDAi (FSD Africa Investments)",recipient:"Ci-Gaba Fund",dealType:"Investment",amount:7500000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2026",year:2026,source:"FSD Africa",notes:"UK-backed specialist investor anchoring Ci-Gaba first close. 25,000 jobs target.",recipientType:"fund"},
{investor:"Clean Energy Finance Corp (CEFC)",recipient:"Renewable energy + grid infrastructure",dealType:"Investment",amount:3100000000.0,sector:"energy",sourceType:"Government",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2025",year:2025,source:"Chambers & Partners",notes:"Australian government green bank. Record AUD 4.7B annual commitment. Rewiring the Nation.",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Australian Impact Investments (Aii)",recipient:"Infradebt Ethical Fund + Ngutu College",dealType:"Investment",amount:16000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"ImpactAlpha",notes:"Renewable energy/social infrastructure debt. First Nations college (50% Indigenous enrollment).",recipientType:"company",subThemes:["economic-inclusion","education"]},
{investor:"Tokyo Metropolitan Government",recipient:"Public-Private Partnership Impact Growth Fund",dealType:"Fund Launch",amount:null,sector:"economic-inclusion",sourceType:"Government",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"May 2024",year:2024,source:"SIIF / GSG Impact Japan",notes:"Government-backed fund promoting impact investment through public-private partnerships.",recipientType:"fund"},
{investor:"JICA",recipient:"Aavishkaar",dealType:"Investment",amount:40000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"2025",year:2025,source:"ImpactAlpha",notes:"$40M investment in India/South Asia-focused impact fund manager. Financial inclusion and livelihoods.",recipientType:"company",subThemes:["economic-inclusion","food-agriculture"]},
{investor:"Vox Capital",recipient:"TEM Saúde",dealType:"Investment",amount:null,sector:"health",sourceType:"VC/PE",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"ImpactAlpha",notes:"Exit with 26% return.",recipientType:"company",roundStage:"series-a"},
{investor:"SITAWI Finanças do Bem",recipient:"New crowdlending fund",dealType:"Fund Launch",amount:12000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"SITAWI",notes:"",recipientType:"fund"},
{investor:"Gávea Investimentos",recipient:"Aegea Saneamento",dealType:"Investment",amount:180000000.0,sector:"conservation",sourceType:"VC/PE",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Reuters",notes:"Water and sanitation infrastructure investment.",recipientType:"company",pe:true,subThemes:["water-sanitation","infrastructure"]},
{investor:"FI-FGTS",recipient:"Linha Amarela",dealType:"Investment",amount:95000000.0,sector:"infrastructure",sourceType:"Government",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"BNDES",notes:"",recipientType:"company",pe:true,subThemes:["infrastructure","climate"]},
{investor:"Light Energia",recipient:"Grid modernization",dealType:"Investment",amount:28000000.0,sector:"climate",sourceType:"Corporate",city:"Rio de Janeiro",state:"RJ",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Bloomberg NEF",notes:"",recipientType:"company",subThemes:["climate","economic-inclusion"]},
{investor:"Baobá Fund",recipient:"Racial equity grantees (MG)",dealType:"Grant",amount:4000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Belo Horizonte",state:"MG",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Baobá Fund",notes:"",recipientType:"company"},
{investor:"Bemtevi Investimento Social",recipient:"Gerando Falcões",dealType:"Investment",amount:2000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Belo Horizonte",state:"MG",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"Bemtevi",notes:"Education-focused social enterprise.",recipientType:"company",roundStage:"seed",subThemes:["education","economic-inclusion"]},
{investor:"Din4mo Energia",recipient:"Clean energy fund",dealType:"Fund Launch",amount:45000000.0,sector:"climate",sourceType:"Corporate",city:"Belo Horizonte",state:"MG",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Din4mo",notes:"",recipientType:"fund"},
{investor:"Porto Digital",recipient:"Innovation ecosystem",dealType:"Fund Launch",amount:3000000.0,sector:"economic-inclusion",sourceType:"Government",city:"Recife",state:"PE",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Porto Digital",notes:"",recipientType:"fund"},
{investor:"SoftBank",recipient:"Jusbrasil",dealType:"Investment",amount:50000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Recife",state:"PE",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"TechCrunch",notes:"Legal tech / access to justice.",recipientType:"company"},
{investor:"Vinci Partners ESG Fund",recipient:"Madero",dealType:"Investment",amount:30000000.0,sector:"agritech",sourceType:"VC/PE",city:"Curitiba",state:"PR",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Vinci Partners",notes:"Food and agriculture investment.",recipientType:"company",pe:true,subThemes:["food-agriculture","climate"]},
{investor:"Kaszek",recipient:"Contabilizei",dealType:"Investment",amount:25000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Curitiba",state:"PR",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"Crunchbase",notes:"SME financial tools.",recipientType:"company",roundStage:"series-b"},
{investor:"IDB Lab",recipient:"Dendê Valley",dealType:"Grant",amount:1500000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Salvador",state:"BA",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"IDB Lab",notes:"",recipientType:"company"},
{investor:"NESsT Lirio Fund",recipient:"Social enterprises (Bahia)",dealType:"Investment",amount:2000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Salvador",state:"BA",country:"Brazil",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"",recipientType:"company",roundStage:"seed"},
{investor:"Amazônia Impact Ventures",recipient:"Indigenous producers",dealType:"Loan",amount:8000000.0,sector:"conservation",sourceType:"VC/PE",city:"Manaus",state:"AM",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"Biodiversity finance for indigenous communities.",recipientType:"company",subThemes:["biodiversity","economic-inclusion"]},
{investor:"BNDES",recipient:"Amazon biodiversity fund",dealType:"Fund Launch",amount:120000000.0,sector:"conservation",sourceType:"DFI",city:"Manaus",state:"AM",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"BNDES",notes:"",recipientType:"fund",subThemes:["biodiversity","climate"]},
{investor:"CAF",recipient:"Brazil infrastructure program",dealType:"Investment",amount:200000000.0,sector:"infrastructure",sourceType:"DFI",city:"Brasília",state:"DF",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"CAF",notes:"",recipientType:"fund",subThemes:["infrastructure","climate"]},
{investor:"IFC",recipient:"Stone Pagamentos",dealType:"Investment",amount:100000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Brasília",state:"DF",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"IFC",notes:"",recipientType:"company",roundStage:"series-c",pe:true},
{investor:"Positive Ventures",recipient:"Involves (civic tech)",dealType:"Investment",amount:5000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Florianópolis",state:"SC",country:"Brazil",continent:"South America",date:"2024",year:2024,source:"Positive Ventures",notes:"Civic tech platform.",recipientType:"company",roundStage:"series-a"},
{investor:"Mauá Capital ESG",recipient:"Resultados Digitais",dealType:"Investment",amount:15000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Florianópolis",state:"SC",country:"Brazil",continent:"South America",date:"2023",year:2023,source:"Mauá Capital",notes:"",recipientType:"company",pe:true},
{investor:"DBL Partners",recipient:"Climate tech fund",dealType:"Fund Launch",amount:600000000.0,sector:"climate",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"DBL Partners",notes:"",recipientType:"fund"},
{investor:"Generate Capital",recipient:"Sustainable infrastructure fund",dealType:"Fund Launch",amount:2000000000.0,sector:"climate",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Generate Capital",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Closed Loop Partners",recipient:"Circular economy ventures",dealType:"Investment",amount:75000000.0,sector:"climate",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Closed Loop Partners",notes:"",recipientType:"company",subThemes:["climate","circular-economy"]},
{investor:"Kapor Capital",recipient:"Mayvenn",dealType:"Investment",amount:10000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2023",year:2023,source:"Kapor Capital",notes:"",recipientType:"company",roundStage:"series-a"},
{investor:"Omidyar Network",recipient:"GiveDirectly",dealType:"Grant",amount:20000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Omidyar Network",notes:"",recipientType:"company"},
{investor:"Spring Lane Capital",recipient:"Sustainable infrastructure fund",dealType:"Fund Launch",amount:320000000.0,sector:"climate",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Spring Lane Capital",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Elevar Equity",recipient:"Global financial inclusion fund",dealType:"Fund Launch",amount:165000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"San Francisco",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Elevar Equity",notes:"",recipientType:"fund"},
{investor:"MacArthur Foundation",recipient:"Program-related investments",dealType:"Investment",amount:150000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Chicago",state:"IL",country:"United States",continent:"North America",date:"2024",year:2024,source:"MacArthur Foundation",notes:"Program-related investments.",recipientType:"fund",subThemes:["economic-inclusion","housing"]},
{investor:"Ariel Investments",recipient:"Community development",dealType:"Investment",amount:50000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Chicago",state:"IL",country:"United States",continent:"North America",date:"2024",year:2024,source:"Ariel Investments",notes:"",recipientType:"company",pe:true},
{investor:"Zenani Capital",recipient:"BioPlaster Research",dealType:"Investment",amount:2500000.0,sector:"climate",sourceType:"VC/PE",city:"Chicago",state:"IL",country:"United States",continent:"North America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Sargassum → biodegradable packaging.",recipientType:"company",roundStage:"seed",subThemes:["climate","circular-economy"]},
{investor:"ImpactAssets",recipient:"Donor-advised impact portfolio",dealType:"Investment",amount:400000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Chicago",state:"IL",country:"United States",continent:"North America",date:"2024",year:2024,source:"ImpactAssets",notes:"",recipientType:"fund"},
{investor:"SoftBank Latin America Fund",recipient:"Clip (Mexico)",dealType:"Investment",amount:100000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Miami",state:"FL",country:"United States",continent:"North America",date:"2024",year:2024,source:"SoftBank",notes:"",recipientType:"company"},
{investor:"Blue Haven Initiative",recipient:"LatAm clean energy",dealType:"Investment",amount:25000000.0,sector:"climate",sourceType:"Family Office",city:"Miami",state:"FL",country:"United States",continent:"North America",date:"2024",year:2024,source:"Blue Haven Initiative",notes:"",recipientType:"company",subThemes:["climate","economic-inclusion"]},
{investor:"Abundance Circle",recipient:"LatAm impact fund-of-funds",dealType:"Fund Launch",amount:100000000.0,sector:"economic-inclusion",sourceType:"Family Office",city:"Miami",state:"FL",country:"United States",continent:"North America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Buffett family backed.",recipientType:"fund"},
{investor:"Exagon Capital",recipient:"DREX solar (Ecuador)",dealType:"Investment",amount:null,sector:"climate",sourceType:"VC/PE",city:"Miami",state:"FL",country:"United States",continent:"North America",date:"2025",year:2025,source:"ImpactAlpha",notes:"",recipientType:"company",roundStage:"seed"},
{investor:"IFC",recipient:"Global health fund",dealType:"Fund Launch",amount:1000000000.0,sector:"health",sourceType:"DFI",city:"Washington, D.C.",state:"DC",country:"United States",continent:"North America",date:"2024",year:2024,source:"IFC",notes:"",recipientType:"fund",subThemes:["health","economic-inclusion"]},
{investor:"Ford Foundation",recipient:"Mission-related investments",dealType:"Investment",amount:1000000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Washington, D.C.",state:"DC",country:"United States",continent:"North America",date:"2024",year:2024,source:"Ford Foundation",notes:"",recipientType:"fund",subThemes:["economic-inclusion","housing","education"]},
{investor:"Calvert Impact Capital",recipient:"Community investing portfolio",dealType:"Loan",amount:500000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Washington, D.C.",state:"DC",country:"United States",continent:"North America",date:"2024",year:2024,source:"Calvert Impact Capital",notes:"",recipientType:"fund",subThemes:["economic-inclusion","climate","housing"]},
{investor:"IDB Invest",recipient:"43 bonds across LatAm",dealType:"Investment",amount:3700000000.0,sector:"climate",sourceType:"DFI",city:"Washington, D.C.",state:"DC",country:"United States",continent:"North America",date:"2024",year:2024,source:"IDB Invest",notes:"43 bonds across LatAm.",recipientType:"fund",subThemes:["climate","infrastructure","economic-inclusion"]},
{investor:"Bain Capital Double Impact",recipient:"Economic inclusion PE fund",dealType:"Fund Launch",amount:390000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Boston",state:"MA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Bain Capital",notes:"",recipientType:"fund",pe:true,subThemes:["economic-inclusion","health"]},
{investor:"Root Capital",recipient:"Smallholder agriculture",dealType:"Loan",amount:65000000.0,sector:"agritech",sourceType:"DFI",city:"Boston",state:"MA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Root Capital",notes:"",recipientType:"company",subThemes:["food-agriculture","economic-inclusion"]},
{investor:"Community Reinvestment Fund",recipient:"Community lending portfolio",dealType:"Loan",amount:200000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Boston",state:"MA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Community Reinvestment Fund",notes:"",recipientType:"fund"},
{investor:"Nuveen Impact Capital",recipient:"Affordable housing",dealType:"Investment",amount:95000000.0,sector:"housing",sourceType:"VC/PE",city:"Boston",state:"MA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Nuveen",notes:"",recipientType:"company",pe:true},
{investor:"Swell Impact Fund",recipient:"Clean water tech fund",dealType:"Fund Launch",amount:35000000.0,sector:"conservation",sourceType:"VC/PE",city:"Los Angeles",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Swell Impact Fund",notes:"",recipientType:"fund"},
{investor:"Goldman Sachs UIG",recipient:"Affordable housing",dealType:"Investment",amount:250000000.0,sector:"housing",sourceType:"VC/PE",city:"Los Angeles",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Goldman Sachs",notes:"",recipientType:"company",pe:true},
{investor:"Reinventure Capital",recipient:"Women-led businesses",dealType:"Investment",amount:12000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Los Angeles",state:"CA",country:"United States",continent:"North America",date:"2024",year:2024,source:"Reinventure Capital",notes:"Gender-lens investing in women-led businesses.",recipientType:"company",roundStage:"seed",subThemes:["gender-lens","economic-inclusion"]},
{investor:"KKR",recipient:"Climate infrastructure fund",dealType:"Fund Launch",amount:1300000000.0,sector:"climate",sourceType:"VC/PE",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2024",year:2024,source:"KKR",notes:"",recipientType:"fund",pe:true,subThemes:["climate","infrastructure"]},
{investor:"BlackRock",recipient:"Impact equity fund",dealType:"Fund Launch",amount:875000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"New York City",state:"NY",country:"United States",continent:"North America",date:"2024",year:2024,source:"BlackRock",notes:"",recipientType:"fund",pe:true,subThemes:["economic-inclusion","housing"]},
{investor:"Mirova",recipient:"Natural capital fund",dealType:"Fund Launch",amount:300000000.0,sector:"conservation",sourceType:"VC/PE",city:"Paris",state:"",country:"France",continent:"Europe",date:"2024",year:2024,source:"Mirova",notes:"Biodiversity and natural capital focus.",recipientType:"fund",subThemes:["biodiversity","climate"]},
{investor:"Proparco",recipient:"African clean energy",dealType:"Investment",amount:150000000.0,sector:"climate",sourceType:"DFI",city:"Paris",state:"",country:"France",continent:"Europe",date:"2024",year:2024,source:"Proparco",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Investisseurs & Partenaires",recipient:"Africa-focused impact fund",dealType:"Fund Launch",amount:110000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Paris",state:"",country:"France",continent:"Europe",date:"2024",year:2024,source:"Investisseurs & Partenaires",notes:"Africa-focused.",recipientType:"fund"},
{investor:"BNP Paribas",recipient:"Youth employment",dealType:"Partnership",amount:15000000.0,sector:"economic-inclusion",sourceType:"Corporate",city:"Paris",state:"",country:"France",continent:"Europe",date:"2024",year:2024,source:"BNP Paribas",notes:"Social/impact bond for youth employment.",recipientType:"company",subThemes:["economic-inclusion","education"]},
{investor:"Meridiam",recipient:"Infrastructure impact fund",dealType:"Fund Launch",amount:546000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"Paris",state:"",country:"France",continent:"Europe",date:"2024",year:2024,source:"Meridiam",notes:"",recipientType:"fund",subThemes:["infrastructure","climate"]},
{investor:"Triodos Bank",recipient:"Climate investment fund",dealType:"Fund Launch",amount:500000000.0,sector:"climate",sourceType:"DFI",city:"Amsterdam",state:"",country:"Netherlands",continent:"Europe",date:"2024",year:2024,source:"Triodos Bank",notes:"",recipientType:"fund",subThemes:["climate","economic-inclusion"]},
{investor:"FMO",recipient:"Financial inclusion (global)",dealType:"Investment",amount:300000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Amsterdam",state:"",country:"Netherlands",continent:"Europe",date:"2024",year:2024,source:"FMO",notes:"",recipientType:"fund"},
{investor:"Goodwell Investments",recipient:"Africa/Asia impact fund",dealType:"Fund Launch",amount:80000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Amsterdam",state:"",country:"Netherlands",continent:"Europe",date:"2024",year:2024,source:"Goodwell Investments",notes:"Africa/Asia focused.",recipientType:"fund"},
{investor:"DOB Equity",recipient:"East Africa agribusiness",dealType:"Investment",amount:30000000.0,sector:"agritech",sourceType:"VC/PE",city:"Amsterdam",state:"",country:"Netherlands",continent:"Europe",date:"2024",year:2024,source:"DOB Equity",notes:"East Africa agribusiness investment.",recipientType:"company",subThemes:["food-agriculture","economic-inclusion"]},
{investor:"IFU",recipient:"Climate investment fund",dealType:"Fund Launch",amount:280000000.0,sector:"climate",sourceType:"DFI",city:"Copenhagen",state:"",country:"Denmark",continent:"Europe",date:"2024",year:2024,source:"IFU",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Copenhagen Infrastructure Partners",recipient:"Renewable energy debt",dealType:"Loan",amount:1500000000.0,sector:"climate",sourceType:"VC/PE",city:"Copenhagen",state:"",country:"Denmark",continent:"Europe",date:"2024",year:2024,source:"Copenhagen Infrastructure Partners",notes:"",recipientType:"fund"},
{investor:"Novo Holdings",recipient:"Global health fund",dealType:"Fund Launch",amount:200000000.0,sector:"health",sourceType:"VC/PE",city:"Copenhagen",state:"",country:"Denmark",continent:"Europe",date:"2024",year:2024,source:"Novo Holdings",notes:"",recipientType:"fund",subThemes:["health","climate"]},
{investor:"DEG",recipient:"Sustainable agriculture",dealType:"Investment",amount:120000000.0,sector:"agritech",sourceType:"DFI",city:"Berlin",state:"",country:"Germany",continent:"Europe",date:"2024",year:2024,source:"DEG",notes:"",recipientType:"fund"},
{investor:"Ananda Impact Ventures",recipient:"Social enterprise fund",dealType:"Fund Launch",amount:80000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Berlin",state:"",country:"Germany",continent:"Europe",date:"2024",year:2024,source:"Ananda Impact Ventures",notes:"",recipientType:"fund"},
{investor:"responsAbility",recipient:"Climate-smart agriculture",dealType:"Investment",amount:45000000.0,sector:"agritech",sourceType:"VC/PE",city:"Berlin",state:"",country:"Germany",continent:"Europe",date:"2024",year:2024,source:"responsAbility",notes:"",recipientType:"company",subThemes:["food-agriculture","climate"]},
{investor:"BlueOrchard",recipient:"Emerging markets inclusion fund",dealType:"Fund Launch",amount:350000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Geneva",state:"",country:"Switzerland",continent:"Europe",date:"2024",year:2024,source:"BlueOrchard",notes:"",recipientType:"fund"},
{investor:"Symbiotics",recipient:"Emerging market fixed income",dealType:"Loan",amount:200000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Geneva",state:"",country:"Switzerland",continent:"Europe",date:"2024",year:2024,source:"Symbiotics",notes:"",recipientType:"fund"},
{investor:"AlphaMundi",recipient:"Impact lending fund",dealType:"Fund Launch",amount:50000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Geneva",state:"",country:"Switzerland",continent:"Europe",date:"2025",year:2025,source:"ImpactAlpha",notes:"",recipientType:"fund"},
{investor:"Elea Foundation",recipient:"Rutopía",dealType:"Investment",amount:3000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Geneva",state:"",country:"Switzerland",continent:"Europe",date:"2024",year:2024,source:"ImpactAlpha",notes:"",recipientType:"company",roundStage:"seed",subThemes:["economic-inclusion","biodiversity"]},
{investor:"Swedfund",recipient:"Clean energy Africa",dealType:"Investment",amount:85000000.0,sector:"climate",sourceType:"DFI",city:"Stockholm",state:"",country:"Sweden",continent:"Europe",date:"2024",year:2024,source:"Swedfund",notes:"",recipientType:"fund"},
{investor:"Norrsken Foundation",recipient:"Global impact fund",dealType:"Fund Launch",amount:100000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Stockholm",state:"",country:"Sweden",continent:"Europe",date:"2024",year:2024,source:"Norrsken Foundation",notes:"",recipientType:"fund",subThemes:["economic-inclusion","climate"]},
{investor:"EQT Foundation",recipient:"Education access",dealType:"Investment",amount:40000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Stockholm",state:"",country:"Sweden",continent:"Europe",date:"2024",year:2024,source:"EQT Foundation",notes:"Education access investment.",recipientType:"company",pe:true},
{investor:"British International Investment",recipient:"Africa climate fund",dealType:"Investment",amount:500000000.0,sector:"climate",sourceType:"DFI",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"BII",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Big Society Capital",recipient:"Social impact fund",dealType:"Fund Launch",amount:250000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"Big Society Capital",notes:"",recipientType:"fund"},
{investor:"LeapFrog Investments",recipient:"Emerging markets health and finance fund",dealType:"Fund Launch",amount:500000000.0,sector:"health",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"LeapFrog Investments",notes:"",recipientType:"fund",subThemes:["health","economic-inclusion"]},
{investor:"Helios Investment Partners",recipient:"Africa-focused PE fund",dealType:"Fund Launch",amount:370000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"London",state:"England",country:"United Kingdom",continent:"Europe",date:"2024",year:2024,source:"Helios Investment Partners",notes:"Africa-focused.",recipientType:"fund",pe:true},
{investor:"Norfund",recipient:"Renewable energy (emerging markets)",dealType:"Investment",amount:250000000.0,sector:"climate",sourceType:"DFI",city:"Oslo",state:"",country:"Norway",continent:"Europe",date:"2024",year:2024,source:"Norfund",notes:"",recipientType:"fund",subThemes:["climate","economic-inclusion"]},
{investor:"KLP Impact",recipient:"Affordable infrastructure fund",dealType:"Fund Launch",amount:120000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"Oslo",state:"",country:"Norway",continent:"Europe",date:"2024",year:2024,source:"KLP Impact",notes:"",recipientType:"fund",pe:true},
{investor:"Novastar Ventures",recipient:"East Africa innovation fund",dealType:"Fund Launch",amount:120000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2024",year:2024,source:"Novastar Ventures",notes:"",recipientType:"fund"},
{investor:"Acumen",recipient:"Off-grid solar (East Africa)",dealType:"Investment",amount:15000000.0,sector:"climate",sourceType:"Foundation",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2024",year:2024,source:"Acumen",notes:"",recipientType:"company",subThemes:["climate","economic-inclusion"]},
{investor:"DOB Equity",recipient:"Twiga Foods",dealType:"Investment",amount:10000000.0,sector:"agritech",sourceType:"VC/PE",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2024",year:2024,source:"DOB Equity",notes:"",recipientType:"company",subThemes:["food-agriculture","economic-inclusion"]},
{investor:"M-KOPA",recipient:"Off-grid solar expansion",dealType:"Investment",amount:75000000.0,sector:"climate",sourceType:"Corporate",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2024",year:2024,source:"TechCrunch",notes:"",recipientType:"company",roundStage:"series-d",subThemes:["climate","economic-inclusion"]},
{investor:"FSD Africa",recipient:"East Africa financial inclusion",dealType:"Fund Launch",amount:30000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2025",year:2025,source:"FSD Africa",notes:"",recipientType:"fund"},
{investor:"Acorn Holdings",recipient:"Student housing fund",dealType:"Fund Launch",amount:50000000.0,sector:"housing",sourceType:"VC/PE",city:"Nairobi",state:"",country:"Kenya",continent:"Africa",date:"2025",year:2025,source:"CMA Kenya",notes:"",recipientType:"fund"},
{investor:"AIIM",recipient:"Southern Africa climate fund",dealType:"Fund Launch",amount:50000000.0,sector:"climate",sourceType:"VC/PE",city:"Johannesburg",state:"",country:"South Africa",continent:"Africa",date:"2026",year:2026,source:"FSDAi/ACP",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"AlphaMundi",recipient:"Southern Africa social enterprises",dealType:"Investment",amount:25000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Johannesburg",state:"",country:"South Africa",continent:"Africa",date:"2024",year:2024,source:"AlphaMundi",notes:"",recipientType:"company"},
{investor:"Old Mutual",recipient:"Affordable housing fund",dealType:"Fund Launch",amount:80000000.0,sector:"housing",sourceType:"Corporate",city:"Johannesburg",state:"",country:"South Africa",continent:"Africa",date:"2024",year:2024,source:"Old Mutual",notes:"",recipientType:"fund",pe:true},
{investor:"IFC",recipient:"Renewable energy (South Africa)",dealType:"Investment",amount:150000000.0,sector:"climate",sourceType:"DFI",city:"Johannesburg",state:"",country:"South Africa",continent:"Africa",date:"2024",year:2024,source:"IFC",notes:"",recipientType:"company"},
{investor:"Harith General Partners",recipient:"Africa infrastructure fund",dealType:"Fund Launch",amount:200000000.0,sector:"infrastructure",sourceType:"VC/PE",city:"Johannesburg",state:"",country:"South Africa",continent:"Africa",date:"2024",year:2024,source:"Harith General Partners",notes:"",recipientType:"fund",pe:true},
{investor:"IIF / Kuramo Capital",recipient:"Nigeria impact fund",dealType:"Fund Launch",amount:1000000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Lagos",state:"",country:"Nigeria",continent:"Africa",date:"2024",year:2024,source:"IIF",notes:"",recipientType:"fund",pe:true},
{investor:"All On (Shell)",recipient:"Off-grid energy Nigeria",dealType:"Investment",amount:60000000.0,sector:"climate",sourceType:"Corporate",city:"Lagos",state:"",country:"Nigeria",continent:"Africa",date:"2024",year:2024,source:"All On",notes:"",recipientType:"company",subThemes:["climate","economic-inclusion"]},
{investor:"TLcom Capital",recipient:"Africa tech fund",dealType:"Fund Launch",amount:150000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Lagos",state:"",country:"Nigeria",continent:"Africa",date:"2024",year:2024,source:"TLcom Capital",notes:"",recipientType:"fund"},
{investor:"InfraCredit",recipient:"Green infrastructure (Nigeria)",dealType:"Partnership",amount:40000000.0,sector:"climate",sourceType:"DFI",city:"Lagos",state:"",country:"Nigeria",continent:"Africa",date:"2024",year:2024,source:"InfraCredit",notes:"Green bond guarantee.",recipientType:"company",subThemes:["climate","infrastructure"]},
{investor:"GroFin",recipient:"SMEs West Africa",dealType:"Loan",amount:20000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Lagos",state:"",country:"Nigeria",continent:"Africa",date:"2024",year:2024,source:"GroFin",notes:"",recipientType:"company"},
{investor:"Savanna Impact Advisory",recipient:"West Africa SME funds",dealType:"Fund Launch",amount:15000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2025",year:2025,source:"IIGh",notes:"",recipientType:"fund"},
{investor:"GroFin",recipient:"Ghana SMEs",dealType:"Loan",amount:8000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Accra",state:"Greater Accra",country:"Ghana",continent:"Africa",date:"2024",year:2024,source:"GroFin",notes:"",recipientType:"company"},
{investor:"FONERWA",recipient:"Rwanda climate fund",dealType:"Fund Launch",amount:25000000.0,sector:"climate",sourceType:"Government",city:"Kigali",state:"",country:"Rwanda",continent:"Africa",date:"2024",year:2024,source:"FONERWA",notes:"",recipientType:"fund"},
{investor:"Bamboo Capital",recipient:"Clean cooking",dealType:"Investment",amount:12000000.0,sector:"climate",sourceType:"VC/PE",city:"Kigali",state:"",country:"Rwanda",continent:"Africa",date:"2024",year:2024,source:"Bamboo Capital",notes:"",recipientType:"company",subThemes:["climate","health"]},
{investor:"AgDevCo",recipient:"Tanzanian smallholders",dealType:"Investment",amount:18000000.0,sector:"agritech",sourceType:"DFI",city:"Dar es Salaam",state:"",country:"Tanzania",continent:"Africa",date:"2024",year:2024,source:"AgDevCo",notes:"",recipientType:"company",subThemes:["food-agriculture","economic-inclusion"]},
{investor:"Norfund",recipient:"Off-grid solar (Tanzania)",dealType:"Investment",amount:15000000.0,sector:"climate",sourceType:"DFI",city:"Dar es Salaam",state:"",country:"Tanzania",continent:"Africa",date:"2024",year:2024,source:"Norfund",notes:"",recipientType:"company",subThemes:["climate","economic-inclusion"]},
{investor:"Sawari Ventures",recipient:"Egyptian fintech fund",dealType:"Fund Launch",amount:35000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Cairo",state:"",country:"Egypt",continent:"Africa",date:"2024",year:2024,source:"Sawari Ventures",notes:"",recipientType:"fund"},
{investor:"Flat6Labs",recipient:"MENA startup fund",dealType:"Fund Launch",amount:95000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Cairo",state:"",country:"Egypt",continent:"Africa",date:"2023",year:2023,source:"Flat6Labs",notes:"",recipientType:"fund"},
{investor:"EBRD",recipient:"Egypt renewables",dealType:"Investment",amount:200000000.0,sector:"climate",sourceType:"DFI",city:"Cairo",state:"",country:"Egypt",continent:"Africa",date:"2024",year:2024,source:"EBRD",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"IGNIA",recipient:"Mexico impact fund",dealType:"Fund Launch",amount:80000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2024",year:2024,source:"IGNIA",notes:"",recipientType:"fund"},
{investor:"Adobe Capital",recipient:"NatGas",dealType:"Investment",amount:8000000.0,sector:"climate",sourceType:"VC/PE",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2023",year:2023,source:"Adobe Capital",notes:"",recipientType:"company",roundStage:"series-a",subThemes:["climate","infrastructure"]},
{investor:"Blue Like an Orange",recipient:"Fuentebuena",dealType:"Loan",amount:18000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2024",year:2024,source:"ImpactAlpha",notes:"",recipientType:"company"},
{investor:"Promotora Social México",recipient:"Social infrastructure",dealType:"Investment",amount:45000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2024",year:2024,source:"Promotora Social México",notes:"",recipientType:"company",pe:true,subThemes:["economic-inclusion","infrastructure"]},
{investor:"New Ventures / Ship2B",recipient:"Climate impact fund",dealType:"Fund Launch",amount:60000000.0,sector:"climate",sourceType:"VC/PE",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Mexico + Colombia focus.",recipientType:"fund"},
{investor:"Savia Ventures",recipient:"Done Properly",dealType:"Investment",amount:2000000.0,sector:"agritech",sourceType:"VC/PE",city:"Mexico City",state:"",country:"Mexico",continent:"North America",date:"2024",year:2024,source:"ImpactAlpha",notes:"Chilean alt-protein startup.",recipientType:"company",roundStage:"seed",subThemes:["food-agriculture","climate"]},
{investor:"Corporación Inversor",recipient:"Colombia impact fund",dealType:"Fund Launch",amount:40000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Bogotá",state:"",country:"Colombia",continent:"South America",date:"2025",year:2025,source:"ImpactAlpha",notes:"",recipientType:"fund"},
{investor:"Circulate Capital",recipient:"Plastics recycling Colombia",dealType:"Investment",amount:15000000.0,sector:"climate",sourceType:"VC/PE",city:"Bogotá",state:"",country:"Colombia",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"",recipientType:"company",subThemes:["climate","circular-economy"]},
{investor:"NESsT",recipient:"Colombian social enterprises",dealType:"Investment",amount:5000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Bogotá",state:"",country:"Colombia",continent:"South America",date:"2025",year:2025,source:"NESsT",notes:"",recipientType:"company",roundStage:"seed"},
{investor:"Bamboo Capital",recipient:"UNI2 Microcrédito",dealType:"Loan",amount:1000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Bogotá",state:"",country:"Colombia",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"",recipientType:"company"},
{investor:"Alaya Capital",recipient:"Chile impact fund",dealType:"Fund Launch",amount:40000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Santiago",state:"",country:"Chile",continent:"South America",date:"2024",year:2024,source:"Alaya Capital",notes:"",recipientType:"fund"},
{investor:"Fondo de Fondos (Chile)",recipient:"Chile fund-of-funds",dealType:"Fund Launch",amount:30000000.0,sector:"economic-inclusion",sourceType:"Government",city:"Santiago",state:"",country:"Chile",continent:"South America",date:"2024",year:2024,source:"GSG Chile",notes:"",recipientType:"fund"},
{investor:"Acción",recipient:"Chilean fintech",dealType:"Investment",amount:12000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Santiago",state:"",country:"Chile",continent:"South America",date:"2024",year:2024,source:"Acción",notes:"",recipientType:"company",roundStage:"series-a"},
{investor:"Impaqto Capital",recipient:"Andean impact businesses",dealType:"Investment",amount:10000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Lima",state:"",country:"Peru",continent:"South America",date:"2024",year:2024,source:"ImpactAlpha",notes:"Revenue-based finance.",recipientType:"company",roundStage:"seed"},
{investor:"CAF",recipient:"Peru infrastructure",dealType:"Investment",amount:80000000.0,sector:"infrastructure",sourceType:"DFI",city:"Lima",state:"",country:"Peru",continent:"South America",date:"2024",year:2024,source:"CAF",notes:"",recipientType:"fund",subThemes:["infrastructure","climate"]},
{investor:"NXTP Ventures",recipient:"Argentina tech fund",dealType:"Fund Launch",amount:60000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Buenos Aires",state:"",country:"Argentina",continent:"South America",date:"2024",year:2024,source:"NXTP Ventures",notes:"",recipientType:"fund"},
{investor:"Pomona Impact",recipient:"Argentine agritech",dealType:"Investment",amount:8000000.0,sector:"agritech",sourceType:"VC/PE",city:"Buenos Aires",state:"",country:"Argentina",continent:"South America",date:"2024",year:2024,source:"Pomona Impact",notes:"",recipientType:"company",roundStage:"series-a",subThemes:["food-agriculture","climate"]},
{investor:"500 LatAm / IDB Lab",recipient:"LatAm startup fund",dealType:"Fund Launch",amount:30000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Buenos Aires",state:"",country:"Argentina",continent:"South America",date:"2025",year:2025,source:"500 Global",notes:"IDB Lab $2M anchor.",recipientType:"fund"},
{investor:"Intentional Asset Management",recipient:"Caribbean food systems fund",dealType:"Fund Launch",amount:100000000.0,sector:"agritech",sourceType:"Family Office",city:"San Juan",state:"",country:"Puerto Rico",continent:"North America",date:"2025",year:2025,source:"ImpactAlpha",notes:"Caribbean food systems.",recipientType:"fund",subThemes:["food-agriculture","climate"]},
{investor:"Sonen Capital",recipient:"Caribbean climate resilience",dealType:"Investment",amount:25000000.0,sector:"climate",sourceType:"Family Office",city:"San Juan",state:"",country:"Puerto Rico",continent:"North America",date:"2024",year:2024,source:"Sonen Capital",notes:"",recipientType:"company",subThemes:["climate","infrastructure"]},
{investor:"Aavishkaar",recipient:"India impact fund",dealType:"Fund Launch",amount:100000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"Aavishkaar",notes:"",recipientType:"fund"},
{investor:"Omnivore Partners",recipient:"India agritech fund",dealType:"Fund Launch",amount:130000000.0,sector:"agritech",sourceType:"VC/PE",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"Omnivore Partners",notes:"",recipientType:"fund",subThemes:["food-agriculture","climate"]},
{investor:"Elevar Equity",recipient:"Vistaar Finance",dealType:"Investment",amount:15000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"Elevar Equity",notes:"",recipientType:"company",roundStage:"series-b"},
{investor:"Acumen",recipient:"Affordable healthcare (India)",dealType:"Investment",amount:10000000.0,sector:"health",sourceType:"Foundation",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"Acumen",notes:"",recipientType:"company"},
{investor:"LeapFrog Investments",recipient:"Shriram Finance",dealType:"Investment",amount:50000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"LeapFrog",notes:"",recipientType:"company"},
{investor:"Piramal Foundation",recipient:"Rural health (India)",dealType:"Grant",amount:20000000.0,sector:"health",sourceType:"Foundation",city:"Mumbai",state:"",country:"India",continent:"Asia",date:"2024",year:2024,source:"Piramal Foundation",notes:"",recipientType:"company"},
{investor:"CSEIF",recipient:"China social enterprise ecosystem",dealType:"Grant",amount:5000000.0,sector:"economic-inclusion",sourceType:"Foundation",city:"Shanghai",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"CSEIF",notes:"",recipientType:"fund"},
{investor:"Green Climate Fund",recipient:"Yangtze conservation",dealType:"Investment",amount:100000000.0,sector:"conservation",sourceType:"DFI",city:"Shanghai",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"Green Climate Fund",notes:"Biodiversity and conservation finance.",recipientType:"company",subThemes:["biodiversity","climate"]},
{investor:"IDG Capital",recipient:"Chinese cleantech",dealType:"Investment",amount:200000000.0,sector:"climate",sourceType:"VC/PE",city:"Shanghai",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"IDG Capital",notes:"",recipientType:"company",roundStage:"series-b"},
{investor:"AIIB",recipient:"Asia climate debt",dealType:"Loan",amount:500000000.0,sector:"climate",sourceType:"DFI",city:"Beijing",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"AIIB",notes:"",recipientType:"fund"},
{investor:"China Development Bank",recipient:"Rural electrification",dealType:"Investment",amount:300000000.0,sector:"climate",sourceType:"DFI",city:"Beijing",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"China Development Bank",notes:"",recipientType:"fund",subThemes:["climate","infrastructure"]},
{investor:"Sequoia China",recipient:"Carbon capture tech",dealType:"Investment",amount:80000000.0,sector:"climate",sourceType:"VC/PE",city:"Beijing",state:"",country:"China",continent:"Asia",date:"2024",year:2024,source:"Sequoia China",notes:"",recipientType:"company",roundStage:"series-a"},
{investor:"Patamar Capital",recipient:"Indonesian financial inclusion",dealType:"Investment",amount:20000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Jakarta",state:"",country:"Indonesia",continent:"Asia",date:"2024",year:2024,source:"Patamar Capital",notes:"",recipientType:"company",roundStage:"series-a"},
{investor:"Mercy Corps Ventures",recipient:"Climate-resilient agriculture (Indonesia)",dealType:"Investment",amount:8000000.0,sector:"agritech",sourceType:"Foundation",city:"Jakarta",state:"",country:"Indonesia",continent:"Asia",date:"2024",year:2024,source:"Mercy Corps Ventures",notes:"",recipientType:"company",roundStage:"seed",subThemes:["food-agriculture","climate"]},
{investor:"TLFF / UNEP",recipient:"Indonesia biodiversity fund",dealType:"Fund Launch",amount:100000000.0,sector:"conservation",sourceType:"DFI",city:"Jakarta",state:"",country:"Indonesia",continent:"Asia",date:"2024",year:2024,source:"TLFF/UNEP",notes:"Blended finance for tropical forests.",recipientType:"fund",subThemes:["biodiversity","climate"]},
{investor:"Insitor Partners",recipient:"SE Asia social enterprise fund",dealType:"Fund Launch",amount:35000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Bangkok",state:"",country:"Thailand",continent:"Asia",date:"2024",year:2024,source:"Insitor Partners",notes:"",recipientType:"fund"},
{investor:"Thai Social Enterprise Office",recipient:"SE acceleration (Thailand)",dealType:"Grant",amount:5000000.0,sector:"economic-inclusion",sourceType:"Government",city:"Bangkok",state:"",country:"Thailand",continent:"Asia",date:"2024",year:2024,source:"Thai Social Enterprise Office",notes:"",recipientType:"company"},
{investor:"responsAbility",recipient:"Asia food systems fund",dealType:"Fund Launch",amount:60000000.0,sector:"agritech",sourceType:"VC/PE",city:"Bangkok",state:"",country:"Thailand",continent:"Asia",date:"2024",year:2024,source:"responsAbility",notes:"",recipientType:"fund",subThemes:["food-agriculture","climate"]},
{investor:"Korea SVS",recipient:"Korea social venture fund",dealType:"Fund Launch",amount:50000000.0,sector:"economic-inclusion",sourceType:"Government",city:"Seoul",state:"",country:"South Korea",continent:"Asia",date:"2024",year:2024,source:"Korea SVS",notes:"",recipientType:"fund"},
{investor:"SK Group",recipient:"Social impact investments (Korea)",dealType:"Investment",amount:100000000.0,sector:"economic-inclusion",sourceType:"Corporate",city:"Seoul",state:"",country:"South Korea",continent:"Asia",date:"2024",year:2024,source:"SK Group",notes:"",recipientType:"fund",pe:true},
{investor:"KOICA",recipient:"Development impact bonds",dealType:"Partnership",amount:30000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Seoul",state:"",country:"South Korea",continent:"Asia",date:"2024",year:2024,source:"KOICA",notes:"Education-focused development impact bonds.",recipientType:"company"},
{investor:"Temasek Foundation",recipient:"Climate innovation (Singapore)",dealType:"Grant",amount:50000000.0,sector:"climate",sourceType:"Foundation",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2024",year:2024,source:"Temasek Foundation",notes:"",recipientType:"company"},
{investor:"responsAbility",recipient:"Asia financial inclusion fund",dealType:"Fund Launch",amount:150000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2024",year:2024,source:"responsAbility",notes:"",recipientType:"fund"},
{investor:"Lightrock",recipient:"SE Asia growth equity",dealType:"Investment",amount:75000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Singapore",state:"",country:"Singapore",continent:"Asia",date:"2024",year:2024,source:"Lightrock",notes:"",recipientType:"company",roundStage:"series-b",pe:true},
{investor:"SIIF",recipient:"Elderly care impact bond",dealType:"Partnership",amount:8000000.0,sector:"health",sourceType:"Foundation",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"2024",year:2024,source:"SIIF",notes:"Social impact bond for elderly care services.",recipientType:"company"},
{investor:"Shinsei Corporate Investment",recipient:"Japan impact fund",dealType:"Fund Launch",amount:30000000.0,sector:"economic-inclusion",sourceType:"Corporate",city:"Tokyo",state:"",country:"Japan",continent:"Asia",date:"2024",year:2024,source:"Shinsei",notes:"",recipientType:"fund"},
{investor:"Insitor Partners",recipient:"Cambodian affordable housing",dealType:"Investment",amount:5000000.0,sector:"housing",sourceType:"VC/PE",city:"Phnom Penh",state:"",country:"Cambodia",continent:"Asia",date:"2024",year:2024,source:"Insitor Partners",notes:"",recipientType:"company"},
{investor:"BlueOrchard",recipient:"Cambodia microfinance",dealType:"Loan",amount:15000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Phnom Penh",state:"",country:"Cambodia",continent:"Asia",date:"2024",year:2024,source:"BlueOrchard",notes:"",recipientType:"company"},
{investor:"Australian Impact Investments",recipient:"First Australians Capital",dealType:"Investment",amount:10000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Melbourne",state:"VIC",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"AII",notes:"First Nations economic empowerment.",recipientType:"company"},
{investor:"SEFA",recipient:"Australia community lending",dealType:"Loan",amount:20000000.0,sector:"economic-inclusion",sourceType:"DFI",city:"Melbourne",state:"VIC",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"SEFA",notes:"",recipientType:"fund"},
{investor:"Macquarie Group",recipient:"Pacific Islands renewables",dealType:"Investment",amount:50000000.0,sector:"climate",sourceType:"Corporate",city:"Melbourne",state:"VIC",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"Macquarie Group",notes:"",recipientType:"company",pe:true},
{investor:"CEFC",recipient:"Community housing (Australia)",dealType:"Investment",amount:80000000.0,sector:"housing",sourceType:"Government",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"CEFC",notes:"",recipientType:"company",subThemes:["housing","climate"]},
{investor:"Giant Leap",recipient:"Australia impact VC fund",dealType:"Fund Launch",amount:50000000.0,sector:"climate",sourceType:"VC/PE",city:"Sydney",state:"NSW",country:"Australia",continent:"Oceania",date:"2024",year:2024,source:"Giant Leap",notes:"",recipientType:"fund"},
{investor:"Impact Enterprise Fund",recipient:"New Zealand impact ventures",dealType:"Fund Launch",amount:15000000.0,sector:"economic-inclusion",sourceType:"VC/PE",city:"Auckland",state:"",country:"New Zealand",continent:"Oceania",date:"2024",year:2024,source:"Impact Enterprise Fund",notes:"",recipientType:"fund"}
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
document.getElementById('filterFooterApply').addEventListener('click',closeMobilePanel);
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

// ── CREATE REPORT ─────────────────────────────────────────────────────────────

const ISO3={
  'Brazil':'BRA','United States':'USA','United Kingdom':'GBR','Singapore':'SGP',
  'Ghana':'GHA','Australia':'AUS','Japan':'JPN','France':'FRA','Netherlands':'NLD',
  'Denmark':'DNK','Germany':'DEU','Switzerland':'CHE','Sweden':'SWE','Norway':'NOR',
  'Kenya':'KEN','South Africa':'ZAF','Nigeria':'NGA','Rwanda':'RWA','Tanzania':'TZA',
  'Egypt':'EGY','Mexico':'MEX','Colombia':'COL','Chile':'CHL','Peru':'PER',
  'Argentina':'ARG','Puerto Rico':'PRI','India':'IND','China':'CHN','Indonesia':'IDN',
  'Thailand':'THA','South Korea':'KOR','Cambodia':'KHM','New Zealand':'NZL'
};

function fmtStatCard(a){
  if(!a)return'—';
  const v=a>=1e12?a/1e12:a>=1e9?a/1e9:a>=1e6?a/1e6:a>=1e3?a/1e3:a;
  const sfx=a>=1e12?' T':a>=1e9?' B':a>=1e6?' M':a>=1e3?' K':'';
  const d=v<10?v.toFixed(1):String(Math.round(v));
  return'$'+d.replace('.0','')+sfx;
}

function fmtRowValue(a){
  if(!a)return'—';
  const v=a>=1e9?a/1e9:a>=1e6?a/1e6:a>=1e3?a/1e3:a;
  const sfx=a>=1e9?' B':a>=1e6?' M':a>=1e3?' K':'';
  const d=v<10?v.toFixed(1):String(Math.round(v));
  return'$'+d.replace('.0','')+sfx;
}

const _LEGAL=/\b(LLC|Inc\.|Corp\.|Ltd\.|S\.A\.|S\/A|Ltda\.|GmbH|PLC|LP|LLP|EIRELI)\b\.?/gi;
const _ABBR=[[/\bCapital\b/g,'Cap.'],[/\bInvestments\b/g,'Inv.'],[/\bInternational\b/g,'Intl.'],[/\bManagement\b/g,'Mgmt.'],[/\bDevelopment\b/g,'Dev.'],[/\bFoundation\b/g,'Fdn.'],[/\bFinancial\b/g,'Fin.'],[/\bFinance\b/g,'Fin.'],[/\bCompany\b/g,'Co.'],[/\bGroup\b/g,'Grp.']];
const _SHORT={'ABC Impact (Temasek-backed)':'ABC Impact','Vox Capital / TNC / Moore Fdn':'Vox Cap.+','Co-Capital / Din4mo / Oogway':'Co-Cap+','500 LatAm / IDB Lab':'500 LatAm','Eco Invest Brasil (Gov/IDB/FCDO)':'Eco Invest','SITAWI Finanças do Bem':'SITAWI','FSDAi (FSD Africa Investments)':'FSDAi'};
function shortenName(n){if(_SHORT[n])return _SHORT[n];let s=n.replace(_LEGAL,'').trim();_ABBR.forEach(([p,r])=>{s=s.replace(p,r)});return s.trim()}
function truncateName(n,withPlus){const lim=withPlus?20:22,dot=withPlus?18:20,s=shortenName(n);return s.length<=lim?s:s.slice(0,dot)+'...'}
function truncateNames(inv,rec,withPlus){
  // Individual base limit, slack-sharing, then a hard combined cap of 44 chars
  // (calibrated to "Generate Cap. → Sustainable infrastructure fund")
  const BASE=withPlus?19:21,DOT=BASE-2,COMBINED=47;
  const si=shortenName(inv),sr=shortenName(rec);
  const slack=(n)=>Math.max(0,BASE-n.length);
  let ti=si.length<=BASE+slack(sr)?si:si.slice(0,DOT+Math.min(slack(sr),4))+'...';
  let tr=sr.length<=BASE+slack(si)?sr:sr.slice(0,DOT+Math.min(slack(si),4))+'...';
  // Hard combined cap: if still too long, trim the longer of the two
  if(ti.length+tr.length>COMBINED){
    const over=ti.length+tr.length-COMBINED;
    if(ti.length>=tr.length){ti=ti.slice(0,Math.max(ti.length-over-3,8))+'...';}
    else{tr=tr.slice(0,Math.max(tr.length-over-3,8))+'...';}
  }
  return[ti,tr];
}

function computeReportStats(fl){
  const totalCapital=fl.reduce((s,d)=>s+(d.amount||0),0);
  const investorSet=new Set(fl.map(d=>d.investor));
  const recipientSet=new Set(fl.map(d=>d.recipient));
  const allInst=new Set([...investorSet,...recipientSet]);

  const investorCats={
    'impact investment firms':0,'family offices':0,'pension funds':0,'foundations':0,
    'corporate investors':0,'banks':0,'government agencies':0,
    'development finance institutions':0,'sovereign wealth funds':0,'angel investors':0
  };
  fl.forEach(d=>{switch(d.sourceType){
    case'VC/PE':investorCats['impact investment firms']++;break;
    case'DFI':investorCats['development finance institutions']++;break;
    case'Family Office':investorCats['family offices']++;break;
    case'Foundation':investorCats['foundations']++;break;
    case'Government':investorCats['government agencies']++;break;
    case'Corporate':investorCats['corporate investors']++;break;
  }});

  const dealSubtypes={'venture capital investments':0,'private equity investments':0,'loans':0,'grants':0,'blended finance deployments':0};
  fl.forEach(d=>{
    if(d.dealType==='Investment'){if(d.sourceType==='VC/PE')dealSubtypes['venture capital investments']++;else dealSubtypes['private equity investments']++;}
    else if(d.dealType==='Loan')dealSubtypes['loans']++;
    else if(d.dealType==='Grant')dealSubtypes['grants']++;
    else if(d.dealType==='Partnership')dealSubtypes['blended finance deployments']++;
  });

  const investments=fl.filter(d=>d.dealType==='Investment');
  const fundraises=fl.filter(d=>d.dealType==='Fund Launch');

  const themeCounts={};
  fl.forEach(d=>{const lbl=SL[d.sector]||d.sector;themeCounts[lbl]=(themeCounts[lbl]||0)+1});
  const themesSorted=Object.entries(themeCounts).sort((a,b)=>b[1]-a[1]);

  const socialKeys=new Set(['economic-inclusion','health','housing','fintech']);
  const envKeys=new Set(['climate','energy','conservation','agritech','circular-economy','infrastructure']);
  let socialThemeCount=0,envThemeCount=0;
  themesSorted.forEach(([lbl])=>{
    const key=Object.entries(SL).find(([,v])=>v===lbl)?.[0];
    if(key&&socialKeys.has(key))socialThemeCount++;
    else if(key&&envKeys.has(key))envThemeCount++;
  });

  const cityCountry={};fl.forEach(d=>{cityCountry[d.city]=d.country});
  const cityCounts={};fl.forEach(d=>{cityCounts[d.city]=(cityCounts[d.city]||0)+1});
  const countryCounts={};fl.forEach(d=>{countryCounts[d.country]=(countryCounts[d.country]||0)+1});
  const countryMetros={};fl.forEach(d=>{if(!countryMetros[d.country])countryMetros[d.country]=new Set();countryMetros[d.country].add(d.city)});
  const citiesSorted=Object.entries(cityCounts).sort((a,b)=>b[1]-a[1]);
  const countriesSorted=Object.entries(countryCounts).sort((a,b)=>b[1]-a[1]);
  const continents=new Set(fl.map(d=>d.continent));

  const dfiInvestors=new Set(['DFI']);
  const crossBorderCount=fl.filter(d=>d.sourceType==='DFI'||d.investor.includes('IFC')||d.investor.includes('IDB')||d.investor.includes('JICA')||d.investor.includes('AIIB')||d.investor.includes('CAF')||d.investor.includes('EBRD')).length;
  const crossBorderPct=fl.length>0?Math.round((crossBorderCount/fl.length)*100):0;

  // Highlights: top 5 by value per prompt logic
  const sortedByValue=[...fl].sort((a,b)=>(b.amount||0)-(a.amount||0));
  const top3=sortedByValue.slice(0,3);
  const top3FundraiseCount=top3.filter(d=>d.dealType==='Fund Launch').length;
  const allFundraises=sortedByValue.filter(d=>d.dealType==='Fund Launch');
  let highlightRows;
  if(top3FundraiseCount===0){
    highlightRows=[...top3,...allFundraises.slice(0,2)];
  } else if(top3FundraiseCount===1){
    const alreadyIn=top3.find(d=>d.dealType==='Fund Launch');
    const nextFund=allFundraises.find(d=>d!==alreadyIn);
    highlightRows=[...top3,sortedByValue[3],nextFund].filter(Boolean);
  } else {
    highlightRows=sortedByValue.slice(0,5);
  }
  highlightRows=highlightRows.slice(0,5);

  // Per-unique-investor type breakdown (12 categories for col1 template)
  const investorSourceTypeMap={};
  fl.forEach(d=>{if(!investorSourceTypeMap[d.investor])investorSourceTypeMap[d.investor]=d.sourceType});
  const invTypes={vcFirms:0,peFirms:0,hedgeFunds:0,wealthMgrs:0,multiFamilyOffices:0,
    dfis:0,foundations:0,accelerators:0,corporateInvestors:0,govtEntities:0,
    individualInvestors:0,otherInvestors:0};
  Object.values(investorSourceTypeMap).forEach(st=>{
    switch(st){
      case'VC/PE':invTypes.vcFirms++;break;
      case'DFI':invTypes.dfis++;break;
      case'Family Office':invTypes.multiFamilyOffices++;break;
      case'Foundation':invTypes.foundations++;break;
      case'Government':invTypes.govtEntities++;break;
      case'Corporate':invTypes.corporateInvestors++;break;
      default:invTypes.otherInvestors++;break;
    }
  });

  // Investor-to-investor (recipient is a fund) vs investor-to-business
  const i2iDeals=fl.filter(d=>d.recipientType==='fund');
  const i2bDeals=fl.filter(d=>d.recipientType!=='fund');
  const i2iCapital=i2iDeals.reduce((s,d)=>s+(d.amount||0),0);
  const i2bCapital=i2bDeals.reduce((s,d)=>s+(d.amount||0),0);

  // Investment subtypes (mapped from available fields)
  const totalInvestments=fl.filter(d=>d.dealType==='Investment').length;
  const vcInvestments=fl.filter(d=>d.dealType==='Investment'&&d.sourceType==='VC/PE').length;
  const peInvestments=fl.filter(d=>d.pe===true).length;
  const bonds=0;
  const blendedFinanceDeals=fl.filter(d=>d.dealType==='Partnership').length;

  // Round stages from enrichment data
  const roundDeals=fl.filter(d=>d.roundStage);
  const totalRounds=roundDeals.length;
  const roundStages={
    preSeed:roundDeals.filter(d=>d.roundStage==='pre-seed').length,
    seed:roundDeals.filter(d=>d.roundStage==='seed').length,
    seriesA:roundDeals.filter(d=>d.roundStage==='series-a').length,
    seriesB:roundDeals.filter(d=>d.roundStage==='series-b').length,
    seriesC:roundDeals.filter(d=>d.roundStage==='series-c').length,
    seriesD:roundDeals.filter(d=>d.roundStage==='series-d'||d.roundStage==='series-d+').length,
  };

  // Other deals
  const col1Loans=fl.filter(d=>d.dealType==='Loan').length;
  const col1Grants=fl.filter(d=>d.dealType==='Grant').length;
  const convertibleNotes=0,exits=0;
  const totalOther=col1Loans+col1Grants+convertibleNotes+exits;

  // Theme overlap analysis (uses d.subThemes[] if present; gracefully zeros when absent)
  let multiThemeDealCount=0,totalThemeInstances=fl.length;
  const themeCoOcc={};
  fl.forEach(d=>{
    const primary=SL[d.sector]||d.sector;
    const subs=Array.isArray(d.subThemes)?d.subThemes.map(s=>SL[s]||s).filter(t=>t&&t!==primary):[];
    if(subs.length>0){multiThemeDealCount++;totalThemeInstances+=subs.length;}
    const allT=[primary,...subs];
    for(let i=0;i<allT.length;i++){for(let j=i+1;j<allT.length;j++){
      const key=[allT[i],allT[j]].sort().join('|||');
      if(!themeCoOcc[key])themeCoOcc[key]={count:0,a:allT[i],b:allT[j],dealTypes:{}};
      themeCoOcc[key].count++;
      const dt=d.dealType||'deals';
      themeCoOcc[key].dealTypes[dt]=(themeCoOcc[key].dealTypes[dt]||0)+1;
    }}
  });
  const multiThemePct=fl.length>0?Math.round((multiThemeDealCount/fl.length)*100):0;
  const avgThemesPerDeal=fl.length>0?+(totalThemeInstances/fl.length).toFixed(1):1;
  // Sort co-occurrences; skip same-env-cluster pairs (Energy+Climate etc.)
  const _envCluster=new Set(['Energy','Climate','Circular Economy','Conservation','Agritech','Infrastructure']);
  const sortedCoOcc=Object.values(themeCoOcc).sort((a,b)=>b.count-a.count);
  const filteredOverlaps=[];
  for(const co of sortedCoOcc){
    if(_envCluster.has(co.a)&&_envCluster.has(co.b))continue; // skip same-cluster
    const topDT=Object.entries(co.dealTypes).sort((a,b)=>b[1]-a[1])[0]?.[0]||'investments';
    filteredOverlaps.push({a:co.a,b:co.b,count:co.count,dealType:topDT.toLowerCase()});
    if(filteredOverlaps.length>=5)break;
  }
  // Ensure second overlap doesn't share BOTH themes with first
  const validOverlaps=[];
  if(filteredOverlaps.length>0){
    validOverlaps.push(filteredOverlaps[0]);
    const{a:oa,b:ob}=filteredOverlaps[0];
    for(let i=1;i<filteredOverlaps.length;i++){
      const{a,b}=filteredOverlaps[i];
      if(!((a===oa||a===ob)&&(b===oa||b===ob))){validOverlaps.push(filteredOverlaps[i]);break;}
    }
  }

  const continentCounts={};fl.forEach(d=>{if(d.continent)continentCounts[d.continent]=(continentCounts[d.continent]||0)+1});
  const continentsSorted=Object.entries(continentCounts).sort((a,b)=>b[1]-a[1]);

  // ── Column 3 geography stats (per column-3-geography-spec) ──────────
  // Capital by geography (for "% of capital tracked" shares)
  const cityCapital={},countryCapital={},continentCapital={};
  fl.forEach(d=>{const a=d.amount||0;
    cityCapital[d.city]=(cityCapital[d.city]||0)+a;
    countryCapital[d.country]=(countryCapital[d.country]||0)+a;
    if(d.continent)continentCapital[d.continent]=(continentCapital[d.continent]||0)+a;});
  // Capital-% is usable only if disclosed amounts cover ≥60% of deals (else fall back to counts)
  const disclosedCount=fl.filter(d=>(d.amount||0)>0).length;
  const capitalDisclosed=fl.length?(disclosedCount/fl.length)>=0.6:false;

  // Cross-border: heuristic by investor name/type (directional country-pair flows require
  // investor-location data we don't carry yet — investorLocationKnown gates the flow block).
  const _xbRe=/\b(IFC|IDB Invest|IDB|JICA|AIIB|CAF|EBRD|BII|CDC|Proparco|FMO|Norfund|DEG|DFC|EIB|World Bank|Finnfund|Swedfund|BIO|responsAbility|Blue\s?Orchard)\b/i;
  const isXB=d=>d.sourceType==='DFI'||_xbRe.test(d.investor||'');
  const xbDeals=fl.filter(isXB),domDeals=fl.filter(d=>!isXB(d));
  const xbCapital=xbDeals.reduce((s,d)=>s+(d.amount||0),0);
  const xbDealPct=fl.length?Math.round(100*xbDeals.length/fl.length):0;
  const xbCapPct=totalCapital?Math.round(100*xbCapital/totalCapital):0;
  const investorLocationKnown=fl.some(d=>d.investorCountry); // false today → flow block omitted

  // Mode selector — footprint measured on recipient side (investor side unknown)
  const _topCity=citiesSorted[0],_topCountry=countriesSorted[0];
  const cityFoot=_topCity?_topCity[1]/fl.length:0;
  const countryFoot=_topCountry?_topCountry[1]/fl.length:0;
  let geoMode='distributed',geoSub=null;
  if(cityFoot>=0.65){geoMode='focused-city';geoSub=cityFoot>=0.95?'mono':'dominant';}
  else if(countryFoot>=0.75){geoMode='focused-country';geoSub=countryFoot>=0.95?'mono':'dominant';}

  return{totalCapital,totalDeals:fl.length,allInst,investorSet,recipientSet,investorCats,dealSubtypes,investments,fundraises,themesSorted,socialThemeCount,envThemeCount,citiesSorted,countriesSorted,continents,continentsSorted,cityCountry,countryMetros,crossBorderPct,highlightRows,invTypes,i2iDeals,i2bDeals,i2iCapital,i2bCapital,totalInvestments,vcInvestments,peInvestments,bonds,blendedFinanceDeals,totalRounds,roundStages,col1Loans,col1Grants,convertibleNotes,exits,totalOther,multiThemePct,avgThemesPerDeal,validOverlaps,
    cityCapital,countryCapital,continentCapital,capitalDisclosed,xbDeals,domDeals,xbCapital,xbDealPct,xbCapPct,investorLocationKnown,geoMode,geoSub};
}

function joinList(arr){if(!arr.length)return'';if(arr.length===1)return arr[0];if(arr.length===2)return arr[0]+' and '+arr[1];return arr.slice(0,-1).join(', ')+', and '+arr[arr.length-1]}

function buildCol1(stats){
  const{investorSet,recipientSet,countriesSorted,invTypes,
        i2iDeals,i2bDeals,i2iCapital,i2bCapital,
        totalInvestments,vcInvestments,peInvestments,bonds,blendedFinanceDeals,
        totalRounds,roundStages,col1Loans,col1Grants,convertibleNotes,exits,totalOther,totalDeals}=stats;
  const nInv=investorSet.size,nRec=recipientSet.size,nCtry=countriesSorted.length;

  // ── Opening line ─────────────────────────────────────────────
  const openLine=nCtry>=2
    ?`—across **${nInv} investors** in ${nCtry} countries and **${nRec} organizations** in ${nCtry} countries.`
    :`—across **${nInv} investors** and **${nRec} organizations**.`;

  // ── Investor types paragraph (5 collapse levels) ─────────────
  const buildInvPara=(level)=>{
    const t=invTypes;
    if(level>=4)return`**${nInv} investors** across ${Object.values(t).filter(n=>n>0).length} institution types.`;
    let cats;
    if(level===0)cats=[[t.vcFirms,'venture capital firms'],[t.peFirms,'private equity firms'],[t.hedgeFunds,'hedge funds'],[t.wealthMgrs,'wealth & asset managers'],[t.multiFamilyOffices,'multi-family offices'],[t.dfis,'development finance institutions'],[t.foundations,'foundations'],[t.accelerators,'accelerators'],[t.corporateInvestors,'corporate investors'],[t.govtEntities,'government & public sector entities'],[t.individualInvestors,'individual investors'],[t.otherInvestors,'other']];
    else if(level===1){const oth=t.accelerators+t.corporateInvestors+t.otherInvestors;cats=[[t.vcFirms,'venture capital firms'],[t.peFirms,'private equity firms'],[t.hedgeFunds,'hedge funds'],[t.wealthMgrs,'wealth & asset managers'],[t.multiFamilyOffices,'multi-family offices'],[t.dfis,'development finance institutions'],[t.foundations,'foundations'],[t.govtEntities,'government & public sector entities'],[t.individualInvestors,'individual investors'],[oth,'other investors']];}
    else if(level===2){const oth=t.accelerators+t.corporateInvestors+t.otherInvestors+t.govtEntities+t.individualInvestors;cats=[[t.vcFirms,'venture capital firms'],[t.peFirms,'private equity firms'],[t.hedgeFunds,'hedge funds'],[t.wealthMgrs,'wealth & asset managers'],[t.multiFamilyOffices,'multi-family offices'],[t.dfis,'development finance institutions'],[t.foundations,'foundations'],[oth,'other investors']];}
    else{const df=t.vcFirms+t.peFirms+t.hedgeFunds+t.wealthMgrs+t.multiFamilyOffices;const oth=t.accelerators+t.corporateInvestors+t.otherInvestors+t.govtEntities+t.individualInvestors;cats=[[df,'dedicated funds'],[t.dfis,'development finance institutions'],[t.foundations,'foundations'],[oth,'other investors']];}
    const active=cats.filter(([n])=>n>0);
    if(!active.length)return'';
    return`**Investors** include ${joinList(active.map(([n,l])=>`${n} ${l}`))}.`;
  };

  // ── Flow paragraph ───────────────────────────────────────────
  const buildFlow=()=>{
    const parts=[];
    if(i2iDeals.length>0)parts.push(`${i2iDeals.length} deals (${fmtStatCard(i2iCapital)}) flow from **investor to investor**.`);
    if(i2bDeals.length>0)parts.push(`${i2bDeals.length} deals (${fmtStatCard(i2bCapital)}) flow directly from **investors to businesses**.`);
    return parts.join(' ');
  };

  // ── Investments bullet (4 levels) ────────────────────────────
  const buildInvBullet=(level)=>{
    if(totalInvestments===0)return'';
    if(level>=3)return`**${totalInvestments} investments**`;
    const vc=vcInvestments,pe=peInvestments,b=bonds,bf=blendedFinanceDeals;
    let subs;
    if(level===0)subs=[[vc,'venture capital'],[pe,'private equity'],[b,'bonds'],[bf,'blended finance deployments']];
    else if(level===1){const bb=b+bf;subs=[[vc,'venture capital'],[pe,'private equity'],[bb,'bonds & blended deals']];}
    else{const eq=vc+pe,bb=b+bf;subs=[[eq,'equity deals'],[bb,'bonds & blended deals']];}
    const active=subs.filter(([n])=>n>0);
    return active.length?`**${totalInvestments} investments** including ${joinList(active.map(([n,l])=>`${n} ${l}`))}`:
      `**${totalInvestments} investments**`;
  };

  // ── Rounds bullet (5 levels) ─────────────────────────────────
  const buildRoundsBullet=(level)=>{
    if(totalRounds===0)return'';
    if(level>=4)return`**${totalRounds} rounds of capital raised** by companies`;
    const{preSeed,seed,seriesA,seriesB,seriesC,seriesD}=roundStages;
    let stages;
    if(level===0)stages=[[preSeed,'pre-seed'],[seed,'seed'],[seriesA,'Series A'],[seriesB,'Series B'],[seriesC,'Series C'],[seriesD,'Series D+']];
    else if(level===1)stages=[[preSeed,'pre-seed'],[seed,'seed'],[seriesA,'Series A'],[seriesB,'Series B'],[seriesC+seriesD,'Series C+']];
    else if(level===2)stages=[[preSeed,'pre-seed'],[seed,'seed'],[seriesA,'Series A'],[seriesB+seriesC+seriesD,'Series B+']];
    else stages=[[preSeed+seed,'seed'],[seriesA,'Series A'],[seriesB+seriesC+seriesD,'Series B+']];
    const active=stages.filter(([n])=>n>0);
    return active.length
      ?`**${totalRounds} rounds of capital raised** by companies — ${joinList(active.map(([n,l])=>`${n} ${l}`))}`
      :`**${totalRounds} rounds of capital raised** by companies`;
  };

  // ── Other deals bullet (4 levels) ────────────────────────────
  const buildOtherBullet=(level)=>{
    if(totalOther===0)return'';
    if(level>=3)return`**${totalOther} other deals**`;
    const fl2=0,lo=col1Loans,gr=col1Grants,cn=convertibleNotes,ex=exits;
    let subs;
    if(level===0)subs=[[fl2,'fund launches'],[lo,'loans'],[gr,'grants'],[cn,'convertible notes'],[ex,'exits']];
    else if(level===1){const ln=lo+cn;subs=[[fl2,'fund launches'],[ln,'loans & notes'],[gr,'grants'],[ex,'exits']];}
    else{const fa=fl2+ex;const ln=lo+cn;subs=[[fa,'fund activity'],[ln,'loans & notes'],[gr,'grants']];}
    const active=subs.filter(([n])=>n>0);
    return active.length?`**${totalOther} other deals** including ${joinList(active.map(([n,l])=>`${n} ${l}`))}`:
      `**${totalOther} other deals**`;
  };

  // ── Assembly with progressive truncation ─────────────────────
  // Each config: [invParaLevel, includeFlow, invBulletLevel, roundsLevel, otherLevel]
  // Applied one rule at a time per spec order
  const configs=[
    [0,true, 0,0,0],[0,true, 0,1,0],[0,true, 0,2,0],[0,true, 0,3,0],[0,true, 0,4,0],
    [0,true, 1,4,0],[0,true, 2,4,0],[0,true, 3,4,0],
    [0,true, 3,4,1],[0,true, 3,4,2],[0,true, 3,4,3],
    [0,false,3,4,3],
    [1,false,3,4,3],[2,false,3,4,3],[3,false,3,4,3],[4,false,3,4,3],
  ];
  const assemble=([ipl,fp,ibl,rbl,obl])=>{
    let t=openLine;
    const ip=buildInvPara(ipl);if(ip)t+='\n\n'+ip;
    if(fp){const f=buildFlow();if(f)t+='\n\n'+f;}
    const bullets=[buildInvBullet(ibl),buildRoundsBullet(rbl),buildOtherBullet(obl)].filter(Boolean);
    if(bullets.length)t+='\n\nDeals include:\n• '+bullets.join('\n• ');
    return t;
  };
  for(const cfg of configs){
    const t=assemble(cfg);
    const plain=t.replace(/\*\*/g,'');
    if(plain.length<=850&&estimateColHeight(t,310,19,12)<=476)return t;
  }
  return`**${totalDeals} deals** mapped across multiple investment types.`;
}

function buildCol2(stats){
  const{themesSorted,socialThemeCount,envThemeCount,totalDeals,
        multiThemePct,avgThemesPerDeal,validOverlaps}=stats;

  // ── Opener (conditional on social/env mix) ───────────────────
  // Mixed: no trailing "themes." — just the numbers. Pure social/env keep "themes."
  const opener=socialThemeCount>0&&envThemeCount>0
    ?`—**${socialThemeCount} social** and **${envThemeCount} environmental**.`
    :socialThemeCount>0?`—across **${socialThemeCount} social** themes.`
    :`—across **${envThemeCount} environmental** themes.`;

  const reach=socialThemeCount>0&&envThemeCount>0?'communities and ecosystems':
    socialThemeCount>0?'communities':'ecosystems';

  // ── Theme list (topN themes with optional deal counts) ────────
  const buildThemeList=(topN,withCounts)=>{
    if(topN===0)return`Capital is reaching ${reach} through **${themesSorted.length} themes**.`;
    const top=themesSorted.slice(0,topN),rest=themesSorted.slice(topN);
    const restDeals=rest.reduce((s,[,n])=>s+n,0);
    const items=withCounts
      ?top.map(([name,n])=>`**${name}** (${n} deal${n!==1?'s':''})`)
      :top.map(([name])=>`**${name}**`);
    let s=`Capital is reaching ${reach} through ${joinList(items)}`;
    if(rest.length>0)s+=` — and ${rest.length} other theme${rest.length!==1?'s':''} (${restDeals} deal${restDeals!==1?'s':''})`;
    return s+'.';
  };

  // ── Most active theme sentence ────────────────────────────────
  const buildActive=()=>{
    if(!themesSorted.length)return'';
    const[top,topN]=themesSorted[0];
    const pct=Math.round((topN/totalDeals)*100);
    return`The most active theme, **${top}**, represents **${pct}%** of all deals in this report.`;
  };

  // ── Overlap paragraph ─────────────────────────────────────────
  const condSentence=multiThemePct>=60?'reflecting a highly interconnected impact landscape where solutions rarely fit a single category.':
    multiThemePct>=30?'showing a mix of focused and cross-cutting approaches to impact.':
    multiThemePct>=10?'indicating capital mostly targeting distinct, specialized challenges.':
    'indicating capital largely targeting distinct, specialized challenges.';

  const buildOverlap=(withSecond)=>{
    if(!multiThemePct||!validOverlaps.length)return'';
    const o1=validOverlaps[0];
    let s=`**${multiThemePct}%** of deals span multiple themes, averaging ${avgThemesPerDeal} themes per deal. The most common overlap is between **${o1.a}** and **${o1.b}**, appearing together in ${o1.count} deal${o1.count!==1?'s':''} — ${condSentence}`;
    if(withSecond&&validOverlaps.length>1){
      const o2=validOverlaps[1];
      s+=` Another notable overlap is between **${o2.a}** and **${o2.b}**, appearing together in ${o2.count} deal${o2.count!==1?'s':''}, mostly in ${o2.dealType}.`;
    }
    return s;
  };

  // ── Progressive truncation (8 levels per spec) ───────────────
  // [topN, withCounts, includeActive, includeOverlap, withSecondOverlap]
  const configs=[
    [5,true, true, true, true],   // full
    [5,true, true, true, false],  // 1: drop second overlap sentence
    [5,true, true, false,false],  // 2: drop overlap paragraph
    [5,true, false,false,false],  // 3: drop most active theme
    [3,true, false,false,false],  // 4: 3 themes with counts
    [3,false,false,false,false],  // 5: 3 themes names only
    [2,false,false,false,false],  // 6: 2 themes names only
    [0,false,false,false,false],  // 7: "through XX themes" only
    [-1,false,false,false,false], // 8: opener only → "—across XX themes"
  ];

  const assemble=([topN,wc,act,ovr,sec2])=>{
    if(topN===-1)return`—across **${themesSorted.length} themes**.`;
    let t=opener;
    t+='\n\n'+buildThemeList(topN,wc);
    if(act){const a=buildActive();if(a)t+='\n\n'+a;}
    if(ovr){const o=buildOverlap(sec2);if(o)t+='\n\n'+o;}
    return t;
  };

  for(const cfg of configs){
    const t=assemble(cfg);
    const plain=t.replace(/\*\*/g,'');
    if(plain.length<=850&&estimateColHeight(t,310,19,12)<=476)return t;
  }
  return`—across **${themesSorted.length} themes**.`;
}

// ── COLUMN 3 — GEOGRAPHY (per column-3-geography-spec.md) ──────────────
// Dispatcher: pick mode from the deal footprint, then run its builder.
// "Regions" are mapped to continents in this demo dataset. Directional
// cross-border content (flow block / reach / inbound-outbound buckets)
// is gated on investorLocationKnown and omits until investor-location
// data is added to the deals.
const COL3_W=310,COL3_LH=19,COL3_PARA=12,COL3_MAXH=476;
function col3Fits(t){return estimateColHeight(t,COL3_W,COL3_LH,COL3_PARA)<=COL3_MAXH;}

function buildCol3(stats){
  if(stats.geoMode==='focused-city')return buildCol3FocusedCity(stats);
  if(stats.geoMode==='focused-country')return buildCol3FocusedCountry(stats);
  return buildCol3Distributed(stats);
}

function buildCol3Distributed(stats){
  const{citiesSorted,countriesSorted,continentsSorted,cityCountry,countryMetros,
        totalCapital,cityCapital,continentCapital,capitalDisclosed,
        xbDeals,xbDealPct,xbCapPct}=stats;
  const nCountries=countriesSorted.length;

  // ── Opener — countries + regions(=continents) ────────────────
  const nRegions=continentsSorted.length;
  let opener=`—across **${nCountries} countr${nCountries!==1?'ies':'y'}**`;
  if(nRegions>=2)opener+=` and **${nRegions} regions**`;
  else if(nRegions===1)opener+=` in **${continentsSorted[0][0]}**`;
  opener+='.';

  // ── Domestic / cross-border headline ─────────────────────────
  const useCap=capitalDisclosed;
  const xbPct=useCap?xbCapPct:xbDealPct,domPct=100-xbPct;
  const xbCond=xbPct>=50?'showing a global dynamic in the impact capital tracked.':
    xbPct>=20?'reflecting a mix of domestic deployment and international reach.':
    'with the majority of capital staying close to home.';
  const headline=(withCond)=>{
    if(xbDeals.length===0)return'All mapped deals are domestic (none cross-border).';
    let s=useCap
      ?`${domPct}% of capital tracked is from domestic deals, while ${xbPct}% crosses borders`
      :`${domPct}% of deals are domestic, while ${xbPct}% cross borders`;
    return s+(withCond?` — ${xbCond}`:'.');
  };

  // ── Metro concentration block (top N cities + share conditional) ──
  const metroBlock=(n,withCond)=>{
    const tops=citiesSorted.slice(0,n);if(!tops.length)return'';
    const[c1,k1]=tops[0];
    let s=`The largest concentration of activity is in **${c1}** (${cityCountry[c1]}), tied to **${k1} deal${k1!==1?'s':''}**`;
    const overflow=citiesSorted.length-tops.length;
    // "and" rule: with overflow ≥2, named items are comma-separated and the lone
    // "and" precedes the overflow clause; with overflow ==1, name that city instead.
    let rest=tops.slice(1).map(([c,k])=>`**${c}** (${cityCountry[c]}, ${k} deals)`);
    if(overflow===1){const[ce,ke]=citiesSorted[tops.length];rest=rest.concat(`**${ce}** (${cityCountry[ce]}, ${ke} deals)`);}
    if(rest.length){
      s+=overflow>=2?`, followed by ${rest.join(', ')}, and ${overflow} other cities`:`, followed by ${joinList(rest)}`;
    } else if(overflow>=2){
      s+=`, and ${overflow} other cities`;
    }
    s+='.';
    const listedCap=tops.reduce((a,[c])=>a+(cityCapital[c]||0),0);
    const S=totalCapital?Math.round(100*listedCap/totalCapital):0;
    const hi=n===1?40:n===2?55:70,lo=n===1?20:n===2?35:40;
    const conc=S>=hi?'showing high geographic concentration.':S<lo?'with activity spread across numerous metro areas.':'showing moderate clustering around key hubs.';
    s+=` ${n===1?'This metro area is':'These metro areas are'} tied to **${S}%** of capital tracked`;
    return s+(withCond?` — ${conc}`:'.');
  };

  // ── By-country block (top N) ─────────────────────────────────
  const byCountry=(n)=>{
    const tops=countriesSorted.slice(0,n);if(!tops.length)return'';
    const[co1,k1]=tops[0];const m1=(countryMetros[co1]||new Set()).size;
    let s=`By country, **${co1}** leads with **${k1} deals** across **${m1} metro area${m1!==1?'s':''}**`;
    if(tops.length>=2){
      const rest=tops.slice(1).map(([co,k])=>{const m=(countryMetros[co]||new Set()).size;return `**${co}** (${k} deals, ${m} metro${m!==1?'s':''})`;});
      s+=`, followed by ${joinList(rest)}`;
    }
    return s+'.';
  };

  // ── By-region conditional (continents, capital-share weighted) ──
  const byRegion=()=>{
    const byCap=[...continentsSorted].sort((a,b)=>(continentCapital[b[0]]||0)-(continentCapital[a[0]]||0));
    if(!byCap.length)return'';
    const share=c=>totalCapital?Math.round(100*(continentCapital[c]||0)/totalCapital):0;
    const nR=byCap.length,s1=share(byCap[0][0]);
    if(nR===1)return`All activity falls within ${byCap[0][0]}.`;
    if(nR===2)return`${byCap[0][0]} is tied to ${share(byCap[0][0])}% of capital tracked; ${byCap[1][0]} holds the remaining ${share(byCap[1][0])}%.`;
    if(s1>=70){let s=`Regionally, ${byCap[0][0]} dominates — tied to ${s1}% of capital tracked`;if(byCap[1])s+=`, followed distantly by ${byCap[1][0]} at ${share(byCap[1][0])}%`;return s+'.';}
    return`By region, ${byCap[0][0]} is tied to ${share(byCap[0][0])}% of capital tracked, followed by ${byCap[1][0]} (${share(byCap[1][0])}%) and ${byCap[2][0]} (${share(byCap[2][0])}%).`;
  };

  // ── Assembly + truncation ladder (spec: 9 steps; flow steps no-op
  //    until investorLocationKnown) ───────────────────────────────
  const assemble=(o)=>{
    let t=opener+'\n\n'+headline(o.cond);
    if(o.metroN>0){const m=metroBlock(o.metroN,o.cond);if(m)t+='\n\n'+m;}
    if(o.countryN>0){const c=byCountry(o.countryN);if(c)t+='\n\n'+c;}
    if(o.region){const r=byRegion();if(r)t+='\n\n'+r;}
    // flow block inserted here once investorLocationKnown — omitted today
    return t;
  };
  const ladder=[
    {metroN:5,countryN:3,region:true, cond:true },  // full
    {metroN:5,countryN:3,region:false,cond:true },  // 1: drop by-region
    {metroN:5,countryN:3,region:false,cond:false},  // 2: drop interpretive conditionals
    {metroN:3,countryN:3,region:false,cond:false},  // 5a: metros 5→3
    {metroN:1,countryN:3,region:false,cond:false},  // 5b: metros 3→1
    {metroN:1,countryN:1,region:false,cond:false},  // 7: by-country →1
    {metroN:1,countryN:0,region:false,cond:false},  // 8: drop by-country
    {metroN:0,countryN:0,region:false,cond:false},  // 9: drop metro block (spine)
  ];
  for(const cfg of ladder){const t=assemble(cfg);if(col3Fits(t))return t;}
  return assemble(ladder[ladder.length-1]); // spine: opener + headline
}

// Focused modes: openers + concentration are computable from recipient data;
// domestic/cross-border directional content is gated on investorLocationKnown
// and omitted until investor-location data is added.
function buildCol3FocusedCountry(stats){
  const{geoSub,countriesSorted,citiesSorted,cityCountry,
        totalCapital,countryCapital}=stats;
  const[country,kCountry]=countriesSorted[0];
  const cap=v=>totalCapital?Math.round(100*v/totalCapital):0;
  // cities within the focus country
  const inCountry=citiesSorted.filter(([c])=>cityCountry[c]===country);
  const cityNames=inCountry.map(([c])=>c);

  let t;
  if(geoSub==='mono'){
    let spread;
    if(cityNames.length<=1)spread=`concentrated in ${cityNames[0]||country}`;
    else if(cityNames.length===2)spread=`split between ${cityNames[0]} and ${cityNames[1]}`;
    else{const named=cityNames.slice(0,3);const extra=cityNames.length-3;spread=`dispersed across ${joinList(named)}`+(extra>=1?`, and ${extra} other ${extra===1?'city':'cities'}`:'');}
    t=`—in **${country}**, with activity ${spread}.`;
  }else{
    t=`—across **${countriesSorted.length} countries**, with activity concentrated in **${country}**.`;
    // share line (dominant only)
    const rest=countriesSorted.slice(1,4).map(([co])=>co);
    const extra=countriesSorted.length-1-rest.length;
    let share=`**${country}** represents **${cap(countryCapital[country]||0)}% of capital tracked**`;
    if(rest.length)share+=`, with the remainder in ${joinList(rest)}`+(extra>=1?`, and ${extra} other ${extra===1?'location':'locations'}`:'');
    t+='\n\n'+share+'.';
  }

  // Concentration sentence (computable; replaces the gated domestic/cross-border block)
  if(inCountry.length>=1){
    const tops=inCountry.slice(0,3);
    const named=tops.map(([c,k])=>`**${c}** (${k} deals)`);
    t+=`\n\nWithin **${country}**, activity centers on ${joinList(named)}.`;
  }
  return t;
}

function buildCol3FocusedCity(stats){
  const{geoSub,citiesSorted,cityCountry,countryCapital,countryMetros,
        totalCapital,cityCapital,countriesSorted}=stats;
  const[city,kCity]=citiesSorted[0];
  const country=cityCountry[city];
  const cap=v=>totalCapital?Math.round(100*v/totalCapital):0;

  let t;
  if(geoSub==='mono'){
    t=`—in **${city}**, **${country}**.`;
  }else{
    t=`—in **${city}**, **${country}** — tied to **${kCity} deals** (**${cap(cityCapital[city]||0)}% of capital tracked**)`;
    const rest=citiesSorted.slice(1,4).map(([c,k])=>`**${c}** (${k} deals)`);
    const extra=citiesSorted.length-1-Math.min(3,citiesSorted.length-1);
    if(rest.length)t+=`, with the remainder in ${joinList(rest)}`+(extra>=1?`, and ${extra} other ${extra===1?'location':'locations'}`:'');
    t+='.';
    // country-context (dominant only)
    const cCap=countryCapital[country]||0;
    if(cCap>0)t+=`\n\n**${city}** accounts for **${totalCapital?Math.round(100*(cityCapital[city]||0)/cCap):0}%** of capital tracked in ${country} in this report.`;
  }
  return t;
}

// Rasterize SVG string to PNG data URL at 2x for sharpness
function rasterizeSvgR(svgStr,w,h){return new Promise(res=>{const blob=new Blob([svgStr],{type:'image/svg+xml'});const burl=URL.createObjectURL(blob);const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=w*2;c.height=h*2;const ctx=c.getContext('2d');ctx.scale(2,2);ctx.drawImage(img,0,0,w,h);URL.revokeObjectURL(burl);res(c.toDataURL('image/png'))};img.onerror=()=>{URL.revokeObjectURL(burl);res('')};img.src=burl})}

// Two-pass logo rasterizer:
// Pass 1 — render SVG into an explicit 3000×3000 canvas (forces browser to use that size,
//           bypassing naturalWidth uncertainty with complex SVGs).
// Pass 2 — crop the logo region (SVG coords 0,153 → 1500,920 out of 1500-unit space)
//           and scale to output size.
function rasterizeLogoSvg(svgStr){
  return new Promise(res=>{
    const blob=new Blob([svgStr],{type:'image/svg+xml'});
    const burl=URL.createObjectURL(blob);
    const img=new Image();
    img.onload=()=>{
      // Pass 1: render at 3000×3000
      const FULL=3000;
      const c1=document.createElement('canvas');c1.width=FULL;c1.height=FULL;
      const ctx1=c1.getContext('2d');
      ctx1.drawImage(img,0,0,FULL,FULL);
      URL.revokeObjectURL(burl);
      // Pass 2: crop logo region
      // SVG coord space is 1500×1500. Logo content: y=153 to y≈920, full width.
      // cropY in canvas pixels: 153/1500 * FULL
      // cropH chosen for frame ratio 220.5/113 ≈ 1.951
      const cropX=0;
      const cropY=Math.round(FULL*153/1500);
      const cropW=FULL;
      const cropH=Math.round(cropW/1.951);
      const outW=441,outH=226; // 2× output for sharpness
      const c2=document.createElement('canvas');c2.width=outW;c2.height=outH;
      const ctx2=c2.getContext('2d');
      ctx2.drawImage(c1,cropX,cropY,cropW,cropH,0,0,outW,outH);
      res(c2.toDataURL('image/png'));
    };
    img.onerror=()=>{URL.revokeObjectURL(burl);res('')};
    img.src=burl;
  });
}

// Draw a left→right gradient bar using thin rect slices (jsPDF has no native gradient)
function drawGradBar(doc,x,y,w,h){
  const steps=30,sw=w/steps;
  const r1=0x32,g1=0x52,b1=0x30,r2=0x28,g2=0x4c,b2=0x66;
  for(let i=0;i<steps;i++){
    const t=i/(steps-1);
    doc.setFillColor(Math.round(r1+(r2-r1)*t),Math.round(g1+(g2-g1)*t),Math.round(b1+(b2-b1)*t));
    doc.rect(x+i*sw,y,sw+0.5,h,'F');
  }
}

function drawRule(doc,x,y,w,r=0xBB,g=0xCB,bd=0xBD){doc.setDrawColor(r,g,bd);doc.setLineWidth(0.5);doc.line(x,y,x+w,y)}

// Figma→jsPDF baseline conversion.
// Figma Y = top of bounding box; jsPDF Y = text baseline.
// baseline = figmaY + ascent_ratio × fontSize
// Measured ascent ratios (gap_above_caps + cap_height):
//   OpenSauceOne: 0.958  (gap≈0.238 + cap_height≈0.72)
//   Roboto: 0.935 | Poppins: 0.940 | Playfair: 0.940
const ASCENT={OpenSauceOne:0.958,Roboto:0.935,Poppins:0.940,Playfair:0.940};
function figmaBaseline(figmaY,size,font){return figmaY+(ASCENT[font]||0.93)*size;}

// Estimate rendered column height without a jsPDF doc — used by build functions
// to check height constraint before rendering. Approximates Roboto Light 16pt + charSpace 0.8.
function estimateColHeight(text,colW,lineH,paraH){
  const avgCW=8.0; // ≈ 0.45*16 + 0.8 charSpace per char
  const cpl=Math.floor(colW/avgCW);
  const cplBullet=Math.floor((colW-20)/avgCW);
  let h=0;
  for(const p of text.replace(/\*\*/g,'').split('\n')){
    if(!p.trim()){h+=paraH;continue;}
    if(p.startsWith('• ')){h+=paraH;h+=Math.max(1,Math.ceil(p.slice(2).length/cplBullet))*lineH;}
    else{h+=Math.max(1,Math.ceil(p.length/cpl))*lineH;}
  }
  return h;
}

// Wrapper for col1: renders text with hanging-indent bullets (• lines) and returns final Y.
// Non-bullet paragraphs fall through to renderRich line-by-line.
function renderCol1Bullets(doc,text,x,y,maxW,fontSize,lineH,paraH,maxY,colorR,colorG,colorB,indent){
  indent=indent??20;paraH=paraH??lineH;
  colorR=colorR??0;colorG=colorG??0;colorB=colorB??0;
  const paragraphs=text.split('\n');
  let curY=y;
  const meas=(txt,bold)=>{doc.setFont('Roboto',bold?'medium':'light');return doc.getStringUnitWidth(txt)*fontSize};
  for(const para of paragraphs){
    if(curY>maxY)return;
    if(para.startsWith('• ')){
      const content=para.slice(2);
      // Draw bullet at x, text starts at x+indent
      doc.setFont('Roboto','light');doc.setFontSize(fontSize);
      doc.setTextColor(colorR,colorG,colorB);
      curY+=paraH; // 12pt gap above each bullet
      doc.text('•',x+5,curY);
      // Word-wrap the bullet content at x+indent, width maxW-indent
      const tokens=[];let rem=content;
      while(rem.length){
        const bm=rem.match(/^\*\*(.+?)\*\*/);
        if(bm){tokens.push({t:bm[1],b:true});rem=rem.slice(bm[0].length);continue}
        const ni=rem.indexOf('**');let end=ni>=0?ni:rem.length;
        tokens.push({t:rem.slice(0,end),b:false});rem=rem.slice(end);
      }
      let cx=x+indent,lineSegs=[];
      const flush=()=>{lineSegs.forEach(s=>{doc.setFont('Roboto',s.b?'medium':'light');doc.setTextColor(colorR,colorG,colorB);doc.text(s.t,s.x,curY)});lineSegs=[]};
      for(const tok of tokens){
        const words=tok.t.split(' ');
        for(let wi=0;wi<words.length;wi++){
          const w=words[wi];
          // preserve inter-token spaces (leading empty string from split)
          if(w===''){cx+=meas(' ',tok.b);continue;}
          const ws=w+((wi<words.length-1&&words[wi+1]!=='')?' ':''); // trailing space only if next word non-empty
          const ww=meas(ws,tok.b);
          if(cx+ww>x+maxW+2&&cx>x+indent){flush();curY+=lineH;cx=x+indent;if(curY>maxY)return}
          lineSegs.push({t:ws,b:tok.b,x:cx});cx+=ww;
        }
      }
      flush();curY+=lineH;
    } else {
      if(para.trim()){
        renderRich(doc,para,x,curY,maxW,fontSize,lineH,maxY,colorR,colorG,colorB,'Roboto','light','medium');
        doc.setFont('Roboto','light');doc.setFontSize(fontSize);
        const stripped=para.replace(/\*\*(.+?)\*\*/g,'$1');
        const wlines=doc.splitTextToSize(stripped,maxW);
        curY+=lineH*wlines.length;
      } else {
        curY+=paraH; // blank line = paragraph gap
      }
    }
  }
  return curY;
}

// Render text with inline **bold** markers, word-wrapping at maxWidth.
// font sizes are in pt; lineH is vertical advance per line.
// fontFamily/normalStyle/boldStyle let callers specify which font to use
function renderRich(doc,text,x,y,maxW,fontSize,lineH,maxY,colorR,colorG,colorB,fontFamily,normalStyle,boldStyle,paraH){
  colorR=colorR??0x11;colorG=colorG??0x1b;colorB=colorB??0x1e;
  fontFamily=fontFamily??'Roboto';normalStyle=normalStyle??'light';boldStyle=boldStyle??'medium';
  paraH=paraH??lineH; // advance for blank lines (paragraph breaks)
  doc.setFontSize(fontSize);
  const tokens=[];let rem=text;
  while(rem.length){
    const bm=rem.match(/^\*\*(.+?)\*\*/);
    if(bm){tokens.push({t:bm[1],b:true});rem=rem.slice(bm[0].length);continue}
    const ni=rem.indexOf('**');const newline=rem.indexOf('\n');
    let end=rem.length;
    if(ni>=0)end=Math.min(end,ni);
    if(newline>=0)end=Math.min(end,newline);
    if(end===0){tokens.push({nl:true});rem=rem.slice(1);}
    else{tokens.push({t:rem.slice(0,end),b:false});rem=rem.slice(end);}
  }
  const meas=(txt,bold)=>{doc.setFont(fontFamily,bold?boldStyle:normalStyle);return doc.getStringUnitWidth(txt)*fontSize};
  let curX=x,curY=y,lineSegs=[];
  const flush=()=>{lineSegs.forEach(s=>{doc.setFont(fontFamily,s.b?boldStyle:normalStyle);doc.setTextColor(colorR,colorG,colorB);doc.text(s.t,s.x,curY)});lineSegs=[]};
  for(const tok of tokens){
    if(tok.nl){flush();curY+=(curX===x?paraH:lineH);curX=x;if(curY>maxY)return;continue}
    const words=tok.t.split(' ');
    for(let wi=0;wi<words.length;wi++){
      const w=words[wi];if(w===''){curX+=meas(' ',tok.b);continue;} // advance cursor for inter-token spaces
      const ws=w+((wi<words.length-1&&words[wi+1]!=='')?' ':''); // trailing space only if next word non-empty (empty next = trailing space, handled by its own meas(' '))
      const ww=meas(ws,tok.b);
      if(curX+ww>x+maxW+2&&curX>x){flush();curY+=lineH;curX=x;if(curY>maxY)return}
      lineSegs.push({t:ws,b:tok.b,x:curX});curX+=ww;
    }
  }
  flush();
  return curY;
}

const LOGO_SVG=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2000" zoomAndPan="magnify" viewBox="0 0 1500 1499.999933" height="2000" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="e61daaafe7"><path d="M 4 0.878906 L 469 0.878906 L 469 734.320312 L 4 734.320312 Z M 4 0.878906 " clip-rule="nonzero"/></clipPath><clipPath id="867285d1ec"><rect x="0" width="465" y="0" height="735"/></clipPath><clipPath id="0a63b7d588"><path d="M 0.761719 226 L 537 226 L 537 604 L 0.761719 604 Z M 0.761719 226 " clip-rule="nonzero"/></clipPath><clipPath id="0c5aaf6c24"><rect x="0" width="537" y="0" height="378"/></clipPath><clipPath id="3fa17b8f1d"><path d="M 465 98 L 1433.320312 98 L 1433.320312 370 L 465 370 Z M 465 98 " clip-rule="nonzero"/></clipPath><clipPath id="eda9da026a"><rect x="0" width="969" y="0" height="272"/></clipPath><clipPath id="3a02509499"><rect x="0" width="584" y="0" height="241"/></clipPath><clipPath id="3d82b17a33"><rect x="0" width="1434" y="0" height="735"/></clipPath></defs><g transform="matrix(1, 0, 0, 1, 53, 386)"><g clip-path="url(#3d82b17a33)"><g clip-path="url(#e61daaafe7)"><g transform="matrix(1, 0, 0, 1, 4, 0.000000000000113687)"><g clip-path="url(#867285d1ec)"><g fill="#325230" fill-opacity="1"><g transform="translate(1.027971, 516.518747)"><g><path d="M 59.609375 -288.359375 C 59.609375 -244.296875 69.4375 -222.15625 89.09375 -221.9375 C 92.550781 -221.9375 97.953125 -225.175781 105.296875 -231.65625 C 117.609375 -240.726562 127.976562 -245.59375 136.40625 -246.25 C 150.226562 -246.25 157.789062 -239.660156 159.09375 -226.484375 C 159.738281 -217.628906 155.632812 -210.71875 146.78125 -205.75 C 142.238281 -203.363281 137.484375 -202.171875 132.515625 -202.171875 C 107.890625 -202.171875 90.070312 -204.007812 79.0625 -207.6875 C 52.0625 -216.539062 33.484375 -234.6875 23.328125 -262.125 C 18.796875 -274.863281 16.53125 -288.363281 16.53125 -302.625 C 16.53125 -343.664062 35.753906 -369.582031 74.203125 -380.375 C 86.078125 -383.832031 99.035156 -385.5625 113.078125 -385.5625 L 358.671875 -385.5625 C 382.429688 -385.5625 397.769531 -390.53125 404.6875 -400.46875 C 409.21875 -407.382812 411.484375 -417.753906 411.484375 -431.578125 L 425.09375 -431.578125 C 433.519531 -403.273438 433.410156 -384.640625 424.765625 -375.671875 C 416.128906 -366.710938 401.765625 -361.585938 381.671875 -360.296875 L 259.203125 -360.296875 L 259.203125 -67.71875 C 259.203125 -47.84375 260.601562 -34.9375 263.40625 -29 C 266.21875 -23.0625 272.8125 -19.007812 283.1875 -16.84375 L 301.96875 -13.28125 L 301.96875 0 L 176.265625 0 L 176.265625 -13.609375 L 198.609375 -18.46875 C 206.609375 -20.195312 211.578125 -22.679688 213.515625 -25.921875 C 215.242188 -29.585938 216.109375 -37.472656 216.109375 -49.578125 L 216.109375 -360.296875 L 109.1875 -360.296875 C 84.132812 -360.296875 68.472656 -345.390625 62.203125 -315.578125 C 60.472656 -307.148438 59.609375 -298.078125 59.609375 -288.359375 Z M 59.609375 -288.359375 "/></g></g></g></g></g></g><g clip-path="url(#0a63b7d588)"><g transform="matrix(1, 0, 0, 1, 0, 226)"><g clip-path="url(#0c5aaf6c24)"><g fill="#325230" fill-opacity="1"><g transform="translate(402.166551, 377.218841)"><g><path d="M -147.03125 -206.59375 L -147.03125 -365.96875 L -143.8125 -365.96875 C -143.8125 -357.019531 -140.679688 -349.414062 -134.421875 -343.15625 C -128.160156 -336.894531 -120.554688 -333.765625 -111.609375 -333.765625 L 0 -333.765625 C -3.9375 -327.328125 -7.15625 -320.351562 -9.65625 -312.84375 C -12.164062 -305.332031 -13.421875 -296.566406 -13.421875 -286.546875 C -13.421875 -273.671875 -12.34375 -262.3125 -10.1875 -252.46875 C -8.039062 -242.632812 -5.804688 -232.882812 -3.484375 -223.21875 C -1.160156 -213.5625 0 -202.65625 0 -190.5 C 0 -167.238281 -4.828125 -145.410156 -14.484375 -125.015625 C -24.148438 -104.628906 -37.65625 -86.65625 -55 -71.09375 C -72.351562 -55.539062 -92.382812 -43.378906 -115.09375 -34.609375 C -137.8125 -25.847656 -162.050781 -21.46875 -187.8125 -21.46875 C -213.570312 -21.46875 -237.804688 -25.847656 -260.515625 -34.609375 C -283.234375 -43.378906 -303.269531 -55.539062 -320.625 -71.09375 C -337.976562 -86.65625 -351.484375 -104.628906 -361.140625 -125.015625 C -370.796875 -145.410156 -375.625 -167.238281 -375.625 -190.5 C -375.625 -209.8125 -372.3125 -228.050781 -365.6875 -245.21875 C -359.070312 -262.394531 -350.578125 -277.691406 -340.203125 -291.109375 C -329.835938 -304.523438 -318.570312 -314.988281 -306.40625 -322.5 C -300.675781 -326.082031 -294.769531 -328.851562 -288.6875 -330.8125 C -282.613281 -332.78125 -276.710938 -333.765625 -270.984375 -333.765625 C -255.242188 -333.765625 -241.738281 -328.128906 -230.46875 -316.859375 C -219.207031 -305.597656 -213.578125 -292.097656 -213.578125 -276.359375 C -213.578125 -260.617188 -219.207031 -247.113281 -230.46875 -235.84375 C -241.738281 -224.570312 -255.242188 -218.9375 -270.984375 -218.9375 C -279.929688 -218.9375 -287.535156 -220.546875 -293.796875 -223.765625 C -300.054688 -226.984375 -305.597656 -230.648438 -310.421875 -234.765625 C -315.253906 -238.878906 -320.082031 -242.546875 -324.90625 -245.765625 C -329.738281 -248.984375 -335.375 -250.59375 -341.8125 -250.59375 C -350.40625 -250.59375 -356.9375 -246.835938 -361.40625 -239.328125 C -365.875 -231.816406 -368.820312 -223.320312 -370.25 -213.84375 C -371.6875 -204.363281 -372.40625 -196.582031 -372.40625 -190.5 C -372.40625 -177.976562 -364.085938 -166.441406 -347.453125 -155.890625 C -330.816406 -145.335938 -308.546875 -136.929688 -280.640625 -130.671875 C -252.742188 -124.410156 -221.800781 -121.28125 -187.8125 -121.28125 C -153.820312 -121.28125 -122.875 -124.410156 -94.96875 -130.671875 C -67.070312 -136.929688 -44.804688 -145.335938 -28.171875 -155.890625 C -11.535156 -166.441406 -3.21875 -177.976562 -3.21875 -190.5 C -3.21875 -196.582031 -3.929688 -204.539062 -5.359375 -214.375 C -6.796875 -224.207031 -9.835938 -232.523438 -14.484375 -239.328125 L -111.609375 -239.328125 C -120.554688 -239.328125 -128.160156 -236.195312 -134.421875 -229.9375 C -140.679688 -223.675781 -143.8125 -215.894531 -143.8125 -206.59375 Z M -147.03125 -206.59375 "/></g></g></g></g></g></g><g clip-path="url(#3fa17b8f1d)"><g transform="matrix(1, 0, 0, 1, 465, 98)"><g clip-path="url(#eda9da026a)"><g fill="#325230" fill-opacity="1"><g transform="translate(0.209442, 205.310039)"><g><path d="M 11.277344 -73.632812 C 11.277344 -27.863281 45.109375 2.875 87.121094 2.875 C 111.226562 2.875 131.347656 -7.296875 145.058594 -22.554688 L 145.058594 -75.84375 L 76.066406 -75.84375 L 76.066406 -59.480469 L 126.703125 -59.480469 L 126.703125 -29.410156 C 119.40625 -22.113281 104.8125 -13.488281 87.121094 -13.488281 C 54.839844 -13.488281 30.292969 -38.695312 30.292969 -73.632812 C 30.292969 -108.792969 54.839844 -133.558594 87.121094 -133.558594 C 104.8125 -133.558594 120.511719 -125.15625 129.800781 -113.214844 L 144.394531 -122.28125 C 131.347656 -138.421875 113.214844 -149.921875 87.121094 -149.921875 C 45.109375 -149.921875 11.277344 -119.40625 11.277344 -73.632812 Z M 11.277344 -73.632812 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(198.334404, 205.310039)"><g><path d="M 35.601562 0 L 35.601562 -147.488281 L 17.246094 -147.488281 L 17.246094 0 Z M 35.601562 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(291.651249, 205.310039)"><g><path d="M 84.027344 0 L 143.507812 -147.488281 L 122.503906 -147.488281 L 72.75 -20.121094 L 22.996094 -147.488281 L 1.988281 -147.488281 L 61.25 0 Z M 84.027344 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(477.614897, 205.310039)"><g><path d="M 35.601562 0 L 35.601562 -147.488281 L 17.246094 -147.488281 L 17.246094 0 Z M 35.601562 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(570.931741, 205.310039)"><g><path d="M 139.308594 0 L 139.308594 -147.488281 L 120.953125 -147.488281 L 120.953125 -30.957031 L 36.042969 -147.488281 L 17.246094 -147.488281 L 17.246094 0 L 35.601562 0 L 35.601562 -118.964844 L 121.617188 0 Z M 139.308594 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(767.951125, 205.310039)"><g><path d="M 11.277344 -73.632812 C 11.277344 -27.863281 45.109375 2.875 87.121094 2.875 C 111.226562 2.875 131.347656 -7.296875 145.058594 -22.554688 L 145.058594 -75.84375 L 76.066406 -75.84375 L 76.066406 -59.480469 L 126.703125 -59.480469 L 126.703125 -29.410156 C 119.40625 -22.113281 104.8125 -13.488281 87.121094 -13.488281 C 54.839844 -13.488281 30.292969 -38.695312 30.292969 -73.632812 C 30.292969 -108.792969 54.839844 -133.558594 87.121094 -133.558594 C 104.8125 -133.558594 120.511719 -125.15625 129.800781 -113.214844 L 144.394531 -122.28125 C 131.347656 -138.421875 113.214844 -149.921875 87.121094 -149.921875 C 45.109375 -149.921875 11.277344 -119.40625 11.277344 -73.632812 Z M 11.277344 -73.632812 "/></g></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 495, 333)"><g clip-path="url(#3a02509499)"><g fill="#325230" fill-opacity="1"><g transform="translate(0.273892, 180.603189)"><g><path d="M 71.539062 0 L 71.539062 -106.8125 L 109.769531 -106.8125 L 109.769531 -131.445312 L 4.925781 -131.445312 L 4.925781 -106.8125 L 43.355469 -106.8125 L 43.355469 0 Z M 71.539062 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(142.755566, 180.603189)"><g><path d="M 119.425781 0 L 89.863281 -50.054688 C 104.054688 -53.40625 118.636719 -65.820312 118.636719 -89.078125 C 118.636719 -113.511719 101.886719 -131.445312 74.492188 -131.445312 L 13.007812 -131.445312 L 13.007812 0 L 40.992188 0 L 40.992188 -47.101562 L 61.488281 -47.101562 L 87.304688 0 Z M 90.0625 -89.273438 C 90.0625 -78.238281 81.585938 -71.144531 70.355469 -71.144531 L 40.992188 -71.144531 L 40.992188 -107.402344 L 70.355469 -107.402344 C 81.585938 -107.402344 90.0625 -100.308594 90.0625 -89.273438 Z M 90.0625 -89.273438 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(297.258086, 180.603189)"><g><path d="M 106.023438 0 L 106.023438 -24.238281 L 40.992188 -24.238281 L 40.992188 -54.785156 L 104.644531 -54.785156 L 104.644531 -78.828125 L 40.992188 -78.828125 L 40.992188 -107.402344 L 106.023438 -107.402344 L 106.023438 -131.445312 L 13.007812 -131.445312 L 13.007812 0 Z M 106.023438 0 "/></g></g></g><g fill="#325230" fill-opacity="1"><g transform="translate(439.936838, 180.603189)"><g><path d="M 106.023438 0 L 106.023438 -24.238281 L 40.992188 -24.238281 L 40.992188 -54.785156 L 104.644531 -54.785156 L 104.644531 -78.828125 L 40.992188 -78.828125 L 40.992188 -107.402344 L 106.023438 -107.402344 L 106.023438 -131.445312 L 13.007812 -131.445312 L 13.007812 0 Z M 106.023438 0 "/></g></g></g></g></g></g></g></svg>`;

function loadFonts(){
  return new Promise((res,rej)=>{
    if(typeof GTFONT_POPPINS_REGULAR!=='undefined'){res();return}
    const s=document.createElement('script');s.src='givingtree-map-fonts.js';
    s.onload=res;s.onerror=()=>rej(new Error('Could not load font data. Please check your connection and try again.'));
    document.head.appendChild(s);
  });
}

async function generateReport(){
  const fl=getFiltered();
  if(!fl.length){alert('No deals match the current filters.');return}
  if(typeof window.jspdf==='undefined'){alert('PDF library not loaded. Please refresh and try again.');return}
  const btn=document.getElementById('gerarRelatorioBtn');
  if(btn){btn.textContent='Generating…';btn.disabled=true}
  try{await loadFonts()}catch(e){alert(e.message);if(btn){btn.textContent='Create report';btn.disabled=false}return}
  try{
    const{jsPDF}=window.jspdf;
    const doc=new jsPDF({unit:'pt',format:[1240,1754],compress:true,orientation:'portrait'});
    doc.setCharSpace(0);

    // ── REGISTER FONTS ───────────────────────────────────────
    const _rf=(vfs,name,style,data)=>{doc.addFileToVFS(vfs,data);doc.addFont(vfs,name,style)};
    _rf('PoppinsReg.ttf',    'Poppins','normal',         GTFONT_POPPINS_REGULAR);
    _rf('PoppinsMed.ttf',    'Poppins','medium',         GTFONT_POPPINS_MEDIUM);
    _rf('PoppinsSB.ttf',     'Poppins','semibold',       GTFONT_POPPINS_SEMIBOLD);
    _rf('PoppinsBold.ttf',   'Poppins','bold',           GTFONT_POPPINS_BOLD);
    _rf('PoppinsLight.ttf',  'Poppins','light',          GTFONT_POPPINS_LIGHT);
    _rf('PoppinsIt.ttf',     'Poppins','italic',         GTFONT_POPPINS_ITALIC);
    _rf('PoppinsBI.ttf',     'Poppins','bolditalic',     GTFONT_POPPINS_BOLDITALIC);
    _rf('PlayfairReg.ttf',   'Playfair','normal',        GTFONT_PLAYFAIR_REGULAR);
    _rf('PlayfairSB.ttf',    'Playfair','semibold',      GTFONT_PLAYFAIR_SEMIBOLD);
    _rf('PlayfairBold.ttf',  'Playfair','bold',          GTFONT_PLAYFAIR_BOLD);
    _rf('RobotoLight.ttf',   'Roboto','light',           GTFONT_ROBOTO_LIGHT);
    _rf('RobotoReg.ttf',     'Roboto','normal',          GTFONT_ROBOTO_REGULAR);
    _rf('RobotoMed.ttf',     'Roboto','medium',          GTFONT_ROBOTO_MEDIUM);
    _rf('RobotoSB.ttf',      'Roboto','semibold',        GTFONT_ROBOTO_SEMIBOLD);
    _rf('RobotoSBI.ttf',     'Roboto','semibolditalic',  GTFONT_ROBOTO_SEMIBOLDITALIC);
    _rf('OSOneMed.ttf',      'OpenSauceOne','medium',      GTFONT_OPENSAUCE_MEDIUM);
    _rf('OSOneSB.ttf',       'OpenSauceOne','semibold',   GTFONT_OPENSAUCE_SEMIBOLD);
    _rf('OSOneMedIt.ttf',    'OpenSauceOne','mediumitalic',GTFONT_OPENSAUCE_MEDIUMITALIC);

    const stats=computeReportStats(fl);

    // ── SVGs ─────────────────────────────────────────────────
    const LI_SVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382"><path fill="#284C66" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/></svg>`;
    const SS_SVG=`<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 448 511.471"><path fill="#FF681A" d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/></svg>`;
    const fetchPng=(url)=>fetch(url).then(r=>r.blob()).then(b=>new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=()=>res('');fr.readAsDataURL(b)})).catch(()=>'');
    const[logoImg,liImg,ssImg]=await Promise.all([
      fetchPng('logo.png'),
      fetchPng('linkedin.png'),
      rasterizeSvgR(SS_SVG,127,146)
    ]);

    // ── PAGE BACKGROUND ───────────────────────────────────────
    // Header (0–155): pure white
    doc.setFillColor(0xFF,0xFF,0xFF);
    doc.rect(0,0,1240,155,'F');
    // Body (155–1259): pure white
    doc.setFillColor(0xFF,0xFF,0xFF);
    doc.rect(0,155,1240,1104,'F');
    // Footer (1259–bottom): #BCBAAB at 1% opacity over white → (255,255,255)
    doc.setFillColor(0xFF,0xFF,0xFF);
    doc.rect(0,1259,1240,495,'F');

    // ── 1. TOP GRADIENT BAR ───────────────────────────────────
    drawGradBar(doc,0,0,1240,8.76);

    // ── 2. LOGO  x=38 y=30 w=220.5 h=113 ────────────────────
    if(logoImg)doc.addImage(logoImg,'PNG',38,30,220.5,113);

    // ── 3. "Capital Flows" — Playfair SemiBold 64.5pt ────────
    doc.setFont('Playfair','semibold');doc.setFontSize(64.5);doc.setCharSpace(0);
    doc.setTextColor(0x32,0x52,0x30);
    const capW=doc.getStringUnitWidth('Capital ')*64.5;
    doc.text('Capital ',421,88);
    doc.setTextColor(0x6B,0x7D,0x89);
    const flowW=doc.getStringUnitWidth('Flows')*64.5;
    doc.text('Flows',421+capW,88);

    // ── 4. "REPORT" — Poppins Regular 28pt, ls=1.4 ──────────
    doc.setFont('Poppins','normal');doc.setFontSize(28);
    doc.setCharSpace(1.4);doc.setTextColor(0x7A,0x83,0x80);
    doc.text('REPORT',421+(capW+flowW)/2,126,{align:'center'});
    doc.setCharSpace(0);

    // ── 5. "Demo" — Roboto SemiBold 24pt, ls=1.2 ────────────
    doc.setFont('Roboto','semibold');doc.setFontSize(24);
    doc.setCharSpace(1.2);doc.setTextColor(0xF2,0x62,0x04);
    doc.text('Demo',1199,58,{align:'right'});
    doc.setCharSpace(0);

    // ── 6. Generated date — Poppins Medium 14pt, ls=0.7 ─────
    const now=new Date();
    const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
    doc.setFont('Poppins','medium');doc.setFontSize(14);
    doc.setCharSpace(0.7);doc.setTextColor(0x11,0x1B,0x1E);
    doc.text('Generated',1199,87,{align:'right'});
    doc.text(`${MON[now.getMonth()]} ${now.getDate()}`,1199,104,{align:'right'});
    doc.text(`${now.getFullYear()}`,1199,121,{align:'right'});
    doc.setCharSpace(0);

    // ── 7. Header rule y=155 ─────────────────────────────────
    drawRule(doc,0,155,1240,0xDD,0xE5,0xE0);

    // ── 8 & 9. TOP STAT CARDS ────────────────────────────────
    // Row 1: x=341.07/675.07  y=176  w=224  h=101  center-x=453.07/787.07
    const capStr=fmtStatCard(stats.totalCapital);
    const instStr=String(stats.allInst.size);
    doc.setLineWidth(1);doc.setDrawColor(0x32,0x52,0x30);
    [341.07,675.07].forEach(cx=>{
      doc.setFillColor(0xFF,0xFA,0xEE);
      doc.roundedRect(cx,176,224,101,5,5,'FD');
    });
    // Values — OpenSauceOne Medium 40pt  Figma top=185 (176+9) → figmaBaseline(185,40)=223
    doc.setFont('OpenSauceOne','medium');doc.setFontSize(40);
    doc.setCharSpace(0.5);doc.setTextColor(0x11,0x1B,0x1E);
    doc.text(capStr,453.07,figmaBaseline(185,40,'OpenSauceOne'),{align:'center'});
    doc.text(instStr,787.07,figmaBaseline(185,40,'OpenSauceOne'),{align:'center'});
    // Labels — Roboto Light 16pt  Figma top=245 (176+69) → figmaBaseline(245,16,'Roboto')=260
    doc.setFont('Roboto','light');doc.setFontSize(16);
    doc.setCharSpace(0.4);
    doc.text('(USD)',453.07,figmaBaseline(245,16,'Roboto'),{align:'center'});
    doc.text('institutions',787.07,figmaBaseline(245,16,'Roboto'),{align:'center'});
    doc.setCharSpace(0);

    // ── 10-12. BOTTOM STAT CARDS ─────────────────────────────
    // x=92/474/856  y=299  w=292  h=75
    // GT Blue #6B7D89 / GT Muted Green #4E614D / Terracotta #B66734
    const bCards=[
      {lbl:'deals',      val:String(stats.totalDeals),                          x:92,  r:0x6B,g:0x7D,b:0x89},
      {lbl:'themes',     val:String(stats.themesSorted.length),                 x:474, r:0x4E,g:0x61,b:0x4D},
      {lbl:'metro areas',val:String(Object.keys(stats.cityCountry).length),     x:856, r:0xB6,g:0x67,b:0x34},
    ];
    bCards.forEach(c=>{
      const cx=c.x+146;
      doc.setFillColor(c.r,c.g,c.b);doc.setDrawColor(0x32,0x52,0x30);doc.setLineWidth(1);
      doc.roundedRect(c.x,299,292,75,5,5,'FD');
      // Value — OSOne Medium 34pt  Figma top=303 (299+4) → figmaBaseline(303,34)=336
      doc.setFont('OpenSauceOne','medium');doc.setFontSize(34);
      doc.setCharSpace(0.5);doc.setTextColor(0xFF,0xFA,0xEE);
      doc.text(c.val,cx,figmaBaseline(303,34,'OpenSauceOne'),{align:'center'});
      // Label — OSOne Medium 16pt  Figma top=346 (299+47) → figmaBaseline(346,16)=361
      doc.setFont('OpenSauceOne','medium');doc.setFontSize(16);
      doc.setCharSpace(0.4);
      doc.text(c.lbl,cx,figmaBaseline(346,16,'OpenSauceOne'),{align:'center'});
      doc.setCharSpace(0);
    });

    // ── 13-18. THREE COLUMNS + DECORATIVE GUIDELINES ─────────
    // Guidelines: x=68/451/833  y=393  h=92.5  hairline
    // (Note: spec listed col3 guideline x=525 which appears to be a dictation error;
    //  using x=833 to maintain consistent ~23px offset left of each column start.)
    doc.setLineWidth(1.5);
    doc.setDrawColor(0x6B,0x7D,0x89);doc.line(68, 393,68, 485.5);
    doc.setDrawColor(0x4E,0x61,0x4D);doc.line(451,393,451,485.5);
    doc.setDrawColor(0xB6,0x67,0x34);doc.line(833,393,833,485.5);

    // Column text — Roboto Light 16pt ls=0.8 black; bold segments use Roboto Medium
    // Figma text box y=389; visible text top y=393 (4px ascent gap for Roboto 16pt).
    // COL_Y = figmaBaseline(389,16,'Roboto') ≈ 404; COL_MAXY = 404+476 = 880.
    const COL_Y=Math.round(figmaBaseline(389,16,'Roboto'));  // 404
    const COL_LH=19,COL_PARA=12,COL_MAXY=COL_Y+476;        // 880
    doc.setCharSpace(0.8);
    renderCol1Bullets(doc,buildCol1(stats),92, COL_Y,310,16,COL_LH,COL_PARA,COL_MAXY,0,0,0,20);
    renderRich(doc,buildCol2(stats),       474,COL_Y,310,16,COL_LH,COL_MAXY,0,0,0,'Roboto','light','medium',COL_PARA);
    renderRich(doc,buildCol3(stats),       856,COL_Y,310,16,COL_LH,COL_MAXY,0,0,0,'Roboto','light','medium',COL_PARA);
    doc.setCharSpace(0);

    // ── 19. HIGHLIGHTS HEADER  Figma y=893 ──────────────────────
    doc.setFont('Roboto','semibold');doc.setFontSize(22);
    doc.setCharSpace(1.1);doc.setTextColor(0x20,0x49,0x37);
    doc.text('HIGHLIGHTS',56,figmaBaseline(893,22,'Roboto')); // Figma top y=893
    doc.setCharSpace(0);

    // ── 20. Table header top rule  y=935 — off-black ─────────
    drawRule(doc,56,930,1124,0x11,0x1B,0x1E);

    // ── 21-26. Column headers  y=941 Roboto SemiBold 18pt ls=0.9 ──
    const HCOLS=[
      {t:'DEAL FLOW',x:56},{t:'VALUE',x:432},{t:'METRO AREA',x:575},
      {t:'THEME',x:809},{t:'ACTIVITY',x:1027}
    ];
    doc.setFont('Roboto','semibold');doc.setFontSize(18);
    doc.setCharSpace(0.9);doc.setTextColor(0x11,0x1B,0x1E);
    HCOLS.forEach(h=>doc.text(h.t,h.x,figmaBaseline(936,18,'Roboto'))); // Figma top y=936
    // "(USD)" inline after "VALUE" — Roboto Light 14pt, same baseline
    const _vw=doc.getStringUnitWidth('VALUE')*18+0.9*5; // VALUE width incl. char-spacing
    const _spW=doc.getStringUnitWidth(' ')*18;            // 1 space at header font size
    doc.setFont('Roboto','light');doc.setFontSize(14);
    doc.setCharSpace(0.4);doc.setTextColor(0x7A,0x83,0x80);
    doc.text('(USD)',432+_vw+_spW,figmaBaseline(936,18,'Roboto'));
    doc.setCharSpace(0);
    // Data value column: x=455 per Figma
    const _valCenterX=455;

    // ── 27. Table header bottom rule  y=971 — off-black ──────
    drawRule(doc,56,966,1124,0x11,0x1B,0x1E);

    // ── 28-32. Data rows — exact Y coords from Figma ─────────
    // Investor baselines: 978,1033,1088,1143,1198
    // Figma top coords (Roboto 16pt) → figmaBaseline(y,16,'Roboto') = y+14.96
    // Investor tops:  973,1028,1083,1138,1193  → baselines 988,1043,1098,1153,1208
    // Recipient tops: 995,1050,1105,1160,1215  → baselines 1010,1065,1120,1175,1230
    // Mid-col tops:   982,1037,1092,1147,1202  → baselines  997,1052,1107,1162,1217
    const INV_YS =[988,1043,1098,1153,1208];
    const REC_YS =[1010,1065,1120,1175,1230];
    const MID_YS =[997,1052,1107,1162,1217];
    const ROW_LINES=[1021,1076,1131,1186];
    const _trunc=(n,max)=>{const s=shortenName(n);return s.length<=max?s:s.slice(0,max-3)+'...'};
    stats.highlightRows.forEach((deal,idx)=>{
      if(idx>=5)return;
      const ry =INV_YS[idx];
      const ry2=REC_YS[idx];
      const rym=MID_YS[idx];

      // DEAL FLOW line 1 — investor name
      const multiInv=deal.investor&&deal.investor.includes('/');
      const multiRec=deal.recipient&&deal.recipient.includes('/');
      const inv=_trunc(deal.investor,50);
      const rec=_trunc(deal.recipient,47);
      doc.setFont('Roboto','normal');doc.setFontSize(16);doc.setCharSpace(0.8);doc.setTextColor(0x11,0x1B,0x1E);
      doc.text(`${inv}${multiInv&&!inv.endsWith('...')?'+':''}`,56,ry);

      // DEAL FLOW line 2 — ⤷ drawn arrow then recipient
      // Draw ⤷: short vertical stroke down then right with arrowhead
      doc.setDrawColor(0x11,0x1B,0x1E);doc.setLineWidth(1.1);
      doc.line(59,ry2-14,59,ry2-5);          // vertical stroke
      doc.line(59,ry2-5,73,ry2-5);           // horizontal shaft
      doc.line(73,ry2-5,69,ry2-9);           // arrowhead upper
      doc.line(73,ry2-5,69,ry2-1);           // arrowhead lower
      doc.setFont('Roboto','normal');doc.setFontSize(16);doc.setCharSpace(0.8);
      doc.text(`${rec}${multiRec&&!rec.endsWith('...')?'+':''}`,79,ry2);

      // VALUE — left-aligned at x=455 per Figma
      doc.setFont('Roboto','normal');doc.setFontSize(16);doc.setCharSpace(0.8);
      doc.text(fmtRowValue(deal.amount),_valCenterX,rym);
      // METRO AREA
      const iso=ISO3[deal.country]||deal.country.slice(0,3).toUpperCase();
      let city=deal.city;if(city.length>20)city=city.slice(0,18)+'...';
      doc.setTextColor(0x11,0x1B,0x1E);
      doc.text(`${city}, ${iso}`,575,rym);
      // THEME
      let theme=SL[deal.sector]||deal.sector;if(theme.length>18)theme=theme.slice(0,16)+'...';
      doc.text(theme,809,rym);
      // ACTIVITY
      doc.text(deal.dealType,1027,rym);
      doc.setCharSpace(0);
      if(idx<4)drawRule(doc,56,ROW_LINES[idx],1124,0xCC,0xD8,0xD0);
    });

    // ── 33. LOWER GRADIENT BAR  y=1285 ───────────────────────
    drawGradBar(doc,0,1259,1240,8.76);

    // ── 34-35. TAGLINE — Playfair Regular 24pt ls=1.2  (Figma top: 1282/1313) ──
    doc.setFont('OpenSauceOne','mediumitalic');doc.setFontSize(24);
    doc.setCharSpace(0.6);doc.setTextColor(0x20,0x49,0x37);
    doc.text('Impact capital flows are out there.',620,1305,{align:'center'});
    doc.text('Fragmented, dispersed, hard to see — until now.',620,1336,{align:'center'});
    doc.setCharSpace(0);

    // ── 36. Thin rule  y=1358 ────────────────────────────────
    drawRule(doc,0,1358,1240,0xBB,0xCB,0xBD);

    // ── 37. CTA headline — Roboto SemiBold 24pt #325230 ls=1.2  (Figma top: 1394) ─
    doc.setFont('Roboto','semibold');doc.setFontSize(24);
    doc.setCharSpace(1.2);doc.setTextColor(0x32,0x52,0x30);
    doc.text('Be the first to know when Beta membership opens.',620,1412,{align:'center'});
    doc.setCharSpace(0);

    // ── 38. CTA subtext — Roboto Regular 20pt #111B1E ls=1  (Figma top: 1425) ───
    doc.setFont('Roboto','normal');doc.setFontSize(20);
    doc.setCharSpace(1);doc.setTextColor(0x11,0x1B,0x1E);
    doc.text('Early members lock in founding pricing for 12 months and get priority access to premium tools.',620,1450,{align:'center'});
    doc.setCharSpace(0);

    // ── 39-40. SOCIAL ICONS  y=1486 (Figma) ─────────────────
    if(liImg){doc.addImage(liImg,'PNG',503,1500,74.83,73.95);doc.link(503,1500,74.83,73.95,{url:'https://www.linkedin.com/company/gvngtree'})}
    if(ssImg){doc.addImage(ssImg,'PNG',645.6,1500.9,63.38,73.07);doc.link(645.6,1500.9,63.38,73.07,{url:'https://givingtree.substack.com/'})}

    // ── 41. FOOTER LINKS — Roboto Regular 20pt ls=1  y≈1611 (Figma top: 1596) ──
    doc.setFont('Roboto','normal');doc.setFontSize(20);doc.setCharSpace(1);
    const fp=[
      {t:'Follow us on ',lnk:null},
      {t:'LinkedIn',lnk:'https://www.linkedin.com/company/gvngtree'},
      {t:' and ',lnk:null},
      {t:'Substack',lnk:'https://givingtree.substack.com/'},
      {t:'   •   ',lnk:null},
      {t:'See the ',lnk:null},
      {t:'GivingTree Map',lnk:'https://www.givingtree.com.br/map'},
      {t:'   •   ',lnk:null},
      {t:'Contact us',lnk:'https://www.givingtree.com.br/contact'},
    ];
    let totalFW=0;const fws=fp.map(p=>{const w=doc.getStringUnitWidth(p.t)*20;totalFW+=w;return w});
    let fx=620-totalFW/2;
    fp.forEach((p,i)=>{
      if(p.lnk){
        doc.setTextColor(0x32,0x52,0x30);
        doc.textWithLink(p.t,fx,1625,{url:p.lnk});
        // underline the linked text
        doc.setDrawColor(0x32,0x52,0x30);doc.setLineWidth(0.7);
        doc.line(fx,1627,fx+fws[i],1627);
      } else {
        doc.setTextColor(0x11,0x1B,0x1E);doc.text(p.t,fx,1625);
      }
      fx+=fws[i];
    });
    doc.setCharSpace(0);

    // ── 42. DISCLAIMER — Roboto Regular 14pt ls=0.7 ──────────
    const disc='This document is a demonstration of a report automatically generated by the GivingTree platform, which, as of the “Generated” production date above, is in development. Content and format are subject to revision. In this demonstration, figures represent the volume of capital identified in the mapped transactions and may include errors or overlaps between commitments and disbursements. Transactions attributed to a city may encompass its metropolitan area. All data was collected from public sources. This document does not constitute financial advice.';
    doc.setFont('Roboto','normal');doc.setFontSize(14);
    doc.setCharSpace(0.7);doc.setTextColor(0x11,0x1B,0x1E);
    const discLines=doc.splitTextToSize(disc,1184);
    let dy=1668;discLines.forEach(l=>{doc.text(l,28,dy);dy+=18});
    doc.setCharSpace(0);

    // ── SAVE ─────────────────────────────────────────────────
    const fname=`GivingTree-Impact-Capital-Report-${MON[now.getMonth()]}-${now.getDate()}-${now.getFullYear()}.pdf`;
    doc.save(fname);

  }catch(err){
    console.error('PDF error:',err);
    alert('PDF generation failed: '+err.message+'. See console for details.');
  }finally{
    if(btn){btn.textContent='Create report';btn.disabled=false}
  }
}

document.getElementById('gerarRelatorioBtn').addEventListener('click',generateReport);