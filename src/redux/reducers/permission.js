import { PERMISSION } from './../../constants/ActionTypes'

const permission = {
  data: {},
  dataOnSelected: {},
  dataOnUpdate: {
    data: {},
    isLoading: false
  },
  dataOnReading: {
    id: '',
    isLoading: false
  },
  unRead: 0,
  isLoading: false
}
export default function PermissionReducer(state = permission, action) {
  switch (action.type) {
    case PERMISSION.GET:
      return {
        ...state,
        data: action.payload,
        unRead: action.unRead,
        isLoading: false
      }
    case PERMISSION.GETUPDATEDCLEAR:
      return {
        ...state,
        dataOnUpdate: {
          data: {},
          isLoading: false
        }
      }
    case PERMISSION.GETUPDATEDLOADING:
      return {
        ...state,
        dataOnUpdate: {
          data: {},
          isLoading: true
        }
      }
    case PERMISSION.GETUPDATED:
      return {
        ...state,
        dataOnUpdate: {
          data: action.payload,
          isLoading: false
        }
      }
    case PERMISSION.GETSELECTED:
      return {
        ...state,
        dataOnSelected: action.payload
      }
    case PERMISSION.SETDATAONREADINGLOADING:
      return {
        ...state,
        dataOnReading: {
          isLoading: true
        }
      }
    case PERMISSION.SETDATAONREADING:
      return {
        ...state,
        dataOnReading: {
          id: action.payload,
          isLoading: false
        }
      }
    case PERMISSION.LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}
