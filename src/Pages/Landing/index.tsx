import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import DefaultLanding from './Countries/Default'
import EuComponent from './Countries/Eu'
import GhanaLanding from './Countries/Ghana'
import KenyaLanding from './Countries/Kenya'
import Nigeria from './Countries/Nigeria'
import UgandaLanding from './Countries/Uganda'
import Uk from './Countries/Uk'


const MapSubComponents: React.FC<{ countryCode: string }> = ({ countryCode, ...props }) => {
    let componnents: Record<string, any> = {
        default: <DefaultLanding  {...props} />,
        gh: <GhanaLanding  {...props} />,
        ng: <Nigeria  {...props} />,
        us: <Uk  {...props} />,
        ke: <KenyaLanding  {...props} />,
        ug: <UgandaLanding  {...props} />,
        mal: <EuComponent  {...props} />
    }

    return componnents[countryCode] || componnents.default
}


const Landing = () => {
    const [searchParams] = useSearchParams();
    const [countryCode, setCountryCode] = useState('default')
    const [loading, setLoading] = useState(true)
    const getDefaultCountry = useCallback(() => {
        let countryCode = searchParams.get('country')
        if (countryCode) {
            setCountryCode(countryCode)
        }
        setLoading(false)
    }, [setCountryCode, searchParams])

    useEffect(() => {
        getDefaultCountry()
    }, [getDefaultCountry])

    if(loading)
        return (<div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
            <Spinner type='grow' children={false} className='m-auto' color='primary' />
        </div>)
    return (
        <MapSubComponents countryCode={countryCode} />
    )
}

export default Landing