import * as React from "react";
import BF_SWORD_ICON from "assets/bfsword.png";
import CHAIN_VEST_ICON from "assets/chainvest.png";
import GIANTS_BELT_ICON from "assets/giantsbelt.png";
import NEGATRON_CLOAK_ICON from "assets/negatroncloak.png";
import RECUVE_BOW_ICON from "assets/recurvebow.png";
import NEEDLESSLY_LARGE_ROD_ICON from "assets/needlesslylargerod.png";
import TEAR_OF_THE_GODDESS_ICON from "assets/tearofthegoddess.png";
import SPATULA_ICON from "assets/spatula.png";
import BLADE_OF_THE_RUINED_KING_ICON from "assets/bladeoftheruinedking.png";
import BLOODTHIRSTER_ICON from "assets/bloodthirster.png";
import CURSED_BLADE_ICON from "assets/cursedblade.png";
import DARKIN_ICON from "assets/darkin.png";
import DRAGONS_CLAW_ICON from "assets/dragonsclaw.png";
import FORCE_OF_NATURE_ICON from "assets/forceofnature.png";
import FROZEN_HEART_ICON from "assets/frozenheart.png";
import FROZEN_MALLET_ICON from "assets/frozenmallet.png";
import GUARDIAN_ANGEL_ICON from "assets/guardianangel.png";
import GUINSOOS_RAGE_BLADE_ICON from "assets/guinsoosrageblade.png";
import HEXTECH_GUNBLADE_ICON from "assets/hextechgunblade.png";
import HUSH_ICON from "assets/hush.png";
import INFINITY_EDGE_ICON from "assets/infinityedge.png";
import IONIC_SPARK_ICON from "assets/ionicspark.png";
import KNIGHTS_VOW_ICON from "assets/knightsvow.png";
import LOCKET_OF_THE_IRON_SOLARI_ICON from "assets/locketoftheironsolari.png";
import LUDENS_ECHO_ICON from "assets/ludensecho.png";
import MORELLONOMICON_ICON from "assets/morellonomicon.png";
import PHANTOM_DANCER_ICON from "assets/phantomdancer.png";
import RABADONS_DEATHCAP_ICON from "assets/rabadonsdeathcap.png";
import RAPID_FIRE_CANNON_ICON from "assets/rapidfirecannon.png";
import REDBUFF_ICON from "assets/redbuff.png";
import REDEMPTION_ICON from "assets/redemption.png";
import RUNAANS_HURRICANE_ICON from "assets/runaanshurricane.png";
import SERAPHS_EMBRACE_ICON from "assets/seraphsembrace.png";
import SPEAR_OF_SHOJIN_ICON from "assets/spearofshojin.png";
import STATIKK_SHIV_ICON from "assets/statikkshiv.png";
import SWORD_BREAKER_ICON from "assets/swordbreaker.png";
import SWORD_OF_THE_DIVINE_ICON from "assets/swordofthedivine.png";
import THORNMAIL_ICON from "assets/thornmail.png";
import TITANIC_HYDRA from "assets/titanichydra.png";
import WARMOGS_ARMOR_ICON from "assets/warmogsarmor.png";
import YOUMUUS_GHOSTBLADE_ICON from "assets/youmuusghostblade.png";
import YUUMI_ICON from "assets/yuumi.png";
import ZEKES_HERALD_ICON from "assets/zekesherald.png";
import ZEPHYR_ICON from "assets/zephyr.png";
import { ItemComponentId, ItemFinishedId } from "utils/items";

interface Props {
  itemComponentId: ItemComponentId;
  itemFinishedId?: undefined;
  imgProps?: React.HTMLProps<HTMLImageElement>;
  isBlank?: undefined;
}

interface ItemComponentIconProps {
  itemComponentId?: undefined;
  itemFinishedId?: undefined;
  imgProps?: React.HTMLProps<HTMLImageElement>;
  isBlank: true;
}

interface ItemFinishedIconProps {
  itemFinishedId: ItemFinishedId;
  itemComponentId?: undefined;
  imgProps?: React.HTMLProps<HTMLImageElement>;
  isBlank?: undefined;
}

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

const ITEM_FINISHED_ID_TO_ICON_MAP: Record<ItemFinishedId, string> = {
  [ItemFinishedId.BLADE_OF_THE_RUINED_KING]: BLADE_OF_THE_RUINED_KING_ICON,
  [ItemFinishedId.BLOODTHIRSTER]: BLOODTHIRSTER_ICON,
  [ItemFinishedId.CURSED_BLADE]: CURSED_BLADE_ICON,
  [ItemFinishedId.DARKIN]: DARKIN_ICON,
  [ItemFinishedId.DRAGONS_CLAW]: DRAGONS_CLAW_ICON,
  [ItemFinishedId.FORCE_OF_NATURE]: FORCE_OF_NATURE_ICON,
  [ItemFinishedId.FROZEN_HEART]: FROZEN_HEART_ICON,
  [ItemFinishedId.FROZEN_MALLET]: FROZEN_MALLET_ICON,
  [ItemFinishedId.GUARDIAN_ANGEL]: GUARDIAN_ANGEL_ICON,
  [ItemFinishedId.GUINSOOS_RAGE_BLADE]: GUINSOOS_RAGE_BLADE_ICON,
  [ItemFinishedId.HEXTECH_GUNBLADE]: HEXTECH_GUNBLADE_ICON,
  [ItemFinishedId.HUSH]: HUSH_ICON,
  [ItemFinishedId.INFINITY_EDGE]: INFINITY_EDGE_ICON,
  [ItemFinishedId.IONIC_SPARK]: IONIC_SPARK_ICON,
  [ItemFinishedId.KNIGHTS_VOW]: KNIGHTS_VOW_ICON,
  [ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI]: LOCKET_OF_THE_IRON_SOLARI_ICON,
  [ItemFinishedId.LUDENS_ECHO]: LUDENS_ECHO_ICON,
  [ItemFinishedId.MORELLONOMICON]: MORELLONOMICON_ICON,
  [ItemFinishedId.PHANTOM_DANCER]: PHANTOM_DANCER_ICON,
  [ItemFinishedId.RABADONS_DEATHCAP]: RABADONS_DEATHCAP_ICON,
  [ItemFinishedId.RAPID_FIRE_CANNON]: RAPID_FIRE_CANNON_ICON,
  [ItemFinishedId.REDEMPTION]: REDEMPTION_ICON,
  [ItemFinishedId.RED_BUFF]: REDBUFF_ICON,
  [ItemFinishedId.RUNAANS_HURRICANE]: RUNAANS_HURRICANE_ICON,
  [ItemFinishedId.SERAPHS_EMBRACE]: SERAPHS_EMBRACE_ICON,
  [ItemFinishedId.SERAPHS_EMBRACE]: SERAPHS_EMBRACE_ICON,
  [ItemFinishedId.SPEAR_OF_SHOJIN]: SPEAR_OF_SHOJIN_ICON,
  [ItemFinishedId.STATIKK_SHIV]: STATIKK_SHIV_ICON,
  [ItemFinishedId.SWORD_BREAKER]: SWORD_BREAKER_ICON,
  [ItemFinishedId.SWORD_OF_THE_DIVINE]: SWORD_OF_THE_DIVINE_ICON,
  [ItemFinishedId.THORNMAIL]: THORNMAIL_ICON,
  [ItemFinishedId.TITANIC_HYDRA]: TITANIC_HYDRA,
  [ItemFinishedId.WARMOGS_ARMOR]: WARMOGS_ARMOR_ICON,
  [ItemFinishedId.YOUMUUS_GHOSTBLADE]: YOUMUUS_GHOSTBLADE_ICON,
  [ItemFinishedId.YUUMI]: YUUMI_ICON,
  [ItemFinishedId.ZEKES_HERALD]: ZEKES_HERALD_ICON,
  [ItemFinishedId.ZEPHYR]: ZEPHYR_ICON
};

export const ItemIcon: React.FC<
  Props | ItemComponentIconProps | ItemFinishedIconProps
> = props => {
  if (props.isBlank) {
    console.log("rendering ");
    return (
      <div
        className={"ItemIcon"}
        style={{
          display: "inline-block",
          height: 64,
          width: 64
        }}
      ></div>
    );
  }

  if (props.itemFinishedId) {
    return (
      <button
        className={"ItemIcon"}
        style={{
          height: 64,
          width: 64,
          background: `url(${
            ITEM_FINISHED_ID_TO_ICON_MAP[props.itemFinishedId]
          })`
        }}
      ></button>
    );
  }

  return (
    <button
      className={"ItemIcon"}
      style={{
        height: 64,
        width: 64,
        background: `url(${
          ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]
        })`
      }}
    ></button>
  );
};
