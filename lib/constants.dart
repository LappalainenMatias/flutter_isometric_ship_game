/// Region is this amount of tiles wide.
/// Larger regions are faster to render than multiple small regions.
/// The data that comes from webworkers is decoded currenlty on the main thread, so it can cause
/// lag if the region size is too large. Also if the region contains dynamic game objects,
/// the painters algorithm and collision detection is slower for larger regions.
const int regionSideWidth = 16;

/// Amount of regions the game can have before it starts removing regions.
const int maxRegionCount = 100;
