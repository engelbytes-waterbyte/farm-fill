Given:

- 2d array with slots that contain information about plantable or not
-

Needed:

- 4 arrays that contains optimal plant location
- database with plants

Solution:

- Iteration from top-left to bottom-right
- Checking if slot contains plant

Entities:

- Field: contains neighbors and can be occupied by one plant
  - neighbors
  - previousPlant
- Plant: contains information about
  - time until ripe
  - required size or area
  - isFlachwurzler
- Garden: contains
  - fields
  - condition
  - needsReplant
