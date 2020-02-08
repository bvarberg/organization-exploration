import testdouble from "testdouble"
import { ServiceA } from "./interface"

export const mockServiceA = testdouble.object<ServiceA>("MockServiceA")
