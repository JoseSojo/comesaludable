import { FC } from "react"
import { Route, Switch } from "wouter"
const AppRouter: FC = () => {

  return (
    <Switch>
      

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default AppRouter
