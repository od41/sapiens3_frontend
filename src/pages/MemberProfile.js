import React from 'react'

import {useLocation} from 'react-router-dom'

const roomie_data = {
  name: "Elias Slim Bansi"
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MemberProfile() {
  const query = useQuery()
  return (
    <>
      Member Profile: {query.get("user")}
      {roomie_data.name}
    </>
  )
}

export default MemberProfile