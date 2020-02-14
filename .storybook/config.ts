import { addDecorator, configure } from "@storybook/react"
import "loki/configure-react"
import { useTheme } from "./decorators/useTheme"
import "../src/index.css"

addDecorator(useTheme)

configure(require.context('../src', true, /.*stories\.tsx$/), module)
