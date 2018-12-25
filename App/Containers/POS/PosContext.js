import React from 'react'

const PosContext = React.createContext({
	inCategory: true,
	isModalVisible: false,
	searchTerm: '',
	categoryId: null,
	setCategoryId: (id) => {},
	setInCategory: (value) => {},
	peformSearch: (searchTerm) => {},
	setModalVisible: (value) => {},
	cancelSearch: () => {}
})

export default PosContext
