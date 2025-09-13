import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'


function BoardContent({ board }) {

  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  // Nhẫn giữ 250ms và dung sau của cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const sensors = useSensors(mouseSensor, touchSensor)

  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  useEffect(() => {
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd', event)
    const { active, over } = event
    //Kiem tra nếu không tồn tại over (kéo linh tinh ra ngoài thì return luôn tránh lỗi)
    if (!over) return

    //Nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      //lay vi tri cu (tu tk active)
      const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id)
      //Lay vi tri moi (tu tk over)
      const newIndex = orderedColumnsState.findIndex(c => c._id === over.id)

      //Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng Columns ban đầu
      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumns', dndOrderedColumns)
      // console.log('dndOrderedColumnsIds', dndOrderedColumnsIds)

      //Cập nhật lại state columns ban đầu sau khi đã kéo thả
      setOrderedColumnsState(dndOrderedColumns)
    }

  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumnsState} />
      </Box>
    </DndContext>
  )
}

export default BoardContent