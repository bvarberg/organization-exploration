import testdouble from "testdouble"
import { Logger } from "."

export const mockLogger = testdouble.object<Logger>()
