import { addDecorator, configure } from "@storybook/react"
import "loki/configure-react"
import { withTheme } from "./decorators/withTheme"

addDecorator(withTheme)

configure(require.context('../src', true, /.*stories\.tsx$/), module)
