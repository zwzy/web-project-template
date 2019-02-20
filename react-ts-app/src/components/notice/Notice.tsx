import * as React from 'react';
import * as PropTypes from 'prop-types'

function Notice({data}) {
  return (
    <div>
        {data[0].content}
    </div>
  )
}

Notice.propTypes = {
  data: PropTypes.array,
}

export default Notice

