import { useState, useEffect } from 'react'
import { isAndroidMobileBrowser, isAndroidPhoneOrTabletBrowser } from '../utils/androidWebDetection'

/** Hydration-safe: false until mounted, then matches Chrome/Firefox web on Android phones. */
export function useAndroidMobileWeb() {
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(isAndroidMobileBrowser())
  }, [])
  return value
}

/** Hydration-safe: false until mounted, then matches Android phones and tablets. */
export function useAndroidPhoneOrTabletWeb() {
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(isAndroidPhoneOrTabletBrowser())
  }, [])
  return value
}
