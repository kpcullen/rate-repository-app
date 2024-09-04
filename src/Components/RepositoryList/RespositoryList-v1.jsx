import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'

import { useDebouncedCallback } from 'use-debounce'

const RepositoryList = () => {
  const [order, setOrder] = useState('')
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')

  const handleSetOrder = (value) => {
    if (value === 'Latest repositories') {
      setOrder({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
      setValue(value)
    }
    if (value === 'Oldest repositories') {
      setOrder({ orderBy: 'CREATED_AT', orderDirection: 'ASC' })
      setValue(value)
    }
    if (value === 'Highest rated') {
      setOrder({
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      })
      setValue(value)
    }
    if (value === 'Lowest rated') {
      setOrder({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })
      setValue(value)
    }
    if (value === 'reset') {
      setOrder({})
      setValue('')
      setKeyword('')
    }
  }

  const handleSetKeyword = useDebouncedCallback((value) => {
    setKeyword(value)
  }, 500)

  let listValues = {}
  if (order) listValues = order
  if (keyword) listValues.searchKeyword = keyword

  const { repositories, fetchMore } = useRepositories(listValues)

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
