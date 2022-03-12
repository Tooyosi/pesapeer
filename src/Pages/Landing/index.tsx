import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DefaultLanding from './Countries/Default'
import GhanaLanding from './Countries/Ghana'


const MapSubComponents: React.FC<{ countryCode: string }> = ({ countryCode, ...props }) => {
    let componnents: Record<string, any> = {
        default: <DefaultLanding  {...props} />,
        gh: <GhanaLanding  {...props} />,
    }

    return componnents[countryCode]
}


const Landing = () => {
    const [searchParams] = useSearchParams();
    const [countryCode, setCountryCode] = useState('default')
    const getDefaultCountry = useCallback(() => {
        let countryCode = searchParams.get('country')
        console.log({ countryCode })
        if (countryCode) {
            setCountryCode(countryCode)
        }
    }, [setCountryCode, searchParams])

    useEffect(() => {
        getDefaultCountry()
    }, [getDefaultCountry])

    return (
        <MapSubComponents countryCode={countryCode} />
    )
}

export default Landing