import React from 'react'

const AppStoreComponent = () => {
    return (
        <div className='mt-2 '>
            {["AppStore", "PlayStore"].map((icon) => (
                <img key={icon} className="mr-3 mt-3" src={require(`assets/images/svg/icons/${icon}Icon.svg`)} alt={icon} />
            ))}
        </div>
    )
}

export default AppStoreComponent