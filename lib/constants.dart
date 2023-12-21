/// Region is this amount of tiles wide.
/// Larger regions are faster to render than multiple small regions.
/// The data that comes from webworkers is decoded currenlty on the main thread, so it can cause
/// lag if the region size is too large. Also if the region contains dynamic game objects,
/// the painters algorithm and collision detection are slower for larger regions.
const int regionSideWidth = 32;

/// Amount of regions the game can have before it starts removing regions.
const int maxRegionCount = 1000;

/// To run locally:
/// 1. change to 'ws://localhost:8080/ws'
/// 2. run 'dart_frog dev' in the backend project
/// To run on the cloud:
/// 1. change to 'wss://game-backend-7myko4scwa-ew.a.run.app/ws'
/// 2. Check that the backend is running on the cloud
const String socket = 'ws://localhost:8080/ws';
