import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { FunctionComponent } from 'react'
import Slices from '@components/slices/Slices'
import state from '@slicemachine/libraries-state.json'
import SliceTypes from '@slices/sliceTypes'
import type LibrariesState from '@slicemachine/core/build/src/models/LibrariesState'

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) =>
      (
        <Slices slices={slices as unknown as SliceTypes[]} />
      ) as unknown as FunctionComponent
    }
    state={state as unknown as LibrariesState.Libraries}
  />
)

export default SliceSimulatorPage
