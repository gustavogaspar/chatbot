webpackJsonp([15,93,94,95,96,97],{844:function(e,t,o){"use strict";function n(e,t){if(1===t)return e.one;var o=t%100;if(o<=20&&o>10)return e.other;var n=o%10;return n>=2&&n<=4?e.twoFour:e.other}function u(e,t,o){o=o||"regular";var u=n(e,t);return(u[o]||u).replace("{{count}}",t)}function a(e,t,o){o=o||{};var n=r[e];return o.addSuffix?o.comparison>0?"za "+u(n,t,"future"):u(n,t,"past")+" temu":u(n,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godzina",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};e.exports=t.default},845:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(196),u=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(0,u.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=a,e.exports=t.default},846:function(e,t,o){"use strict";function n(e,t,o,n){return u[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},847:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=Number(e);return String(t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(198),r=n(a),i=o(197),d=n(i),s={narrow:["nd","pn","wt","śr","cz","pt","sb"],short:["niedz.","pon.","wt.","śr.","czw.","piąt.","sob."],long:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},l={short:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],long:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},c={long:["w nocy","rano","po południu","wieczorem"]},f={ordinalNumber:u,weekday:(0,r.default)(s,"long"),weekdays:(0,d.default)(s,"long"),month:(0,r.default)(l,"long"),months:(0,d.default)(l,"long"),timeOfDay:(0,r.default)(c,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,d.default)(c,"long")};t.default=f,e.exports=t.default},848:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=o(199),a=n(u),r=o(201),i=n(r),d=o(200),s=n(d),l=o(202),c=n(l),f=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},w={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},h={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},k={any:[/^a/i,/^p/i]},g={ordinalNumbers:(0,s.default)(f),ordinalNumber:c.default,weekdays:(0,a.default)(m,"long"),weekday:(0,i.default)(p,"any"),months:(0,a.default)(y,"long"),month:(0,i.default)(w,"any"),timesOfDay:(0,a.default)(h,"long"),timeOfDay:(0,i.default)(k,"any")};t.default=g,e.exports=t.default},930:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=o(844),a=n(u),r=o(845),i=n(r),d=o(846),s=n(d),l=o(847),c=n(l),f=o(848),m=n(f),p={formatDistance:a.default,formatLong:i.default,formatRelative:s.default,localize:c.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=p,e.exports=t.default}});
//# sourceMappingURL=8667b47fbb6e611ee578.js.map