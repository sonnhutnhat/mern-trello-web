import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

/** Boards */
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/V1/boards/${boardId}`)
  // Luu y: axios se tra ket qua ve qua property cua no la data
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/V1/boards/${boardId}`, updateData)
  return response.data
}

export const moveCardToDifferentColumnAPI = async (updateData) => {
  const response = await axios.put(`${API_ROOT}/V1/boards/supports/moving_card`, updateData)
  return response.data
}

/** Columns */
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/V1/columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}/V1/columns/${columnId}`, updateData)
  return response.data
}

/** Cards */
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/V1/cards`, newCardData)
  return response.data
}