import app from "./app"
import config from "./config"
import main from "./utils/db-connection"
const port = config.port
app.listen(port, () => {
    main()
    console.log(`Example app listening on port ${port}`)
  })