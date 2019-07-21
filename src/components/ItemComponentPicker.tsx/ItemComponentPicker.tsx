import { ItemIcon } from "components/ItemIcon/ItemIcon";
import * as React from "react";
import {
  ITEM_COMPONENTS_MASTER_LIST,
  ItemComponentId,
  getPossibleCompletedItemsFromSingleComponent
} from "utils/items";
import { makeRange } from "utils/arrays";
import { ItemComponent } from "types";

interface Props {}

const NUMBER_OF_COLUMNS = ITEM_COMPONENTS_MASTER_LIST.length + 1;

const ItemComponentPicker: React.FC<Props> = ({}) => {
  return (
    <div
      className="ItemComponentPicker-ColumnLayout"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`
      }}
    >
      <ComponentRow />
      {ITEM_COMPONENTS_MASTER_LIST.map((el, row) => {
        return <ResultantRow itemComponent={el.id} key={el.id}></ResultantRow>;
      })}
    </div>
  );
};

const ComponentRow: React.FC = () => {
  return (
    <>
      <ItemIcon isBlank={true}></ItemIcon>
      {ITEM_COMPONENTS_MASTER_LIST.map(el => {
        return <ItemIcon key={el.id} itemComponentId={el.id}></ItemIcon>;
      })}
    </>
  );
};

const ResultantRow: React.FC<{ itemComponent: ItemComponentId }> = props => {
  const memoizedFn = React.useCallback(
    getPossibleCompletedItemsFromSingleComponent,
    [props.itemComponent]
  );

  const possibilities = memoizedFn(props.itemComponent);

  return (
    <>
      <ItemIcon itemComponentId={props.itemComponent}></ItemIcon>
      {possibilities.map(possibility => {
        return (
          <ItemIcon
            itemFinishedId={possibility.finishedItem}
            key={possibility.finishedItem}
          />
        );
      })}
    </>
  );
};

export default ItemComponentPicker;
