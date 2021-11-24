// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
import * as React from "react"
import * as ReactDOM from "react-dom";
import { Root } from '../components/root'

interface HelloProps {
  name: string;
}

const Hello: React.FunctionComponent<HelloProps> = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: "David",
}

document.addEventListener("DOMContentLoaded", () => {
  // ReactDOM.render(
  //   <Hello name="React" />,
  //   document.body.appendChild(document.createElement("div")),
  // )

  const root = document.getElementById("root")
  ReactDOM.render( <Root />, root)
})