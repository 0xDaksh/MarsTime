import format from 'date-fns/format';

export const getTime = () => {
  const date = new Date();
  const ms = date.getTime();
  // calculating the julian day universal time
  // so ms / unix time stamp = (JDUT - 2440587.5)*86400
  // hence jdut = (ms/86400)+2440587.5
  // <- find at https://stackoverflow.com/questions/3990255/how-to-define-the-date-format
  const jdut = (ms/8.64E7) + 2440587.5;

  // calculating the julian day terrestrial time
  // so jdtt is defined as jdut + (tai + 32.184)/8.64E7
  // where tai=37 (international atomic time)
  const tai = 37;
  const jdtt = jdut + (tai + 32.184)/8.64E7; 

  const j2000 = jdtt - 2451545.0; // number of days since 1 JAN 2000 in TT;

  // msd <- mars sol date
  const msd = (((j2000-4.5)/1.027491252) + 44796.0 - 0.00096);
  const mtc = (24 * msd) % 24;
 
  return {
    mars: getMarsTime(mtc),
    earth: format(date, "hh[:]mm[:]ss"),
    msd,
  };
};


const getMarsTime = (mtc) => {
  const sec = mtc * 3600;
  let hh = Math.floor(sec/3600);
  if (hh < 10) hh = "0" + hh;
  
  let mm = Math.floor((sec % 3600) / 60);
  if (mm < 10) mm = "0" + mm;

  let ss = Math.round((sec % 3600) % 60);
  if (ss < 10) ss = "0" + ss;

  return hh + ":" + mm + ":" + ss;
};
