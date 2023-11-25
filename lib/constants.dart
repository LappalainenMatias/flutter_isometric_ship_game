/// Region is this amount of tiles wide.
/// Larger regions are faster to render than multiple small regions.
/// The data that comes from webworkers is decoded currenlty on the main thread, so it can cause
/// lag if the region size is too large. Also if the region contains dynamic game objects,
/// the painters algorithm and collision detection is slower for larger regions.
const int regionSideWidth = 16;

/// Amount of regions the game can have before it starts removing regions.
const int maxRegionCount = 1000;

/// To run locally
/// 1. use localSocket ('ws://localhost:8080/ws')
/// 2. run 'dart_frog dev' in the backend project
const String socket = 'wss://game-backend-7myko4scwa-ew.a.run.app/ws';
const String localSocket = 'ws://localhost:8080/ws';
