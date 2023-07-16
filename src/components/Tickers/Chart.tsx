import React, { useEffect, useRef, useState } from "react";
import { select } from 'd3-selection'
export const BarChartV1: React.FC = () => {
    const ref = useRef(null)
    // const [selection, setSelection] = useState<null | Selection<null, unknown, null, undefined>>(null);
    // useEffect(() => {
    //     if(!selection) {
    //         setSelection(select(ref.current))
    //     }
    //     else {

    //     }
    // },[selection])
return (
    <div>
        <svg ref={ref}>
            <line>

            </line>
            <rect width={100} height={100} fill="blue">

            </rect>
            <circle>

            </circle>
        </svg>
    </div>
)
}


export default BarChartV1;