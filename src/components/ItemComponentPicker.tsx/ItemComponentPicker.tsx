import { ItemIcon } from "components/ItemIcon/ItemIcon";
import * as React from "react";
import {
  ITEM_COMPONENTS_MASTER_LIST,
  ItemComponentId,
  getPossibleCompletedItemsFromSingleComponent,
  getCompletedItemFromComponents,
  ItemFinishedId
} from "utils/items";
import { useInventory } from "components/InventoryProvider/InventoryProvider";
import { createAddItemToInventoryAction } from "components/InventoryProvider/reducer";

const SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS = 15;

const ItemComponentPicker: React.FC = () => {
  return (
    <div className="ItemComponentPicker-ColumnLayout">
      <ComponentRow />
      {ITEM_COMPONENTS_MASTER_LIST.map((item, index) => {
        return (
          <ResultantRow
            itemComponent={item.id}
            key={item.id}
            rowIndex={index}
          ></ResultantRow>
        );
      })}
    </div>
  );
};

const ComponentRow: React.FC = () => {
  return (
    <div
      style={{
        marginBottom: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS,
        height: "fit-content"
      }}
    >
      <ItemIcon
        isBlank={true}
        htmlProps={{
          style: {
            marginRight: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS
          }
        }}
      ></ItemIcon>
      {ITEM_COMPONENTS_MASTER_LIST.map(el => {
        return <ItemIcon key={el.id} itemComponentId={el.id}></ItemIcon>;
      })}
    </div>
  );
};

const ResultantRow: React.FC<{
  itemComponent: ItemComponentId;
  rowIndex: number;
}> = props => {
  const [_, inventoryDispatch] = useInventory();

  return (
    <div>
      <ItemIcon
        grayedOut
        disabled
        shouldShowItemCount={false}
        itemComponentId={props.itemComponent}
        htmlProps={{
          style: {
            marginRight: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS
          }
        }}
      ></ItemIcon>
      {ITEM_COMPONENTS_MASTER_LIST.map((itemForCurrentColumn, index) => {
        const finishedItem = getCompletedItemFromComponents(
          props.itemComponent,
          itemForCurrentColumn.id
        );

        /** We want to avoid rendering an icon for a finished item if we've already rendered it */
        const finishedIconAlreadyRendered = index < props.rowIndex;

        return finishedIconAlreadyRendered ? (
          <ItemIcon key={index} isBlank></ItemIcon>
        ) : (
          <ItemIcon
            itemFinishedId={finishedItem}
            key={finishedItem}
            onItemFinishedClick={() =>
              inventoryDispatch(
                createAddItemToInventoryAction(
                  "finishedItemsInInventory",
                  finishedItem
                )
              )
            }
          />
        );
      })}
    </div>
  );
};

export default ItemComponentPicker;
