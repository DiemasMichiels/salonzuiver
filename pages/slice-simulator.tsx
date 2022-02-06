import { SliceSimulator } from '@prismicio/slice-simulator-react'
import SliceZone from 'next-slicezone'
import state from '../.slicemachine/libraries-state.json'
import * as Slices from '../slices'

import type LibrariesState from '@slicemachine/core/build/src/models/LibrariesState'

const resolver = ({ sliceName }: { sliceName: string }) =>
  (Slices as any)[sliceName] as JSX.Element | null

const SliceSimulatorPage = () => (
  <SliceSimulator
    // @ts-ignore SliceZone is not yet Typescript ready
    sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
    state={state as unknown as LibrariesState.Libraries}
  />
)

export default SliceSimulatorPage
