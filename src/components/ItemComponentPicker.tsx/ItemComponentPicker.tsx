import { ItemIcon } from "components/ItemIcon/ItemIcon";
import * as React from "react";
import { ITEM_COMPONENTS_MASTER_LIST } from "utils/items";

interface Props {}

const NUMBER_OF_COLUMNS = ITEM_COMPONENTS_MASTER_LIST.length + 1;

const ItemComponentPicker: React.FC<Props> = ({}) => {
  return (
    <div
      className="ItemComponentPicker-ColumnLayout"
      style={{
        gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`
      }}
    >
      {ITEM_COMPONENTS_MASTER_LIST.map(el => {
        return <ItemIcon itemComponentId={el.id}></ItemIcon>;
      })}
    </div>
  );
};

export default ItemComponentPicker;
