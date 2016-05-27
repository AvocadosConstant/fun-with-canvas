# Fun with Canvas
Just playing around with some stuff on js canvas.

***

# Current goal
- Generate randomly, but generally evenly, spaced vertices
![](http://imgur.com/pKbhc93.jpg)
- Apply [Fortune's Algorithm](https://en.wikipedia.org/wiki/Fortune%27s_algorithm) to create a [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram) of the vertices
![](http://imgur.com/1Usy33c.jpg)
- This will create many tiled convex polygons
- For each polygon apply the following construction
    ![](http://imgur.com/NJZ7iIb.jpg)
    - Draw similar polygon rotated at a slight angle inscribed in the original polygon
    ![](http://imgur.com/2VojYGT.jpg)
    - Repeat for several iterations until the final generated polygon is too small to see
    ![](http://imgur.com/GoSdmZH.jpg)
- Example for one of the polygons.
![](http://imgur.com/I2rb5g3.jpg)
