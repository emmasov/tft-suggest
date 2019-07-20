import {
  ItemComponentId,
  ItemFinishedId,
  FINISHED_ITEMS_MASTER_RECORD,
  FINISHED_ITEMS_MASTER_LIST,
  getCompletedItemFromComponents
} from "./items";

const MAX_ITERATIONS = 100;

interface AvailableItemsWithFlag {
  __NO_ITEMS_AVAILABLE__: boolean;
}

export const generatePossibleCompletedItems = (
  itemComponents: ItemComponentId[]
): ItemFinishedId[] => {
  if (itemComponents.length < 2) {
    return [];
  }

  const availableItemsMasterList = itemComponents.reduce<
    Partial<Record<ItemComponentId, number>> & AvailableItemsWithFlag
  >(
    (acc, cur) => {
      acc[cur] = acc.hasOwnProperty(cur) ? acc[cur]! + 1 : 1;
      acc.__NO_ITEMS_AVAILABLE__ = false;
      return acc;
    },
    {
      __NO_ITEMS_AVAILABLE__: true
    }
  );

  // let combinations: ItemFinishedId = [];
  // let i = 0;

  // while (i < MAX_ITERATIONS) {
  //   let availableItemsCopy = { ...availableItemsMasterList };

  //   const completedItem = getCompletedItemFromComponents(itemA, itemB);
  //   i++;
  // }

  return [];
};

class AvailableItemsRecord {
  availableItemsMasterList: Partial<Record<ItemComponentId, number>>;
  hasNoitemsLeft: boolean;

  constructor(itemComponents: ItemComponentId[]) {
    this.availableItemsMasterList = itemComponents.reduce<
      Partial<Record<ItemComponentId, number>>
    >((acc, cur) => {
      acc[cur] = acc.hasOwnProperty(cur) ? acc[cur]! + 1 : 1;
      return acc;
    }, {});

    this.hasNoitemsLeft = itemComponents.length > 0;
  }

  public retrieveItem() {}
}
