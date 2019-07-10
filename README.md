# dot-beat-time

`dot-beat-time` is a small (0.3kb), fast, dependency-free package for getting beat internet time.

## Motivation

The millennium is upon us. The age of the internet arrived long ago. Why are we still coordinating meetings across timezones? Fortunately internet time, which splits the day into 1000 beats and which is consistent across the world, is here to fix all that.

Example: you are in central Europe and wish to organise a meeting with your friend in Tokyo during your lunch. Instead of calculating what time it is in Tokyo during lunch, just say "let's talk at @500!".

## Installation

Install locally:

`yarn add dot-beat-time`

Alternatively `dot-beat-time` is also published as an ES module, meaning that you can import it directly using CDNs like [pika.dev](https://www.pika.dev/packages/dot-beat-time).

## API

### `fromDate`

`fromDate(date: Date, long?: boolean): string`

Takes a standard JS Date and outputs as an internet time formatted string e.g. `@255`.
If `true` is passed to the second argument, the beat will be fractional e.g. `@255.50`.

### `now`

`fromDate(long?: boolean): string`

Outputs the current time as a internet time formatted string e.g. `@650`.
If `true` is passed to the second argument, the beat will be fractional e.g. `@650.73`.

## Credit

The calculation for determining the current beat time has been taken from the [beats rust crate](https://docs.rs/beats).
