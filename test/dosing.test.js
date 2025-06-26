const assert = require('assert');
const { test } = require('node:test');
const { nextDoseTime, doseByWeight } = require('../src/dosing');

test('calculates next dose using interval', () => {
  const last = new Date('2023-01-01T10:00:00Z');
  const next = nextDoseTime(last, 4);
  assert.strictEqual(next.toISOString(), '2023-01-01T14:00:00.000Z');
});

test('honors manual override', () => {
  const last = new Date('2023-01-01T10:00:00Z');
  const next = nextDoseTime(last, 4, 2);
  assert.strictEqual(next.toISOString(), '2023-01-01T12:00:00.000Z');
});

test('calculates dose by weight', () => {
  const dose = doseByWeight(10, 2);
  assert.strictEqual(dose, 20);
});

test('throws for invalid input', () => {
  assert.throws(() => doseByWeight(0, 2));
});
