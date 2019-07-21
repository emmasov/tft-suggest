import * as React from "react";
import { ItemComponentId, ItemFinishedId } from "utils/items";
import { buildPublicUrl } from "utils/misc";
import {
  ITEM_FINISHED_ID_TO_ICON_MAP,
  ITEM_COMPONENT_ID_TO_ICON_MAP
} from "./constants";
import { useInventory } from "components/InventoryProvider/InventoryProvider";
import "./ItemIcon.scss";

interface BaseProps {
  itemComponentId?: ItemComponentId;
  itemFinishedId?: ItemFinishedId;
  htmlProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  shouldShowItemCount?: boolean;
  isBlank?: true;
  disabled?: boolean;
  grayedOut?: boolean;
  onItemComponentClick?: (item: ItemComponentId) => void;
  onItemFinishedClick?: (item: ItemFinishedId) => void;
}

interface ItemComponentProps extends BaseProps {
  itemComponentId: ItemComponentId;
  onItemComponentClick: (item: ItemComponentId) => void;
}

interface BlankIconProps extends BaseProps {
  isBlank: true;
}

interface ItemFinishedIconProps extends BaseProps {
  itemFinishedId: ItemFinishedId;
  onItemFinishedClick: (item: ItemFinishedId) => void;
}

export const ItemIcon: React.FC<
  ItemComponentProps | BlankIconProps | ItemFinishedIconProps
> = props => {
  const { shouldShowItemCount = true } = props;
  const [inventoryState, inventoryDispatch] = useInventory();

  if (props.isBlank) {
    return (
      <button
        className={"ItemIcon"}
        {...props.htmlProps}
        style={{
          ...(props.htmlProps ? props.htmlProps.style : {}),
          visibility: "hidden",
          opacity: props.grayedOut ? 0.5 : 1
        }}
      ></button>
    );
  }

  if (props.itemFinishedId) {
    const countOfItemInInventory =
      inventoryState.finishedItemsInInventory[props.itemFinishedId];

    return (
      <button
        className={"ItemIcon"}
        {...props.htmlProps}
        onClick={() => {
          if (props.onItemFinishedClick && props.itemFinishedId) {
            props.onItemFinishedClick!(props.itemFinishedId);
          }
        }}
        style={{
          background: `url(${
            ITEM_FINISHED_ID_TO_ICON_MAP[props.itemFinishedId]
          })`,
          ...(props.htmlProps ? props.htmlProps.style : {})
        }}
      >
        {shouldShowItemCount && !props.grayedOut && (
          <ItemCountDisplay
            count={countOfItemInInventory || 0}
          ></ItemCountDisplay>
        )}
      </button>
    );
  }

  return (
    <button
      className={"ItemIcon"}
      {...props.htmlProps}
      onClick={() => {
        if (props.onItemComponentClick && props.itemComponentId) {
          props.onItemComponentClick!(props.itemComponentId);
        }
      }}
      style={{
        background: `url(${
          ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]
        })`,
        ...(props.htmlProps ? props.htmlProps.style : {})
      }}
    ></button>
  );
};

interface ItemCountDisplayProps {
  count: number;
}

const ItemCountDisplay: React.FC<ItemCountDisplayProps> = props => {
  return (
    <div className={"ItemCountDisplay"}>
      <span>{props.count}</span>
    </div>
  );
};
