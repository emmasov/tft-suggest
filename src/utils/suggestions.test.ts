import { generatePossibleCompletedItems } from "./suggestions";
import { ItemComponentId, ItemFinishedId } from "./items";

describe.skip("generatePossibleCompletedItems", () => {
  describe("simple combinations", () => {
    test("returns an empty array when given only one component", () => {
      expect(
        generatePossibleCompletedItems([ItemComponentId.TEAR_OF_THE_GODDESS])
      ).toEqual([]);
    });

    test("returns the correct item combination for infinity edge", () => {
      expect(
        generatePossibleCompletedItems([
          ItemComponentId.BF_SWORD,
          ItemComponentId.BF_SWORD
        ])
      ).toEqual(expect.arrayContaining([ItemFinishedId.INFINITY_EDGE]));
    });

    test("returns the correct item combination for spear of shojin", () => {
      expect(
        generatePossibleCompletedItems([
          ItemComponentId.BF_SWORD,
          ItemComponentId.TEAR_OF_THE_GODDESS
        ])
      ).toEqual(expect.arrayContaining([ItemFinishedId.SPEAR_OF_SHOJIN]));
    });

    test("returns the correct item combination for seraphs embrace", () => {
      expect(
        generatePossibleCompletedItems([
          ItemComponentId.BF_SWORD,
          ItemComponentId.TEAR_OF_THE_GODDESS
        ])
      ).toEqual(expect.arrayContaining([ItemFinishedId.SERAPHS_EMBRACE]));
    });
  });

  describe("complex combinations", () => {
    test("four of the same item component should return two of the same finished item", () => {
      expect(
        generatePossibleCompletedItems([
          ItemComponentId.BF_SWORD,
          ItemComponentId.BF_SWORD,
          ItemComponentId.BF_SWORD,
          ItemComponentId.BF_SWORD
        ])
      ).toEqual(
        expect.arrayContaining([
          ItemFinishedId.INFINITY_EDGE,
          ItemFinishedId.INFINITY_EDGE
        ])
      );
    });

    test("an odd amount of combinations", () => {
      expect(
        generatePossibleCompletedItems([
          ItemComponentId.BF_SWORD,
          ItemComponentId.BF_SWORD,
          ItemComponentId.TEAR_OF_THE_GODDESS
        ])
      ).toEqual(
        expect.arrayContaining([
          ItemFinishedId.INFINITY_EDGE,
          ItemFinishedId.SPEAR_OF_SHOJIN
        ])
      );
    });
  });
});
