# MarsTime - What is Required?
A Project by Daksh Miglani (https://dakshmiglani.com)

How To Calculate Mars-Time? (Thanks to @jtauber)

1. Formula of Martian Time Central (Prime Meredian) - (24 hours * Martian Sol Date) modulo 24
2. Calculate Earth Time in milliseconds with JS (new Date().getTime())
3. Get JDUT - 2440587.5 + (miliseconds / 8.64E7)
4. Get JDTT - JDUT + (TAIOFF=37 + 32.184) / 86400
5. Get J200 - JDTT - 2451545
6. USE J200 to get MSD
7. MSD - ((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096
8. MTC - (24 * MSD) % 24
9. Update Everything Every Second.
