import { z } from 'zod';
import { generateJsonArray } from './generate.js';

const propertySchema = z.string();

const objectSchema = z.object({
    property1: propertySchema,
    property2: propertySchema,
    property3: propertySchema,
    property4: propertySchema,
    property5: propertySchema,
    property6: propertySchema,
    property7: propertySchema,
    property8: propertySchema,
    property9: propertySchema,
    property10: propertySchema,
    property11: propertySchema,
    property12: propertySchema,
    property13: propertySchema,
    property14: propertySchema,
    property15: propertySchema,
    property16: propertySchema,
    property17: propertySchema,
    property18: propertySchema,
    property19: propertySchema,
    property20: propertySchema,
    property21: propertySchema,
    property22: propertySchema,
    property23: propertySchema,
    property24: propertySchema,
    property25: propertySchema,
    property26: propertySchema,
    property27: propertySchema,
    property28: propertySchema,
    property29: propertySchema,
    property30: propertySchema,
    property31: propertySchema,
    property32: propertySchema,
    property33: propertySchema,
    property34: propertySchema,
    property35: propertySchema,
    property36: propertySchema,
    property37: propertySchema,
    property38: propertySchema,
    property39: propertySchema,
    property40: propertySchema,
    property41: propertySchema,
    property42: propertySchema,
    property43: propertySchema,
    property44: propertySchema,
    property45: propertySchema,
    property46: propertySchema,
    property47: propertySchema,
    property48: propertySchema,
    property49: propertySchema,
    property50: propertySchema,
    property51: propertySchema,
    property52: propertySchema,
    property53: propertySchema,
    property54: propertySchema,
    property55: propertySchema,
    property56: propertySchema,
    property57: propertySchema,
    property58: propertySchema,
    property59: propertySchema,
    property60: propertySchema
});

const jsonArraySchema = z.array(objectSchema);

async function benchmark(size) {
  console.log(`Benchmarking with ${size} elements`);
  const exampleData = generateJsonArray(size);

   // Sync validation
  console.time("Validation time sync");
  jsonArraySchema.safeParse(exampleData);
  console.timeEnd("Validation time sync");

  // Async validation
  console.time("Validation time async");
  await jsonArraySchema.safeParseAsync(exampleData);
  console.timeEnd("Validation time async");

  console.log();
}

const samples = [1000, 10000, 50000, 100000, 150000, 200000, 250000];
for (const size of samples) {
  await benchmark(size);
}