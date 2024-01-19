import { SliceSimulator } from '@slicemachine/adapter-next/simulator'
import { SliceZone } from '@prismicio/react'
import * as components from '@slices'

const SliceSimulatorPage = () => (
  <SliceSimulator
    background='black'
    sliceZone={(props) => <SliceZone {...props} components={components} />}
  />
)

export default SliceSimulatorPage
