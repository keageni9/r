using BTD_Mod_Helper.Api.Bloons.Bosses;
using Il2CppAssets.Scripts.Simulation.Track;
using Il2CppAssets.Scripts.Unity.UI_New.InGame;
namespace BTD_Mod_Helper.Patches.Bosses.Patches;

[HarmonyPatch(typeof(BossBloonManager), nameof(BossBloonManager.BloonDestroyed))]
internal static class BossBloonManager_BloonDestroyed
{
    [HarmonyPrefix]
    private static void Prefix(BossBloonManager __instance, ref ModBoss __state)
    {
        if (InGameData.CurrentGame.gameEventId == ModBoss.EventId)
            __instance.BossDefeatedEvent = null;

        if (ModBoss.Cache.TryGetValue((int) InGameData.CurrentGame.bossData.bossBloon, out var modBoss))
        {
            modBoss.OnPopCallback(__instance.currentBoss);
            __state = modBoss;
            if (__instance.CurrentBossTier < modBoss.highestTier)
            {
                __instance.checkForVictory = false;
            }
        }
    }

    [HarmonyPostfix]
    private static void Postfix(BossBloonManager __instance, ModBoss __state)
    {
        if (__state is not null && __instance.CurrentBossTier < __state.highestTier)
        {
            __instance.checkForVictory = false;
        }
    }
}


