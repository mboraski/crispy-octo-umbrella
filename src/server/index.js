const express = require('express')
const app = express()
const port = 9001

app.get('/series-videos', async (req, res, next) => {
  /**
   * TODO: implement node call
   * - Parameterize seriesId to be sent from client application
   * - All series are nodes, but not all nodes are series.  So we can pass seriesId to /node
   * - https://brooklyn.gaia.com/node/[:seriesId]
   *   - Datapoints to use:
   *     - Series hero art -- <response body>.hero_image.hero_1070x400
   *     - Series title -- <response body>.title

   * TODO: implement series episodes call
   * - Parameterize seriesId to be sent from client application
   * - https://brooklyn.gaia.com/v2/videos/series/[:seriesId]
   *   - Datapoints to use:
   *     - episode number -- <response body>[x].episode
   *     - episode title -- <response body>[x].title
   */
  return {
    mock: true,
  }
})

app.listen(port, () => (
  console.log(`Congrats, the server is running.  Serving from port: ${port}`)
))