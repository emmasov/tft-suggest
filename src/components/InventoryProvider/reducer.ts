import {
  ItemType,
  ItemComponentId,
  ItemFinishedId,
  addItemToInventory,
  removeItemFromInventory,
  FINISHED_ITEMS_MASTER_RECORD
} from "utils/items";
import { Inventory } from "types";

const ADD_ITEM_TO_INVENTORY = "ADD_ITEM_TO_INVENTORY";
type ADD_ITEM_TO_INVENTORY = typeof ADD_ITEM_TO_INVENTORY;

const REMOVE_ITEM_FROM_INVENTORY = "REMOVE_ITEM_FROM_INVENTORY";
type REMOVE_ITEM_FROM_INVENTORY = typeof REMOVE_ITEM_FROM_INVENTORY;

export interface ActionAddItemToInventory {
  type: ADD_ITEM_TO_INVENTORY;
  inventorySlot: keyof InventorySlots;
  item: ItemComponentId | ItemFinishedId;
}

export interface ActionRemoveItemFromInventory {
  type: REMOVE_ITEM_FROM_INVENTORY;
  inventorySlot: keyof InventorySlots;
  item: ItemComponentId | ItemFinishedId;
}

export type InventoryAction =
  | ActionAddItemToInventory
  | ActionRemoveItemFromInventory;

interface InventorySlots {
  itemComponentsInInventory: Inventory<ItemComponentId>;
  finishedItemsInInventory: Inventory<ItemFinishedId>;
}

export interface InventoryState extends InventorySlots {}

export const initialInventoryState = {
  finishedItemsInInventory: {},
  itemComponentsInInventory: {}
};

export const inventoryReducer = (
  state: InventoryState,
  action: InventoryAction
): InventoryState => {
  switch (action.type) {
    case ADD_ITEM_TO_INVENTORY:
      /** When adding a finished item to the inventory, we need to remove its components */

      const shouldRemoveComponents =
        action.inventorySlot === "finishedItemsInInventory";

      const itemsToRemove: ItemComponentId[] =
        shouldRemoveComponents && FINISHED_ITEMS_MASTER_RECORD[action.item]
          ? FINISHED_ITEMS_MASTER_RECORD[action.item].buildsFrom
          : [];

      const newComponentInventory = itemsToRemove.reduce<
        Inventory<ItemComponentId>
      >((acc, cur) => {
        return removeItemFromInventory(acc, cur);
      }, state.itemComponentsInInventory);

      console.log(action.inventorySlot);

      return {
        ...state,
        itemComponentsInInventory: { ...newComponentInventory },
        [action.inventorySlot]: addItemToInventory(
          state[action.inventorySlot],
          action.item
        )
      };
    case REMOVE_ITEM_FROM_INVENTORY:
      return {
        ...state,
        [action.inventorySlot]: removeItemFromInventory(
          state[action.inventorySlot],
          action.item
        )
      };
    default:
      return state;
  }
};

export const createAddItemToInventoryAction = (
  inventorySlot: keyof InventorySlots,
  item: ItemComponentId | ItemFinishedId
): ActionAddItemToInventory => {
  return {
    type: ADD_ITEM_TO_INVENTORY,
    inventorySlot,
    item
  };
};

export const createRemoveItemFromInventoryAction = (
  inventorySlot: keyof InventorySlots,
  item: ItemComponentId | ItemFinishedId
): ActionRemoveItemFromInventory => {
  return {
    type: REMOVE_ITEM_FROM_INVENTORY,
    inventorySlot,
    item
  };
};
