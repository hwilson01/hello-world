// Simple dosing logic module

/**
 * Calculate next dose time based on last dose and interval.
 * Manual override takes precedence if provided.
 * @param {Date} lastDoseTime
 * @param {number} intervalHours
 * @param {number} [manualOverrideHours]
 * @returns {Date}
 */
function nextDoseTime(lastDoseTime, intervalHours, manualOverrideHours) {
  const hours = manualOverrideHours ?? intervalHours;
  return new Date(lastDoseTime.getTime() + hours * 60 * 60 * 1000);
}

/**
 * Calculate dose amount (ml) from weight (kg) and dosage per kg.
 * @param {number} weightKg
 * @param {number} dosagePerKg
 * @returns {number}
 */
function doseByWeight(weightKg, dosagePerKg) {
  if (weightKg <= 0 || dosagePerKg <= 0) {
    throw new Error('Invalid input');
  }
  return weightKg * dosagePerKg;
}

module.exports = { nextDoseTime, doseByWeight };
