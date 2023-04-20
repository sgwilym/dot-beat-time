// Math for calculating beats taken from the `beats` rust crate: https://docs.rs/beats

function format(beats: number, long: boolean): string {
  const beatsFixed = long ? beats.toFixed(2) : Math.floor(beats).toFixed(0);

  return `@${beats < 10 ? '00' : beats < 100 ? '0' : ''}${beatsFixed}`;

function wrap(beats: number): number {
  return beats >= 1000 ? Math.abs(beats - 1000) : beats;
}

export function fromDate(date: Date, long?: boolean): string {
  const seconds =
    date.getUTCSeconds() +
    (date.getUTCMinutes() * 60 + (date.getUTCHours() + 1) * 3600);

  const beats = Math.round((seconds / 86.4) * 100) / 100;

  return format(wrap(beats), !!long);
}

export function now(long?: boolean): string {
  return fromDate(new Date(), long);
}
