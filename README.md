# Fun with Canvas
Just playing around with some stuff on js canvas.

***

# Current goal
- Generate randomly, but generally evenly, spaced vertices
- Apply Fortune's Algorithm to create a Voronoi diagram of the vertices
- This will create many tiled convex polygons
- For each polygon apply the following construction
    - Draw similar polygon rotated at a slight angle inscribed in the original polygon
    - Repeat for several iterations until the final generated polygon is too small to see
