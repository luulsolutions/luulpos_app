import React from 'react'

const ModifiersContext = React.createContext({
    setIndex:(value)=>{},
    variantId:null,
    setVariantId:(value)=>{}
})

export default ModifiersContext;
