// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
import React from "react";
import ReactDOM from "react-dom";

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
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement("div")),
  )
})