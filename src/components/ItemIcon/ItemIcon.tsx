import * as React from "react";
import BF_SWORD_ICON from "assets/bfsword.png";
import CHAIN_VEST_ICON from "assets/chainvest.png";
import GIANTS_BELT_ICON from "assets/giantsbelt.png";
import NEGATRON_CLOAK_ICON from "assets/negatroncloak.png";
import RECUVE_BOW_ICON from "assets/recurvebow.png";
import NEEDLESSLY_LARGE_ROD_ICON from "assets/needlesslylargerod.png";
import TEAR_OF_THE_GODDESS_ICON from "assets/tearofthegoddess.png";
import SPATULA_ICON from "assets/spatula.png";
import { ItemComponentId } from "utils/items";

interface Props {
  itemComponentId: ItemComponentId;
  imgProps?: React.HTMLProps<HTMLImageElement>;
}

interface BlankProps {}

const ITEM_COMPONENT_ID_TO_ICON_MAP: Record<ItemComponentId, string> = {
  [ItemComponentId.BF_SWORD]: BF_SWORD_ICON,
  [ItemComponentId.CHAIN_VEST]: CHAIN_VEST_ICON,
  [ItemComponentId.GIANTS_BELT]: GIANTS_BELT_ICON,
  [ItemComponentId.NEEDLESSLY_LARGE_ROD]: NEEDLESSLY_LARGE_ROD_ICON,
  [ItemComponentId.RECURVE_BOW]: RECUVE_BOW_ICON,
  [ItemComponentId.SPATULA]: SPATULA_ICON,
  [ItemComponentId.TEAR_OF_THE_GODDESS]: TEAR_OF_THE_GODDESS_ICON,
  [ItemComponentId.NEGATRON_CLOAK]: NEGATRON_CLOAK_ICON
};

export const ItemIcon: React.FC<Props> = props => {
  return (
    <img
      className={"ItemIcon"}
      src={ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]}
      alt=""
    ></img>
  );
};
