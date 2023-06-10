/*MIT License

Copyright (c) 2022 Galahane Rouillé-Poirel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

var date = new Date();
var M = date.getMonth();
var D = date.getDate();

var angelName;

function GetAngelName()
{
    switch(M)
    {
        case 0: 
            if (D >= 1 && D <= 5) angelName = "Nemaniah";
            else if (D >= 6 && D <= 10) angelName = "Yeialed";
            else if (D >= 11 && D <= 15) angelName = "Harahel";
            else if (D >= 16 && D <= 20) angelName = "Mitzrael";
            else if (D >= 21 && D <= 25) angelName = "Umabel";
            else if (D >= 26 && D <= 30) angelName = "Iahhel";
            else if (D == 31) angelName = "Anauel";
            break;
        case 1: 
            if (D >= 1 && D <= 4) angelName = "Anauel";
            else if (D >= 5 && D <= 9) angelName = "Mehiel";
            else if (D >= 10 && D <= 14) angelName = "Damabiah";
            else if (D >= 15 && D <= 19) angelName = "Manakel";
            else if (D >= 20 && D <= 24) angelName = "Eyael";
            else if (D >= 25 && D <= 29) angelName = "Habuhiah";
            break;
        case 2: 
            if (D >= 1 && D <= 5) angelName = "Rochel";
            else if (D >= 6 && D <= 10) angelName = "Jabamiah";
            else if (D >= 11 && D <= 15) angelName = "Haiaiel";
            else if (D >= 16 && D <= 20) angelName = "Mumiah";
            else if (D >= 21 && D <= 25) angelName = "Vehuiah";
            else if (D >= 26 && D <= 30) angelName = "Jeliel";
            else if (D == 31) angelName = "Sitael";
            break;
        case 3: 
            if (D >= 1 && D <= 4) angelName = "Sitael";
            else if (D >= 5 && D <= 9) angelName = "Elemiah";
            else if (D >= 10 && D <= 14) angelName = "Mahasiah";
            else if (D >= 15 && D <= 19) angelName = "Lelahel";
            else if (D >= 20 && D <= 24) angelName = "Achaiah";
            else if (D >= 25 && D <= 30) angelName = "Cahetel";
            break;
        case 4: 
            if (D >= 1 && D <= 5) angelName = "Haziel";
            else if (D >= 6 && D <= 10) angelName = "Aladiah";
            else if (D >= 11 && D <= 15) angelName = "Lauviah";
            else if (D >= 16 && D <= 20) angelName = "Hahaiah";
            else if (D >= 21 && D <= 25) angelName = "Iezalel";
            else if (D >= 26 && D <= 31) angelName = "Mebahel";
            break;
        case 5: 
            if (D >= 1 && D <= 5) angelName = "Hariel";
            else if (D >= 6 && D <= 10) angelName = "Hekamiah";
            else if (D >= 11 && D <= 15) angelName = "Lauviah";
            else if (D >= 16 && D <= 21) angelName = "Caliel";
            else if (D >= 22 && D <= 26) angelName = "Leuviah";
            else if (D >= 27 && D <= 30) angelName = "Pahaliah";
            break;
        case 6: 
            if (D == 1) angelName = "Pahaliah";
            else if (D >= 2 && D <= 6) angelName = "Nelkhael";
            else if (D >= 7 && D <= 11) angelName = "Yeiayel";
            else if (D >= 12 && D <= 16) angelName = "Melahel";
            else if (D >= 17 && D <= 22) angelName = "Haheuiah";
            else if (D >= 23 && D <= 27) angelName = "Nith-Haiah";
            else if (D >= 28 && D <= 31) angelName = "Haaiah";
            break;
        case 7: 
            if (D == 1) angelName = "Haaiah";
            else if (D >= 2 && D <= 6) angelName = "Yerathel";
            else if (D >= 7 && D <= 12) angelName = "Seheiah";
            else if (D >= 13 && D <= 17) angelName = "Reiyel";
            else if (D >= 18 && D <= 22) angelName = "Omael";
            else if (D >= 23 && D <= 28) angelName = "Lecabel";
            else if (D >= 29 && D <= 31) angelName = "Vasariah";
            break;
        case 8:             
            if (D <= 2) angelName = "Vasariah";
            else if (D >= 3 && D <= 7) angelName = "Yehuiah";
            else if (D >= 8 && D <= 12) angelName = "Lehahiah";
            else if (D >= 13 && D <= 17) angelName = "Chavakhiah";
            else if (D >= 18 && D <= 23) angelName = "Menadel";
            else if (D >= 24 && D <= 28) angelName = "Aniel";
            else if (D >= 29 && D <= 30) angelName = "Haamiah";
            break;
        case 9:
            if (D <= 3) angelName = "Haamiah";
            else if (D >= 4 && D <= 8) angelName = "Rehael";
            else if (D >= 9 && D <= 13) angelName = "Ieiazel";
            else if (D >= 14 && D <= 18) angelName = "Hahahel";
            else if (D >= 19 && D <= 23) angelName = "Mikael";
            else if (D >= 24 && D <= 28) angelName = "Veuliah";
            else if (D >= 29 && D <= 31) angelName = "Yelahiah";
            break;
        case 10: 
            if (D <= 2) angelName = "Yelahiah";
            else if (D >= 3 && D <= 7) angelName = "Sealiah";
            else if (D >= 8 && D <= 12) angelName = "Ariel";
            else if (D >= 13 && D <= 17) angelName = "Asaliah";
            else if (D >= 18 && D <= 22) angelName = "Mihael";
            else if (D >= 23 && D <= 27) angelName = "Vehuel";
            else if (D >= 28 && D <= 30) angelName = "Daniel";
            break;
        case 11:
            if (D <= 2) angelName = "Daniel";
            else if (D >= 3 && D <= 7) angelName = "Hahasiah";
            else if (D >= 8 && D <= 12) angelName = "Imamiah";
            else if (D >= 13 && D <= 16) angelName = "Nanael";
            else if (D >= 17 && D <= 21) angelName = "Nithael";
            else if (D >= 22 && D <= 26) angelName = "Mebahiah";
            else if (D >= 27 && D <= 31) angelName = "Poyel";
            break;
    }

    document.getElementById('dailyAngel').innerHTML = "Today's Angel is " + angelName; // DEMO PURPOSE

    return angelName;
}