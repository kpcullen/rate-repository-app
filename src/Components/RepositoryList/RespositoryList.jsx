import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'

import { useDebouncedCallback } from 'use-debounce'

const RepositoryList = () => {
  const [order, setOrder] = useState('')
  const [value, setValue] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSetOrder = (value) => {
    let newOrder = {}
    if (value === 'Latest repositories') {
      newOrder = { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
      setValue(value)
    }
    if (value === 'Oldest repositories') {
      newOrder = { orderBy: 'CREATED_AT', orderDirection: 'ASC' }
      setValue(value)
    }
    if (value === 'Highest rated') {
      newOrder = {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      }
      setValue(value)
    }
    if (value === 'Lowest rated') {
      newOrder = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
      setValue(value)
    }
    if (value === 'reset') {
      newOrder = {}
      setValue('')
      setSearchKeyword('')
    }
    setOrder(newOrder)
    refetch({ ...newOrder, searchKeyword })
  }

  const handleSetKeyword = useDebouncedCallback((value) => {
    setSearchKeyword(value)
    refetch({ ...order, searchKeyword })
  }, 500)

  const { repositories, fetchMore, refetch } = useRepositories({
    ...order,
    searchKeyword,
  })

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrder={handleSetOrder}
      value={value}
      setKeyword={handleSetKeyword}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
