//List.js

import React, { useEffect, useState } from "react"

export default function List({ getItems }) {
  const [items, setItems] = useState([])
  console.log('넌 그래도 실행되고 있지?');
  useEffect(() => {
    setItems(getItems())
    console.log("숫자가 변동되었습니다.")
  }, [getItems])
  return items.map((item, index) => <div key={index}>{item}</div>)
}