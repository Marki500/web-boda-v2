/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, d as renderHead, b as createAstro, f as renderSlot } from '../chunks/astro/server_cx-9Yj1i.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Noise = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`fixed w-[200%] h-[200vh] inset-0 z-[99999999] pointer-events-none opacity-50`, "class")} data-astro-cid-c33emtci></div> `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/Noise.astro", void 0);

const $$Map = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.523434629987!2d2.6753296764728747!3d42.22462914364637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bab8953aa255c1%3A0x878b6d608fcd37bd!2sMas%20Girc%C3%B3s%20(casa%20de%20col%C3%B2nies)!5e0!3m2!1ses!2ses!4v1722788087092!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/Map.astro", void 0);

const $$InfoMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="infomap-section" class="flex flex-col items-center justify-center gap-16 max-w-7xl m-auto pt-24 pb-24" data-astro-cid-7p4w4a2f> <h3 class="text-6xl" data-astro-cid-7p4w4a2f>Como llegar</h3> ${renderComponent($$result, "Map", $$Map, { "data-astro-cid-7p4w4a2f": true })} </section> `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/sections/InfoMap.astro", void 0);

const $$InfoSiteIcons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-row items-center justify-center gap-16 max-w-7xl m-auto pt-16" data-astro-cid-nz7lrr6f> <div class="flex flex-col flex-1 items-center justify-center border-r-2 border-black" data-astro-cid-nz7lrr6f> <svg class="w-16 h-16 icon-clock icon-info" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" data-astro-cid-nz7lrr6f> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" data-astro-cid-nz7lrr6f> <path d="M2370 5114 c-19 -2 -78 -9 -130 -15 -788 -90 -1517 -582 -1919 -1296
-375 -667 -423 -1512 -124 -2228 107 -256 283 -534 458 -722 76 -83 106 -92
150 -48 40 39 33 65 -48 157 -247 283 -415 589 -512 933 -290 1022 108 2094
995 2680 812 536 1891 523 2689 -33 839 -584 1217 -1607 960 -2600 -39 -150
-88 -280 -164 -437 -122 -251 -255 -435 -465 -645 -193 -193 -357 -316 -581
-434 -819 -432 -1826 -349 -2572 213 -118 89 -148 98 -185 58 -24 -25 -28 -57
-12 -87 5 -10 53 -51 105 -90 388 -292 838 -464 1330 -510 926 -86 1838 361
2361 1156 550 834 550 1954 0 2788 -411 626 -1048 1032 -1788 1142 -98 14
-474 27 -548 18z" data-astro-cid-nz7lrr6f></path> <path d="M2350 4698 c-638 -60 -1224 -415 -1588 -963 -252 -380 -380 -872
-344 -1327 15 -193 50 -366 108 -537 109 -323 268 -577 518 -827 248 -248 511
-412 830 -519 702 -234 1464 -97 2042 368 186 150 386 387 512 608 373 650
372 1471 -3 2124 -61 107 -154 241 -194 281 -40 40 -99 27 -119 -27 -13 -32
-3 -54 60 -141 196 -268 324 -582 369 -908 22 -155 17 -441 -10 -595 -192
-1098 -1215 -1828 -2305 -1644 -805 137 -1452 759 -1621 1559 -73 349 -50 720
66 1057 319 925 1260 1485 2222 1322 359 -61 664 -203 956 -443 67 -56 112
-86 128 -86 33 0 73 42 73 77 0 34 -83 116 -222 216 -428 312 -950 455 -1478
405z" data-astro-cid-nz7lrr6f></path> <path d="M2517 4428 c-28 -22 -37 -65 -37 -179 0 -127 14 -175 54 -185 44 -11
76 4 92 41 17 42 19 237 3 284 -17 48 -73 68 -112 39z" data-astro-cid-nz7lrr6f></path> <path d="M1375 3729 c-82 -24 -148 -117 -149 -209 -2 -102 14 -121 278 -357
132 -117 250 -216 263 -219 46 -12 99 46 86 94 -3 12 -110 114 -238 228 -137
121 -236 216 -239 230 -13 51 28 98 81 92 17 -2 167 -129 453 -383 236 -209
429 -384 429 -389 1 -4 -11 -23 -26 -40 -16 -17 -35 -42 -44 -56 l-16 -24
-108 97 c-90 81 -114 97 -141 97 -50 0 -87 -55 -68 -103 3 -8 69 -71 148 -141
121 -107 145 -132 155 -168 32 -106 109 -191 207 -227 97 -37 164 -29 309 35
6 2 195 -151 420 -341 226 -190 420 -348 433 -351 51 -14 101 37 88 90 -4 18
-131 130 -419 372 -251 211 -412 353 -411 363 1 9 8 40 16 69 13 49 31 70 266
312 150 154 259 273 267 294 19 46 19 127 -1 174 -34 82 -113 134 -204 135
-96 1 -122 -19 -374 -278 l-228 -236 -63 3 -63 3 -442 395 c-243 217 -464 407
-492 423 -53 28 -112 34 -173 16z m1890 -502 c8 -12 15 -35 15 -51 0 -26 -31
-61 -212 -242 l-213 -213 -49 56 -49 55 204 205 c112 112 213 208 223 212 29
11 65 1 81 -22z m-599 -523 c56 -45 76 -88 71 -156 -6 -104 -85 -172 -189
-165 -104 6 -172 85 -165 189 4 66 37 117 97 150 53 29 138 21 186 -18z" data-astro-cid-nz7lrr6f></path> <path d="M723 2625 c-35 -15 -49 -48 -39 -91 10 -40 58 -54 186 -54 128 0 176
14 186 54 11 44 -4 76 -41 92 -46 19 -247 19 -292 -1z" data-astro-cid-nz7lrr6f></path> <path d="M4103 2625 c-35 -15 -49 -48 -39 -91 10 -40 58 -54 186 -54 128 0
176 14 186 54 11 44 -4 76 -41 92 -46 19 -247 19 -292 -1z" data-astro-cid-nz7lrr6f></path> <path d="M2517 1048 c-28 -22 -37 -65 -37 -179 0 -127 14 -175 54 -185 44 -11
76 4 92 41 17 42 19 237 3 284 -17 48 -73 68 -112 39z" data-astro-cid-nz7lrr6f></path> </g> </svg> <p class="icons-title text-4xl mt-8" data-astro-cid-nz7lrr6f>
17:00h
</p> </div> <div class="flex flex-col flex-1 items-center justify-center border-r-2 border-black" data-astro-cid-nz7lrr6f> <svg class="w-16 h-16 icon-calendar icon-info" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" data-astro-cid-nz7lrr6f> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" data-astro-cid-nz7lrr6f> <path d="M1235 5103 c-135 -49 -205 -156 -205 -314 l0 -68 -402 -3 c-398 -3
       -404 -3 -450 -26 -60 -30 -120 -90 -150 -150 l-23 -47 0 -1935 0 -1935 23 -47
       c30 -60 90 -120 150 -150 l47 -23 737 -3 737 -2 33 29 c27 24 33 36 33 71 0
       35 -6 47 -33 71 l-32 29 -716 0 -716 0 -34 34 -34 34 0 1892 0 1892 34 34 34
       34 380 0 380 0 4 -87 c7 -141 58 -227 166 -280 47 -23 70 -28 132 -28 177 0
       288 115 298 308 l4 87 808 0 808 0 4 -87 c5 -99 26 -157 77 -216 82 -92 237
       -121 353 -64 108 53 159 139 166 280 l4 87 380 0 380 0 34 -34 34 -34 0 -266
       0 -266 -1900 0 c-2068 0 -1942 4 -1968 -55 -15 -33 -15 -57 0 -90 26 -59 -100
       -55 1968 -55 l1900 0 0 -989 0 -990 -92 44 c-51 24 -114 49 -140 56 l-48 11 0
       754 c0 562 -3 760 -12 779 -26 58 98 55 -1948 55 -2046 0 -1922 3 -1948 -55
       -17 -38 -17 -2412 0 -2450 26 -58 -50 -55 1407 -55 l1340 0 6 -37 c7 -46 45
       -213 52 -230 4 -10 -85 -13 -422 -13 -454 0 -469 -1 -495 -49 -13 -25 -13 -77
       0 -102 26 -48 37 -49 546 -49 l476 0 90 -95 c134 -142 276 -227 458 -276 123
       -33 339 -33 460 0 274 74 494 255 615 506 69 142 89 233 89 405 1 120 -3 160
       -22 230 -29 109 -98 250 -162 334 l-50 65 -2 1463 -3 1463 -23 47 c-31 62 -87
       119 -148 149 l-49 24 -401 3 -402 3 -4 87 c-7 140 -58 226 -166 279 -47 23
       -70 28 -132 28 -177 0 -288 -115 -298 -307 l-4 -88 -808 0 -808 0 -4 88 c-5
       98 -26 156 -77 215 -71 81 -213 117 -316 80z m144 -197 c47 -25 51 -49 51
       -287 0 -171 -3 -226 -14 -248 -35 -66 -137 -66 -172 0 -20 39 -20 462 0 498
       26 47 84 63 135 37z m2220 0 c47 -25 51 -49 51 -287 0 -171 -3 -226 -14 -248
       -35 -66 -137 -66 -172 0 -20 39 -20 462 0 498 26 47 84 63 135 37z m-2379
       -1961 l0 -295 -270 0 -270 0 0 295 0 295 270 0 270 0 0 -295z m750 0 l0 -295
       -275 0 -275 0 0 295 0 295 275 0 275 0 0 -295z m740 0 l0 -295 -270 0 -270 0
       0 295 0 295 270 0 270 0 0 -295z m750 0 l0 -295 -275 0 -275 0 0 295 0 295
       275 0 275 0 0 -295z m740 0 l0 -295 -270 0 -270 0 0 295 0 295 270 0 270 0 0
       -295z m-2980 -785 l0 -290 -270 0 -270 0 0 290 0 290 270 0 270 0 0 -290z
       m750 0 l0 -290 -275 0 -275 0 0 290 0 290 275 0 275 0 0 -290z m740 0 l0 -290
       -270 0 -270 0 0 290 0 290 270 0 270 0 0 -290z m750 0 l0 -290 -275 0 -275 0
       0 290 0 290 275 0 275 0 0 -290z m740 6 l0 -283 -82 -6 c-46 -4 -167 -7 -270
       -7 l-188 0 0 290 0 290 270 0 270 0 0 -284z m185 -516 c192 -60 359 -194 442
       -355 69 -134 88 -210 88 -355 0 -145 -19 -222 -88 -355 -58 -111 -181 -234
       -292 -292 -133 -69 -210 -88 -355 -88 -103 0 -138 4 -200 24 -256 79 -431 254
       -510 506 -87 281 26 619 268 797 73 54 201 113 287 132 98 22 267 15 360 -14z
       m-3165 -275 l0 -295 -270 0 -270 0 0 295 0 295 270 0 270 0 0 -295z m750 0 l0
       -295 -275 0 -275 0 0 295 0 295 275 0 275 0 0 -295z m740 0 l0 -295 -270 0
       -270 0 0 295 0 295 270 0 270 0 0 -295z m750 232 c0 -58 -3 -67 -41 -117 -22
       -30 -60 -95 -84 -145 -38 -79 -53 -124 -79 -237 l-6 -28 -170 0 -170 0 0 295
       0 295 275 0 275 0 0 -63z" data-astro-cid-nz7lrr6f></path> <path d="M4329 1043 l-169 -167 -73 71 c-106 104 -141 116 -199 64 -27 -24
       -33 -36 -33 -70 0 -40 6 -47 133 -173 185 -186 153 -192 427 82 119 118 218
       225 221 238 16 60 -34 122 -99 122 -38 0 -47 -7 -208 -167z" data-astro-cid-nz7lrr6f></path> <path d="M451 3906 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83
       124 -149 87z" data-astro-cid-nz7lrr6f></path> <path d="M2018 584 c-34 -18 -48 -43 -48 -84 0 -42 15 -67 50 -85 43 -22 76
       -18 112 14 27 24 33 36 33 71 0 35 -6 47 -33 71 -36 32 -72 36 -114 13z" data-astro-cid-nz7lrr6f></path> </g> </svg> <p class="icons-title text-4xl mt-8" data-astro-cid-nz7lrr6f>
03 / 05 / 2025
</p> </div> <div class="flex flex-col flex-1 items-center justify-center hover-icon" data-astro-cid-nz7lrr6f> <svg class="w-16 h-16 icon-map icon-info" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" data-astro-cid-nz7lrr6f> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" data-astro-cid-nz7lrr6f> <path d="M2394 5110 c-364 -39 -708 -203 -969 -465 -312 -311 -476 -710 -476
-1154 0 -397 125 -794 390 -1240 39 -66 168 -260 187 -282 8 -8 14 -18 14 -22
0 -3 -171 -8 -380 -9 -330 -3 -381 -5 -395 -19 -24 -24 -525 -1243 -525 -1278
0 -57 68 -91 113 -56 10 7 36 55 57 107 l39 93 256 3 255 2 -15 -37 c-9 -21
-69 -165 -133 -321 l-116 -282 -254 0 c-199 0 -253 3 -249 13 3 6 22 54 42
106 30 74 36 99 29 119 -13 37 -55 59 -91 47 -32 -11 -53 -49 -128 -236 -54
-131 -54 -161 -5 -186 20 -10 532 -12 2533 -10 l2509 2 19 24 c10 13 19 32 19
42 0 28 -745 1829 -765 1848 -14 14 -63 16 -395 19 -209 1 -380 6 -380 9 0 4
6 14 14 22 19 22 148 216 187 282 265 446 390 843 390 1240 0 444 -164 843
-476 1154 -344 344 -823 515 -1301 465z m307 -150 c476 -49 888 -317 1128
-735 189 -330 241 -714 149 -1115 -106 -468 -391 -964 -845 -1471 -163 -183
-545 -549 -573 -549 -35 0 -514 472 -675 665 -455 544 -706 1038 -775 1523
-16 116 -14 329 4 442 115 713 708 1232 1427 1249 31 0 103 -4 160 -9z m-1336
-3187 c-3 -10 -45 -111 -92 -225 l-86 -208 -254 0 c-146 0 -253 4 -251 9 2 5
43 106 92 225 l90 216 254 0 c238 0 254 -1 247 -17z m401 -110 c208 -246 674
-698 765 -742 42 -21 63 -8 233 142 l144 127 436 0 c423 0 437 1 456 20 27 27
26 81 -1 106 -20 18 -43 19 -381 22 l-360 3 88 92 c49 51 140 152 203 225
l113 132 397 0 397 0 90 -216 c49 -119 90 -220 92 -224 2 -5 -91 -10 -207 -12
-201 -3 -211 -4 -232 -25 -14 -14 -22 -33 -21 -54 2 -62 7 -63 279 -69 l247
-5 52 -122 52 -123 -782 0 c-851 0 -816 2 -830 -56 -4 -14 -4 -34 -1 -44 3
-10 178 -169 388 -352 l381 -333 -217 -3 -217 -2 -771 656 c-425 361 -784 662
-800 667 -38 15 -72 -2 -92 -45 -11 -24 -493 -1187 -524 -1265 -4 -10 -42 -13
-144 -13 -76 0 -139 1 -139 3 0 2 62 154 138 338 76 184 142 347 146 362 5 23
1 33 -23 57 l-29 30 -290 0 -290 0 52 123 52 122 325 3 c323 2 326 2 346 25
11 12 69 141 128 287 60 146 113 271 118 278 6 7 33 12 67 12 l58 0 108 -127z
m669 -948 l658 -560 -452 -3 c-249 -1 -652 -1 -896 0 l-443 3 231 562 c128
310 235 562 238 560 3 -1 302 -254 664 -562z m2366 -244 c71 -172 129 -315
129 -317 0 -2 -210 -4 -467 -4 l-468 1 -360 315 c-198 174 -362 318 -364 320
-3 2 312 3 698 2 l702 -3 130 -314z" data-astro-cid-nz7lrr6f></path> <path d="M2476 4180 c-115 -14 -250 -67 -307 -121 -36 -34 -38 -77 -6 -107 32
-31 55 -28 144 18 97 49 154 62 263 62 106 -1 196 -27 279 -83 294 -196 334
-593 85 -842 -254 -254 -680 -188 -848 132 -77 146 -84 287 -25 457 l33 94
-20 27 c-26 35 -77 43 -105 17 -24 -22 -54 -87 -76 -168 -12 -42 -17 -98 -17
-181 1 -102 5 -132 27 -200 37 -113 90 -198 177 -286 126 -127 300 -199 480
-199 298 0 565 197 655 484 55 172 41 346 -40 511 -73 151 -171 248 -320 320
-125 60 -246 81 -379 65z" data-astro-cid-nz7lrr6f></path> </g> </svg> <p class="icons-title text-4xl mt-8" data-astro-cid-nz7lrr6f>
Mas Gircos
</p> </div> </section> `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/InfoSiteIcons.astro", void 0);

const $$InfoSite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="infosite-section" class="flex flex-row items-center justify-center gap-16 max-w-7xl m-auto pt-24" data-astro-cid-upkrvolq> <div class="flex-1" data-astro-cid-upkrvolq> <p data-astro-cid-upkrvolq>Después de 12 años, 4 meses y 17 días, de mil viajes Cabia-Portezuelo, de infinitas comidas y celebraciones, etc. Después de 11 bodas (y ninguna era la nuestra) y de escuchar en cada una “¿Y el anillo pa’ cuando?” Después de tantos y tantos buenos momentos compartidos y, sobre todo, después de tanta expectativa creada, el gran día se acerca.</p> <p data-astro-cid-upkrvolq>¡Nos casamos!</p> <p data-astro-cid-upkrvolq>Lo tenemos todo: el traje, el vestido, los fotógrafos, el sitio, el dj, las flores… Pero nos falta lo más importante: ¡contar contigo en este día tan importante para nosotros! Así que desliza hacia abajo y confírmanos lo que ya sabemos: ¡y es que vienes seguro!</p> <p data-astro-cid-upkrvolq>La boda tendrá lugar el día 3 de Mayo 2025, a las 17:00h, en la casa rural Más Gircós (Sant Ferriol, muy cerquita de Besalú).</p> </div> <div class="flex-1" data-astro-cid-upkrvolq> <img src="masgircos1.webp" alt="Mas Gircos" class="black-and-white" id="black-and-white" data-astro-cid-upkrvolq> </div> </section> ${renderComponent($$result, "InfoSiteIcons", $$InfoSiteIcons, { "data-astro-cid-upkrvolq": true })} `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/sections/InfoSite.astro", void 0);

const $$Formulario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-row text-center items-center justify-center gap-16 max-w-7xl m-auto pt-16 pb-16" data-astro-cid-fosgczaw> <form id="contactForm" class="w-full" data-astro-cid-fosgczaw> <label class="text-2xl" data-astro-cid-fosgczaw>¿Asistirás?</label><br data-astro-cid-fosgczaw> <div class="radios flex flex-row gap-8 items-center justify-center" data-astro-cid-fosgczaw> <div class="radio1" data-astro-cid-fosgczaw> <input type="radio" id="attendYes" name="attend" value="yes" data-astro-cid-fosgczaw> <label for="attendYes" data-astro-cid-fosgczaw>Sí</label> </div> <div class="radio2" data-astro-cid-fosgczaw> <input type="radio" id="attendNo" name="attend" value="no" data-astro-cid-fosgczaw> <label for="attendNo" data-astro-cid-fosgczaw>No</label><br data-astro-cid-fosgczaw> </div> </div> <!-- Elementos que aparecen si seleccionan "No" --> <div class="guests flex flex-row gap-8 justify-center hiddena" id="guestsNo" data-astro-cid-fosgczaw> <div class="column-invitados-boda" id="guestNoCountInput" data-astro-cid-fosgczaw> <div class="flex flex-row gap-4 items-center justify-center" data-astro-cid-fosgczaw> <label for="guestsCountNo" data-astro-cid-fosgczaw>¿Cuántos no podeis asistir?</label> <input type="number" id="guestsCountNo" name="guestsCountNo" min="1" value="1" data-astro-cid-fosgczaw> </div> <div id="guestNamesNoAssist" data-astro-cid-fosgczaw></div> </div> </div> <!-- Elementos que aparecen si seleccionan "Sí" --> <div class="guests flex flex-row gap-8 justify-center hiddena" id="guests" data-astro-cid-fosgczaw> <div class="column-invitados-boda" id="guestCountInput" data-astro-cid-fosgczaw> <div class="flex flex-row gap-4 items-center justify-center" data-astro-cid-fosgczaw> <label for="guestsCount" data-astro-cid-fosgczaw>¿Cuántos asistiréis?</label> <input type="number" id="guestsCount" name="guestsCount" min="1" value="1" data-astro-cid-fosgczaw> </div> <div id="guestNames" data-astro-cid-fosgczaw></div> </div> <div class="invitados-dormir " id="overnightInput" data-astro-cid-fosgczaw> <div class="flex flex-row gap-4 items-center justify-center" data-astro-cid-fosgczaw> <label for="overnightCount" data-astro-cid-fosgczaw>¿Cuántos os quedaréis a dormir? (30€/noche)</label> <input type="number" id="overnightCount" name="overnightCount" min="1" value="1" data-astro-cid-fosgczaw> </div> <div id="overnightGuestNames" data-astro-cid-fosgczaw></div> </div> </div> <div class="hiddena" id="allergiesInput" data-astro-cid-fosgczaw> <label for="allergies" data-astro-cid-fosgczaw>Alergias, intolerancias, preferencias dietéticas:</label><br data-astro-cid-fosgczaw> <textarea id="allergies" name="allergies" rows="4" data-astro-cid-fosgczaw></textarea> </div> <!-- Sección de servicio de peluquería, inicialmente oculta --> <div class="radios-pelu flex flex-col items-center justify-center mt-8 hiddena" id="peluInput" data-astro-cid-fosgczaw> <label class="text-2xl" data-astro-cid-fosgczaw>¿Necesitaréis servicio de peluquería y/o maquillaje?</label> <div class="radio-pelu flex flex-row items-center justify-center gap-8" data-astro-cid-fosgczaw> <div class="radio1-pelu" data-astro-cid-fosgczaw> <input type="radio" id="peluSi" name="pelu" value="yes" data-astro-cid-fosgczaw> <label for="peluSi" data-astro-cid-fosgczaw>Sí</label> </div> <div class="radio2-pelu" data-astro-cid-fosgczaw> <input type="radio" id="peluNo" name="pelu" value="no" data-astro-cid-fosgczaw> <label for="peluNo" data-astro-cid-fosgczaw>No</label><br data-astro-cid-fosgczaw> </div> </div> <div id="peluCountNumber" class="flex flex-row gap-4 items-center justify-center hiddena" data-astro-cid-fosgczaw> <label for="peluCount" data-astro-cid-fosgczaw>¿Cuantas necesitaréis el servicio?</label> <input type="number" id="peluCount" name="peluCount" min="1" value="1" data-astro-cid-fosgczaw> </div> <div id="peluGuestNames" data-astro-cid-fosgczaw></div> <!-- Div para los nombres de los invitados que desean servicio de peluquería --> </div> <button type="submit" class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-amber-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none" data-astro-cid-fosgczaw>Enviar</button> </form> <div id="successMessage" class="mensaje-exito" data-astro-cid-fosgczaw>¡Gracias por confirmar!</div> <div id="errorMessage" class="mensaje-error" data-astro-cid-fosgczaw>Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.</div>  </section> `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/Formulario.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="flex flex-row text-center items-center justify-center gap-16 max-w-7xl m-auto pt-16 pb-16" data-astro-cid-rice64zl> <script src="/countdown.js" type="module" defer><\/script> <div class="wrap" data-astro-cid-rice64zl> <div class="countdown" data-astro-cid-rice64zl> <div class="bloc-time days" data-init-value="0" data-astro-cid-rice64zl> <span class="count-title" data-astro-cid-rice64zl>Dias</span> <div class="figure days-1" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> <div class="figure days-2" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> <div class="figure days-3" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> </div> <div class="bloc-time hours" data-init-value="24" data-astro-cid-rice64zl> <span class="count-title" data-astro-cid-rice64zl>Horas</span> <div class="figure hours-1" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> <div class="figure hours-2" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> </div> <div class="bloc-time minutes" data-init-value="0" data-astro-cid-rice64zl> <span class="count-title" data-astro-cid-rice64zl>Minutos</span> <div class="figure minutes-1" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> <div class="figure minutes-2" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> </div> <div class="bloc-time seconds" data-init-value="0" data-astro-cid-rice64zl> <span class="count-title" data-astro-cid-rice64zl>Segundos</span> <div class="figure seconds-1" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> <div class="figure seconds-2" data-astro-cid-rice64zl> <span class="major" data-astro-cid-rice64zl>0</span> </div> </div> </div> </div> </section> '])), maybeRenderHead());
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/Countdown.astro", void 0);

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-row text-center items-center justify-center gap-16  m-auto pt-16 pb-16 bg-[#CFCFCF]"> <form id="cancionForm"> <p class="text-4xl mb-10">Tienes una cancion que sabes que no pueda faltar ese dia?</p> <input type="text" name="cancion" id="cancion"> <button type="submit" class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-amber-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">Guardar</button> </form>  </section>`;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/Music.astro", void 0);

const $$HeroArrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="118px" viewBox="0 0 100 117" version="1.1"> <g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M31,28.17a30.3,30.3,0,0,0-3.41,1.62A35.44,35.44,0,0,0,10,54.44a43.29,43.29,0,0,0-.79,11.15,46.59,46.59,0,0,0,2.1,10.94.58.58,0,0,0,.71.4.57.57,0,0,0,.39-.71,50.31,50.31,0,0,1-1.48-10.71,46.17,46.17,0,0,1,.83-10.72A33.63,33.63,0,0,1,28.53,31.54c.81-.44,1.62-.84,2.45-1.19a31.74,31.74,0,0,0,.54,5c2,10.21,9,18.43,19.85,18.27,6.65,0,10.3-4,11.15-8.76a15.17,15.17,0,0,0-5.18-13.62c-6.5-5.7-15.93-6.75-24.74-3.68a29,29,0,0,1,7.54-18.1A24.69,24.69,0,0,1,52.93,2.23a31.5,31.5,0,0,1,10.44-.4,35.42,35.42,0,0,1,4.51.69.22.22,0,0,0,.28-.13A.21.21,0,0,0,68,2.12,22.92,22.92,0,0,0,63.59.53a26.19,26.19,0,0,0-11,.12A25.78,25.78,0,0,0,39,8.36a30.63,30.63,0,0,0-8,19.81m1.56,1.54A29.28,29.28,0,0,0,33.09,35c1.84,9.38,8.27,17,18.24,16.76,5.47-.17,8.42-3.36,9.08-7.3A13.12,13.12,0,0,0,56,32.81c-6.11-5.41-15.09-6.19-23.4-3.1"></path><path class="cls-1" d="M11.66,76.61c-1-1.69-2.54-4.23-2.7-4.51L6,67.3.69,59.75a.37.37,0,1,0-.63.4l4.37,8.06,2.69,5c.19.33,2.31,4,3.2,5.48a2.47,2.47,0,0,0,1.26,1.12A1.42,1.42,0,0,0,12.85,79a19.43,19.43,0,0,0,1.09-3.57l3.42-12c1.14-4.13,1.83-5.39.83-5.74-.2-.08-.42,0-.85.38a1.58,1.58,0,0,0-.3.55,36.78,36.78,0,0,0-1.33,4.28L11.89,74.83c0,.11-.09,1-.23,1.78"></path></g></g></svg>`;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/components/HeroArrow.astro", void 0);

const $$Hero2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero-section" class="static h-screen flex flex-col gap-16 items-center justify-center" data-astro-cid-giquq4dz> <div class="flex flex-row gap-40 row-img" data-astro-cid-giquq4dz> <div class="container-img" data-astro-cid-giquq4dz> <img loading="lazy" class="img-hero scroll-effect" src="./img1-test.webp" alt="" data-astro-cid-giquq4dz> </div> <object id="hero-image" type="image/svg+xml" data="./hero-img-draw.svg" class="w-[500px] scroll-effect" data-astro-cid-giquq4dz></object> </div> <div class="absolute bottom-[-20px] scroll-effect" data-astro-cid-giquq4dz> ${renderComponent($$result, "HeroArrow", $$HeroArrow, { "data-astro-cid-giquq4dz": true })} </div> </section> `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/sections/Hero2.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="TODO"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favico-contravientoymarea.png"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Noise", $$Noise, {})} ${renderComponent($$result, "Hero2", $$Hero2, {})} ${renderComponent($$result, "Countdown", $$Countdown, {})} ${renderComponent($$result, "InfoSite", $$InfoSite, {})} ${renderComponent($$result, "Formulario", $$Formulario, {})} ${renderComponent($$result, "Music", $$Music, {})} ${renderComponent($$result, "InfoMap", $$InfoMap, {})}</body></html>`;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Andrea & Marc" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/pages/index.astro", void 0);

const $$file = "C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
