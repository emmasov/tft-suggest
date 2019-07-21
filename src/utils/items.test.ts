import {
  ITEM_COMPONENTS_MASTER_LIST,
  getPossibleCompletedItemsFromSingleComponent
} from "./items";

describe.only("getPossibleCompletedItemsFromSingleComponent", () => {
  test("every component corresponds to only eight other finished items", () => {
    ITEM_COMPONENTS_MASTER_LIST.forEach(component => {
      expect(
        getPossibleCompletedItemsFromSingleComponent(component.id)
      ).toHaveLength(8);
    });
  });
});
