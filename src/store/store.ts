import fs from 'fs-extra'

import TextModel from '../models/TextModel'
import { Config } from '../sync'

export function getLangTextInfo(
  file: string,
  config: {
    isRoot?: boolean
    placeholder?: string
    syncConfig?: Config
  } = {}
) {
  const { isRoot, placeholder, syncConfig = {} } = config
  const text = fs.readFileSync( file ).toString()
  const langTextInfo = new TextModel(
    text, {
      isRoot,
      placeholder,
      enableTranslation: syncConfig.enableTranslation
    }
  )
  return langTextInfo
}
