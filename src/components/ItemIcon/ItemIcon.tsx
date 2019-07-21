import * as React from "react";
import {
  ItemComponentId,
  ItemFinishedId,
  FINISHED_ITEMS_MASTER_LIST,
  FINISHED_ITEMS_MASTER_RECORD,
  canBuildFinishedItem
} from "utils/items";
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
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
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
      <div
        className={"ItemIcon"}
        {...props.htmlProps}
        style={{
          ...(props.htmlProps ? props.htmlProps.style : {}),
          visibility: "hidden",
          opacity: props.grayedOut ? 0.5 : 1
        }}
      ></div>
    );
  }

  if (props.itemFinishedId) {
    const countOfItemInInventory =
      inventoryState.finishedItemsInInventory[props.itemFinishedId];

    const requiredComponentsInInventory = canBuildFinishedItem(
      inventoryState.itemComponentsInInventory,
      props.itemFinishedId
    );

    const shouldBeGrayedOut =
      props.grayedOut ||
      (!requiredComponentsInInventory && !countOfItemInInventory);

    return (
      <div
        className={"ItemIcon"}
        {...props.htmlProps}
        data-disabled={shouldBeGrayedOut || !requiredComponentsInInventory}
        onClick={() => {
          if (
            props.onItemFinishedClick &&
            props.itemFinishedId &&
            requiredComponentsInInventory
          ) {
            props.onItemFinishedClick!(props.itemFinishedId);
          }
        }}
        style={{
          backgroundImage: `url(${
            ITEM_FINISHED_ID_TO_ICON_MAP[props.itemFinishedId]
          })`,
          opacity:
            shouldBeGrayedOut || !requiredComponentsInInventory ? 0.5 : 1,
          ...(props.htmlProps ? props.htmlProps.style : {})
        }}
      >
        {shouldShowItemCount && !shouldBeGrayedOut && (
          <ItemCountDisplay count={countOfItemInInventory}></ItemCountDisplay>
        )}
      </div>
    );
  }

  const countOfItemInInventory =
    inventoryState.itemComponentsInInventory[props.itemComponentId];

  return (
    <div
      className={"ItemIcon"}
      {...props.htmlProps}
      data-disabled={props.grayedOut}
      onClick={() => {
        if (props.onItemComponentClick && props.itemComponentId) {
          props.onItemComponentClick!(props.itemComponentId);
        }
      }}
      style={{
        backgroundImage: `url(${
          ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]
        })`,
        opacity: props.grayedOut ? 0.5 : 1,
        ...(props.htmlProps ? props.htmlProps.style : {})
      }}
    >
      {shouldShowItemCount && !props.grayedOut && (
        <ItemCountDisplay
          count={countOfItemInInventory || 0}
        ></ItemCountDisplay>
      )}
    </div>
  );
};

interface ItemCountDisplayProps {
  count: number | undefined;
}

const ItemCountDisplay: React.FC<ItemCountDisplayProps> = props => {
  if (props.count === undefined) {
    return null;
  }

  return (
    <div className={"ItemCountDisplay"}>
      <span className="GLOBAL--disable-selection">{props.count}</span>
    </div>
  );
};
