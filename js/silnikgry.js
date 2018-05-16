// tablica i losowanie ras
rasa=["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];
rasa1=Math.floor(Math.random()*11);
rasa1a=(rasa[rasa1]);

// tablica i losowanie profesji
profesja=["wojownik", "mag", "złoczyńca"];
profesja1=Math.floor(Math.random()*3);
profesja1a=(profesja[profesja1]);

// tablica i losowanie płci
płeć=["mężczyzna", "kobieta", "nie określona"];
płeć1=Math.floor(Math.random()*3);
płeć1a=(płeć[płeć1]);

// tablica i losowanie wzrostu
wzrost=["niski", "średni", "wysoki"];
wzrost1=Math.floor(Math.random()*3);
wzrost1a=(wzrost[wzrost1]);

// tablica i losowanie wagi
waga=["niedowaga", "normalna", "nadwaga"];
waga1=Math.floor(Math.random()*3);
waga1a=(waga[waga1]);

// tablica i losowanie koloru oczu
oczy=["brązowe", "szare", "zielone", "niebiekie", "czerwone"];
oczy1=Math.floor(Math.random()*5);
oczy1a=(oczy[oczy1]);

// losowanie podstawowych wartości cech oraz modyfikacja o +1 jeżeli wypadnie 0
siła=Math.floor(Math.random()*50);
if (siła == 0){	siła = 1; }

wytrzymałość=Math.floor(Math.random()*50);
if (wytrzymałość == 0){	wytrzymałość = 1; }

zręczność=Math.floor(Math.random()*50);
if (zręczność == 0){ zręczność = 1;	}

inteligencja=Math.floor(Math.random()*50);
if (inteligencja == 0){ inteligencja = 1; }

charyzma=Math.floor(Math.random()*50);
if (charyzma == 0){ charyzma = 1; }

// modyfikacje cech w zależności od profesji i rasy - na razie tylko od tych dwóch zmiennych
// przypadki dla człowieka
//człowiek - wojownik
if (rasa1 == 0 || profesja == 0 ){
siła1 = siła + 5;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja;
charyzma1 = charyzma;}
	
// człowiek - mag
if (rasa1 == 0 || profesja == 1){
siła1 = siła;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5;}
	
// człowiek - złoczyńca
if (rasa1 == 0 || profesja == 2){
siła1 = siła;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość;
inteligencja1 = inteligencja;
charyzma1 = charyzma;}
	
//przypadki dla półorka
// półork - wojownik
if (rasa1 == 1 || profesja == 0){
siła1 = siła + 5 + 3;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5 + 3;
inteligencja1 = inteligencja - 3;
charyzma1 = charyzma - 3;}

// półork - mag
if (rasa1 == 1 || profesja == 1){
siła1 = siła + 3;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 3;
inteligencja1 = inteligencja + 5 - 3;
charyzma1 = charyzma + 5 - 3;}

// półork - złoczyńca
if (rasa1 == 1 || profesja == 2){
siła1 = siła + 3;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość +3;
inteligencja1 = inteligencja - 3;
charyzma1 = charyzma - 3;}

//przypadki dla orka
// ork - wojownik
if (rasa1 == 2 || profesja == 0){
siła1 = siła + 5 + 5;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5 + 5;
inteligencja1 = inteligencja - 5;
charyzma1 = charyzma - 5;}

// ork - mag
if (rasa1 == 2 || profesja == 1){
siła1 = siła + 5;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja + 5 - 5;
charyzma1 = charyzma + 5 - 5;}

// ork - złoczyńca
if (rasa1 == 2 || profesja == 2){
siła1 = siła + 5;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja - 5;
charyzma1 = charyzma - 5;}

//przypadki dla półelfa
// półelf - wojownik
if (rasa1 == 3 || profesja == 0){
siła1 = siła + 5 - 3; 
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5 - 3;
inteligencja1 = inteligencja + 3;
charyzma1 = charyzma + 3;}

// półelf - mag
if (rasa1 == 3 || profesja == 1){
siła1 = siła - 3;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość - 3;
inteligencja1 = inteligencja + 5 + 3;
charyzma1 = charyzma + 5 + 3;}

// półelf - złoczyńca
if (rasa1 == 3 || profesja == 2){
siła1 = siła - 3;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość - 3;
inteligencja1 = inteligencja + 3;
charyzma1 = charyzma + 3;}

//przypadki dla elfa
// elf - wojownik
if (rasa1 == 4 || profesja == 0){
siła1 = siła + 5 - 5; 
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5 - 5;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5;}

// elf - mag
if (rasa1 == 4 || profesja == 1){
siła1 = siła - 5;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość - 5;
inteligencja1 = inteligencja + 5 + 5;
charyzma1 = charyzma + 5 + 5;}

// elf - złoczyńca
if (rasa1 == 4 || profesja == 2){
siła1 = siła - 5;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość - 5;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5;}

//przypadki dla krasnoluda
// krasnolud - wojownik
if (rasa1 == 5 || profesja == 0){
siła1 = siła + 5 + 4; 
zręczność1 = zręczność - 2;
wytrzymałość1 = wytrzymałość + 5 + 4;
inteligencja1 = inteligencja;
charyzma1 = charyzma - 3;}

// krasnolud - mag
if (rasa1 == 5 || profesja == 1){
siła1 = siła + 4;
zręczność1 = zręczność - 2;
wytrzymałość1 = wytrzymałość + 4;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5 - 3;}

// krasnolud - złoczyńca
if (rasa1 == 5 || profesja == 2){
siła1 = siła + 4;
zręczność1 = zręczność + 10 - 2;
wytrzymałość1 = wytrzymałość + 4;
inteligencja1 = inteligencja;
charyzma1 = charyzma - 3;}

//przypadki dla niziołka
// niziołek - wojownik
if (rasa1 == 6 || profesja == 0){
siła1 = siła + 5 - 3; 
zręczność1 = zręczność + 6;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja;
charyzma1 = charyzma;}

// niziołek - mag
if (rasa1 == 6 || profesja == 1){
siła1 = siła - 3;
zręczność1 = zręczność + 6;
wytrzymałość1 = wytrzymałość;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5;}

// niziołek - złoczyńca
if (rasa1 == 6 || profesja == 2){
siła1 = siła - 3;
zręczność1 = zręczność + 10 + 6;
wytrzymałość1 = wytrzymałość;
inteligencja1 = inteligencja;
charyzma1 = charyzma;}

//przypadki dla goblina
// goblin - wojownik
if (rasa1 == 7 || profesja == 0){
siła1 = siła + 5 + 2; 
zręczność1 = zręczność + 4;
wytrzymałość1 = wytrzymałość + 5 - 2;
inteligencja1 = inteligencja;
charyzma1 = charyzma - 4;}

// goblin - mag
if (rasa1 == 7 || profesja == 1){
siła1 = siła + 2;
zręczność1 = zręczność + 4;
wytrzymałość1 = wytrzymałość - 2;
inteligencja1 = inteligencja + 5;
charyzma1 = charyzma + 5 - 4;}

// goblin - złoczyńca
if (rasa1 == 7 || profesja == 2){
siła1 = siła + 2;
zręczność1 = zręczność + 10 + 4;
wytrzymałość1 = wytrzymałość - 2;
inteligencja1 = inteligencja;
charyzma1 = charyzma - 4;}

//przypadki dla gnoma
// gnom - wojownik
if (rasa1 == 8 || profesja == 0){
siła1 = siła + 5 - 2; 
zręczność1 = zręczność + 3;
wytrzymałość1 = wytrzymałość + 5 - 2;
inteligencja1 = inteligencja + 3;
charyzma1 = charyzma;}

// gnom - mag
if (rasa1 == 8 || profesja == 1){
siła1 = siła - 2;
zręczność1 = zręczność + 3;
wytrzymałość1 = wytrzymałość - 2;
inteligencja1 = inteligencja + 5 + 3;
charyzma1 = charyzma + 5;}

// gnom - złoczyńca
if (rasa1 == 8 || profesja == 2){
siła1 = siła - 2;
zręczność1 = zręczność + 10 + 3;
wytrzymałość1 = wytrzymałość - 2;
inteligencja1 = inteligencja + 3;
charyzma1 = charyzma;}

//przypadki dla trola
// trol - wojownik
if (rasa1 == 9 || profesja == 0){
siła1 = siła + 5 + 2; 
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5 + 5;
inteligencja1 = inteligencja - 2;
charyzma1 = charyzma - 2;}

// trol - mag
if (rasa1 == 9 || profesja == 1){
siła1 = siła + 2;
zręczność1 = zręczność;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja + 5 - 2;
charyzma1 = charyzma + 5 - 2;}

// trol - złoczyńca
if (rasa1 == 9 || profesja == 2){
siła1 = siła + 2;
zręczność1 = zręczność + 10;
wytrzymałość1 = wytrzymałość + 5;
inteligencja1 = inteligencja - 2;
charyzma1 = charyzma - 2;}

//przypadki dla półolbrzyma
// półolbrzym - wojownik
if (rasa1 == 10 || profesja == 0){
siła1 = siła + 5 + 7; 
zręczność1 = zręczność - 5;
wytrzymałość1 = wytrzymałość + 5 + 7;
inteligencja1 = inteligencja - 3;
charyzma1 = charyzma;}

// półolbrzym - mag
if (rasa1 == 10 || profesja == 1){
siła1 = siła + 7;
zręczność1 = zręczność - 5;
wytrzymałość1 = wytrzymałość + 7;
inteligencja1 = inteligencja + 5 - 3;
charyzma1 = charyzma + 5;}

// półolbrzym - złoczyńca
if (rasa1 == 10 || profesja == 2){
siła1 = siła + 7;
zręczność1 = zręczność + 10 - 5;
wytrzymałość1 = wytrzymałość + 7;
inteligencja1 = inteligencja - 3;
charyzma1 = charyzma;}

// modyfikacja cech w przypadku kiedy cechy będą mniejsze lub równe 0
if (siła1 <= 0){ siła1 = 1; }
if (wytrzymałość1 <= 0){ wytrzymałość1 = 1; }
if (zręczność1 <= 0){ zręczność1 = 1; }
if (inteligencja1 <= 0){ inteligencja1 = 1; }
if (charyzma1 <= 0){ charyzma1 = 1; }

// tworzy pustą tablicę ekwipunku, do której będą dodawane przedmioty
ekwipunek = [];

// tablice z bronią, zbrojami i tarczami oraz ich losowanie
// losowanie broni
broń = [" brak broni", " sztylet", " miecz", " szabla", " topór", " młot"];
broń1 = Math.floor(Math.random()*6);
broń1a = (broń[broń1]);

//losowanie zbroi
zbroja = [" brak zbroi", " zbroja skórzana", " zbroja łuskowa", " kolczuga"];
zbroja1 = Math.floor(Math.random()*4);
zbroja1a = (zbroja[zbroja1]);

//losowanie tarcz
tarcza = [" brak tarczy", " puklerz", " tarcza drewniana", " tarcza metalowa"];
tarcza1 = Math.floor(Math.random()*4);
tarcza1a = (tarcza[tarcza1]);

//losowanie złota
złoto = Math.floor(Math.random()*(15+1));

// wartość bojowa bohatera
atakbohatera = broń1 + siła1 + zręczność1;
obronabohatera = zbroja1 + tarcza1 + zręczność1 + wytrzymałość1;
wartośćbojowa = atakbohatera + obronabohatera;

// wartość bojowa przeciwników bohatera - walka w obronie karawany
broń2 = Math.floor(Math.random()*6);
zbroja2 =  Math.floor(Math.random()*4);
tarcza2 =  Math.floor(Math.random()*4);

siła2 = Math.floor(Math.random()*50);
zręczność2 = Math.floor(Math.random()*50);
wytrzymałość2 = Math.floor(Math.random()*50);

atak2 = broń2 + siła2 + zręczność2;
obrona2 = zbroja2 + tarcza2 + zręczność2 + wytrzymałość2;
wartboj = atak2 + obrona2;

// wartość bojowa - pasikonik
broń3 = Math.floor(Math.random()*6);
zbroja3 =  Math.floor(Math.random()*8);

siła3 = Math.floor(Math.random()*50);
zręczność3 = Math.floor(Math.random()*50);
wytrzymałość3 = Math.floor(Math.random()*50);

atak3 = broń3 + siła3 + zręczność3;
obrona3 = zbroja3 + zręczność3 + wytrzymałość3;
wartboj3 = atak3 + obrona3;

// funkcja startowa wypisuje początkowe wartości do karty postaci - uzupełnić o wartości cech
function start(){
document.getElementById('wynikrasa').innerHTML = rasa1a;
document.getElementById('wynikprofesja').innerHTML = profesja1a;
document.getElementById('wynikpłeć').innerHTML = płeć1a;
document.getElementById('wynikwzrost').innerHTML = wzrost1a;
document.getElementById('wynikwaga').innerHTML = waga1a;
document.getElementById('wynikoczy').innerHTML = oczy1a;
document.getElementById('wyniksiła').innerHTML = siła1;
document.getElementById('wynikwytrzymałość').innerHTML = wytrzymałość1;
document.getElementById('wynikzręczność').innerHTML = zręczność1;
document.getElementById('wynikinteligencja').innerHTML = inteligencja1;
document.getElementById('wynikcharyzma').innerHTML = charyzma1;
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;Witaj!<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mieszkasz w przygranicznym mieście Erharuf - stolicy przygranicznej prowincji Ibnazen. Jest wieczór. Niedawno ukończyłeś podstawowe &nbsp;&nbsp;&nbsp;szkolenie w swojej wymarzonej profesji. Twoi mistrzowie dali Tobie trochę wolnego czasu na odpoczynek, po trudach nauki i egzaminów. <br />&nbsp;&nbsp;&nbsp;Z nudów łaziłeś po mieście, nie mogąc znaleźć dla siebie zajęcia. Aż pewnego wieczoru...";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;<button  id = 'dalej' onclick='dalej()'>dalej</button>";
}

// funkcja, w której znajomy kapłan prosi o przysługę - pierwsza możliwość wyboru - tak lub nie
function dalej(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Przyszedł do Ciebie znajomy kapłan. Poprosił Cię o dostarczenie niedużej paczki kapłanowi z jego zakonu. Tenże kapłan pełni posługę w &nbsp;&nbsp;niewielkiej wiosce przy granicy. Czy spełnisz prośbę kapłana?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;<button  id = 'tak' onclick='tak()'>tak</button> &nbsp;&nbsp;<button  id = 'nie' onclick='nie()'>nie</button>";
}

// funkcja odmowy przyjęcia paczki - kończy grę
function nie(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Niestety przyjacielu. Nie mogę dla ciebie tego zrobić, gdyż w każdej chwili moi mistrzowie mogą przydzielić mi ważne zadania. Muszę być na &nbsp;&nbsp;miejscu kiedy to nastąpi.' Kapłan posmutniał, pokiwał głową i powiedział - 'Rozumiem. Poszukam, więc innego rozwiązania mojego problemu.' - &nbsp;&nbsp;Pożegnaliście się. Niedługo po tym zdarzeniu otrzymałeś swoje zadania. Wpadłeś w wir swojej kariery zawodowej... Aż do śmierci...";
document.getElementById('tekst2').innerHTML = "<div id='koniec'>KONIEC</div>";
setTimeout("theend()", 10000);
}

// funkcja - ta funkcja uruchamia napisy końcowe
function theend(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gra <strong>AUDACES</strong> została stworzona przez <strong>Niewierne Psy</strong> w składzie:<br /><br >&nbsp;&nbsp;&nbsp;<strong>Szymon 'Krupik' Cendecki</strong><br /><br />&nbsp;&nbsp;&nbsp;<strong>kontakt:</strong><br />&nbsp;&nbsp;&nbsp;Szymon 'Krupik' Cendecki<br />&nbsp;&nbsp;&nbsp;mobile: 698533123<br />&nbsp;&nbsp;&nbsp;e-mail: krupik@autograf.pl, divinedwarf@gmailcom<br />&nbsp;&nbsp;&nbsp;albo przez facebooka :)";
document.getElementById('tekst2').innerHTML = "";
}

// funkcja akceptująca wykonie przysługi
function tak(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'W sumie czemu nie.' - odpowiadasz - 'I tak na razie nie mam nic lepszego do roboty. Wyruszę jutro rano.' Kapłan ucieszył się. - 'Łatwo <br />&nbsp;&nbsp;&nbsp;znajdziesz adresata paczki. Kapliczka znajduje się na centralnym placu osady, więc łatwo ją znajdziesz. Powodzenia.' Zostwił paczkę<br />&nbsp;&nbsp;&nbsp;na stole i wyszedł.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej2()'>dalej</button>";
}

// funkcja - przygotowanie do podróży - bohater musi wcisnąć przycisk uruchamiający zabieranie paczki 
function dalej2(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Po wyjściu kapłana przejrzałeś skrzynię ze swoim ekwpunkiem i przyszykowałeś go do podróży. Teraz wystarczy go rano wziąć go wziąć i &nbsp;&nbsp;&nbsp;paczkę, zamknąć dom i wyruszyć.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej3()'>dalej</button>";
}

// funkcja - rano zabranie paczki, ekwipunku i wyjście z domu
function dalej3(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wstałeś rano wypoczęty. Zjadłeś śniadanie. Podchodzisz do paczki i bierzesz ją.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='paczka' onclick='paczka()'>paczka</button>";
}

// funkcja dodawania paczki do tabeli ekwipunku, tabela wyświetlana jest w odpowiednim miejscu interfejsu
function paczka(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podchodzisz do skrzyni, z ekwipunkiem. Wyciągasz go i zakładasz na siebie.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='paczka' onclick='ekwip()'>ekwipunek</button>";
ekwipunek.push("paczka");
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
}

// funkcja dodawania ekwipunku do tabeli, wyświetlania i wchodzenia z domu  
function ekwip(){
ekwipunek.push(broń1a, zbroja1a, tarcza1a, "<br />złoto: " + złoto + " szt.");
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wyszedłeś z domu. Zamknąłeś drzwi na klucz i zacząłeś iść w stronę głównej bramy.";	
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej4()'>dalej</button>";
}

// funkcja w której gracz podejmuje decyzję o zakupie
function dalej4(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idziesz przez miasto. Wchodzisz na plac targowy, na który przez wiele lat chodziłeś po zakupy. Rozglądasz się po kramach. Kupcy oferują nawet &nbsp;&nbsp;&nbsp;sporo rzeczy: żywność, ubrania, wyroby kowalskie i skórzane, mikstury. Czy chesz coś jeszcze kupić przed wyprawą?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button  id = 'tak' onclick='tak1()'>tak</button> &nbsp;&nbsp;<button  id = 'nie' onclick='dalej5()'>nie</button>";
}

// funkcja kupowania
function tak1(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obszedłeś rynek, sprawdzając różne towary. Najbardziej zainteresowały cię następujące towary: namiot (2 szt. zł.), torba (0,5 szt. zł.), derka &nbsp;&nbsp;&nbsp;(0,5 szt. zł.), lampa oliwna (1 szt. zł.), lina (1 szt. zł.), racje żywnościowe - zestaw (5 szt. zł). Co chcesz kupić?";	
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='paczka' onclick='namiot()'>namiot</button> <button id='paczka' onclick='torba()'>torba</button> <button id='paczka' onclick='derka()'>derka</button> <button id='paczka' onclick='lampa()'>lampa</button> <button id='paczka' onclick='lina()'>lina</button> <button id='paczka' onclick='racje()'>racje żyw.</button><br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej5()'>dalej</button>";
}

// funkcja kupowania namiotu
function namiot(){
if (złoto >= 2){
ekwipunek.push(" namiot");
złoto = złoto - 2;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
	}
if (złoto < 2){
	alert('Nie możesz kupić namiotu. Nie masz tyle złota.');
}}

// funkcja kupowania torby
function torba(){
if (złoto >= 0.5){
ekwipunek.push(" torba");
złoto = złoto - 0.5;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
	}
if (złoto < 0.5){
	alert('Nie możesz kupić torby. Nie masz tyle złota.');
}}

// funkcja kupowania derki
function derka(){
if (złoto >= 0.5){
ekwipunek.push(" derka");
złoto = złoto - 0.5;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
	}
if (złoto < 0.5){
alert('Nie możesz kupić derki. Nie masz tyle złota.');
}}

// funkcja kupowania lampy
function lampa(){
if (złoto >= 1){
ekwipunek.push(" lampa");
złoto = złoto - 1;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
	}
if (złoto < 1){
	alert('Nie możesz kupić lampy. Nie masz tyle złota.');
}}

// funkcja kupowania liny
function lina(){
if (złoto >= 1){
ekwipunek.push(" lina");
złoto = złoto - 1;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
}
if (złoto < 1){
alert('Nie możesz kupić liny. Nie masz tyle złota.');
}}

// funkcja kupowania jedzenia
function racje(){if (złoto >= 5){
ekwipunek.push(" racje żyw.");
złoto = złoto - 5;
ekwipunek.splice(4, 1, ["<br />złoto: " + złoto + " szt."]);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
	}
if (złoto < 5){
	alert('Nie możesz kupić zestawu racji. Nie masz tyle złota.');
}}

// funkcja kończąca część w mieście
function dalej5(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W końcu docierasz do głównej bramy miasta. Jest przy niej dość tłoczno mimo wczesnej pory. Mijasz strażników. Wychodzisz poza mury. &nbsp;&nbsp;&nbsp;Idziesz traktem, mijasz wiele osób, które spieszą się do miasta.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej6()'>dalej</button>";
}

// funkcja spotkanie z karawan, która ma za chwilę wyruszyć do osady, do której zmierza bohater
function dalej6(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tuż za miastem znajduje się spory plac, na który przyjeżdżają karawany. Idąc dalej drogą dostrzegasz, że jedna z nich jest prawie gotowa do wyruszenia. Czy chcesz podejść i spytać się czy jedzie do Twojego celu podróży?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='tak' onclick='tak2()'>tak</button><button id='nie' onclick='nie2()'>nie</button>";
}

// funkcja - gdy bohater zostawi od razu karawanę od razu - ustalić onclick na odpowiedni
function nie2(){
if (ekwipunek[0] == " racje żyw." || ekwipunek[1] == " racje żyw." ||  ekwipunek[2] == " racje żyw." ||  ekwipunek[3] == " racje żyw."

||  ekwipunek[4] == " racje żyw." ||  ekwipunek[5] == " racje żyw." ||  ekwipunek[6] == " racje żyw."){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nie zaprzątasz sobie głowy karawaną. Mijasz ją i idziesz dalej swoją drogą. Przez dwa dni spokojnie przemierzasz drogę. Jednakże trzeciego<br />&nbsp;&nbsp;&nbsp;dnia napotykasz na pobojowisko. ";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej7()'>dalej</button>";
}
else{
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nie zaprzątasz sobie głowy karawaną. Mijasz ją i idziesz dalej swoją drogą. Przez dwa dni spokojnie przemierzasz drogę. Jednakże musisz &nbsp;&nbsp;&nbsp;czasem zapolować na jakąś zwierzynę, zbierasz dzikie owoce. Trzeciego dnia napotykasz na pobojowisko.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej7()'>dalej</button>";
}}

// funkcja - wyboru podchodzisz do karawany lub nie
function dalej7(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podchodzisz bliżej i widzisz zgliszcza. To chyba spłonął jeden z wozów karawany, którą minąłeś wychodząc z miasta. Kawałek za nim<br />&nbsp;&nbsp;&nbsp;są usypane dwa niewielkie kurhany. Pewnie jeden dla atakujących, drugi dla broniących. Nic już nie pomożesz ani jednym ani drugim - musisz<br />&nbsp;&nbsp;&nbsp;isć dalej.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej8()'>dalej</button>";
}

// funkcja - bohater dochodzi do celu - osady
function dalej8(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dwa dni później jesteś już niedaleko celu. Droga zaczęła schodzić w dół, wzdłuż dość wysokich wzniesień. W oddali zobaczyłeś swój Cel - ufortyfikowaną osadę.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej9()'>dalej</button>";
}

// funkcja - bohater mija karawane i wchodzi do osady
function dalej9(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Późnym popołudniem docierasz do osady. Przed główną bramą. Rozłożyła się karawana. Wokół wozów rozbite są namioty. Jak zauważyłeś wielu uczetników odniosło rany oraz brakuje jednego wozu.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej10()'>dalej</button>";
}

// funkcja - w której łączy się rozwidlenie gry - skąd bohater szedł piechotą lub jazda z karawaną
function dalej10(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wchodzisz do wioski. Idziesz głównym drogą przez osadę. Rozglądasz się. Mijasz kuźnię, karczmę. Docierasz do placu. Znowu się rozglądasz. Nieco po lewej stronie zauważasz niewielką kaplicę, otoczoną krzewami dzikiej róży. Tam też kierujesz swój krok.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej11()'>dalej</button>";
}

//funkcja - bohater decyduje się na podejście do karawany i spytanie o cel podróży
function tak2(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schodzisz z traktu. Widzisz jak krasnolud instruuje uczestników karawany. Podchodzisz do niego i pytasz: 'Mistrzu! Dokąd jedziecie?'. &nbsp;&nbsp;&nbsp;'Jedziemy do ostaniej osady.' - ten odpowiada. 'To świetnie! Czy mogę zabrać się z Wami?' - pytasz. 'Możesz się zabrać. Przydasz się nam jako &nbsp;&nbsp;&nbsp;dodatkowa ochrona.' - odpowiedział krasnolud i po chwili zaczął ponaglać woźniców. Ty natomiast wskoczyłeś na ostani wóz i spokojnie na &nbsp;&nbsp;&nbsp;odjazd.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej7a()'>dalej</button>";
}

// funkcja - bohater rusza z karawaną, pierwsze dni spokojne, wikt na koszt karawany
function dalej7a(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W końcu zaczęliście jechać. Wozy jechały równym tempem, bez niepotrzbenych i długich postojów. Niestety nocą trafiały się Tobie jednak &nbsp;&nbsp;&nbsp;najgorsze godziny warty. I wszystko byłoby dobrze, gdyby trzeciego dnia...";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej7ab()'>dalej</button>";
}

// funkcja - karawana została zaatakowana 
function dalej7ab(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karawana zatrzymała się. Na trakcie leżał zwalony pień. Zauważyłeś, jak ochrona karawany wyciągnęła broń i zaczęła obserwować teren &nbsp;&nbsp;&nbsp;wokół karawany. Gdy tylko woźnice zaczęli usuwać pień z drogi zaroiło się od postaci niewielkiego wzrostu. Odziane były w skóry, upstrzone &nbsp;&nbsp;&nbsp;&nbsp;w dziwaczne znaki. Rozpoczęła się walka. Możesz walczyć lub skryć się za pakunkami i przeczekać bitwę. Co robisz?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='tak' onclick='walka()'>walka</button> &nbsp;&nbsp;&nbsp;<button id='nie' onclick='ukrycie()'>ukrycie</button>";	
}

// funkcja - bohater chowa się 
function ukrycie(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zaszyłeś się pomiędzy towarami na swoim wozie i przykryłeś się dodatkowo częścią plandeki, która zakrywała wóz. Tak schowany przeczekałeś &nbsp;&nbsp;&nbsp;całą walkę. Z ukrycia wyszedłeś dopiero gdy ucichły odgłosy walki. Rozejrzałeś się. Zobaczyłeś kilkanaście trupów i płonący jeden wóz. &nbsp;&nbsp;&nbsp;Uczestnicy karawany opatrywali ranych. Pomogłeś ugasić wóz i pochować poległych. Gdy pień został usunięty pojechaliście dalej.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej8a()'>dalej</button>";
}

// funkcja - bohater walczy
function walka(){
if (wartośćbojowa >= wartboj){		
document.getElementById('wynikdoświadczenie').innerHTML = 50;
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dzielnie odpierałeś ataki tych dzikusów. Mimo tego napastnikom udało się podpalić jeden z wozów. Atak nie trwał zbyt długo. Widząc, że nie &nbsp;&nbsp;&nbsp;uda się wygrać banda dzikusów uciekła. Nie goniliście ich. Ugasiliście wóz,opatrzyliście rannych. Po krótkim odpoczynku pochowaliście &nbsp;&nbsp;&nbsp;poległych i ściągneliście pień z drogi. Potem ruszyliście w dalszą podróż.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej8a()'>dalej</button>";
}
if (wartośćbojowa < wartboj){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dzielnie walczysz. Ale i Herkules dupa kiedy ludzi kupa. Pięciu napastników otoczyło Cię. Nie zauważyłeś jak jeden z nich, od tyłu podciął &nbsp;&nbsp;&nbsp;Tobie nogi. Upadłeś. Doskoczyli do Ciebie i zaczęli okładać swoimi pałkami i młotami. Jeden z nich trafił w głowę i rozłupał czaszkę. Mózg &nbsp;&nbsp;&nbsp;rozbryzgnął się na pakunki leżące na wozie. Pochowano Cię z resztą poległych, w jednej zdwóch mogił. Karawana pojechała dalej. Już bez &nbsp;&nbsp;&nbsp;Ciebie... KONIEC";
document.getElementById('tekst2').innerHTML = " ";
setTimeout("theend()", 60000);
}}

// funkcja - po walce i przyjazd do wioski
function dalej8a(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Po tym wydarzeniu jechaliście już wolniej. Mimo, że wielu z was odniosło rany, staraliście być bardziej czujni, niż do tej pory. Pomimo &nbsp;&nbsp;&nbsp;zwiększonych środków bepieczeństwa reszta podróży minęła spokojnie. Pod koniec następnego dnia dojechaliście do celu. Odetchneliście z ulgą. &nbsp;&nbsp;&nbsp;Pomogłeś jeszcze rozbić obóz. I poszedłeś w stronę bramy wioski.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej10()'>dalej</button>";
}

// funkcja - spotkanie u celu
function dalej11(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gdy podchodziłeś bliżej kapliczki, zza niej wyszedł kapłan i zaczął się przyglądać krzewom. Podszedłeś bliżej i zagadałeś: 'Witaj kapłanie! Mam &nbsp;&nbsp;&nbsp;dla Ciebie paczkę od naszego wspólnego znajomego.'. Kapłan spojrzał na Ciebie z zaciekawieniem. 'Paczkę powiadasz?' - zapytał - 'No to &nbsp;&nbsp;&nbsp;wejdźmy do środka i porozmawiajmy. Weszliście do niewielkiego pomieszczenia, które służyło kapłanowi za miejsce odpoczynku od codziennej &nbsp;&nbsp;&nbsp;posługi, dla lokalnej społeczności.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej12()'>dalej</button>";
}

// funkcja - goscina u kapłana osady - gadka szmatka - wprowadzenie do kolejnego zadania - oddanie paczki
function dalej12(){
ekwipunek.splice(0, 1);
document.getElementById('tabelaekwipunku').innerHTML = (ekwipunek);
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usiedliście do stołu. Oddałeś kapłanow paczkę. Kapłan podał jedzenie i picie. Zaczęliście rozmawiać o pierdołach. W pewnym momencie kapłan &nbsp;&nbsp;&nbsp;zasępił się i zapytał: 'Czy nie chciałbyś wyświadczyć mi pewnej przysługi? Bo widzisz mamy tutaje pewne problemy. A my, jako lokalna &nbsp;&nbsp;&nbsp;społeczność nie mamy możliwości się nimi zająć.'.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej13()'>dalej</button>";
}

// funkcja - dalsza część rozmowy z kapłanem - szczegóły zadania 
function dalej13(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Zanim odejmę decyzję, to musisz kapłanie powiedzieć mi coś więcej o tych problemach.' - odpowiadasz. Kapłan zaczął mówić. 'Pierwsza sprawa &nbsp;&nbsp;&nbsp;to stwór grasujący na polach. Pożera zboże, przegania kmieci z pola. Drugim problemem jest monstrualny wilk - pożerający bydło, mający swoją &nbsp;&nbsp;&nbsp;kryjówkę w pieczarze za polami i lasem. Trzecim problemem jest pewien trol, uzurpujący sobie prawo do pobierania myta za przejazd mostem - &nbsp;&nbsp;&nbsp;utrudnia nam to handel z innymi wioskami.'";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej14()'>dalej</button>";
}

// funkcja - podejmowanie decyzji przez bohatera
function dalej14(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kapłan skończył mówić. Patrzy na Ciebie i oczekuje odpowiedzi. Co robisz?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='tak' onclick='dalej16()'>pomoc</button> <button id='nie' onclick='dalej15()'>nic z tego</button>";
}

// funkcja odmowa pomocy
function dalej15(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Przepraszam Cię przyjacielu, ale miałem dostarczyć tylko paczkę. Muszę wracać, gdyż pewnie moi mistrzowie przygotowali dla mnie nowe &nbsp;&nbsp;&nbsp;zadania do wykonania.'. Kapłąn ze zrozumieniem pokiwał tylko głową i nic nie powiedział. Podziękowałeś za gościnę, pożegnaliście się przed &nbsp;&nbsp;&nbsp;kaplicą i wróciłeś do domu, gdzie spędziłeś resztę życia na pracy. KONIEC";
document.getElementById('tekst2').innerHTML = "";
setTimeout("theend()", 30000);
}

// funkcja - zgoda na pomoc
function dalej16(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Dobrze. Mam jeszcze trochę czasu zanim moi mistrzowie powierzą mi nowe zadania do wykonania. Zabiorę się za Wasze problemy od razu.'. &nbsp;&nbsp;&nbsp;Kapłan uradował się. Był prawie wniebowzięty. Wyjaśnił Tobie jak trafić do poszczególnych zadań. Wziąłeś swój ekwipunek i poszedłeś.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej17()'>dalej</button>";
}

// funkcja - zadanie z pasikonikiem wstęp
function dalej17(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wyszedłeś z wioski. Idziesz na pola we wskazanym przez kapłana kierunku. Jest ciepło, łany zbóż kołyszą się na wietrze. Jest spokój. &nbsp;&nbsp;&nbsp;Zastanawiasz się czy ten polny stwór to nie majaki pijanych farmerów. Jednak dla świętego spokoju idziesz dalej i rozglądasz się po okolicy.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej18()'>dalej</button>";
}

// funkcja - zadanie z pasikonikiem
function dalej18(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doszedłeś prawie końca pól. Niczego niepokojącego niedostrzegłeś. Uzałeś, że trzeba się zająć drugim zadaniem. Wtem usłyszałeś dziwne, &nbsp;&nbsp;&nbsp;suche trzaski. Zacząłeś się rozglądać i ujżałeś jak z pobliskiego rowu zaczął wstawać stwór, wielki jak dorodny bawół. Przecierasz oczy ze &nbsp;&nbsp;&nbsp;zdumienia i nie wierzysz. Ten potwór wygląda jak gigantyczny PASIKONIK!!!!";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej19()'>dalej</button>";
}

// funkcja walki z pasikonikiem
function dalej19(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stanąłęś jak wryty. Stwór jeszcze Cię nie zauważył, więc masz czas podjąć decyzję. Co robisz?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='tak' onclick='dalej21()'>walczysz</button> <button id='nie' onclick='dalej20()'>uciekasz</button>";
}

// funkcja - bohater spękł i ucieka
function dalej20(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stwierdziłeś, że to nie na Twoje nerwy. Uciekłeś z tej okolicy, nie informując nikogo. Wróciłeś do domu i nigdy więcej nie wspomniałeś nikomu &nbsp;&nbsp;&nbsp;co zrobiłeś. Zająłeś się własnymi sprawami... KONIEC";
document.getElementById('tekst2').innerHTML = " ";
setTimeout("theend()", 30000);
}

// funkcja - bohater kozaczy i walczy
function dalej21(){
if ( wartośćbojowa > wartboj3 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walka była zacięta. Pełna uników, parowań, finezyjnych pchnięć bronią. Dzięki swoje nieustępliwości i perfekcji utłukłeś 'gada'. Po tej walce &nbsp;&nbsp;&nbsp;jesteś zmęczony i odpoczywasz. Masz cichą nadzieję, że reszta problemów nie będzie taka ciężka do wykonania. Po godzinie odpoczynku ruszasz &nbsp;&nbsp;&nbsp;w dalszą drogę.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej22()'>dalej</button>";
}
if ( wartośćbojowa == wartboj3 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walka jest zacięta, jednakże siły w niej są wyrównane. W pewnym momencie ten paskudny stwór zaczyna uciekać. Zdał sobie sprawę, że nie uda &nbsp;&nbsp;&nbsp;mu się wygrać tej walki. Rzucasz się za nim w pogoń. Nagle!!! Ta podła kreatura potyka się. Wpada w rów melioracyjny i skręca sobie kark. &nbsp;&nbsp;&nbsp;Stanąłeś jak wryty. Dość zaskakujące rozwiązanie problemu. Po odpoczynku idziesz rozwiązać drugi problem.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej22()'>dalej</button>";
}
if ( wartośćbojowa < wartboj3 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pomimo usilnych starań przegrałeś. Pasikonik złapał Cię w swoje kleszcze, mocno przytrzymał i odgryzł głowę swoimi szczękami. Krew obryzgała pasikonika oraz drogę. Po chwili odpoczynku pasikonik zaciągnął Twoje ciało do swej nory, w której Cię skonsumował... Koniec";
document.getElementById('tekst2').innerHTML = " ";
setTimeout("theend()", 45000);
}}

// funkcja awansu na poziom 1
function dalej22(){
s = Math.floor(Math.random()*10);
z = Math.floor(Math.random()*10);
w = Math.floor(Math.random()*10);
i = Math.floor(Math.random()*10);
c = Math.floor(Math.random()*10);

siła1 = siła1 + s;
zręczność1 = zręczność1 + z;
wytrzymałość1 = wytrzymałość1 + w;
inteligencja1 = inteligencja1 + i;
charyzma1 = charyzma1 + c;

document.getElementById('wyniksiła').innerHTML = siła1;
document.getElementById('wynikzręczność').innerHTML = zręczność1;
document.getElementById('wynikwytrzymałość').innerHTML = wytrzymałość1;
document.getElementById('wynikinteligencja').innerHTML = inteligencja1;
document.getElementById('wynikcharyzma').innerHTML = charyzma1;

document.getElementById('wynikpoziom').innerHTML = 1;
document.getElementById('wynikdoświadczenie').innerHTML = 150;
	
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;WSPANIALE!!!! Twoja postać awansowała na kolejny poziom.<br /><br />&nbsp;&nbsp;&nbsp;Twoje cechy wzrosły: <br/>siła: " + s + "<br />wytrzymałość: " + w + "<br />zręczność: " + z + "<br />inteligencja: " + i + "<br />charyzma: " + c;
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej23()'>dalej</button>";
}

// funkcja - droga do drugiego zadania
function dalej23(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idąc drogą w stronę kolejnego zadania, wchodzisz w las. Pachnie igliwiem, ptaki śpiewają. Przechodzisz koło sporej polany. Na jej końcu &nbsp;&nbsp;&nbsp;widzisz łanie z młodymi. Spostrzegła Cię i szybkimi susami zniknęła z młodymi w lesie. Idziesz dalej. Po około godzinie dochodzisz do miejsca &nbsp;&nbsp;&nbsp;opisanego przez kapłana.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej24()'>dalej</button>";
}

// funkcja zadanie z wilkiem wstęp
function dalej24(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Przed pieczarą widzisz resztki zwierząt. W powietrzu unosi się zapach gnijącego mięsa, który potrafi zemdlić nawet takiego twardziela jak Ty. &nbsp;&nbsp;&nbsp;'No cóż. Zadanie trzeba wykonać, pomimo zapachu. Tego dziwnego pasikonika w sumie się pokonało.' - przemknęła myś w Twojej głowie. &nbsp;&nbsp;&nbsp;Wchodzisz do jaskini.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej25()'>dalej</button>";
}

// funkcja zadanie z wilkiem zawiązanie akcji
function dalej25(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jaskinia jest większa i dość dobrze oświetlona niż wydawało się to z zewnątrz. Po kilku krokach dochodzisz prawie do jej środka. Wtem, zza &nbsp;&nbsp;&nbsp;sporego głazu, który stał przy wejściu wyszedł Bardzo duży wilk i tarasuje wyjście. Nie możesz ucieć. Musisz walczyć.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej27()'>dalej</button>";
}

// wartość bojowa bohatera po awansie
atakbohatera = broń1 + siła1 + zręczność1;
obronabohatera = zbroja1 + tarcza1 + zręczność1 + wytrzymałość1;

wartośćbojowa = atakbohatera + obronabohatera;
przekonanie = inteligencja1 + charyzma1;

// wartość bojowa wilka
broń4 = Math.floor(Math.random()*6);
zbroja4 =  Math.floor(Math.random()*8);

siła4 = Math.floor(Math.random()*50);
zręczność4 = Math.floor(Math.random()*50);
wytrzymałość4 = Math.floor(Math.random()*50);

atak4 = broń4 + siła4 + zręczność4;
obrona4 = zbroja4 + zręczność4 + wytrzymałość4;
wartboj4 = atak4 + obrona4;


// funkcja walka z wilkiem
function dalej27(){
if ( wartośćbojowa > wartboj4 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To była dzika walka. Nie było 'zlituj się'. Niestety wilk popełnił błąd. Fatalny dla niego w skutkach. Źle się ustawił, a Ty bez skrupółów wykorzystałeś jego błąd i z całej siły trafiłeś w jego kręgosłup. Tylko gruchnęło. Wilk momentalnie padł i zginął w konwulsjach, z pianą na pysku.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej28()'>dalej</button>";
document.getElementById('wynikdoświadczenie').innerHTML = 225;
}
if ( wartośćbojowa == wartboj4 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walka trwa już kilkanaście minut. Twoje ataki są nieskuteczne, ale też ataki wilka są dla Ciebie łatwe do odbicia. Wilk nie widząc szansy na wygraną, próbuje wycofać się z walki. Dziwnym zbiegiem okoliczności do jaskini wpadł promień słońca, odbił się od jakiejś wypolerowanej części metalowej, twojego ekwipunku i oślepiło wilka. Zdezorientowany zwierzak, zaczął uciekać. Niewidząc gdzie biegnie, przywalił w skałę, zza której wyszedł. Uderzył bardzo mocno. Czaszka trzasła. Mózg wypłynął a wilk zginął.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej28()'>dalej</button>";
document.getElementById('wynikdoświadczenie').innerHTML = 225;
}
if ( wartośćbojowa < wartboj4 ){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ten wilk jest lepszym przeciwnikiem niż myślałeś. Nie daje Ci chwili wytchnienia. W końcu popełniłeś błąd. Wilk to wykorzystał i rzucił się &nbsp;&nbsp;&nbsp;do gardła. Przewrócił Cię i rozerwał gardło. Krew buchneła z rozerwanych tętnic. Umierałeś w konwulsjach, a wilk stojąc na Twoich piersiach. &nbsp;&nbsp;&nbsp;Dzikie wycie rozległo się po jaskini i poszło w las... KONIEC";
document.getElementById('tekst2').innerHTML = " ";
setTimeout("theend()", 45000);
}}

// funkcja wyjście z jaskini wilka - droga do trola
function dalej28(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wyszedłeś z jaskini. Odchodzisz z tego miejsca jak najszybciej. Zostało ostatnie zadanie. Chcesz je wykonać jak najszybciej, odpocząć i wrócić &nbsp;&nbsp;&nbsp;do domu.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej29()'>dalej</button>";
}

// funkcja - bohater dociera do trola - wstęp
function dalej29(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idziesz w stronę mostu. Przez las, wąwóz. Wychodzisz na dużą polanę. Na drugim końcu widzisz już zarysy mostu. Z trudem dostrzegasz dużą  &nbsp;&nbsp;&nbsp;postać - to chyba ten trol. Podchodzisz bliżej i widzisz jak jakieś osoby coś wykrzykują i machają rękami. Po chwili wszystko ucicha. Duża postać  &nbsp;&nbsp;&nbsp;nadal stoi przy moście, reszta przechodzi.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej30()'>dalej</button>";
}

// funkcja - zadanie z trolem wstęp
function dalej30(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jesteś już blisko mostu. Widzisz ogromnego trola siedzącego na kamieniu, wspartego o dużych rozmiarów maczugę. Gdy już jesteś całkiem &nbsp;&nbsp;&nbsp;blisko trol mówi do Ciebie: 'Opłata za przejście, albo zjeżdżaj!!'. 'Nie mam zamiaru płacićm, ani przechodzić. Jestem tutaj z twojego powodu.' - &nbsp;&nbsp;&nbsp;odpowiadasz. 'Chce, żebyś zaprzestał pobierania nielegalnego myta. Jeżeli tego nie zrobisz będę musiał Cię zabić.' - mówisz dalej.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej31()'>dalej</button>";
}

// wartość bojowa trola oraz wyliczenie siły przekonywania
broń5 = Math.floor(Math.random()*6);
zbroja5 =  Math.floor(Math.random()*4);
tarcza5 =  Math.floor(Math.random()*4);

siła5 = Math.floor(Math.random()*50);
zręczność5 = Math.floor(Math.random()*50);
wytrzymałość5 = Math.floor(Math.random()*50);
inteligencja5 = Math.floor(Math.random()*50);
charyzma5 = Math.floor(Math.random()*50);

atak5 = broń5 + siła5 + zręczność5;
obrona5 = zbroja5 + tarcza5 + zręczność5 + wytrzymałość5;
wartboj5 = atak5 + obrona5;

przekonanie5 = (inteligencja5 + charyzma5);

//funkcja zadanie z trolem - akcja
function dalej31(){
	
if (przekonanie >= przekonanie5){
document.getElementById('tekst1').innerHTML = "'Skutecznie mnie przekonałeś. Poszukam sobie jakieś ucziwej roboty'. Trol wstał i odszedł w siną dal.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej32()'>dalej</button>";
document.getElementById('wynikdoświadczenie').innerHTML = 300
}

if (przekonanie < przekonanie5){
if ( wartośćbojowa > wartboj5){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Nic z Tego. To jest mój most i będę pobierał myto za jego przejście.' - odparł. Dyplomacja nie wyszła. Musisz z nim walczyć. Walka nie była &nbsp;&nbsp;&nbsp;długa. Miałeś szczęście. Udało Ci się go zranić pod pachą. Trol zawył dziko. Przechylił się i stracił równowagę i stoczył się ze skarpy do rzeki. &nbsp;&nbsp;&nbsp;Spojrzałeś w dół i ujrzałeś go martwego z roztrzaskaną głową.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej32()'>dalej</button>";
document.getElementById('wynikdoświadczenie').innerHTML = 300;
}

if (wartośćbojowa < wartboj5){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Nic z Tego. To jest mój most i będę pobierał myto za jego przejście.' - odparł. Dyplomacja nie wyszła. Musisz z nim walczyć. Trol wyglądający &nbsp;&nbsp;&nbsp;na nieporadnego i walczący wielgachną maczugą wydawał się łatwym celem. Wystarczyło jedno trafienie tej piekielnej maczugi, aby połamać &nbsp;&nbsp;&nbsp;Tobie żebra. Pogruchotane kości poprzebijały organy wewnętrzne. Straszliwy ból przeszył Twoje ciało. Padłeś nieprzytomny. Trol widząc to, z &nbsp;&nbsp;&nbsp;dzikim wrzaskiem zaczął skakać po tobie. Umarłeś. A twoje ciało trol zrzucił z mostu do rzeki... KONIEC";
document.getElementById('tekst2').innerHTML = "";
setTimeout("theend()", 45000);
}

else{
document.getElementById('wynik').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Nic z Tego. To jest mój most i będę pobierał myto za jego przejście.' - odparł. Dyplomacja nie wyszła. Musisz z nim walczyć. Po kilku minutach &nbsp;&nbsp;&nbsp;trol już nie wytrzymywał tempa walki. Zaczął uciekać przez most. Pobiegłeś za nim. W połowie mostu, zatoczył się od odniesionych ran i &nbsp;&nbsp;&nbsp;przeleciał przez barierkę. wyjrzałeś ostrożnie. Leżał na głazach wystających z rzeki. Zginął rozłupując czachę o skały.";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej32()'>dalej</button>";
document.getElementById('wynikdoświadczenie').innerHTML = 300;
}}}

// funkcja awans postaci na drugi poziom
function dalej32(){
s = Math.floor(Math.random()*10);
z = Math.floor(Math.random()*10);
w = Math.floor(Math.random()*10);
i = Math.floor(Math.random()*10);
c = Math.floor(Math.random()*10);

siła1 = siła1 + s;
zręczność1 = zręczność1 + z;
wytrzymałość1 = wytrzymałość1 + w;
inteligencja1 = inteligencja1 + i;
charyzma1 = charyzma1 + c;

document.getElementById('wyniksiła').innerHTML = siła1;
document.getElementById('wynikzręczność').innerHTML = zręczność1;
document.getElementById('wynikwytrzymałość').innerHTML = wytrzymałość1;
document.getElementById('wynikinteligencja').innerHTML = inteligencja1;
document.getElementById('wynikcharyzma').innerHTML = charyzma1;

document.getElementById('wynikpoziom').innerHTML = 2;
document.getElementById('wynikdoświadczenie').innerHTML = 300;
	
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;WSPANIALE!!!! Twoja postać awansowała na kolejny poziom.<br /><br />&nbsp;&nbsp;&nbsp;Twoje cechy wzrosły: <br/>siła: " + s + "<br />wytrzymałość: " + w + "<br />zręczność: " + z + "<br />inteligencja: " + i + "<br />charyzma: " + c;
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej33()'>dalej</button>";
}

// funkcja powrót do osady - zakończenie gry
function dalej33(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zakończyłeś trzecie zadanie. Zmęczony i poobijany wróciłeś do osady. Gdy tylko wszedłeś do osady zobaczyłeś jak mieszkańcy oraz uczestnicy &nbsp;&nbsp;&nbsp;karawany świętowali. Kapłan uleczył Twoje rany, dzięki temu mogłeś bawić się z innymi. Następnego dnia obudziłeś się potwornym kacem, na &nbsp;&nbsp;&nbsp;kopie siana w szczerym polu. I tak nastąpił szczęśliwy koniec tej przygody z dostarczeniem paczki. Jednakże nastał nowy dzień, więc.... <br />&nbsp;&nbsp;&nbsp;Co robisz?";
document.getElementById('tekst2').innerHTML = "<br />&nbsp;&nbsp;&nbsp;<button id='dalej' onclick='dalej34()'>dalej</button>";
}

// funkcja - podziękowanie za grę
function dalej34(){
document.getElementById('tekst1').innerHTML = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Niewierne Psy pragną podziękować tym wszystkim, którym chciało się zagrać w niniejszy tytuł. Studio ma nadzieję, że spełniło Wasze wysokie wymagania.";
document.getElementById('tekst2').innerHTML = " ";
setTimeout("theend()", 20000);
}