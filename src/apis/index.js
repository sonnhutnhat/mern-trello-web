import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/V1/boards/${boardId}`)
  // Luu y: axios se tra ket qua ve qua property cua no la data
  return response.data
}