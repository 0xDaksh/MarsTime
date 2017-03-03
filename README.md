# MarsTime - What is Required?
A Project by Daksh Miglani (https://dak.sh)

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

# Why did I Make This and Why Mars?

Mars is the most-habitable planet in this Solar System after the Earth, Mars is the next obvious candidate for Manned Mission and I always loved Space Exploration, I'm a 15 year old Developer who wants to Personally Explore the Space but It's not an Easy Task and That's Why I try to Contribute to the Community as Much as I Can, It was hard for me to build this but people like @Jtauber helped me make this and at first I thought I won't be able to make this but I Eventually did, Kudos to my love for Space Exploration and Programming.
