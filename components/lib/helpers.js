import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const isBrowser = () => {
  return typeof window !== 'undefined'
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const lowercase = (string) => {
  return string.toLowerCase()
}

export const objectToCamelCase = (origObj) => {
  return Object.keys(origObj).reduce(function (newObj, key) {
    let val = origObj[key]
    let newVal = typeof val === 'object' ? objectToCamelCase(val) : val
    newObj[toCamelCase(key)] = newVal
    return newObj
  }, {})
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/ /g, '')
}

export const getApiUrl = () => {
  if (isBrowser()) return process.env.API_URL
  return process.env.API_LOCAL_URL || process.env.API_URL
}

export const showError = (message, title) => {
  notification.open({
    type: 'error',
    message: title || 'Error',
    description: message,
  })
}

export const showSuccess = (message, title) => {
  notification.open({
    type: 'success',
    message: title || 'Info',
    description: message,
  })
}

// export const handleApiError = (error, t, dispatch, description) => {
//   if (!error.response) return showError(error.message || t('Something went wrong'), t('Error'))

//   const { response } = error

//   switch (response.status) {
//     case 401:
//       if (dispatch) dispatch({ type: 'logout' })
//       showError(t('Please login again'), t('Error'))
//       break

//     default:
//       if (response?.data?.errors && Array.isArray(response.data.errors)) {
//         const el = (
//           <>
//             {description && (
//               <li>
//                 <Alert
//                   message={`${translate(t, 'Hint')}: ${description}`}
//                   type="warning"
//                   style={{ marginBottom: '5px' }}
//                 />
//               </li>
//             )}
//             {response.data.errors.map((e, index) => (
//               <li key={index}>
//                 - {translate(t, e.message)}
//                 <br />
//               </li>
//             ))}
//           </>
//         )
//         return showError(el, t('Error'))
//       }

//       showError(t('Something went wrong'), t('Error'))
//   }
// }

// export const translate = (t, message, ns = 'common') => {
//   const text = t(message)
//   return text.indexOf(`${ns}:`) === 0 ? message : text
// }

// export const formatDateTime = (
//   value,
//   format = 'DD/MM/YYYY HH:mm:ss',
//   fromTz = 'UTC',
//   toTz = 'Asia/Ho_Chi_Minh'
// ) => {
//   if (!value) return null
//   return dayjs.tz(value, fromTz).tz(toTz).format(format)
// }

// export const getStartOfDateTime = (unit = 'day', format = 'YYYY-MM-DD HH:mm:ss', tz = 'UTC') => {
//   return dayjs().tz(tz).startOf(unit).format(format)
// }

// export const formatCurrency = (value, lang = 'vi', currency = 'vnd') => {
//   if (value === null || value === undefined || isNaN(Number(value))) return 'N/A'

//   return (Number(value) || 0).toLocaleString(lang, {
//     style: 'currency',
//     currency,
//   })
// }

export const diffDateTime = (from, to, unit) => {
  if (!from || !to) return 0
  return Math.round(dayjs(from).diff(to, unit || 'seconds', true))
}

export const secondsToMs = (seconds) => {
  var m = Math.floor((seconds % 3600) / 60)
  var s = Math.floor((seconds % 3600) % 60)

  return {
    minutes: m,
    seconds: s,
  }
}

export const downloadFile = async (url, fileName) => {
  const link = document.createElement('a')

  link.href = url
  link.download = fileName
  link.target = '_blank'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
