import { ItemComponentId, ItemFinishedId } from "utils/items";
import { buildPublicUrl } from "utils/misc";

export const ITEM_COMPONENT_ID_TO_ICON_MAP: Record<ItemComponentId, string> = {
  [ItemComponentId.BF_SWORD]: buildPublicUrl("assets/bfsword.png"),
  [ItemComponentId.CHAIN_VEST]: buildPublicUrl("assets/chainvest.png"),
  [ItemComponentId.GIANTS_BELT]: buildPublicUrl("assets/giantsbelt.png"),
  [ItemComponentId.NEEDLESSLY_LARGE_ROD]: buildPublicUrl(
    "assets/needlesslylargerod.png"
  ),
  [ItemComponentId.RECURVE_BOW]: buildPublicUrl("assets/recurvebow.png"),
  [ItemComponentId.SPATULA]: buildPublicUrl("assets/spatula.png"),
  [ItemComponentId.TEAR_OF_THE_GODDESS]: buildPublicUrl(
    "assets/tearofthegoddess.png"
  ),
  [ItemComponentId.NEGATRON_CLOAK]: buildPublicUrl("assets/negatroncloak.png")
};

export const ITEM_FINISHED_ID_TO_ICON_MAP: Record<ItemFinishedId, string> = {
  [ItemFinishedId.BLADE_OF_THE_RUINED_KING]: buildPublicUrl(
    "assets/bladeoftheruinedking.png"
  ),
  [ItemFinishedId.BLOODTHIRSTER]: buildPublicUrl("assets/bloodthirster.png"),
  [ItemFinishedId.CURSED_BLADE]: buildPublicUrl("assets/cursedblade.png"),
  [ItemFinishedId.DARKIN]: buildPublicUrl("assets/darkin.png"),
  [ItemFinishedId.DRAGONS_CLAW]: buildPublicUrl("assets/dragonsclaw.png"),
  [ItemFinishedId.FORCE_OF_NATURE]: buildPublicUrl("assets/forceofnature.png"),
  [ItemFinishedId.FROZEN_HEART]: buildPublicUrl("assets/frozenheart.png"),
  [ItemFinishedId.FROZEN_MALLET]: buildPublicUrl("assets/frozenmallet.png"),
  [ItemFinishedId.GUARDIAN_ANGEL]: buildPublicUrl("assets/guardianangel.png"),
  [ItemFinishedId.GUINSOOS_RAGE_BLADE]: buildPublicUrl(
    "assets/guinsoosrageblade.png"
  ),
  [ItemFinishedId.HEXTECH_GUNBLADE]: buildPublicUrl(
    "assets/hextechgunblade.png"
  ),
  [ItemFinishedId.HUSH]: buildPublicUrl("assets/hush.png"),
  [ItemFinishedId.INFINITY_EDGE]: buildPublicUrl("assets/infinityedge.png"),
  [ItemFinishedId.IONIC_SPARK]: buildPublicUrl("assets/ionicspark.png"),
  [ItemFinishedId.KNIGHTS_VOW]: buildPublicUrl("assets/knightsvow.png"),
  [ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI]: buildPublicUrl(
    "assets/locketoftheironsolari.png"
  ),
  [ItemFinishedId.LUDENS_ECHO]: buildPublicUrl("assets/ludensecho.png"),
  [ItemFinishedId.MORELLONOMICON]: buildPublicUrl("assets/morellonomicon.png"),
  [ItemFinishedId.PHANTOM_DANCER]: buildPublicUrl("assets/phantomdancer.png"),
  [ItemFinishedId.RABADONS_DEATHCAP]: buildPublicUrl(
    "assets/rabadonsdeathcap.png"
  ),
  [ItemFinishedId.RAPID_FIRE_CANNON]: buildPublicUrl(
    "assets/rapidfirecannon.png"
  ),
  [ItemFinishedId.REDEMPTION]: buildPublicUrl("assets/redemption.png"),
  [ItemFinishedId.RED_BUFF]: buildPublicUrl("assets/redbuff.png"),
  [ItemFinishedId.RUNAANS_HURRICANE]: buildPublicUrl(
    "assets/runaanshurricane.png"
  ),
  [ItemFinishedId.SERAPHS_EMBRACE]: buildPublicUrl("assets/seraphsembrace.png"),
  [ItemFinishedId.SPEAR_OF_SHOJIN]: buildPublicUrl("assets/spearofshojin.png"),
  [ItemFinishedId.STATIKK_SHIV]: buildPublicUrl("assets/statikkshiv.png"),
  [ItemFinishedId.SWORD_BREAKER]: buildPublicUrl("assets/swordbreaker.png"),
  [ItemFinishedId.SWORD_OF_THE_DIVINE]: buildPublicUrl(
    "assets/swordofthedivine.png"
  ),
  [ItemFinishedId.THORNMAIL]: buildPublicUrl("assets/thornmail.png"),
  [ItemFinishedId.TITANIC_HYDRA]: buildPublicUrl("assets/titanichydra.png"),
  [ItemFinishedId.WARMOGS_ARMOR]: buildPublicUrl("assets/warmogsarmor.png"),
  [ItemFinishedId.YOUMUUS_GHOSTBLADE]: buildPublicUrl(
    "assets/youmuusghostblade.png"
  ),
  [ItemFinishedId.YUUMI]: buildPublicUrl("assets/yuumi.png"),
  [ItemFinishedId.ZEKES_HERALD]: buildPublicUrl("assets/zekesherald.png"),
  [ItemFinishedId.ZEPHYR]: buildPublicUrl("assets/zephyr.png")
};
